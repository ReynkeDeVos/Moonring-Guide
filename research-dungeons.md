# Moonring: Dungeons, Ortswissen und passende Etappen

Stand: 3. Oktober 2026. Geprüft: installierter PC-Build **0.0.958**. Primärquelle ist die ausgelieferte Lua-/CSV-Anwendung in `~/.local/share/Steam/steamapps/common/Moonring/Moonring.exe`, hier ausschließlich gelesen über `/tmp/moonring-secrets/game/`. Spielinstallation und Saves wurden nicht verändert. Die Recherche ist eine Daten-/Quellcodeprüfung, kein vollständiger neuer Spieldurchlauf.

## Quellen und Reichweite

Der [offizielle Moonring-Text von Fluttermind](https://store.steampowered.com/app/2373630/Moonring/) beschreibt handgebaute Geographie und wechselnde Dungeonlayouts. Die [offizielle DX-Seite](https://store.steampowered.com/app/3498040/Moonring_DX/) bestätigt 100 Egg-Etagen und empfiehlt fortgeschrittene Erkundung vor dem Spielabschluss. Detaillierte Dialoge, Gegner, Sperren und Marker stammen aus den unten zitierten lokalen Primärdateien; Community-Guides waren keine Autorität für diese Angaben.

Im Quellenfeld gelten kurze CSV-Namen als `data/save/<Name>Triggers.csv`; DialogueData ist `data/DialogueData - Sheet1.csv`. CSV-Zeilen sind physische Dateizeilen inklusive Kopfzeile, nicht Gesprächs-IDs. Weltkoordinaten sind nullbasiert, Osten erhöht x, Süden erhöht y; Stadtinnenräume sind getrennte Karten. Die aktuelle Overworld-Triggerdatei gewinnt gegen ältere Kommentar-Koordinaten in `world_data.lua` (beispielsweise Sea Cave, Duera und Tulera).

**Vollständigkeitsgrenze:** Alle aktiven benannten Haupt-/Nebendungeons und festen Kampf-/Rätselorte aus `world_data.lua:87–203,314–359` sind unten erfasst. Acht Mini-Dungeons (`mini0`–`mini7`), Yarrow, Hold, Sea Cave, Meida, Bael, fünf Reliktdungeons, zwei Hideouts, Ancestors/Beneath Keep, acht Ausrüstungstempel, vier äußere Heart Temples, zehn Tear-Orte, Four Lake Meet, Egg und Finale. `heart3` ist auskommentiert: sein Herz liegt als Geheimnis in Moon-upon-Thoss, kein separater Dungeon (`world_data.lua:329–330`; `data/strings.lua:53–60`). Vier Endera-Gruppen und die Greater Ruins sind wegen ihrer Rolle beim Zugang zusätzlich aufgeführt. Henges, normale Städte, Schiffe und Roches Hütte sind Reiseorte, keine eigenen Dungeonprüfungen. `isTest=true`-Bosskarten, Wang-Tile-Testkarten `4X9-*`/`9X9-*` und Konsole-Dungeonfunktionen gehören nicht zur spielbaren Ortsliste (`world_data.lua:363–382`; `state_game.lua:18201–18258`).

## Regeln für die Guide-Integration

1. **Information zuerst, Besuch danach.** Jede Zeile hat eine konkrete Bestätigung: finalen Marker-Dialog erhalten, Karte tatsächlich gelesen, präzisen Landmarkenhinweis notiert oder Eingang bei einer normalen Reise selbst gesehen. Ein Stadtbesuch alleine bestätigt keinen Dungeonfundort. Der Hinweis wird in der tatsächlich passenden Stadtetappe abgehakt; der Dungeon erscheint später nur bei bestätigtem Ortswissen.
2. **Keine erfundenen NPC-Namen.** Die meisten Bewohnernamen werden erzeugt; greeting/Keyword und Rolle sind zuverlässig. Gommer, Espirus, Flimpy usw. sind echte feste Overrides (`village_sim.lua:44–53`).
3. **Gossip ist nicht stets eine Markierung.** The Hold gibt eine konkrete Küstenhöhlen-Richtung, aber keinen `revealLocation`-Callback. Repository-Gossip nennt Insel und Lost Circle, keinen direkten Dungeonmarker. Beim Repository zählt erst der geklärte Hengeweg und der wirklich gesehene Insel-Eingang. Umgekehrt markiert der finale Cave-Dialog oder das Kartenlesen den tatsächlichen Ort (`speech_area.lua:2020–2043`; `state_game.lua:22519–22533`).
4. **Erkundung ist eine echte Wissensquelle.** Wenn ein Welt-Eingang sichtbar und beleuchtet/gefühlt ist, setzt `updateSeenLocations` automatisch seine Entdeckung (`state_game.lua:21846–21862,21954–21969`). Für Lost Tunnels, Warrens, Ausrüstungs-/Heart-/Tear-Tempel ist keine gesonderte benannte Dialog-/Buchmarkierung im Textbestand belegt. Deshalb „Eingang unterwegs gesehen“ abhaken, nicht einen unbekannten Ort anhand vorzeitig ausgeblendeter Metakoordinaten ansteuern lassen.
5. **Wissen, Zugang und Vorbereitung getrennt.** Ein bekannter Necropolis-Marker ist noch kein Solvent; ein bekannter Garden ist noch kein Sleathen-Kopf; eine bekannte Insel noch kein Schiff. Die Reihenfolge unten ist eine redaktionelle Anfängerempfehlung für beide neutralen Builds, keine Level- oder feste Storysperre.

## Wichtige Mechanik-Korrekturen

- **Einwegwarnung:** `globals.lua:407–408` und `state_game.lua:11471–11494`: Mini-Dungeon schließt bis Master Key; Reliktdungeon bis Reliktwächter. Hauptschatz erhält den Exit-Key-Trigger (`state_game_dungeon_chunks.lua:1559–1567,3354–3357`). Die kleinen Dungeons sind deshalb keine unverbindlichen Schnupperräume. Zwischen mittleren Reliktetagen darf man zurück, nicht an die Oberfläche (`world_data.lua:148–194`).
- **Boss heißt auch generierter Hauptwächter:** Wenn `bossProbs` fehlt, kopiert der Generator `miniBossProbs` (`state_game_dungeon_chunks.lua:877–878`), platziert eine Hauptwächterkammer (`:1179–1205`) und markiert ihren Gegner als MainBoss (`:1597–1614`). Sea Cave und Warrens haben also einen Revenant-/Warlord-Hauptwächter. „Kein Boss“ aus dem isolierten `bossProbs=nil` abzuleiten wäre falsch. Die Gegner sind nicht notwendigerweise im Actor-Datensatz mit `isBoss=true` gekennzeichnet; Cyroden ist z. B. trotzdem Hold-Hauptwächter (`dungeon_data.lua:551`; `ActorData - Sheet1.csv:190`).
- **Amulette der acht Mini-Dungeons sind keine Garantie:** `data/treasure_sets.lua:822–861` gewichtet das jeweilige Amulett mit 1 und Reset Stone mit 10. Kein bestimmtes Amulett als sicheren Fortschritt oder Pflichtbelohnung versprechen. Die Hauptfunde Cannon2, Locus Fragment, Endera Herb und Tooth sind ausdrücklich 0/erstmals garantiert (`:865–886`). Garden-/Tower-/Jest-/Necropolis-/Repository-Endamulette ebenso 0 (`:773–810`).
- **Schwierigkeit ist eine Einschätzung:** Keine erfundenen Spielerlevel. „Früh, aber gefährlich“ = kleine Startprüfung; „Mittel“ = optional nach Yarrow und Basisvorbereitung; „Schwer“ = gefestigter Build/Statusreserve und häufig erst nach Garden; „Sehr schwer“ = späte Maschinenprüfungen, 100-Etagen-Ausdauer oder Finale. Tatsächliche Gegnergruppen/Fallen stützen diese Einordnung. `revenants_3`/`forgotten_3` umfassen stärkere und größere Gruppen als deren erste Stufen (`MonsterGroups - Sheet1.csv:35–37,56–58`).
- **Tear-Orte sind keine Gratispunkte:** Spectral Knight 500 Health wird beim Betreten erzeugt; Rätsellösung weckt ihn, Sieg bringt Tear (`state_game.lua:14781–14789`; `ActorData - Sheet1.csv:178`). Tempel-Guardian hat 1.000 Health (`ActorData - Sheet1.csv:179–187`).

## Vollständiger Katalog

Die unten genannten Zeiten sind die im Guide umgesetzten Empfehlungen. Bei allen Orten zählt alternativ ein tatsächlich selbst gesehener, eindeutig identifizierter Eingang als Ortswissen. Das bestätigt keine Schlüssel oder sonstigen Zugangsvoraussetzungen. Alle zehn Tear-Prüfungen sind nach Garden eingeordnet, in Etappe `ship`; The Lament steht erst innerhalb der eingeklappten alternativen Schlussroute.

### Yarrow Cave (`yarrow-cave`)

- **Lage:** Im Familienfriedhof nördlich der Yarrow-Farm. Rechercheanker: Yarrow lokal (42,41).
- **Ortswissen:** Carems Notiz im südlichen verfallenen Schuppen tatsächlich lesen. Sie nennt die Höhle hinter den Familiengräbern und erklärt, wo der Graveyard Key liegt. Den Fundorthinweis bestätigen; den Schlüssel anschließend getrennt besorgen. Abhakpunkt in Etappe(n): `yarrow`.
- **Umfang / Schwierigkeit:** 1 Etage · **Früh, aber gefährlich**. Kleine Starterhöhle ohne generierte Fallen, aber noch schwacher Startcharakter; früh möglich und trotzdem gefährlich.
- **Wächter / Gefahr:** Shield Bug als Hauptwächter; Silverwolf als mögliche Minibosse.
- **Zugang / Rückzug:** Graveyard Key öffnet das Friedhofstor. Einwegwarnung beachten. Der Eingang schließt hinter dir. Master Key aus dem Hauptschatz finden, dann zum Ausgang zurückkehren.
- **Zeitpunkt:** `Wolf: winter; Lady: red`. Nach der ersten Wolf-Gabe oder Gash/Feast der Lady früh zurückkehren; keine vollständige Städtereise abwarten.
- **Primärbelege:** `YarrowTriggers.csv:6–8,18,22,30,36–37; data/strings.lua:15; dungeon_data.lua:684–699; world_data.lua:87`.

### The Lost Tunnels (`lost-tunnels`)

- **Lage:** Direkt östlich Moon-upon-Thoss. Rechercheanker: (253,243)
- **Ortswissen:** Den Eingang auf einer normalen Erkundung bei der Hauptstadt tatsächlich sehen; es gibt keine belegte NPC- oder Buchmarkierung. Abhakpunkt in Etappe(n): `capital, prepare`.
- **Umfang / Schwierigkeit:** 1 Etage · **Mittel**. Forgotten, stärkere Fledermäuse/Hive, Rot-/Blindheitsfallen und zwei Bell-Räume; Nähe zur Hauptstadt macht den Kampf nicht leicht.
- **Wächter / Gefahr:** Gourmand oder Hulk als generierter Hauptwächter/Miniboss.
- **Zugang / Rückzug:** Keine besondere Zugangssperre. Der Eingang schließt hinter dir. Master Key aus dem Hauptschatz finden, dann zum Ausgang zurückkehren.
- **Zeitpunkt:** `prepare`. Nur bei bestätigtem Fundorthinweis und aufgefüllter Heilung, Energie, Poise sowie passender Munition angehen.
- **Primärbelege:** `OverworldTriggers.csv:203,235; world_data.lua:92; dungeon_data.lua:248–277; state_game.lua:21846–21862,21954–21969`.

### The Fallen Tunnel (`fallen-tunnel`)

- **Lage:** Östlich Yarrow, auf der Reise Richtung Wintersholl. Rechercheanker: (294,229)
- **Ortswissen:** In Moon-upon-Thoss mit dem Bewohner sprechen, der „Psst. Wanna know a secret?“ sagt: secret → treasure; danach die Kartenmarkierung prüfen. Abhakpunkt in Etappe(n): `capital`.
- **Umfang / Schwierigkeit:** 1 Etage · **Mittel**. Forgotten/Fledermäuse der ersten Gruppenstufe, Status- und Feuerfallen; Warlord und verriegelter Rückweg machen dies schwerer als Yarrow.
- **Wächter / Gefahr:** Silverwolf als Hauptwächter; Warlord als mögliche Minibosse.
- **Zugang / Rückzug:** Keine besondere Zugangssperre. Der Eingang schließt hinter dir. Master Key aus dem Hauptschatz finden, dann zum Ausgang zurückkehren.
- **Zeitpunkt:** `prepare`. Nur bei bestätigtem Fundorthinweis und aufgefüllter Heilung, Energie, Poise sowie passender Munition angehen.
- **Primärbelege:** `DialogueData - Sheet1.csv:149–151; OverworldTriggers.csv:167,370; world_data.lua:119; dungeon_data.lua:725–749`.

### The Crumbling Temple (`crumbling-temple`)

- **Lage:** Nordwestlich Harrowdus im Wald; südwestlich Wintersholl. Rechercheanker: (292,269)
- **Ortswissen:** In Harrowdus den Bewohner mit der Partyeinladung fragen: fun → know more. Kartenmarker/Notiz heißt zunächst „Party Location“. Abhakpunkt in Etappe(n): `harrow`.
- **Umfang / Schwierigkeit:** 1 Etage · **Schwer**. Forgotten_2, Hive/Bats, Stacheln/Stun/Amber und Negate-Turrets. Erst nach Garden mit stärkerem Build.
- **Wächter / Gefahr:** Hulk als generierter Hauptwächter und mögliche Minibosse.
- **Zugang / Rückzug:** Keine besondere Zugangssperre. Der Eingang schließt hinter dir. Master Key aus dem Hauptschatz finden, dann zum Ausgang zurückkehren.
- **Zeitpunkt:** `ship`. Nur bei bestätigtem Fundorthinweis und aufgefüllter Heilung, Energie, Poise sowie passender Munition angehen.
- **Primärbelege:** `DialogueData - Sheet1.csv:288–291; OverworldTriggers.csv:15,106; world_data.lua:95; dungeon_data.lua:301–316`.

### The Hole (`hole`)

- **Lage:** In den Bergen westlich und leicht südlich Wintersholl. Rechercheanker: (295,254)
- **Ortswissen:** In Wintersholl den „Brrr“-Bewohner fragen: Brrr → The Hole; markierte Höhle prüfen. Abhakpunkt in Etappe(n): `winter`.
- **Umfang / Schwierigkeit:** 1 Etage · **Schwer**. Vor allem Feuerfallen (Gewichtung 10), zusätzlich Rot/Gift/Blindheit. Wintertree-Amulett aus Tower ist eine sinnvolle spätere Hilfe.
- **Wächter / Gefahr:** Silverwolf als Hauptwächter; Warlord als mögliche Minibosse.
- **Zugang / Rückzug:** Keine besondere Zugangssperre. Der Eingang schließt hinter dir. Master Key aus dem Hauptschatz finden, dann zum Ausgang zurückkehren.
- **Zeitpunkt:** `tower`. Nur bei bestätigtem Fundorthinweis und aufgefüllter Heilung, Energie, Poise sowie passender Munition angehen.
- **Primärbelege:** `DialogueData - Sheet1.csv:221–224; OverworldTriggers.csv:283,292; world_data.lua:122; dungeon_data.lua:773–796`.

### The Sunken Edifice (`sunken-edifice`)

- **Lage:** Südwestlich Barrow-Linn auf dessen Insel. Rechercheanker: (180,302)
- **Ortswissen:** In Barrow-Linn dem Bewohner mit gefährlicher Feldforschung less academic sagen und die Markierung prüfen. Abhakpunkt in Etappe(n): `barrow`.
- **Umfang / Schwierigkeit:** 1 Etage · **Schwer**. Stärkere Forgotten_3/Bats_3, Rot-Maiden, Negate-Turrets und Feuer/Stacheln/Stun; nicht beim ersten Stadtbesuch erzwingen.
- **Wächter / Gefahr:** Hulk als generierter Hauptwächter und mögliche Minibosse.
- **Zugang / Rückzug:** Keine besondere Zugangssperre. Der Eingang schließt hinter dir. Master Key aus dem Hauptschatz finden, dann zum Ausgang zurückkehren.
- **Zeitpunkt:** `necropolis`. Nur bei bestätigtem Fundorthinweis und aufgefüllter Heilung, Energie, Poise sowie passender Munition angehen.
- **Primärbelege:** `DialogueData - Sheet1.csv:342–344; OverworldTriggers.csv:9,21; world_data.lua:98; dungeon_data.lua:340–355`.

### Alben's Bane (`albens-bane`)

- **Lage:** Südlich Hearthaven, nahe dem Weg zum Tower. Rechercheanker: (247,173)
- **Ortswissen:** In Hearthaven den „Fools“-Bewohner fragen: Fools → south; danach die Kartenmarkierung prüfen. Abhakpunkt in Etappe(n): `hearth`.
- **Umfang / Schwierigkeit:** 1 Etage · **Schwer**. Revenants_2, stärkere Bats/Hive und ein breites Feld an Statusfallen. Nach Garden als optionalen Umweg anbieten.
- **Wächter / Gefahr:** Borog als generierter Hauptwächter und mögliche Minibosse.
- **Zugang / Rückzug:** Keine besondere Zugangssperre. Der Eingang schließt hinter dir. Master Key aus dem Hauptschatz finden, dann zum Ausgang zurückkehren.
- **Zeitpunkt:** `ship`. Nur bei bestätigtem Fundorthinweis und aufgefüllter Heilung, Energie, Poise sowie passender Munition angehen.
- **Primärbelege:** `DialogueData - Sheet1.csv:181–183; OverworldTriggers.csv:160,248; world_data.lua:101; dungeon_data.lua:379–393`.

### The Hollows (`hollows`)

- **Lage:** Südlich The Red Grove in den Bergen. Rechercheanker: (180,216)
- **Ortswissen:** Bewohner in The Red Grove: Obsessed → zum seufzenden Gommer. Bei Gommer: The Hollows → talk → conspiracy → big secret → Sloar → Fenjaal → cheese → guess → treasure → why → tell the world. Erst letzter Dialog markiert den Eingang. Abhakpunkt in Etappe(n): `red, prepare`.
- **Umfang / Schwierigkeit:** 1 Etage · **Schwer**. Revenants_3, Bats_4, Warlord und Amber/Stun/Torpor-Fallen. Nach Tower mit zuverlässiger Distanz-/Heilroutine.
- **Wächter / Gefahr:** Warlord als generierter Hauptwächter und mögliche Minibosse.
- **Zugang / Rückzug:** Keine besondere Zugangssperre. Der Eingang schließt hinter dir. Master Key aus dem Hauptschatz finden, dann zum Ausgang zurückkehren.
- **Zeitpunkt:** `necropolis`. Nur bei bestätigtem Fundorthinweis und aufgefüllter Heilung, Energie, Poise sowie passender Munition angehen.
- **Primärbelege:** `DialogueData - Sheet1.csv:395–409; OverworldTriggers.csv:130,302; world_data.lua:104; dungeon_data.lua:417–430`.

### The Warrens (`warrens`)

- **Lage:** Südöstlich der Caldera, nur über das Meer erreichbar. Rechercheanker: (344,404)
- **Ortswissen:** Den Eingang auf einer späten Schiffsreise selbst sehen und die Kartenmarkierung bestätigen. Keine spezielle NPC- oder Buchmarkierung ist belegt. Abhakpunkt in Etappe(n): `ship, repository, egg`.
- **Umfang / Schwierigkeit:** 1 Etage · **Sehr schwer**. Revenants_3, Todes-Maiden und Gift/Rot/Blindheit/Stun. Nach fünf Relikten, vor dem Abschluss; ein schwerer optionaler Ausflug.
- **Wächter / Gefahr:** Revenant oder Warlord aus dem Miniboss-Pool wird Hauptwächter.
- **Zugang / Rückzug:** Keine besondere Zugangssperre. Der Eingang schließt hinter dir. Master Key aus dem Hauptschatz finden, dann zum Ausgang zurückkehren.
- **Zeitpunkt:** `egg`. Nur bei bestätigtem Fundorthinweis und aufgefüllter Heilung, Energie, Poise sowie passender Munition angehen.
- **Primärbelege:** `OverworldTriggers.csv:75,234; world_data.lua:128–129; dungeon_data.lua:870–895; state_game_dungeon_chunks.lua:877–878; state_game.lua:21846–21862,21954–21969`.

### The Hold (`hold`)

- **Lage:** An der Küste südwestlich Wintersholl, nahe Fieracarr. Rechercheanker: (322,251)
- **Ortswissen:** Den klagenden Wintersholl-Bewohner fragen: disgrace → rogue guardian → Imbeciles → history → weapon → pirates → coast. Die konkrete Küstenhöhlen-Spur nahe Henge und Tooth-Waffe notieren; der Dialog setzt keinen Kartenmarker. Abhakpunkt in Etappe(n): `winter`.
- **Umfang / Schwierigkeit:** 1 Etage · **Schwer**. Cyroden hat 1.000 Health (ActorData.csv:190); früh in der Reliktroute, aber kein leichter Starterboss.
- **Wächter / Gefahr:** Cyroden als Hauptwächter; Revenants und mögliche Revenant-Minibosse.
- **Zugang / Rückzug:** Keine besondere Zugangssperre. Der Eingang schließt hinter dir. Master Key aus dem Hauptschatz finden, dann zum Ausgang zurückkehren.
- **Zeitpunkt:** `hold`. Nach Städtereise und Vorbereitung vor Sleathen/Garden. Tooth of Sleathen aus dem Hauptschatz holen.
- **Primärbelege:** `DialogueData - Sheet1.csv:213–220; OverworldTriggers.csv:224,268; dungeon_data.lua:544–562; data/treasure_sets.lua:883–886`.

### Sleathen's Wood (`sleathen`)

- **Lage:** Nordwestlich Wintersholl, bei vier toten Bäumen. Rechercheanker: (294,206)
- **Ortswissen:** Wintersholl-Priester: Garden → not far → the beast → hunting grounds; Jagdgebietsmarker und vier tote Bäume notieren. Abhakpunkt in Etappe(n): `winter`.
- **Umfang / Schwierigkeit:** Offenes Waldareal · **Schwer**. Besondere Waffenregel und gefährlicher Einzelgegner: erst nach The Hold. Tooth of Sleathen ist auch beim Bogen-Build nötig.
- **Wächter / Gefahr:** Sleathen; normale Waffen umgehen die Spezialwaffenregel nicht.
- **Zugang / Rückzug:** Tooth of Sleathen aus The Hold als Nahkampfwaffe wirklich ausrüsten. Offenes Areal; Abstand gewinnen und zum Weltkartenrand zurückziehen ist möglich.
- **Zeitpunkt:** `garden`. Nach The Hold; Kopf für Garden aufnehmen.
- **Primärbelege:** `DialogueData - Sheet1.csv:197–201; OverworldTriggers.csv:72; data/ActorData - Sheet1.csv:175; world_data.lua:54`.

### The Garden of Lorelei (`garden`)

- **Lage:** Nördlich Wintersholl. Rechercheanker: (335,226)
- **Ortswissen:** Wintersholl-Priester: Relic → Garden → not far. Die markierte Garden-Position bestätigen; hunting grounds ist eine getrennte Sleathen-Spur. Abhakpunkt in Etappe(n): `winter`.
- **Umfang / Schwierigkeit:** 7 Etagen · **Schwer**. Sieben Etagen mit wechselnden Gegnergruppen und Statusfallen; erster großer Ausdauertest nach The Hold und Sleathen.
- **Wächter / Gefahr:** The Lord of Trees auf Etage 7; davor eigene Etagenwächter.
- **Zugang / Rückzug:** Sleathen's Head öffnet den Zugang. Kein Rückweg an die Oberfläche vom Eingang. Zwischen mittleren Etagen kann man zurück; zum Verlassen Lord of Trees besiegen.
- **Zeitpunkt:** `garden`. Erstes empfohlenes Relikt nach The Hold/Sleathen. Steadfast Hand und Lightning-bolt Amulet nehmen.
- **Primärbelege:** `DialogueData - Sheet1.csv:197–201; OverworldTriggers.csv:288,333,386; world_data.lua:148–154; dungeon_data.lua:904–1124; dungeon1-07Triggers.csv (lord_of_trees); data/treasure_sets.lua:773–779`.

### Click Clack Hideout (`click-clack`)

- **Lage:** Südwestlich Harrowdus. Rechercheanker: (296,319)
- **Ortswissen:** In Harrowdus die verschlossene Tür im nordöstlichen Haus mit Lockpick öffnen und die Forgery-Notiz lesen; den genannten Espirus nach literature → click-clack gang fragen. Konkrete Südwest-Richtung und drei Kisten im Kreis notieren. Abhakpunkt in Etappe(n): `harrow`.
- **Umfang / Schwierigkeit:** 1 festes Areal · **Schwer**. Mehrere Assassinen und ein Anführer in einem festen Areal. Nach dem ersten Relikt angehen; der freie Rückweg erleichtert einen abgebrochenen Versuch.
- **Wächter / Gefahr:** Click Clack Leader und mehrere Bandit Assassins.
- **Zugang / Rückzug:** Keine besondere Zugangssperre. Offenes festes Areal; Rückzug an den Rand möglich. Kein Master-Key-Dungeon.
- **Zeitpunkt:** `ship`. Nach Garden für den Forged Ship Title. Leader-Schlüssel für die Truhe benutzen.
- **Primärbelege:** `HarrowdusTriggers.csv:21; data/strings.lua:87; DialogueData - Sheet1.csv:285–287; OverworldTriggers.csv:66,187; clickclack-01Triggers.csv:2–12`.

### The Sea Cave (`sea-cave`)

- **Lage:** Kurz südwestlich Moon-upon-Thoss, hinter unpassierbarer Küste. Rechercheanker: (245,254)
- **Ortswissen:** In Moon-upon-Thoss den Bewohner ansprechen, der sich ein Schiff wünscht; cave fragen und den Marker prüfen. Abhakpunkt in Etappe(n): `capital`.
- **Umfang / Schwierigkeit:** 1 Etage · **Schwer**. Revenants_3, Blind-/Negate-Turrets, Fallen und ein Bell-Raum; kein kampfloser Cannon-Fund.
- **Wächter / Gefahr:** Revenant oder Warlord aus dem Miniboss-Pool wird Hauptwächter.
- **Zugang / Rückzug:** Ein Schiff; Zugang vom Meer. Der Eingang schließt hinter dir. Master Key aus dem Hauptschatz finden, dann zum Ausgang zurückkehren.
- **Zeitpunkt:** `ship`. Nach dem Forged Ship Title; Advanced Cannon aus dem Hauptschatz nehmen.
- **Primärbelege:** `DialogueData - Sheet1.csv:511–512; OverworldTriggers.csv:27,247; dungeon_data.lua:820–844; state_game_dungeon_chunks.lua:877–878; data/treasure_sets.lua:865–869`.

### The Thief's Hideout (`thief`)

- **Lage:** Auf einer Insel nordöstlich Wintersholl, südöstlich des großen Meereskreuzes. Rechercheanker: (360,148)
- **Ortswissen:** Nach Kenners Fluchtspur nach Moon-upon-Thoss zurückkehren. Bewohner nach Kenner und dann join fragen. Erst die tatsächliche Inselmarkierung auf der Weltkarte bestätigt den konkreten Fundort. Abhakpunkt in Etappe(n): `prepare`.
- **Umfang / Schwierigkeit:** 1 festes Areal · **Schwer**. Bewaffneter Schlüsselwächter auf einer Insel. Nach Garden und Schiffsbesorgung einplanen, mit aufgefüllten Kampfreserven.
- **Wächter / Gefahr:** Thief of Keys (Kenner).
- **Zugang / Rückzug:** Ein Schiff für die Insel. Offenes Inselareal; Rückzug an den Kartenrand möglich.
- **Zeitpunkt:** `tower`. Vor Tower die Tower Keys erkämpfen.
- **Primärbelege:** `DialogueData - Sheet1.csv:177,210–212,263–265,334–340,389–394,504–507; OverworldTriggers.csv:93,238; thief_campTriggers.csv:2`.

### Tower of Veils (`tower`)

- **Lage:** Südwestlich Hearthaven. Rechercheanker: (238,169)
- **Ortswissen:** Hearthaven-Priester: Relic → Tower of Veils → no way in; der Tower-Dialog setzt die Ortsmarkierung, no way in erklärt die gestohlenen Schlüssel. Abhakpunkt in Etappe(n): `hearth`.
- **Umfang / Schwierigkeit:** 7 Etagen · **Schwer**. Sieben Etagen, mechanische Gegner und ein Boss mit eigener Schildmechanik. Nach Garden; das Feuerabwehr-Amulett hilft bei den folgenden Zielen.
- **Wächter / Gefahr:** Almas the Unseeing auf Etage 7; Great Gazers/Tanks als Etagenwächter.
- **Zugang / Rückzug:** Tower Keys aus The Thief's Hideout. Eingang geschlossen; sieben Etagen und Reliktboss für Rückkehr an die Oberfläche.
- **Zeitpunkt:** `tower`. Nach Garden/Schiff/Kenner, vor Jest; All-seeing Eye und Amulet of Wintertree holen. Alle vier Braziers nutzen, um Almas' Dunkelheit/Schild aufzulösen.
- **Primärbelege:** `DialogueData - Sheet1.csv:175–177; OverworldTriggers.csv:126,316; world_data.lua:188–194; dungeon_data.lua:1955–2256; dungeon5-07Triggers.csv:6; actor_boss.lua:1448–1500`.

### The Jest (`jest`)

- **Lage:** In Harrowdus, Grocer-Rückraum hinter falscher Wand. Rechercheanker: Harrowdus lokal (79,82)
- **Ortswissen:** In Harrowdus das Buch The Jest lesen (Regal (52,63)): Es nennt den Shop-Rückraum. Priester: Relic → die → The Jest → insist → phrase für das separate Zugangsrätsel. Abhakpunkt in Etappe(n): `harrow`.
- **Umfang / Schwierigkeit:** 7 Etagen · **Schwer**. Sieben Etagen und ein Boss mit wechselnden Anweisungen; Fehler im Rätselverhalten sind gefährlich. Nach Tower mit Feuer-/Statusreserve.
- **Wächter / Gefahr:** The Laughing One; Reaper- und Darknight-Etagenkämpfe.
- **Zugang / Rückzug:** Vollständige Fünfwortphrase aus tatsächlich gefundenen Hinweisen in Eingangsnähe rufen. Eingang geschlossen; Reliktwächter auf Etage 7 besiegen.
- **Zeitpunkt:** `jest`. Nach Tower empfohlen; beim Boss says befolgen, laughs Gegenteil. Trickster's Mask und Heart-shaped Amulet holen.
- **Primärbelege:** `data/strings.lua:166; HarrowdusTriggers.csv:5,11; DialogueData - Sheet1.csv:243–247; world_data.lua:168–174; dungeon_data.lua:1365–1652; actor_boss.lua:945–1072`.

### Meida's Hideout (`meida`)

- **Lage:** Südöstlich The Red Grove, östlich und etwas südlich Poison Cross. Rechercheanker: (231,207)
- **Ortswissen:** Beim Ironmonger im Südwesten Harrowdus Treasure Map #10 kaufen und wirklich Read verwenden. Erst Lesen markiert den Dungeon; Meida-Gossip nennt keinen Fundort. Abhakpunkt in Etappe(n): `harrow, necropolis`.
- **Umfang / Schwierigkeit:** 1 Etage · **Schwer**. Revenants_3, Warlord/Revenant und Rot/Blindheit/Gift/Amber; der Hauptschatz enthält nur eine garantierte Endera Herb.
- **Wächter / Gefahr:** Warlord als Hauptwächter; mögliche Revenant-Minibosse.
- **Zugang / Rückzug:** Keine besondere Zugangssperre. Der Eingang schließt hinter dir. Master Key aus dem Hauptschatz finden, dann zum Ausgang zurückkehren.
- **Zeitpunkt:** `necropolis`. Optionale Endera-Quelle nach Tower; bei fünf vorhandenen Kräutern nicht erforderlich.
- **Primärbelege:** `data/ObjectData - Sheet1.csv:398; OverworldTriggers.csv:145,150; state_game.lua:22527–22533; dungeon_data.lua:147–160; data/treasure_sets.lua:877–881`.

### The Necropolis (`necropolis`)

- **Lage:** Südöstlich The Red Grove. Rechercheanker: (197,213)
- **Ortswissen:** In The Red Grove die Antwort Blood is all von Bewohnern lernen und der Handmaiden sagen; Candle → Necropolis → brave its tombs. Erst letzter Dialog markiert den Zugang. Abhakpunkt in Etappe(n): `red`.
- **Umfang / Schwierigkeit:** 7 Etagen · **Schwer**. Sieben Etagen und zwei Endgegner; mit voller unabhängiger Heil-/Statusreserve nach Tower und Jest.
- **Wächter / Gefahr:** The Bloody Twins auf Etage 7, Darknights als Etagenwächter.
- **Zugang / Rückzug:** Fünf Endera Herbs → bei Handmaiden brew → Witches' Solvent am Eingang anwenden. Eingang geschlossen; beide Reliktbosse für die Rückkehr besiegen.
- **Zeitpunkt:** `necropolis`. Nach Tower/Jest mit Öl gegen Rot und vollen Reserven; Crimson Candle holen.
- **Primärbelege:** `DialogueData - Sheet1.csv:363–380; OverworldTriggers.csv:149,290; world_data.lua:158–164; dungeon_data.lua:1130–1359; dungeon4-07Triggers.csv:9,14`.

### Bael's Tomb (`bael`)

- **Lage:** Deutlich südlich The Red Grove, südöstlich Essacarr. Rechercheanker: (173,228)
- **Ortswissen:** Beim Harrowdus-Ironmonger Treasure Map #3 kaufen und Read verwenden; dadurch wird die Außenruine markiert. Dort erst den Dungeonzugang lokalisieren. Abhakpunkt in Etappe(n): `harrow, repository`.
- **Umfang / Schwierigkeit:** Außenruine + 1 Dungeonetage · **Schwer**. Revenants_3, Warlord/Revenant, Torpor-Maiden, Gift-Turrets/Bells und breite Fallenpalette.
- **Wächter / Gefahr:** Warlord als Hauptwächter; mögliche Revenant-Minibosse.
- **Zugang / Rückzug:** Keine besondere Zugangssperre. Der Eingang schließt hinter dir. Master Key aus dem Hauptschatz finden, dann zum Ausgang zurückkehren.
- **Zeitpunkt:** `repository`. Vor Repository ein Locus Fragment aus Hauptschatz holen. Bael's Key liegt an einem anderen Ort.
- **Primärbelege:** `data/ObjectData - Sheet1.csv:391; OverworldTriggers.csv:5,19; world_data.lua:68,113; dungeon_data.lua:585–610; data/treasure_sets.lua:871–875`.

### The Repository (`repository`)

- **Lage:** Auf der Insel nördlich der Barrow-Linn-/Red-Grove-Region; nordöstlich Thossacarr. Rechercheanker: (187,141)
- **Ortswissen:** Nach fünf Fragmenten und Benutzung der Locus Box in Runacarr die Nordverbindung nach Thossacarr nehmen. Auf der Insel den Repository-Eingang selbst sehen und diesen konkreten Fundort bestätigen. Der Priesterdialog allein reicht hierfür nicht. Abhakpunkt in Etappe(n): `repository`.
- **Umfang / Schwierigkeit:** 7 Etagen · **Sehr schwer**. Sieben Etagen, Maschinen und mehrphasiger Schildboss. Spät nach den anderen Relikten und den fünf Fragmentprüfungen.
- **Wächter / Gefahr:** The Lens Keeper; Tank-/Spectral-Knight-Etagenkämpfe.
- **Zugang / Rückzug:** Locus Box aus allen fünf Fragmenten, Hengeweg nach Thossacarr. Eingang geschlossen; Lens Keeper auf Etage 7 für Oberflächenrückkehr besiegen.
- **Zeitpunkt:** `repository`. Letztes empfohlenes Relikt. Maschinen/Status vorbereiten; Lens-Keeper-Schildkristalle zerstören, nach Phasenwechsel erneut.
- **Primärbelege:** `DialogueData - Sheet1.csv:316–323; state_game.lua:22502–22516,21846–21862; OverworldTriggers.csv:218,298; world_data.lua:178–184; dungeon_data.lua:1658–1950; actor_boss.lua:1152–1236`.

### Temple of the Shield (`temple-shield`)

- **Lage:** Nordwestlich Moon-upon-Thoss und südöstlich The Red Grove. Dem selbst entdeckten Marker folgen; die Himmelsrichtung allein ist keine geprüfte Laufroute. Rechercheanker: (219,177)
- **Ortswissen:** Den Tempel bei normaler Erkundung selbst sehen und den Marker bestätigen. Keine eigene NPC-/Buchmarkierung belegt. Abhakpunkt in Etappe(n): `prepare, ship, tower, repository, egg`.
- **Umfang / Schwierigkeit:** 1 feste Prüfung · **Sehr schwer**. Ein Guardian mit 1.000 Health, teils zusätzliche Turrets und eine Great-Key-Sperre. Späte freiwillige Ausrüstungsprüfung; die Belohnung muss zu deinen Attributen passen.
- **Wächter / Gefahr:** Shield Guardian (1.000 Health); teils Turrets.
- **Zugang / Rückzug:** Great Key: Sea Cave Advanced Cannon → Yeleba besiegen. Die passende Waffe/Rüstung muss ihre tatsächlichen Attributanforderungen erfüllen. Fester Tempel; keine Master-Key-Eingangssperre. Die Great-Key-Tür öffnet die Prüfung.
- **Zeitpunkt:** `egg`. Optional nach fünf Relikten/Great Key und vor Finale; nur zum Build passende Belohnung verfolgen.
- **Primärbelege:** `world_data.lua:317–324; OverworldTriggers.csv:314,363; shield-01Triggers.csv (locked_door great_key und weapon_guardian); data/ActorData - Sheet1.csv:179–187; state_game.lua:21846–21862,21954–21969`.

### Temple of the Dagger (`temple-dagger`)

- **Lage:** Nördlich Harrowdus, südwestlich Wintersholl. Dem selbst entdeckten Marker folgen; die Himmelsrichtung allein ist keine geprüfte Laufroute. Rechercheanker: (305,287)
- **Ortswissen:** Den Tempel bei normaler Erkundung selbst sehen und den Marker bestätigen. Keine eigene NPC-/Buchmarkierung belegt. Abhakpunkt in Etappe(n): `prepare, ship, tower, repository, egg`.
- **Umfang / Schwierigkeit:** 1 feste Prüfung · **Sehr schwer**. Ein Guardian mit 1.000 Health, teils zusätzliche Turrets und eine Great-Key-Sperre. Späte freiwillige Ausrüstungsprüfung; die Belohnung muss zu deinen Attributen passen.
- **Wächter / Gefahr:** Dagger Guardian (1.000 Health); teils Turrets.
- **Zugang / Rückzug:** Great Key: Sea Cave Advanced Cannon → Yeleba besiegen. Die passende Waffe/Rüstung muss ihre tatsächlichen Attributanforderungen erfüllen. Fester Tempel; keine Master-Key-Eingangssperre. Die Great-Key-Tür öffnet die Prüfung.
- **Zeitpunkt:** `egg`. Optional nach fünf Relikten/Great Key und vor Finale; nur zum Build passende Belohnung verfolgen.
- **Primärbelege:** `world_data.lua:317–324; OverworldTriggers.csv:291,312; dagger-01Triggers.csv (locked_door great_key und weapon_guardian); data/ActorData - Sheet1.csv:179–187; state_game.lua:21846–21862,21954–21969`.

### Temple of the Rapier (`temple-rapier`)

- **Lage:** Nordöstlich Harrowdus. Dem selbst entdeckten Marker folgen; die Himmelsrichtung allein ist keine geprüfte Laufroute. Rechercheanker: (319,302)
- **Ortswissen:** Den Tempel bei normaler Erkundung selbst sehen und den Marker bestätigen. Keine eigene NPC-/Buchmarkierung belegt. Abhakpunkt in Etappe(n): `prepare, ship, tower, repository, egg`.
- **Umfang / Schwierigkeit:** 1 feste Prüfung · **Sehr schwer**. Ein Guardian mit 1.000 Health, teils zusätzliche Turrets und eine Great-Key-Sperre. Späte freiwillige Ausrüstungsprüfung; die Belohnung muss zu deinen Attributen passen.
- **Wächter / Gefahr:** Rapier Guardian (1.000 Health); teils Turrets.
- **Zugang / Rückzug:** Great Key: Sea Cave Advanced Cannon → Yeleba besiegen. Die passende Waffe/Rüstung muss ihre tatsächlichen Attributanforderungen erfüllen. Fester Tempel; keine Master-Key-Eingangssperre. Die Great-Key-Tür öffnet die Prüfung.
- **Zeitpunkt:** `egg`. Optional nach fünf Relikten/Great Key und vor Finale; nur zum Build passende Belohnung verfolgen.
- **Primärbelege:** `world_data.lua:317–324; OverworldTriggers.csv:165,421; rapier-01Triggers.csv (locked_door great_key und weapon_guardian); data/ActorData - Sheet1.csv:179–187; state_game.lua:21846–21862,21954–21969`.

### Temple of the Bow (`temple-bow`)

- **Lage:** Östlich und etwas südlich The Red Grove. Dem selbst entdeckten Marker folgen; die Himmelsrichtung allein ist keine geprüfte Laufroute. Rechercheanker: (201,187)
- **Ortswissen:** Den Tempel bei normaler Erkundung selbst sehen und den Marker bestätigen. Keine eigene NPC-/Buchmarkierung belegt. Abhakpunkt in Etappe(n): `prepare, ship, tower, repository, egg`.
- **Umfang / Schwierigkeit:** 1 feste Prüfung · **Sehr schwer**. Ein Guardian mit 1.000 Health, teils zusätzliche Turrets und eine Great-Key-Sperre. Späte freiwillige Ausrüstungsprüfung; die Belohnung muss zu deinen Attributen passen.
- **Wächter / Gefahr:** Bow Guardian (1.000 Health); teils Turrets.
- **Zugang / Rückzug:** Great Key: Sea Cave Advanced Cannon → Yeleba besiegen. Die passende Waffe/Rüstung muss ihre tatsächlichen Attributanforderungen erfüllen. Fester Tempel; keine Master-Key-Eingangssperre. Die Great-Key-Tür öffnet die Prüfung.
- **Zeitpunkt:** `egg`. Optional nach fünf Relikten/Great Key und vor Finale; nur zum Build passende Belohnung verfolgen.
- **Primärbelege:** `world_data.lua:317–324; OverworldTriggers.csv:183,196; bow-01Triggers.csv (locked_door great_key und weapon_guardian); data/ActorData - Sheet1.csv:179–187; state_game.lua:21846–21862,21954–21969`.

### Temple of the Reaper (`temple-reaper`)

- **Lage:** Nordwestlich Wintersholl und östlich Hearthaven. Dem selbst entdeckten Marker folgen; die Himmelsrichtung allein ist keine geprüfte Laufroute. Rechercheanker: (304,189)
- **Ortswissen:** Den Tempel bei normaler Erkundung selbst sehen und den Marker bestätigen. Keine eigene NPC-/Buchmarkierung belegt. Abhakpunkt in Etappe(n): `prepare, ship, tower, repository, egg`.
- **Umfang / Schwierigkeit:** 1 feste Prüfung · **Sehr schwer**. Ein Guardian mit 1.000 Health, teils zusätzliche Turrets und eine Great-Key-Sperre. Späte freiwillige Ausrüstungsprüfung; die Belohnung muss zu deinen Attributen passen.
- **Wächter / Gefahr:** Reaper Guardian (1.000 Health); teils Turrets.
- **Zugang / Rückzug:** Great Key: Sea Cave Advanced Cannon → Yeleba besiegen. Die passende Waffe/Rüstung muss ihre tatsächlichen Attributanforderungen erfüllen. Fester Tempel; keine Master-Key-Eingangssperre. Die Great-Key-Tür öffnet die Prüfung.
- **Zeitpunkt:** `egg`. Optional nach fünf Relikten/Great Key und vor Finale; nur zum Build passende Belohnung verfolgen.
- **Primärbelege:** `world_data.lua:317–324; OverworldTriggers.csv:194,251; greataxe-01Triggers.csv (locked_door great_key und weapon_guardian); data/ActorData - Sheet1.csv:179–187; state_game.lua:21846–21862,21954–21969`.

### Temple of the Mace (`temple-mace`)

- **Lage:** Westlich Wintersholl und südöstlich Hearthaven. Dem selbst entdeckten Marker folgen; die Himmelsrichtung allein ist keine geprüfte Laufroute. Rechercheanker: (284,185)
- **Ortswissen:** Den Tempel bei normaler Erkundung selbst sehen und den Marker bestätigen. Keine eigene NPC-/Buchmarkierung belegt. Abhakpunkt in Etappe(n): `prepare, ship, tower, repository, egg`.
- **Umfang / Schwierigkeit:** 1 feste Prüfung · **Sehr schwer**. Ein Guardian mit 1.000 Health, teils zusätzliche Turrets und eine Great-Key-Sperre. Späte freiwillige Ausrüstungsprüfung; die Belohnung muss zu deinen Attributen passen.
- **Wächter / Gefahr:** Mace Guardian (1.000 Health); teils Turrets.
- **Zugang / Rückzug:** Great Key: Sea Cave Advanced Cannon → Yeleba besiegen. Die passende Waffe/Rüstung muss ihre tatsächlichen Attributanforderungen erfüllen. Fester Tempel; keine Master-Key-Eingangssperre. Die Great-Key-Tür öffnet die Prüfung.
- **Zeitpunkt:** `egg`. Optional nach fünf Relikten/Great Key und vor Finale; nur zum Build passende Belohnung verfolgen.
- **Primärbelege:** `world_data.lua:317–324; OverworldTriggers.csv:245,399; club-01Triggers.csv (locked_door great_key und weapon_guardian); data/ActorData - Sheet1.csv:179–187; state_game.lua:21846–21862,21954–21969`.

### Temple of the Sword (`temple-sword`)

- **Lage:** Westlich und etwas südlich Hearthaven. Dem selbst entdeckten Marker folgen; die Himmelsrichtung allein ist keine geprüfte Laufroute. Rechercheanker: (232,153)
- **Ortswissen:** Den Tempel bei normaler Erkundung selbst sehen und den Marker bestätigen. Keine eigene NPC-/Buchmarkierung belegt. Abhakpunkt in Etappe(n): `prepare, ship, tower, repository, egg`.
- **Umfang / Schwierigkeit:** 1 feste Prüfung · **Sehr schwer**. Ein Guardian mit 1.000 Health, teils zusätzliche Turrets und eine Great-Key-Sperre. Späte freiwillige Ausrüstungsprüfung; die Belohnung muss zu deinen Attributen passen.
- **Wächter / Gefahr:** Sword Guardian (1.000 Health); teils Turrets.
- **Zugang / Rückzug:** Great Key: Sea Cave Advanced Cannon → Yeleba besiegen. Die passende Waffe/Rüstung muss ihre tatsächlichen Attributanforderungen erfüllen. Fester Tempel; keine Master-Key-Eingangssperre. Die Great-Key-Tür öffnet die Prüfung.
- **Zeitpunkt:** `egg`. Optional nach fünf Relikten/Great Key und vor Finale; nur zum Build passende Belohnung verfolgen.
- **Primärbelege:** `world_data.lua:317–324; OverworldTriggers.csv:208,395; sword-01Triggers.csv (locked_door great_key und weapon_guardian); data/ActorData - Sheet1.csv:179–187; state_game.lua:21846–21862,21954–21969`.

### Temple of the Cloak (`temple-cloak`)

- **Lage:** Südöstlich Barrow-Linn, auf dessen Insel. Dem selbst entdeckten Marker folgen; die Himmelsrichtung allein ist keine geprüfte Laufroute. Rechercheanker: (178,285)
- **Ortswissen:** Den Tempel bei normaler Erkundung selbst sehen und den Marker bestätigen. Keine eigene NPC-/Buchmarkierung belegt. Abhakpunkt in Etappe(n): `prepare, ship, tower, repository, egg`.
- **Umfang / Schwierigkeit:** 1 feste Prüfung · **Sehr schwer**. Ein Guardian mit 1.000 Health, teils zusätzliche Turrets und eine Great-Key-Sperre. Späte freiwillige Ausrüstungsprüfung; die Belohnung muss zu deinen Attributen passen.
- **Wächter / Gefahr:** Cloak Guardian (1.000 Health); teils Turrets.
- **Zugang / Rückzug:** Great Key: Sea Cave Advanced Cannon → Yeleba besiegen. Die passende Waffe/Rüstung muss ihre tatsächlichen Attributanforderungen erfüllen. Fester Tempel; keine Master-Key-Eingangssperre. Die Great-Key-Tür öffnet die Prüfung.
- **Zeitpunkt:** `egg`. Optional nach fünf Relikten/Great Key und vor Finale; nur zum Build passende Belohnung verfolgen.
- **Primärbelege:** `world_data.lua:317–324; OverworldTriggers.csv:70,286; cloak-01Triggers.csv (locked_door great_key und weapon_guardian); data/ActorData - Sheet1.csv:179–187; state_game.lua:21846–21862,21954–21969`.

### Heart Temple 1 (`heart1`)

- **Lage:** Südlich The Red Grove. Rechercheanker: (181,203)
- **Ortswissen:** Tempel bei einer normalen Reise selbst sehen und dessen Kartenmarker bestätigen. Keine belegte spezielle Dialogmarkierung. Abhakpunkt in Etappe(n): `prepare, ship, tower, repository`.
- **Umfang / Schwierigkeit:** 1 fester Rätselort · **Mittel**. Rätsel-/Fundort, kein siebenstöckiger Reliktdungeon. Kein garantierter kampfloser Weg dorthin.
- **Wächter / Gefahr:** Kein fest eingetragener Boss in der Triggerdatei. Umgebung/Rätsel trotzdem prüfen.
- **Zugang / Rückzug:** Keine besondere Zugangssperre. Fester Außenort; Rückzug an den Kartenrand möglich.
- **Zeitpunkt:** `prepare`. Optional nach Fund und Rätsellösung für ein Max-Health-Objekt. Bei unbekannter Gefahr später wiederkommen.
- **Primärbelege:** `world_data.lua:327–332; OverworldTriggers.csv:294; heart1Triggers.csv:3; state_game.lua:21846–21862,21954–21969`.

### Heart Temple 2 (`heart2`)

- **Lage:** Weit östlich Wintersholl. Rechercheanker: (408,202)
- **Ortswissen:** Tempel bei einer normalen Reise selbst sehen und dessen Kartenmarker bestätigen. Keine belegte spezielle Dialogmarkierung. Abhakpunkt in Etappe(n): `prepare, ship, tower, repository`.
- **Umfang / Schwierigkeit:** 1 fester Rätselort · **Mittel**. Rätsel-/Fundort, kein siebenstöckiger Reliktdungeon. Kein garantierter kampfloser Weg dorthin.
- **Wächter / Gefahr:** Kein fest eingetragener Boss in der Triggerdatei. Umgebung/Rätsel trotzdem prüfen.
- **Zugang / Rückzug:** Keine besondere Zugangssperre. Fester Außenort; Rückzug an den Kartenrand möglich.
- **Zeitpunkt:** `prepare`. Optional nach Fund und Rätsellösung für ein Max-Health-Objekt. Bei unbekannter Gefahr später wiederkommen.
- **Primärbelege:** `world_data.lua:327–332; OverworldTriggers.csv:189; heart2Triggers.csv:3; state_game.lua:21846–21862,21954–21969`.

### Heart Temple 4 (`heart4`)

- **Lage:** Südlich Hearthaven. Rechercheanker: (259,179)
- **Ortswissen:** Tempel bei einer normalen Reise selbst sehen und dessen Kartenmarker bestätigen. Keine belegte spezielle Dialogmarkierung. Abhakpunkt in Etappe(n): `prepare, ship, tower, repository`.
- **Umfang / Schwierigkeit:** 1 fester Rätselort · **Mittel**. Rätsel-/Fundort, kein siebenstöckiger Reliktdungeon. Kein garantierter kampfloser Weg dorthin.
- **Wächter / Gefahr:** Kein fest eingetragener Boss in der Triggerdatei. Umgebung/Rätsel trotzdem prüfen.
- **Zugang / Rückzug:** Keine besondere Zugangssperre. Fester Außenort; Rückzug an den Kartenrand möglich.
- **Zeitpunkt:** `prepare`. Optional nach Fund und Rätsellösung für ein Max-Health-Objekt. Bei unbekannter Gefahr später wiederkommen.
- **Primärbelege:** `world_data.lua:327–332; OverworldTriggers.csv:257; heart4Triggers.csv:3; state_game.lua:21846–21862,21954–21969`.

### Heart Temple 5 (`heart5`)

- **Lage:** Südlich Harrowdus. Rechercheanker: (309,336)
- **Ortswissen:** Tempel bei einer normalen Reise selbst sehen und dessen Kartenmarker bestätigen. Keine belegte spezielle Dialogmarkierung. Abhakpunkt in Etappe(n): `prepare, ship, tower, repository`.
- **Umfang / Schwierigkeit:** 1 fester Rätselort · **Mittel**. Rätsel-/Fundort, kein siebenstöckiger Reliktdungeon. Kein garantierter kampfloser Weg dorthin.
- **Wächter / Gefahr:** Kein fest eingetragener Boss in der Triggerdatei. Umgebung/Rätsel trotzdem prüfen.
- **Zugang / Rückzug:** Keine besondere Zugangssperre. Fester Außenort; Rückzug an den Kartenrand möglich.
- **Zeitpunkt:** `prepare`. Optional nach Fund und Rätsellösung für ein Max-Health-Objekt. Bei unbekannter Gefahr später wiederkommen.
- **Primärbelege:** `world_data.lua:327–332; OverworldTriggers.csv:217; heart5Triggers.csv:3; state_game.lua:21846–21862,21954–21969`.

### Delera (`tear1`)

- **Lage:** Nördlich Moon-upon-Thoss, südlich Yarrow. Dem selbst entdeckten Marker folgen; die Himmelsrichtung allein ist keine geprüfte Laufroute. Rechercheanker: (248,234)
- **Ortswissen:** Ruineneingang bei normaler Erkundung sehen und den Marker bestätigen; vor Ort das Schild lesen. Keine eigene Ortsmarkierung durch ein belegtes NPC-Gespräch. Abhakpunkt in Etappe(n): `prepare, ship, tower, repository, egg`.
- **Umfang / Schwierigkeit:** 1 fester Wächter-/Rätselort · **Schwer**. Das Rätsel ruft einen Spectral Knight mit 500 Health hervor. Nach dem ersten Relikt als freiwilligen Ausflug angehen; kein früher Gratispunkt.
- **Wächter / Gefahr:** Spectral Knight (500 Health); Tear erst nach Rätselauslösung und Sieg.
- **Zugang / Rückzug:** Eigenes Schildrätsel; danach muss der Wächter besiegt werden. Fester Außenort; bei zu starkem Wächter an den Kartenrand zurückziehen und später versuchen.
- **Zeitpunkt:** `ship`. Optional für tatsächlich erkämpfte Tears; keine frühe Gratis-Tear einplanen. Benötigte Feuereffekte, Begleiter oder Statusbedingungen vor Ort prüfen.
- **Primärbelege:** `world_data.lua:338; OverworldTriggers.csv:10,79; data/strings.lua:4; state_game.lua:14781–14789; data/ActorData - Sheet1.csv:178`.

### Oveera (`tear2`)

- **Lage:** Nordöstlich Harrowdus, südöstlich Wintersholl. Dem selbst entdeckten Marker folgen; die Himmelsrichtung allein ist keine geprüfte Laufroute. Rechercheanker: (307,185)
- **Ortswissen:** Ruineneingang bei normaler Erkundung sehen und den Marker bestätigen; vor Ort das Schild lesen. Keine eigene Ortsmarkierung durch ein belegtes NPC-Gespräch. Abhakpunkt in Etappe(n): `prepare, ship, tower, repository, egg`.
- **Umfang / Schwierigkeit:** 1 fester Wächter-/Rätselort · **Schwer**. Das Rätsel ruft einen Spectral Knight mit 500 Health hervor. Nach dem ersten Relikt als freiwilligen Ausflug angehen; kein früher Gratispunkt.
- **Wächter / Gefahr:** Spectral Knight (500 Health); Tear erst nach Rätselauslösung und Sieg.
- **Zugang / Rückzug:** Eigenes Schildrätsel; danach muss der Wächter besiegt werden. Fester Außenort; bei zu starkem Wächter an den Kartenrand zurückziehen und später versuchen.
- **Zeitpunkt:** `ship`. Optional für tatsächlich erkämpfte Tears; keine frühe Gratis-Tear einplanen. Benötigte Feuereffekte, Begleiter oder Statusbedingungen vor Ort prüfen.
- **Primärbelege:** `world_data.lua:340; OverworldTriggers.csv:179,336; data/strings.lua:5; state_game.lua:14781–14789; data/ActorData - Sheet1.csv:178`.

### Soccera (`tear3`)

- **Lage:** Nördlich Harrowdus, südwestlich Wintersholl. Dem selbst entdeckten Marker folgen; die Himmelsrichtung allein ist keine geprüfte Laufroute. Rechercheanker: (311,281)
- **Ortswissen:** Ruineneingang bei normaler Erkundung sehen und den Marker bestätigen; vor Ort das Schild lesen. Keine eigene Ortsmarkierung durch ein belegtes NPC-Gespräch. Abhakpunkt in Etappe(n): `prepare, ship, tower, repository, egg`.
- **Umfang / Schwierigkeit:** 1 fester Wächter-/Rätselort · **Schwer**. Das Rätsel ruft einen Spectral Knight mit 500 Health hervor. Nach dem ersten Relikt als freiwilligen Ausflug angehen; kein früher Gratispunkt.
- **Wächter / Gefahr:** Spectral Knight (500 Health); Tear erst nach Rätselauslösung und Sieg.
- **Zugang / Rückzug:** Eigenes Schildrätsel; danach muss der Wächter besiegt werden. Fester Außenort; bei zu starkem Wächter an den Kartenrand zurückziehen und später versuchen.
- **Zeitpunkt:** `ship`. Optional für tatsächlich erkämpfte Tears; keine frühe Gratis-Tear einplanen. Benötigte Feuereffekte, Begleiter oder Statusbedingungen vor Ort prüfen.
- **Primärbelege:** `world_data.lua:342; OverworldTriggers.csv:136,239; data/strings.lua:6; state_game.lua:14781–14789; data/ActorData - Sheet1.csv:178`.

### Nostera (`tear4`)

- **Lage:** Westlich Wintersholl, nordöstlich Yarrow. Dem selbst entdeckten Marker folgen; die Himmelsrichtung allein ist keine geprüfte Laufroute. Rechercheanker: (287,207)
- **Ortswissen:** Ruineneingang bei normaler Erkundung sehen und den Marker bestätigen; vor Ort das Schild lesen. Keine eigene Ortsmarkierung durch ein belegtes NPC-Gespräch. Abhakpunkt in Etappe(n): `prepare, ship, tower, repository, egg`.
- **Umfang / Schwierigkeit:** 1 fester Wächter-/Rätselort · **Schwer**. Das Rätsel ruft einen Spectral Knight mit 500 Health hervor. Nach dem ersten Relikt als freiwilligen Ausflug angehen; kein früher Gratispunkt.
- **Wächter / Gefahr:** Spectral Knight (500 Health); Tear erst nach Rätselauslösung und Sieg.
- **Zugang / Rückzug:** Eigenes Schildrätsel; danach muss der Wächter besiegt werden. Fester Außenort; bei zu starkem Wächter an den Kartenrand zurückziehen und später versuchen.
- **Zeitpunkt:** `ship`. Optional für tatsächlich erkämpfte Tears; keine frühe Gratis-Tear einplanen. Benötigte Feuereffekte, Begleiter oder Statusbedingungen vor Ort prüfen.
- **Primärbelege:** `world_data.lua:344; OverworldTriggers.csv:123,264; data/strings.lua:7; state_game.lua:14781–14789; data/ActorData - Sheet1.csv:178`.

### Issera (`tear5`)

- **Lage:** Südöstlich Moon-upon-Thoss. Dem selbst entdeckten Marker folgen; die Himmelsrichtung allein ist keine geprüfte Laufroute. Rechercheanker: (268,274)
- **Ortswissen:** Ruineneingang bei normaler Erkundung sehen und den Marker bestätigen; vor Ort das Schild lesen. Keine eigene Ortsmarkierung durch ein belegtes NPC-Gespräch. Abhakpunkt in Etappe(n): `prepare, ship, tower, repository, egg`.
- **Umfang / Schwierigkeit:** 1 fester Wächter-/Rätselort · **Schwer**. Das Rätsel ruft einen Spectral Knight mit 500 Health hervor. Nach dem ersten Relikt als freiwilligen Ausflug angehen; kein früher Gratispunkt.
- **Wächter / Gefahr:** Spectral Knight (500 Health); Tear erst nach Rätselauslösung und Sieg.
- **Zugang / Rückzug:** Eigenes Schildrätsel; danach muss der Wächter besiegt werden. Fester Außenort; bei zu starkem Wächter an den Kartenrand zurückziehen und später versuchen.
- **Zeitpunkt:** `ship`. Optional für tatsächlich erkämpfte Tears; keine frühe Gratis-Tear einplanen. Benötigte Feuereffekte, Begleiter oder Statusbedingungen vor Ort prüfen.
- **Primärbelege:** `world_data.lua:346; OverworldTriggers.csv:23,94; data/strings.lua:8; state_game.lua:14781–14789; data/ActorData - Sheet1.csv:178`.

### Dusera (`tear6`)

- **Lage:** Westlich Harrowdus und südlich Wintersholl. Dem selbst entdeckten Marker folgen; die Himmelsrichtung allein ist keine geprüfte Laufroute. Rechercheanker: (281,308)
- **Ortswissen:** Ruineneingang bei normaler Erkundung sehen und den Marker bestätigen; vor Ort das Schild lesen. Keine eigene Ortsmarkierung durch ein belegtes NPC-Gespräch. Abhakpunkt in Etappe(n): `prepare, ship, tower, repository, egg`.
- **Umfang / Schwierigkeit:** 1 fester Wächter-/Rätselort · **Schwer**. Das Rätsel ruft einen Spectral Knight mit 500 Health hervor. Nach dem ersten Relikt als freiwilligen Ausflug angehen; kein früher Gratispunkt.
- **Wächter / Gefahr:** Spectral Knight (500 Health); Tear erst nach Rätselauslösung und Sieg.
- **Zugang / Rückzug:** Eigenes Schildrätsel; danach muss der Wächter besiegt werden. Fester Außenort; bei zu starkem Wächter an den Kartenrand zurückziehen und später versuchen.
- **Zeitpunkt:** `ship`. Optional für tatsächlich erkämpfte Tears; keine frühe Gratis-Tear einplanen. Benötigte Feuereffekte, Begleiter oder Statusbedingungen vor Ort prüfen.
- **Primärbelege:** `world_data.lua:348; OverworldTriggers.csv:40,402; data/strings.lua:9; state_game.lua:14781–14789; data/ActorData - Sheet1.csv:178`.

### Hasera (`tear7`)

- **Lage:** Südlich Harrowdus. Dem selbst entdeckten Marker folgen; die Himmelsrichtung allein ist keine geprüfte Laufroute. Rechercheanker: (306,330)
- **Ortswissen:** Ruineneingang bei normaler Erkundung sehen und den Marker bestätigen; vor Ort das Schild lesen. Keine eigene Ortsmarkierung durch ein belegtes NPC-Gespräch. Abhakpunkt in Etappe(n): `prepare, ship, tower, repository, egg`.
- **Umfang / Schwierigkeit:** 1 fester Wächter-/Rätselort · **Schwer**. Das Rätsel ruft einen Spectral Knight mit 500 Health hervor. Nach dem ersten Relikt als freiwilligen Ausflug angehen; kein früher Gratispunkt.
- **Wächter / Gefahr:** Spectral Knight (500 Health); Tear erst nach Rätselauslösung und Sieg.
- **Zugang / Rückzug:** Eigenes Schildrätsel; danach muss der Wächter besiegt werden. Fester Außenort; bei zu starkem Wächter an den Kartenrand zurückziehen und später versuchen.
- **Zeitpunkt:** `ship`. Optional für tatsächlich erkämpfte Tears; keine frühe Gratis-Tear einplanen. Benötigte Feuereffekte, Begleiter oder Statusbedingungen vor Ort prüfen.
- **Primärbelege:** `world_data.lua:350; OverworldTriggers.csv:260,344; data/strings.lua:10; state_game.lua:14781–14789; data/ActorData - Sheet1.csv:178`.

### Duera (`tear8`)

- **Lage:** Auf einer Insel weit südöstlich Barrow-Linn; Schiff einplanen. Dem selbst entdeckten Marker folgen; die Himmelsrichtung allein ist keine geprüfte Laufroute. Rechercheanker: (198,372)
- **Ortswissen:** Ruineneingang bei normaler Erkundung sehen und den Marker bestätigen; vor Ort das Schild lesen. Keine eigene Ortsmarkierung durch ein belegtes NPC-Gespräch. Abhakpunkt in Etappe(n): `prepare, ship, tower, repository, egg`.
- **Umfang / Schwierigkeit:** 1 fester Wächter-/Rätselort · **Schwer**. Das Rätsel ruft einen Spectral Knight mit 500 Health hervor. Nach dem ersten Relikt als freiwilligen Ausflug angehen; kein früher Gratispunkt.
- **Wächter / Gefahr:** Spectral Knight (500 Health); Tear erst nach Rätselauslösung und Sieg.
- **Zugang / Rückzug:** Eigenes Schildrätsel; danach muss der Wächter besiegt werden. Fester Außenort; bei zu starkem Wächter an den Kartenrand zurückziehen und später versuchen.
- **Zeitpunkt:** `ship`. Optional für tatsächlich erkämpfte Tears; keine frühe Gratis-Tear einplanen. Benötigte Feuereffekte, Begleiter oder Statusbedingungen vor Ort prüfen.
- **Primärbelege:** `world_data.lua:352; OverworldTriggers.csv:22,73; data/strings.lua:11; state_game.lua:14781–14789; data/ActorData - Sheet1.csv:178`.

### Tulera (`tear9`)

- **Lage:** Weit östlich Harrowdus; Schiff für die östliche Insel einplanen. Dem selbst entdeckten Marker folgen; die Himmelsrichtung allein ist keine geprüfte Laufroute. Rechercheanker: (397,318)
- **Ortswissen:** Ruineneingang bei normaler Erkundung sehen und den Marker bestätigen; vor Ort das Schild lesen. Keine eigene Ortsmarkierung durch ein belegtes NPC-Gespräch. Abhakpunkt in Etappe(n): `prepare, ship, tower, repository, egg`.
- **Umfang / Schwierigkeit:** 1 fester Wächter-/Rätselort · **Schwer**. Das Rätsel ruft einen Spectral Knight mit 500 Health hervor. Nach dem ersten Relikt als freiwilligen Ausflug angehen; kein früher Gratispunkt.
- **Wächter / Gefahr:** Spectral Knight (500 Health); Tear erst nach Rätselauslösung und Sieg.
- **Zugang / Rückzug:** Eigenes Schildrätsel; danach muss der Wächter besiegt werden. Fester Außenort; bei zu starkem Wächter an den Kartenrand zurückziehen und später versuchen.
- **Zeitpunkt:** `ship`. Optional für tatsächlich erkämpfte Tears; keine frühe Gratis-Tear einplanen. Benötigte Feuereffekte, Begleiter oder Statusbedingungen vor Ort prüfen.
- **Primärbelege:** `world_data.lua:354; OverworldTriggers.csv:13,418; data/strings.lua:12; state_game.lua:14781–14789; data/ActorData - Sheet1.csv:178`.

### Mulera (`tear10`)

- **Lage:** Nördlich The Red Grove, auf der Inselregion westlich Hearthaven. Dem selbst entdeckten Marker folgen; die Himmelsrichtung allein ist keine geprüfte Laufroute. Rechercheanker: (181,149)
- **Ortswissen:** Ruineneingang bei normaler Erkundung sehen und den Marker bestätigen; vor Ort das Schild lesen. Keine eigene Ortsmarkierung durch ein belegtes NPC-Gespräch. Abhakpunkt in Etappe(n): `prepare, ship, tower, repository, egg`.
- **Umfang / Schwierigkeit:** 1 fester Wächter-/Rätselort · **Schwer**. Das Rätsel ruft einen Spectral Knight mit 500 Health hervor. Nach dem ersten Relikt als freiwilligen Ausflug angehen; kein früher Gratispunkt.
- **Wächter / Gefahr:** Spectral Knight (500 Health); Tear erst nach Rätselauslösung und Sieg.
- **Zugang / Rückzug:** Eigenes Schildrätsel; danach muss der Wächter besiegt werden. Fester Außenort; bei zu starkem Wächter an den Kartenrand zurückziehen und später versuchen.
- **Zeitpunkt:** `ship`. Optional für tatsächlich erkämpfte Tears; keine frühe Gratis-Tear einplanen. Benötigte Feuereffekte, Begleiter oder Statusbedingungen vor Ort prüfen.
- **Primärbelege:** `world_data.lua:356; OverworldTriggers.csv:68,141; data/strings.lua:13; state_game.lua:14781–14789; data/ActorData - Sheet1.csv:178`.

### The Tomb of the Ancestors / Ancestors' Ossuary (`ancestors`)

- **Lage:** In Barrow-Linn, beim als Ancestors' Ossuary beschilderten Eingang. Rechercheanker: Barrow-Linn Innenraum; Key-Container lokal (40,42).
- **Ortswissen:** In Harrowdus sprechende Gans: secrets → Bael's Key → Idiot → However. Die Notiz nennt hinter einer Wand in Barrow-Linn-Ossuary; anschließend in Barrow-Linn das Eingangsschild finden. Abhakpunkt in Etappe(n): `harrow, barrow`.
- **Umfang / Schwierigkeit:** 1 fester Innenraum · **Mittel**. Vor allem ein Stadtinnenraum mit falscher Wand und Schlüsselfund; keine vergleichbare Bossprüfung wie in einem Reliktdungeon.
- **Wächter / Gefahr:** Kein Boss in der Triggerdatei.
- **Zugang / Rückzug:** Keine besondere Zugangssperre. Fester Stadtinnenraum mit Rückweg nach Barrow-Linn.
- **Zeitpunkt:** `barrow`. Beim Barrow-Linn-Besuch Bael's Key hinter der falschen Wand holen und behalten.
- **Primärbelege:** `DialogueData - Sheet1.csv:275–281,347; data/strings.lua:43; ancestorsTriggers.csv:2–4; world_data.lua:137; Barrow-LinnTriggers.csv:2,5,13`.

### Beneath the Keep (`beneath-keep`)

- **Lage:** Unter dem Archon-Keep in Moon-upon-Thoss. Rechercheanker: Moon-upon-Thoss → archonDungeon-01
- **Ortswissen:** In Moon-upon-Thoss den verborgenen Eingang im Keep tatsächlich finden und bestätigen; keine eigene benannte NPC-Ortsmarkierung belegt. Abhakpunkt in Etappe(n): `prepare, repository, egg`.
- **Umfang / Schwierigkeit:** 1 feste Maschinenanlage · **Sehr schwer**. Mehrere Tanks und Nomans plus verschachtelte Türen. Für die normale Reliktroute unnötig; sehr spät und mit Fernangriff erkunden.
- **Wächter / Gefahr:** Mehrere Nomans und Tanks, kein eigens markierter Reliktboss.
- **Zugang / Rückzug:** Die Anlage hat eigene nummerierte Türen und Schlüsselgegner; keine frühe Pflichtaufgabe. canReturn=true; Rückweg zum Keep möglich.
- **Zeitpunkt:** `egg`. Später optional erkunden; Finale/Story nicht versehentlich mit der Throninteraktion auslösen.
- **Primärbelege:** `world_data.lua:32,144; archonDungeon-01Triggers.csv:8–45; Moon-upon-ThossTriggers.csv:16,63`.

### Four Lake Meet (`four-lakes`)

- **Lage:** Nördlich Wintersholl, in einer Ruine zwischen vier Seen an der Ostküste. Rechercheanker: (330,190)
- **Ortswissen:** Wintersholl-Bewohner: north → ruin → where (Marker), alternativ das Barrow-Linn-Buch mit beschädigter Vier-Seen-Karte lesen. Abhakpunkt in Etappe(n): `winter, barrow`.
- **Umfang / Schwierigkeit:** 1 fester Hinweis-/Rätselort · **Mittel**. Ein Hinweisort statt einer langen Dungeonexpedition; für die Steininschrift keinen vollständigen Kampfabschluss voraussetzen.
- **Wächter / Gefahr:** Kein eigener Kampfabschluss notwendig für den Jest-Worthinweis.
- **Zugang / Rückzug:** Keine besondere Zugangssperre. Fester Außenort; Rückzug an den Kartenrand möglich.
- **Zeitpunkt:** `jest`. Vor Jest den vor Ort gefundenen Phrasenhinweis lesen; Ortswissen ist getrennt von Hinweiserhalt.
- **Primärbelege:** `DialogueData - Sheet1.csv:494–497; data/strings.lua:110; OverworldTriggers.csv:362; world_data.lua:335`.

### The Egg · DX (`egg`)

- **Lage:** Weit südwestlich Barrow-Linn an bergiger Küstenbucht; vom Oststeg westwärts zum großen Ei. Rechercheanker: Ei (114,341), Steg (120,341)
- **Ortswissen:** Auf einer Schiffsreise den großen Eistein selbst sehen und seinen Fundort bestätigen. Es ist kein fester NPC- oder Buchhinweis belegt. Das Anrempeln öffnet den Eingang; damit warten, bis deine Reserven bereit sind. Abhakpunkt in Etappe(n): `ship, repository, egg`.
- **Umfang / Schwierigkeit:** 100 Etagen · **Sehr schwer**. 100 Etagen mit stark ansteigenden Gegnergruppen und knappen Reserven. Der Umfang macht dies zum späten Ausdauertest.
- **Wächter / Gefahr:** Eigener Guardian auf Etage 100; lange, steigende Gegner-/Minibossfolge.
- **Zugang / Rückzug:** DX-DLC und Schiff zur Bucht; keine mechanische Fünf-Relikt-Sperre. Kein Oberflächenausgang auf Etage 1. Guardian auf Etage 100 besiegen und finalen Ausgang benutzen.
- **Zeitpunkt:** `egg`. Nach fünf Relikten und fertigem Build, vor beiden Schlussrouten. Späte Einordnung ist Empfehlung des Guides und offiziellen DLC-Texts.
- **Primärbelege:** `OverworldTriggers.csv:205,384; actor.lua:4213–4234; world_data.lua:205–314; dungeon7-100Triggers.csv:9; research-egg.md; https://store.steampowered.com/app/3498040/Moonring_DX/`.

### The Lament / The Tether (`lament`)

- **Lage:** Auf Finaleinsel nördlich Nostacarr. Rechercheanker: (404,364), Nostacarr (404,371)
- **Ortswissen:** Nach der Roche-/Serpents-Spur Roches Erklärung zum südlichen Henge-Stein bei Harrowdus lesen; Bael's Key am Südstein Issacarr verwenden, Nostacarr erreichen und dort den Lament-Eingang selbst sehen. Abhakpunkt in Etappe(n): `egg`.
- **Umfang / Schwierigkeit:** 5 feste Arenen + Tether auf Etage 6 · **Sehr schwer**. Fünf feste Arenen vor dem Endboss, geschlossener Eingang und besondere Zugangswissen-/Namensanforderungen. Erst ganz am Ende.
- **Wächter / Gefahr:** Arena-Kampfserien, dann The Tether.
- **Zugang / Rückzug:** Bael's Key/Hengeweg und für den Tether alle fünf wahren Gottesnamen. Nach fünf Relikten empfohlen, kein belegtes zusätzliches Reliktgate am Eingang. Eingang verriegelt; Arena-Gauntlet und Tether abschließen. Vor Beginn sämtliche Reserven kaufen.
- **Zeitpunkt:** `finale`. Alternative Schlussroute erst nach Egg/optionalen Zielen. Namen am passenden Altar rufen, danach Tether bekämpfen; göttliche Gaben fallen beim Verlassen nach dem Sieg weg.
- **Primärbelege:** `DialogueData - Sheet1.csv:464–484,534; henges.lua:35–40; actions.lua:2266–2287; OverworldTriggers.csv:274,297; world_data.lua:198–203; globals.lua:409; research-route.md`.

### The Poison Cross (`ruin1`)

- **Lage:** Südöstlich Red Grove. Rechercheanker: (217,204)
- **Ortswissen:** Beim Ironmonger in Harrowdus Treasure Map #1 kaufen und wirklich lesen; danach den konkreten Ruinenmarker prüfen. Abhakpunkt in Etappe(n): `harrow, repository`.
- **Umfang / Schwierigkeit:** 1 feste Außenruine · **Schwer**. Giftfallen in einer festen Außenruine. Mit Statusmitteln angehen und den Fragmentfund priorisieren.
- **Wächter / Gefahr:** Giftfallen; feste Ruine.
- **Zugang / Rückzug:** Ruinenmarker und sicherer Reiseweg. Feste Außenruine; freier Rückzug an den Kartenrand, keine Master-Key-Sperre.
- **Zeitpunkt:** `repository`. Locus Fragment aus Container holen; alle fünf Fragmente für Repository behalten.
- **Primärbelege:** `data/ObjectData - Sheet1.csv:389; state_game.lua:22519–22524; world_data.lua:66–70; ruin1Triggers.csv; research-route.md`.

### The Venom Cube (`ruin2`)

- **Lage:** Nordwestlich Wintersholl, nordöstlich Yarrow. Rechercheanker: (306,219)
- **Ortswissen:** Beim Ironmonger in Harrowdus Treasure Map #2 kaufen und wirklich lesen; danach den konkreten Ruinenmarker prüfen. Abhakpunkt in Etappe(n): `harrow, repository`.
- **Umfang / Schwierigkeit:** 1 feste Außenruine · **Schwer**. Giftfallen und ein mechanischer Noman. Mit unabhängiger Heilung und brauchbarem Fernangriff vorbereitet.
- **Wächter / Gefahr:** Giftfallen und Noman.
- **Zugang / Rückzug:** Ruinenmarker und sicherer Reiseweg. Feste Außenruine; freier Rückzug an den Kartenrand, keine Master-Key-Sperre.
- **Zeitpunkt:** `repository`. Locus Fragment aus Container holen; alle fünf Fragmente für Repository behalten.
- **Primärbelege:** `data/ObjectData - Sheet1.csv:390; state_game.lua:22519–22524; world_data.lua:66–70; ruin2Triggers.csv; research-route.md`.

### The Enflamed Glade (`ruin4`)

- **Lage:** Südwestlich Wintersholl, nördlich Harrowdus. Rechercheanker: (313,268)
- **Ortswissen:** Beim Ironmonger in Harrowdus Treasure Map #4 kaufen und wirklich lesen; danach den konkreten Ruinenmarker prüfen. Abhakpunkt in Etappe(n): `harrow, repository`.
- **Umfang / Schwierigkeit:** 1 feste Außenruine · **Schwer**. Feuerfallen und Great Gazer. Water und sichere Schusslinien vorbereiten; optional nach dem Fragmentfund zurückziehen.
- **Wächter / Gefahr:** Feuerfallen und Great Gazer.
- **Zugang / Rückzug:** Ruinenmarker und sicherer Reiseweg. Feste Außenruine; freier Rückzug an den Kartenrand, keine Master-Key-Sperre.
- **Zeitpunkt:** `repository`. Locus Fragment aus Container holen; alle fünf Fragmente für Repository behalten.
- **Primärbelege:** `data/ObjectData - Sheet1.csv:392; state_game.lua:22519–22524; world_data.lua:66–70; ruin4Triggers.csv; research-route.md`.

### The Magma Chamber (`ruin5`)

- **Lage:** An der äußersten Südküste, per Schiff. Rechercheanker: (267,412)
- **Ortswissen:** Beim Ironmonger in Harrowdus Treasure Map #5 kaufen und wirklich lesen; danach den konkreten Ruinenmarker prüfen. Abhakpunkt in Etappe(n): `harrow, repository`.
- **Umfang / Schwierigkeit:** 1 feste Außenruine · **Sehr schwer**. Amberfallen, mehrere Turrets und Anreise per Schiff. Späte Fragmentprüfung mit Fernangriff und Statusreserve.
- **Wächter / Gefahr:** Amberfallen und mehrere Acht-Wege-Turrets.
- **Zugang / Rückzug:** Magma Chamber benötigt ein Schiff. Feste Außenruine; freier Rückzug an den Kartenrand, keine Master-Key-Sperre.
- **Zeitpunkt:** `repository`. Locus Fragment aus Container holen; alle fünf Fragmente für Repository behalten.
- **Primärbelege:** `data/ObjectData - Sheet1.csv:393; state_game.lua:22519–22524; world_data.lua:66–70; ruin5Triggers.csv; research-route.md`.

### Endera-Viersteingruppe · Map #6 (`herbs1`)

- **Lage:** Nordwestlich Harrowdus. Rechercheanker: (298,295)
- **Ortswissen:** Beim Ironmonger im Südwesten Harrowdus Treasure Map #6 kaufen und Read verwenden. Erst die gelesene Karte markiert die Vier-Stein-Gruppe; die Handmaiden nennt nur das allgemeine Motiv. Abhakpunkt in Etappe(n): `harrow, necropolis`.
- **Umfang / Schwierigkeit:** 1 feste Kräutergruppe · **Schwer**. Kleine Kräuterquelle mit Geistern oder Umgebungsgefahren. Kräuter sammeln und gefährliche Kämpfe vermeiden; kein notwendiger Bossabschluss.
- **Wächter / Gefahr:** Kein besonderer Endboss im Herb-Trigger. Geister/Umgebungsgefahren nicht erzwingen.
- **Zugang / Rückzug:** Gelesene Karte oder selbst bestätigte tatsächliche Entdeckung; Gruppe betreten, in Lokalansicht wechseln. Feste Außenansicht; Rückzug an den Kartenrand möglich.
- **Zeitpunkt:** `necropolis`. Nur solange insgesamt noch Endera Herbs fehlen. Bei fünf Kräutern zur Handmaiden zurück, brew.
- **Primärbelege:** `data/ObjectData - Sheet1.csv:394; state_game.lua:22527–22533; OverworldTriggers.csv:35,101; world_data.lua:138; witches_herb_1Triggers.csv:3–5; research-route.md`.

### Endera-Viersteingruppe · Map #7 (`herbs2`)

- **Lage:** Nordwestlich Wintersholl, nordwestlich Sleathens Wald. Rechercheanker: (288,199)
- **Ortswissen:** Beim Ironmonger im Südwesten Harrowdus Treasure Map #7 kaufen und Read verwenden. Erst die gelesene Karte markiert die Vier-Stein-Gruppe; die Handmaiden nennt nur das allgemeine Motiv. Abhakpunkt in Etappe(n): `harrow, necropolis`.
- **Umfang / Schwierigkeit:** 1 feste Kräutergruppe · **Schwer**. Kleine Kräuterquelle mit Geistern oder Umgebungsgefahren. Kräuter sammeln und gefährliche Kämpfe vermeiden; kein notwendiger Bossabschluss.
- **Wächter / Gefahr:** Kein besonderer Endboss im Herb-Trigger. Geister/Umgebungsgefahren nicht erzwingen.
- **Zugang / Rückzug:** Gelesene Karte oder selbst bestätigte tatsächliche Entdeckung; Gruppe betreten, in Lokalansicht wechseln. Feste Außenansicht; Rückzug an den Kartenrand möglich.
- **Zeitpunkt:** `necropolis`. Nur solange insgesamt noch Endera Herbs fehlen. Bei fünf Kräutern zur Handmaiden zurück, brew.
- **Primärbelege:** `data/ObjectData - Sheet1.csv:395; state_game.lua:22527–22533; OverworldTriggers.csv:329,359; world_data.lua:139; witches_herb_2Triggers.csv:3–5; research-route.md`.

### Endera-Viersteingruppe · Map #8 (`herbs3`)

- **Lage:** Direkt westlich Enflamed Glade, südwestlich Wintersholl. Rechercheanker: (303,267)
- **Ortswissen:** Beim Ironmonger im Südwesten Harrowdus Treasure Map #8 kaufen und Read verwenden. Erst die gelesene Karte markiert die Vier-Stein-Gruppe; die Handmaiden nennt nur das allgemeine Motiv. Abhakpunkt in Etappe(n): `harrow, necropolis`.
- **Umfang / Schwierigkeit:** 1 feste Kräutergruppe · **Schwer**. Kleine Kräuterquelle mit Geistern oder Umgebungsgefahren. Kräuter sammeln und gefährliche Kämpfe vermeiden; kein notwendiger Bossabschluss.
- **Wächter / Gefahr:** Kein besonderer Endboss im Herb-Trigger. Geister/Umgebungsgefahren nicht erzwingen.
- **Zugang / Rückzug:** Gelesene Karte oder selbst bestätigte tatsächliche Entdeckung; Gruppe betreten, in Lokalansicht wechseln. Feste Außenansicht; Rückzug an den Kartenrand möglich.
- **Zeitpunkt:** `necropolis`. Nur solange insgesamt noch Endera Herbs fehlen. Bei fünf Kräutern zur Handmaiden zurück, brew.
- **Primärbelege:** `data/ObjectData - Sheet1.csv:396; state_game.lua:22527–22533; OverworldTriggers.csv:199,230; world_data.lua:140; witches_herb_3Triggers.csv:3–5; research-route.md`.

### Endera-Viersteingruppe · Map #9 (`herbs4`)

- **Lage:** Westlich und etwas südlich Barrow-Linn auf derselben Insel. Rechercheanker: (171,293)
- **Ortswissen:** Beim Ironmonger im Südwesten Harrowdus Treasure Map #9 kaufen und Read verwenden. Erst die gelesene Karte markiert die Vier-Stein-Gruppe; die Handmaiden nennt nur das allgemeine Motiv. Abhakpunkt in Etappe(n): `harrow, necropolis`.
- **Umfang / Schwierigkeit:** 1 feste Kräutergruppe · **Schwer**. Kleine Kräuterquelle mit Geistern oder Umgebungsgefahren. Kräuter sammeln und gefährliche Kämpfe vermeiden; kein notwendiger Bossabschluss.
- **Wächter / Gefahr:** Kein besonderer Endboss im Herb-Trigger. Geister/Umgebungsgefahren nicht erzwingen.
- **Zugang / Rückzug:** Gelesene Karte oder selbst bestätigte tatsächliche Entdeckung; Gruppe betreten, in Lokalansicht wechseln. Feste Außenansicht; Rückzug an den Kartenrand möglich.
- **Zeitpunkt:** `necropolis`. Nur solange insgesamt noch Endera Herbs fehlen. Bei fünf Kräutern zur Handmaiden zurück, brew.
- **Primärbelege:** `data/ObjectData - Sheet1.csv:397; state_game.lua:22527–22533; OverworldTriggers.csv:110,121; world_data.lua:141; witches_herb_4Triggers.csv:3–5; research-route.md`.

## Unbenannte Ruinen und normale Erkundung

Nicht jedes Ruinensymbol ist ein weiterer benannter Dungeon. Weltansichten erzeugen unter bestimmten Bedingungen kleinere Ruinen (`state_game.lua:14760–14764,14790–14812`; Grundkonfiguration `dungeon_data.lua:55–79`). Ihr Inhalt/Gefahr ist nicht vorab als feste Ortsliste oder garantierte Beute bekannt. In normaler Lokalansicht sind Rückzug und Auslassen sinnvoll; nicht mit einem `canReturn=false`-Dungeon gleichsetzen. Eine zusätzliche benannte zufällige Höhlenliste wurde in der aktiven `world_data`-Ortskonfiguration nicht gefunden; generierte Varianten sind Layouts der hier genannten Dungeonfamilien, kein Beleg für unbekannte benannte Cave-Ziele.

## Zusätzliche Kampforte des alternativen Endes

Die vier Forlorn Spirits sind keine neuen mehrstöckigen Dungeons. Sie gehören zum Roche-/Bell-/Gottesnamenspfad: Yarrow am Wasser nordwestlich Farm; Meer `(224,397)`; Sumpf südlich Harrowdus `(312,333)`; nördlicher Kraterrand `(302,80)`. Bell als tatsächliche Wegweisung erst nach Roche erhalten, Spirit vor Ort damit hervorrufen und besiegen. Keine frühe unabhängige Cave-Etappe daraus machen (`DialogueData - Sheet1.csv:464–484`; `YarrowTriggers.csv:2`; `OverworldTriggers.csv:330,354,409`; `state_game.lua:22323–22453`; Details `research-route.md`). Yeleba ist ein See-Sonderkampf für Great Key: das Gossip nennt südöstliches Meer und Inselring, Advanced Cannon ist mechanisch erforderlich (`data/strings.lua:276`; `ActorData - Sheet1.csv:188`; `data/treasure_sets.lua:865–869`).

## Hearthaven-Krypta / Buchstabe P

P steht **auf der Hearthaven-Stadtkarte**, nicht in einem separaten Weltkarten-Dungeon: `HearthavenTriggers.csv:23` nennt das Zeichen `(55,43)`; `data/strings.lua:53` enthält den Text. Die Stadt-PNG beweist den Raumumriss; aus dem Signtrigger alleine folgt kein bestätigter Laufweg oder eine sicher beschreibbare Kryptatür. Die frühere Angabe „kleine Krypta nördlich“ darf ohne Kartenprüfung nicht in eine neue präzise Türroute überführt werden. Ortsanker P ist sicher; Eingangspfad bleibt hier ungeprüft.

## Etappenzuordnung der Umsetzung

Die dauerhafte Implementierung liegt in `src/dungeons.ts`; `src/dungeon-model.ts` prüft Ortswissen und Zugang. Alte Abschluss-IDs wurden für bereits vorhandene Aufgaben übernommen. Kein Abschlusshäkchen, Stadtbesuch oder Gabe bestätigt einen Fundort automatisch. Alle neuen Hint-IDs sind unabhängig; Sicherung, Laden, Buildwechsel und Zurücksetzen verwenden denselben Fortschrittsspeicher.

| Dungeon-ID | Ortswissen abholen | Besuch empfohlen | Kategorie |
|---|---|---|---|
| `yarrow-cave` | `yarrow` | `{'wolf': 'winter', 'lady': 'red'}` | `route` |
| `lost-tunnels` | `capital, prepare` | `prepare` | `optional` |
| `fallen-tunnel` | `capital` | `prepare` | `optional` |
| `crumbling-temple` | `harrow` | `ship` | `optional` |
| `hole` | `winter` | `tower` | `optional` |
| `sunken-edifice` | `barrow` | `necropolis` | `optional` |
| `albens-bane` | `hearth` | `ship` | `optional` |
| `hollows` | `red, prepare` | `necropolis` | `optional` |
| `warrens` | `ship, repository, egg` | `egg` | `optional` |
| `hold` | `winter` | `hold` | `route` |
| `sleathen` | `winter` | `garden` | `route` |
| `garden` | `winter` | `garden` | `route` |
| `click-clack` | `harrow` | `ship` | `route` |
| `sea-cave` | `capital` | `ship` | `route` |
| `thief` | `prepare` | `tower` | `route` |
| `tower` | `hearth` | `tower` | `route` |
| `jest` | `harrow` | `jest` | `route` |
| `meida` | `harrow, necropolis` | `necropolis` | `optional` |
| `necropolis` | `red` | `necropolis` | `route` |
| `bael` | `harrow, repository` | `repository` | `route` |
| `repository` | `repository` | `repository` | `route` |
| `temple-shield` | `prepare, ship, tower, repository, egg` | `egg` | `challenge` |
| `temple-dagger` | `prepare, ship, tower, repository, egg` | `egg` | `challenge` |
| `temple-rapier` | `prepare, ship, tower, repository, egg` | `egg` | `challenge` |
| `temple-bow` | `prepare, ship, tower, repository, egg` | `egg` | `challenge` |
| `temple-reaper` | `prepare, ship, tower, repository, egg` | `egg` | `challenge` |
| `temple-mace` | `prepare, ship, tower, repository, egg` | `egg` | `challenge` |
| `temple-sword` | `prepare, ship, tower, repository, egg` | `egg` | `challenge` |
| `temple-cloak` | `prepare, ship, tower, repository, egg` | `egg` | `challenge` |
| `heart1` | `prepare, ship, tower, repository` | `prepare` | `challenge` |
| `heart2` | `prepare, ship, tower, repository` | `prepare` | `challenge` |
| `heart4` | `prepare, ship, tower, repository` | `prepare` | `challenge` |
| `heart5` | `prepare, ship, tower, repository` | `prepare` | `challenge` |
| `tear1` | `prepare, ship, tower, repository, egg` | `ship` | `challenge` |
| `tear2` | `prepare, ship, tower, repository, egg` | `ship` | `challenge` |
| `tear3` | `prepare, ship, tower, repository, egg` | `ship` | `challenge` |
| `tear4` | `prepare, ship, tower, repository, egg` | `ship` | `challenge` |
| `tear5` | `prepare, ship, tower, repository, egg` | `ship` | `challenge` |
| `tear6` | `prepare, ship, tower, repository, egg` | `ship` | `challenge` |
| `tear7` | `prepare, ship, tower, repository, egg` | `ship` | `challenge` |
| `tear8` | `prepare, ship, tower, repository, egg` | `ship` | `challenge` |
| `tear9` | `prepare, ship, tower, repository, egg` | `ship` | `challenge` |
| `tear10` | `prepare, ship, tower, repository, egg` | `ship` | `challenge` |
| `ancestors` | `harrow, barrow` | `barrow` | `optional` |
| `beneath-keep` | `prepare, repository, egg` | `egg` | `optional` |
| `four-lakes` | `winter, barrow` | `jest` | `challenge` |
| `egg` | `ship, repository, egg` | `egg` | `route` |
| `lament` | `egg` | `finale` | `finale` |
| `ruin1` | `harrow, repository` | `repository` | `route` |
| `ruin2` | `harrow, repository` | `repository` | `route` |
| `ruin4` | `harrow, repository` | `repository` | `route` |
| `ruin5` | `harrow, repository` | `repository` | `route` |
| `herbs1` | `harrow, necropolis` | `necropolis` | `challenge` |
| `herbs2` | `harrow, necropolis` | `necropolis` | `challenge` |
| `herbs3` | `harrow, necropolis` | `necropolis` | `challenge` |
| `herbs4` | `harrow, necropolis` | `necropolis` | `challenge` |

### Zusätzliche Gesprächsschritte

- **Tower-Schlüsselspur: red cloak in Wintersholl verfolgt** (`winter, prepare`): Nach dem Hearthaven-Priester in Wintersholl einen Bewohner nach red cloak fragen. Die Antwort über den Besucher und seine Rückkehr nach Harrowdus lesen. Beim Wolf-Build auf der Rückreise in Etappe 8 nachholen. Beleg: `DialogueData - Sheet1.csv:177,210–212`.
- **Tower-Schlüsselspur: triangular key in Harrowdus erfahren** (`harrow, prepare`): Den Bewohner ansprechen, der von einem furtive visitor spricht: furtive → Although → triangular key. Seine Barrow-Linn-Spur lesen. Beleg: `DialogueData - Sheet1.csv:263–265`.
- **Tower-Schlüsselspur: Flimpys Hinweis erhalten** (`barrow, prepare`): In Barrow-Linn triangular key → Funny fragen. Flimpy aufsuchen und fence → guess sagen. Erst abhaken, wenn seine Spur nach The Red Grove bekannt ist. Beleg: `DialogueData - Sheet1.csv:334–340`.
- **Tower-Schlüsselspur: Kenners Flucht erfahren** (`prepare`): In The Red Grove stranger → Kenner → fled → Moon-upon-Thoss fragen. Den Hinweis auf die Hauptstadt lesen, bevor du dort nach Kenner fragst. Beleg: `DialogueData - Sheet1.csv:389–394`.
- **Repository-Spur und Locus-Box-Aufgabe erfahren** (`barrow, repository`): Beim Barrow-Linn-Priester Relic → Repository → unlikely → Locus Box → functioning → parts fragen. Die Antwort nennt eine ferne Insel, einen verlorenen Steinkreis und Fragmente in Ruinen; sie markiert den Dungeon noch nicht. Beleg: `DialogueData - Sheet1.csv:316–323`.

Hinweisketten bleiben auch nach dem Abwählen eines früheren Schritts gesperrt; nachgelagerte gespeicherte Häkchen werden dabei nicht gelöscht. Eine unabhängig bestätigte eigene Eingangssichtung kann die Gesprächskette ersetzen, aber keine benötigten Schlüssel oder Zugangsphrase.

Keine Ausführung von Spiel, Cheats, Konsolenbefehlen oder Saveänderungen. Die Spieldateien wurden nur gelesen.
