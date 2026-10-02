# Moonring DX / The Egg – Primärquellenprüfung

Stand: 2026-10-02. Geprüft wurde der ausgelieferte PC-Build 0.0.958 / Steam build 24843312. Die lesbare ZIP-Anwendung `~/.local/share/Steam/steamapps/common/Moonring/Moonring.exe` wurde ausschließlich gelesen; Zeilenangaben beziehen sich auf ihre bereits extrahierten Dateien unter `/tmp/moonring-route/game/`. Es wurden weder Spiel noch Saves geändert. Dies ist der einzige neue Repository-Text dieser Recherche.

## Primärquellen

- [Offizielle Moonring-DX-Seite](https://store.steampowered.com/app/3498040/Moonring_DX/?l=english): Erweiterung um The Egg, 100 Etagen, für fortgeschrittene Spieler nach viel Erkundung und vor dem Spielabschluss.
- [Offizielle Steam-Ankündigungen vom 4. März 2025](https://store.steampowered.com/news/posts/?enddate=1741130309&feed=steam_community_announcements): Fluttermind bestätigt DLC, 100 Etagen, Boss und Preis. Diese Sammelseite corroboriert nur den Umfang, nicht detaillierte Regeln.
- Die unten genannten ausgelieferten Lua- und CSV-Dateien sind die maßgeblichen Primärquellen für den installierten Build. Ein universeller, raumgenauer Walkthrough ist daraus nicht ableitbar: 1–99 werden generiert, 100 ist eine feste Bosskarte.

## Zugang und Zeitpunkt

**Fakt:** Steam-DLC-ID ist `3498040`. `main.lua:733–765` prüft bei vorhandenem Steam-API-Zugang `apps.isDlcInstalled`; erfolgreiche Erkennung legt den internen DLC-Marker an. Ohne Steam-API kann der vorhandene Marker die Offline-Erkennung ermöglichen. `main.lua:859–860` setzt daraus `G_Dlc1_Installed` und `G_isDXVersion`. Kein manuelles Editieren, Freischaltcode oder neuer Spielstand ist für die gezeigte Zugangsroutine erforderlich. Beim gekauften DLC normal über Steam starten; bei „Dee Ell See“ statt Öffnung die Steam-Installation/DLC-Erkennung prüfen.

**Fakt:** Eingang ist Overworld **(114,341)**: `data/save/OverworldTriggers.csv:205` (`playerStart,dungeon7-01`) und `:384` (`dungeon7-01`). Barrow-Linn liegt (189,287), Hauptstadt (248,244): entsprechend liegt das Ei **südwestlich von Barrow-Linn, weit westlich und südlich der Hauptstadt**. Die Stadtkoordinaten stehen in derselben CSV `:325/:417` und `:25/:341`. **Kartenprüfung des Elternagenten:** `data/save/Overworld.png` enthält `bigEgg` bei(114,341), einen nach Osten zum Meer zeigenden `jettyEast` bei **(120,341)**;(119,341)/(118,341) sind Gras, weiter westlich Wald/Büsche zum Ei. Die Seeverbindung östlich des Stegs(121,341) ist mit den Barrow-Insel-Stegen(176,285)/(191,292) verbunden. **Kurs:** Von Barrow-Linn mit dem bereits erworbenen Schiff südwestwärts zur weit westlichen bergigen Küste/Bucht; von der Meeresseite an den Oststeg(120,341) anlegen, an Land westwärts durch das Gehölz sechs Weltkacheln bis zum großen Ei(114,341). Kein bestätigter Inselname. Dekodierung: RG-Kanäle→Zellindex wie `map.lua:2330–2365`, `library/tools.lua:2246–2252`, `globals.lua:674`; Zelltypen `cell_data.lua:701–704,712–713`. Die Koordinaten sind zusätzliche Recherche-/Navigationsanker, Stadt und Bucht sind die Hauptorientierung.

**Fakt:** Das Ei zuerst **anrempeln**. `actor.lua:4213–4234`: Bei DX wird die undurchlässige große Eikachel zu `bigEggOpen` und der Dungeon wird als entdeckt gemeldet. Ohne DX bewegt sich der Stein nur und der Text nennt „Dee Ell See“. Danach auf den geöffneten Eingang gehen und **Enter**; `state_game.lua:11463–11495` zeigt die Einwegwarnung und ruft bei Bestätigung den Abstieg auf. Die Eingangstrigger enthalten kein `lock`-Gate. Es gibt in dieser Routine **keine Reliquien-, Archon-, Tether-, Schlüssel- oder Levelbedingung**. Die späte Einordnung ist Vorbereitungsempfehlung, kein erzwungenes Story-Gate.

**Redaktionelle Empfehlung:** Nach allen fünf Relikten und Abschluss der normalen Gaben-/Ausrüstungsroute, **vor beiden Thronenden und vor The Lament/Tether**, einen vollständigen Egg-Abschluss einfügen. Damit funktionieren die geplanten neutralen Builds noch. Die offizielle Shopseite empfiehlt vor Abschluss; `state_game.lua:20449–20460` löscht nach Tether Devotion/Gefolgschaft und entkauft alle Skills. `:13538–13563` setzt beim Verlassen nach Tether den Weltzustand um. Kein Nach-Ende-Egg-Kurs auf Feast/Howl/Moonlight aufbauen.

## Vorbereitung der vorhandenen Builds (Empfehlung, kein verstecktes Eintrittsgate)

Die bestehenden Kaufreihenfolgen in `src/data.ts:13–52`, Buildziele `:55–59` und Lasttabellen `:149–163` bleiben vollständig erhalten. Keine Egg-Pflichtgaben hinzufügen, keine neuen Attributziele, keine Legendary-Pflicht und keine erzwungene Neuzuteilung. Fehlende späte Gaben vor dem langen Lauf aus den bereits vorgesehenen Aufgaben/Tears fertig finanzieren, nicht bereits eingeplante frühe Gaben überspringen.

| Vorbereitung | Wolf & Schild | Lady & Bogen |
|---|---|---|
| Fertiger bestehender Plan | Slam → Hurl → Lifesight → Feast → Blind Leap → Revelation → Hallow → Retribution → Howl → Shockwave; STR25/END15/PER5/INT5 | Gash → Feast → Lifesight → Drill Shot → Blind Leap → Revelation → Moonlight → Retribution → Star Shot; PER25/END15/INT5 |
| Normale Grundausrüstung | Sword + Heater Shield, leichte Lederteile; Distanzreserve Hurl, optional vorhandener Shortbow | Longbow + Mace + Round Shield, leichte Lederteile; ausreichend normale Pfeile |
| Bestehende Lastbasis | END15-Set70/72,14 einschließlich Shortbow, Lightning-bolt Amulet, Cloak | END15-Set68/72,14 einschließlich Lightning-bolt; Cloak optional macht72 |
| Kampfstandard | Einzelgegner/Engpass, normale Sword-Treffer und Hurl situativ; Slam für Stellung, Hallow an Knochen/Leiche | Freie Rückzugsfelder, normale Schüsse; Drill Shot für Linie/Hindernis; Mace bei unvermeidbarem Nahkontakt |
| Teure Hilfen | Howl nur bei echter Schwierigkeit, danach Energie prüfen; Shockwave trifft möglicherweise Freunde | Moonlight nur bei echter Schwierigkeit, danach Energie prüfen; Star Shot benötigt8 passende Munition |
| Absicherung | Feast nur an geeignetem Ziel; HP-/Statusmittel als unabhängige Reserve; Blind Leap mit Eigenblindheit planen | Gleiches; Gash/Feast sind Nahbereich, kein Heil-Fernschuss |

Diese konkreten Builddaten sind der bestehende lokale Guideplan, nicht ein Nachweis, dass jeder Spieler damit100 Etagen garantiert schafft. Die Gabenfunktionen sind dort mit `actions.lua` belegt; lange Dungeonbelastung rechtfertigt die vorsichtige späte Einordnung.

**Fakten zu Reserven:** Staria Root (`ObjectData - Sheet1.csv:250`) liefert30 Energie, wird in allen sechs Städten verkauft; Staria Draft (`:251`)60 und Shopangebot in Red Grove; Arnaut’s Panacea (`:252`) heilt Status und ist ebenfalls Red-Grove-Angebot. Heilung, Lebensmittel, Munition und Mittel gegen Rot, Gift, Blindheit, Torpor/Stun, Negation/Madness und Feuer/Water vorher auffüllen. Diese Liste folgt den Egg-Fallentabellen (`state_game_dungeon_chunks.lua:285–295`) und Maiden-Wahrscheinlichkeiten (`:200–212`). **Keine erfundene Mindestanzahl**; Vorrat an der eigenen bisherigen Verbrauchsrate messen. Scharf/pristine und verwendbar ausgerüstet beginnen; nicht auf zufällige Reparatur-/Schlafgelegenheiten setzen.

**Amulettentscheidung:** Lightning-bolt aus Garden ermöglicht bei100 Basisenergie die neutralen120-Kosten-Beschwörungen (bestehender Guide und `treasure_sets.lua:773–779`). Wintertree bietet bekannte Feuerabwehr, ersetzt aber den Energiehalsplatz. Beim Wechsel maximale Energie erneut prüfen; nicht automatisch Howl/Moonlight mit Wintertree planen. Für den Boss ist Feuerreserve sinnvoll, aber mehr Widerstand ohne Beschwörung ist eine bewusste Wahl.

## Verbindliche Laufregeln

1. **1–99 sind prozedural.** `world_data.lua:205–312` markiert sie `dungeonType=100Level`; `state_game.lua:1797–1817` erzeugt je Tiefe Layout mit Seed aus Tiefe, Charaktername und Runzahl. Ein Tod/neuer Run ändert den Seed. Das aktuelle Layout wird als PNG/Trigger/Creatures gespeichert. Kein universeller Nord/Ost-Raumkurs, keine festen Einzelschlüsselpositionen.
2. **Die Türen schließen auf Etage1.** `world_data.lua:205` setzt `canReturn=false`; `state_game.lua:1741–1747` warnt bei dungeon7, dass es keinen Rückweg gibt. Die Egg-Eintrittswarnung (`globals.lua:406`) sagt ausdrücklich100 floors, Guardian besiegen zum Verlassen, Tod rekonfiguriert. `createEndlessDungeonData` setzt `needsExitKey=false` (`state_game_dungeon_chunks.lua:31`), erzeugt also keinen normalen Master-Key-Ausweg. Die allgemeine Treppenroutine kann trotzdem irreführend einen Master Key verlangen (`state_game.lua:11658–11677`); nicht als tatsächliche Egg-Aufgabe übernehmen.
3. **2–99 lassen Rückweg innerhalb des Eggs zu.** `world_data.lua:206–312` setzt `canReturn=true`. Über Aufwärtstreppe/Enter wird zur vorigen Etage gewechselt (`state_game.lua:11653–11696`, Treppenanlage `state_game_dungeon_chunks.lua:2922–2937`). Das bedeutet nicht zurück in eine Stadt. Etage100 setzt erneut `canReturn=false` (`world_data.lua:314`); die Bestätigungswarnung99→100 erklärt den letzten Punkt ohne Rückkehr (`globals.lua:414`, `state_game.lua:11720–11725`).
4. **Interne Schlüssel können erforderlich sein.** Garten-Treppenstücke können ein gesperrtes Zimmer erzeugen (`state_game_dungeon_chunks.lua:76`). Türen bekommen eigene Dungeon-Schlüssel, zuerst auf dem Haupt-Miniboss, weitere auf Minibossen oder normalen erreichbaren Truhen (`:2485–2537`). Haupttruhe kann gesperrt sein und hat separat platzierten Chest Key (`:1560–1568`, `:1905–1907`). Es gibt auch Druckplatten (`:1634–1640`). Bei blockiertem Abstieg die laufende Etage nach passendem Schlüssel/Mechanismus durchsuchen, nicht einen mitgebrachten storyweiten Master Key fordern. Normale Route nicht mit Every-floor-full-clear verwechseln: nur Durchgang, nötige Schlüssel und sinnvoll erreichbare Reserven müssen erledigt sein.
5. **Keine bestätigten Zwischen-Checkpoint-/Portal-Etagen.** Checkpoint entsteht vor Eintritt von Nichtdungeon in Dungeon (`state_game.lua:1551–1562`, `:1687–1697`). Zwischen Egg-Etagen greift diese Bedingung nicht. Die Generatorroutine platziert Auf-/Abstieg, keine Zehner-Warpportale. Der belegte Außenwarp liegt auf100 (`dungeon7-100Triggers.csv:13`, Weltkoordinate48,45).
6. **Pause und Fortsetzen sind möglich.** Top Menu/Map stoppt nach Stillstand die Verarbeitung (`state_game.lua:2861`, Menütest `:12613–12626`). Für längere Pause **Escape → Options → Save and Quit** (`:10206`, `:10311–10312`), Bestätigung speichert und geht zum Title Screen (`:10410`, `:12270–12278`). Der temporäre Dungeonstand wird beim Laden bevorzugt (`:16940–16943`). Das ist ein gespeicherter unterbrochener Lauf, kein Todescheckpoint und kein Shopausflug. Nicht Hard-Kill/Crash als sichere Speicherung darstellen.
7. **Tod im Normalmodus beendet den Lauf.** `state_game.lua:9231–9249` löscht TEMP, setzt Dungeonfamilie zurück und lädt den festen Save/Checkpoint; `:9151–9201` setzt Startort auf Vor-Eintritt-Checkpoint und bereinigt Status. `:9713–9728` erhöht Runzahl und löscht Dungeonzustände. Deshalb gehen im Lauf gewonnene Beute/Fortschritte zurück auf den Zustand vor Eintritt. Nicht auf der höchsten Etage neu starten; Guide-Etagenhäkchen beim neuen Versuch bewusst zurücksetzen. Permadeath ist ausdrücklich anders (`:9234–9238` löscht Saves); hier normale Anfängerroute beschreiben.
8. **Normales Warten stellt keine Spielerenergie und keine HP wieder her.** Alle automatischen HP-Regenflags sind ausgeschaltet (`main.lua:99–106`); `actor_manager.lua:1322–1327` regeneriert Energie ausschließlich für Nichtspieler. Normale schädigende Treffer geben Energie (`actor.lua:2250–2256`; `data/Globals - Sheet1.csv:252–253`:20% Schaden, maximal50), wenn nicht Battlecharge/Berserk aktiv (`actor.lua:3587–3588`); Spezialangriffe können die Energiegewinnung ausdrücklich abschalten. Normale Angriffe bleiben Hauptmotor, Verbrauchsmittel Reserve.
9. **Poise kann sich erholen.** `state_game.lua:2447–2483` verlangt genug Zeit seit Verletzung, Nahrung und normalerweise kein angrenzendes Feindziel; neutral fehlt der Wolf-Eidbonus. Hallowed-Bereich verstärkt Poisegewinn. Lebensmittel verhindern Hunger und sichern diese Erholung, heilen in diesem Build aber nicht automatisch die verlorenen HP. In bekannten freien Räumen kurz durchatmen ist Beratung; keine Garantie, dass jeder vermeintlich leergekämpfte Raum dauerhaft sicher ist.
10. **Schlaf ist keine zugesicherte Auffüllung.** Zufällige Barracks enthalten Bettstücke. `state_game.lua:11571–11608` verbietet Schlaf bei aktiven Aggressoren; fremde Betten außerhalb Stadt werden ausdrücklich als sehr riskant bezeichnet. `:5506–5595` enthält Sicherheitswurf und mögliche Überfälle; `:5603–5604` füllt bei beendetem Schlaf HP/Energie, aber die Route soll das nicht als garantierten sicheren Reststop verkaufen.

## Verifizierte Etagenmuster statt erfundener100 Raumrouten

Quelle des folgenden Abschnitts: `state_game_dungeon_chunks.lua:createEndlessDungeonData`, `:25–373`. Schwierigkeit `ceil(depth/10)` (gedeckelt10), Dritteleinteilung `ceil(depth/33)` (gedeckelt3), `:35–36`. Normaltruhenziel2–4 (`:83`), zusätzlich Haupttruhe; nicht jede Truhe verspricht eine bestimmte Versorgung. Die Zahl der geplanten Gegnergruppen steigt bis maximal16 (`:317`); Auswahl5 möglicher Gruppen pro Etage (`:330–340`).

| Band | Belegte wachsende Gefahren / sinnvoller Fokus |
|---|---|
|1–10|Hive, Käfer, Fledermäuse, Spinnen, Wölfe, Bandits/Revenants/Moontouched/Forgotten/Wildmen/Devotees; Miniboss-Pool Dire Wolf/Hunter/Spectral Knight. Früh Rhythmus und Energieversorgung üben.|
|11–20|Stärkere Varianten, Dolls werden möglicher Gegnerpool. Stellungen vor Öffnen unbekannter Türen sichern.|
|21–30|Ghost Bats, Rotlings, Light Spectres; Gazer erstmals im Miniboss-Pool. Rot-/Blindheitsreserve nicht verbrauchen, nur weil die ersten Etagen leicht waren.|
|31–40|Silverwolves, Amberghasts und stärkere Untote; Reaper im Miniboss-Pool, Death-Maidens jetzt möglich. Auf Sichtlinien/Status und Bell-Etagen achten.|
|41–50|Forgotten Hulks, Hunters, Creepers, Boggarts, Mimics; Darknight wird möglicher Miniboss. Truhen/Räume bewusst sichern.|
|51–60|Bug Eyes, Ghosts, Blindwolves; Great Gazer jetzt möglicher Miniboss. Verdeckte Gegner mit Lifesight statt blindem Rush prüfen.|
|61–70|Borog, Techs, Impalers, Shimmershee; Maschinenanteil möglich. Feast nicht als alleinigen Heilplan verwenden.|
|71–80|Constructs, Spikers, Bombers, Dice zusätzlich möglich. Bewegungsfelder und Fernangriff bewahren.|
|81–90|Stärkere Techs/Constructs, Firewalkers, Piercers. Feuer-/Statusreserven vor weiterer Tiefe prüfen.|
|91–99|Stärkste Band-Pools einschließlich Dark Spectres; Miniboss-Pool Reaper/Darknight/Great Gazer. Auf99 vor endgültigem Abstieg bereitmachen.|
|100|Feste Karte, The Progenitor, Preis und aktivierbarer Ausgang.|

**Die Gegnerpools sind Alternativen, keine garantierte Begegnung jeder Etage.** Beleg: `:150–162` (zehn Monstergruppen-Pools), `:188–198` (Miniboss-Pools). Die Fokus-Sätze sind redaktionelle Ratschläge; keine spezifische Monsterfähigkeit wird daraus ungeprüft abgeleitet.

Weitere wiederkehrende Marker:

- **Etagen3,7,11,…,99:** Maiden-Auswahl (`depth%4==3`, `:347–351`), nicht eine garantierte Erholungsperson. Maiden-Typen umfassen negative Status/Feuer, später Death (`:200–212`).
- **Etagen4,8,12,…,96:** Bell-Räume (`depth%4==0`, `:85–98`).1–33 höchstens1,34–66 zufällig1–2,67–99 zufällig1–3 Bells. Bells sind Gefahren, keine Checkpoints! `state_game.lua:8784–8793` nennt Doom-Effekte (Reapers/Goose/Doppelganger/Raise Dead/Amber/Darkness/Enrage/Lava/Memory Loss); `:8831–8871` zählt Dungeon-Ticks, Nähe erhöht den Zähler und am Ende wird Doom ausgelöst. Nicht unnötig auf Bell-Etagen rasten.
- **Etagen6,13,20,…,97:** Library-Räume werden vorgesehen (`depth%7==6`, `:320–324`). Das ist kein fester Außenwarp oder Händler.
- Fallenrisiko wächst über Zehnerbänder, weil „nothing“-Gewicht von200 auf80 sinkt, die negativen Fallentypen bleiben (`:285–295`). Trapdoor kann auf die nächste Etage fallen (`state_game.lua:13632–13648`). Deshalb100-Checkliste nicht automatisch alle übersprungenen Etagen als abgeschlossen markieren.
- Sea/Lava/Void werden als Kartenthemen gewichtet, auch im Inneren möglich (`:178–185`, `:353–360`); Gartenlayouts können Türen durch Brambles ersetzen (`:363–367`). Daher keine feste Architektur/Fluchtgerade zusichern.

**Zufallsbeute:** Heiltränke, Panacea, Blood Phials, EMP/Scrying und einige Orbs sind im normalen Egg-Truhenpool (`treasure_sets.lua:302–311`). Lose Gegenstände können Ammo, schimmlige Nahrung, Kräuter oder nichts sein (`:511–540`); weiterer Pool enthält Jerky, Ammo, HP-/Energie-/Statusmittel (`:698–724`). Das belegt mögliche Hilfe, **keine garantierten Refills** pro Band/Etage. Es gibt keinen belegten Pflichtfund, um das nächste Band betreten zu dürfen.

## Boss100, Preis und Verlassen (im UI eingeklappt)

**Fakten:** `world_data.lua:314` setzt feste Bosskarte100; `dungeon7-100Triggers.csv:9` The Progenitor bei(48,45), Entry von99 bei(48,62) (`:17`), Warp ebenfalls(48,45) (`:13`). Bossdaten `ActorData - Sheet1.csv:176`:1000HP, große Schnabel-Nahkampfwaffe, carried item `level_100_prize`, Abschluss-/Todesflags. Zahlen dienen Quellenkontrolle, keine vorgeschriebene DPS-Minmaxschwelle.

**Phase1:** `actor_boss.lua:1072–1116`: zwei Goose Eggs, zwei Chickens; Boss verknüpft Shield mit **Chickens** innerhalb20. Shield bleibt solange entsprechende Links bestehen. Eier sind zusätzliches Problem und schlüpfen zu Summoned Goose (`actions.lua:3179–3182`), aber nicht die Schildquellen. Bei mehr als60%HP führt Boss die angekündigte Cross-Attacke aus oder normales Kampfverhalten.

**Phase2 bei≤60%:** teleportiert zum Warp, vier neue Eier, drei neue Chickens, wieder Shield-Links (`actor_boss.lua:1112–1139`). Solange Links bestehen periodische Flame Pulse16. Zusätzlich angekündigte Cross-Attacke; Boss ansonsten mobil/normales Verhalten. Deshalb erneut zuerst Schildhühner erledigen, Abstand und Feuerreserve behalten. Keine Aussage „Phasewechsel bei Hälfte“, keine Eier-als-Schildquellen-Anweisung.

**Cross konkret:** `createPurgingCrossTauntGap` (`actor_boss.lua:309–323`) kündigt mit „HOOOONK!“ unmittelbar vor Aktion an. `actions.lua:5391–5438` führt in vier Himmelsrichtungen eine magische Cross-Attacke bis20 Kacheln aus, blockiert durch geeignete Wände. Bei Warnung aus derselben Reihe/Spalte des Bosses treten, möglichst diagonal versetzt bleiben. „HOOOOOONK!“ erscheint auch bei Start: nicht jeden Ruf als exakt identischen Trigger behaupten. Keine pausierte Sekundenzählung oder garantierte diagonale Sicherheit gegen die anderen Angriffe.

**Buildratschläge:** Wolf entfernt Shield-Chickens mit normalem Sword/Hurl statt auf den invulnerable Boss einzuschlagen, setzt Howl nur mit Restenergieplan; der Begleiter darf Eier/Gänse beschäftigen, aber sein Verhalten ist kein garantierter Mechanismus. Lady hält Rückzugsfläche, schießt zuerst Shield-Chickens, dann ungeschützten Boss; Drill Shot nur bei sinnvollem Hindernis, Star Shot nur bei passenden Zielen und8Ammo; Moonlight nicht mit Energie für Blind Leap/Feast verwechseln. Beide vor Abstieg100 heilen/statusbereinigen, Ammo und ausgerüstetes Amulett prüfen.

**Preis:** Boss trägt `level_100_prize`; Boss-Tod droppt normale einzigartige Ausrüstung auf ein nahe sicheres Feld, falls nicht bereits im Inventar (`actor.lua:2578–2602`). **Daimon Amulet aufnehmen, bevor du den Warp benutzt.** `ObjectData - Sheet1.csv:344`: einzigartig, Hals, Last1, physicalDef10, magicalDef10, rot/mad/stun/torpor/blind/bleed/flame/poison/wetDef jeweils10. Es hat **keinen Energiebonus** und keine Attributboni. Werte sind Daten-Defense, nicht pauschal10% weniger Schaden oder Immunität. Beim Austausch des Lightning-bolt-Amuletts maximale Energie neu prüfen; neutrale120erBeschwörung kann dadurch ausfallen. Für Folgekämpfe daher nicht automatisch den Preis anlegen.

**Ausgang:** Boss-Tod schaltet WarpGates an (`actor.lua:2547–2566`, `state_game.lua:15001–15006`). Auf die aktive Warpkachel treten, Enter, **Return to the surface?** bestätigen (`:11747–11759`, `:10414–10415`). `leaveRelicDungeon` setzt Ziel Overworld und den Start der dungeon7-Familie, somit zurück zum Egg-Eingang (`:13544–13563`, `:1767–1769`). Vollständige HP-Heilung nach Verlassen wird nicht versprochen: die HP-Resetzeile ist auskommentiert (`:13565–13568`), Poise/Energie werden zurückgesetzt und Bleed/Flame beseitigt (`:13567–13572`). Anschließend Stadt zum erneuten Vorbereiten.

**Wiederholung:** Verlassen setzt Dungeonzustand zurück/erhöht Runzahl (`:13563`), Entrance-Code enthält keinen Abschlussblock; neuer Durchlauf ist codegestützt möglich. Daimon ist einzigartig; vorhandenes Exemplar unterdrückt einen zusätzlichen Drop (`actor.lua:2588–2589`). Keine Repeat-Farmempfehlung und kein garantierter anderer Endpreis. Der erste Sieg erhöht Erfolgscounter schon beim Boss-Tod (`state_game.lua:8898–8906`), aber sichere Beute erst aufgenommen und draußen speichern.

## Exakter geordneter Anfängerkurs für Implementierung

| Reihenfolge | Deutscher UI-Text / Aufgabe | Status |
|---|---|---|
|1|Alle fünf Relikte und vorhandenen Buildplan abschließen; Egg vor Thron/The Lament einplanen.|Redaktionelle Einordnung, kein Eintrittsgate|
|2|In einer Stadt HP, Poise, Nahrung, Energie, Heilung, Statusmittel und Munition auffüllen; Waffen/Last/ausgerüstete Gaben prüfen.|Vorbereitungscheck|
|3|Wolf: Sword/Schild/leichte Rüstung/Hurl; Lady: Longbow/Mace/Schild/leichte Rüstung/Pfeile.120erBeschwörung nur bei aktueller max.Energie≥120.|Buildcheck|
|4|Mit Schiff südwestlich Barrow-Linn zur westlichen bergigen Küstenbucht; von Osten an Steg(120,341), an Land sechs Kacheln west durch Gehölz zum Ei(114,341).|PNG-Karte und Quellcode belegt|
|5|Ei anrempeln, Entdeckung abwarten; geöffneten Eingang betreten, Enter. Warnung erst bei Bereitschaft bestätigen.|Belegt|
|6|Auf1 Ausgangssperre akzeptieren; bis99 pro Etage Abstieg finden, nötig gewordene Schlüssel/Mechanismen lösen, normale Treffer nutzen, erreichbare Reserven sammeln.|Belegte Routine|
|7|Bei jeder neuen Etage Nummer abhaken erst nach tatsächlichem Fortschritt; Bell/Maiden/Library-Marker anzeigen und Zehnerband-Regeln lesen.|UI-Design|
|8|Längere Pause: stillstehen, Escape → Options → Save and Quit; nächsten Tag gespeicherten Run fortsetzen.|Belegte Pause|
|9|Tod: vor Eintritt wieder vorbereiten und Etagenliste für neuen Run zurücksetzen. Höchste bisherige Tiefe als persönliche Notiz, kein Ingame-Checkpoint.|Belegt + UI-Design|
|10|Auf99 vor Abstieg100 HP/Status/Energie/Ammo/Amulett prüfen; es gibt anschließend keinen normalen Rückweg zu99.|Belegt|
|11|Boss-Hilfe optional aufklappen: Shield-Chickens, Cross ausweichen, Phase2 erneut Chickens und Feuerpulse beachten.|Belegt + taktische Ableitung|
|12|Daimon Amulet vom Boden aufnehmen; aktiven Warp(48,45) betreten, Enter → Return to surface bestätigen.|Belegt|
|13|Draußen Inventar/Preis prüfen, Stadt vorbereiten; danach erst gewähltes Finale fortsetzen. Lightning-bolt bei weiterem120Energiebedarf behalten.|Belegt + Beratung|

###100-Etagen-Checkliste: fachlich sinnvolle Felder

100 explizite nummerierte Häkchen/Zeilen, in Zehnerbändern gruppiert. Eine gemeinsame kurze Etagenroutine statt100 erfundener Raumtexte. Für jede Zeile automatisch Tags aus Nummer ableiten: Maiden n%4=3, Bells n%4=0, Library n%7=6 (nur n≤99);100 = Boss/Preis/Warp.33/34 und66/67 zusätzlich Bell-Maximum-Schwellen markieren.99 erhält besonderes Ready-Gate vor100. Optional aktueller Run-Name/Zähler und letzte Etage; beide Builds getrennt speichern. **Häkchen sind Guidefortschritt, keine echten Checkpoints.** Nach Tod/neuem Run einfache manuelle Reset-Option; schon besuchte Basisroute-Gaben/Relikte dabei nicht löschen. Für jeden tatsächlichen Etagenwechsel kann der Spieler abhaken; Trapdoor-übersprungene Etagen nicht als vollständig durchlaufen markieren.

## Änderungen an bisherigen base-only Aussagen

- „Alle fünf Relikte → direkt Thron“ braucht den sichtbaren Egg-Zwischenschritt, wenn dieser User DLC vollständig einschließen will; die normalen Relikte und Finanzierung bleiben erhalten.
- „Vor The Lament alles auffüllen“ bleibt wahr, aber Egg muss bereits davor vollständig abgeschlossen sein; die100Etagen sind keine Nach-Tether-Verlängerung der gleichen Gabenroutine.
- Keine Behauptung „100Etagen ohne Pausieren/ohne Speichern“: Save and Quit erhält den aktuellen Lauf.
- „Keine Rückkehr“ differenzieren: draußen gesperrt auf1, innerhalb2–99 zurücktreppen möglich,100 wieder endgültig.
- Kein „Master Key im Egg suchen“, auch wenn allgemeine Treppennachricht so klingt; `needsExitKey=false` und Eintrittswarnung verlangt Guardian.
- Keine festen Händler-/Heil-/Portal-Checkpoints je10Etagen; Bell-Etagen sind Gefahren.
- Food/Warten füllt weder HP noch Spielerenergie automatisch; normale Treffer und medizinische Reserven sind der belegte Alltag. Beds können helfen, aber sind zufällig/riskant.
- Daimon ist defensiver Preis, kein Energieamulet und kein Ersatz für die120Kapazitätsprüfung.

## Restunsicherheit und Beweisgrenzen

- Karte/Anleger wurde durch den Elternagenten aus den ausgelieferten Pixelzellen und einer Meeres-Flutverbindung bestätigt. Keine direkte Live-Segelfahrt durchgeführt; keine erfundene Inselbezeichnung oder Straßenverbindung.
- Generator-Pools und Muster belegen mögliche Inhalte, nicht die genaue Lage/Anzahl jedes fertigen Runs. Trotz geplanter Bell/Library-Chunks konservativ „vorgesehen/möglich“ sagen, falls Chunkkapazität limitiert.
- Keine Spielsimulation oder Live-Absolvierung aller100Etagen durchgeführt. Der normale Plan ist quellenfundierter Anfängerkurs; Erfolg, Dauer und Vorratsmengen sind nicht garantiert.
- `fnRise` existiert (`state_game.lua:13679–13705`), und `actions.lua:6295` hat aktives `rise`-Routing; ältere Scrollverarbeitung dahinter ist auskommentiert. In der geprüften ObjectData gibt es jedoch **kein Objekt mit useFX1/useFX2=rise**. Daher kein erhältlicher Rise-/Escape-Gegenstand belegt; daraus keinen Egg-Ausnahmeausweg bauen. Havenstone ist nur Overworld nutzbar (`ObjectData - Sheet1.csv:286`), kein Egg-Ausstiegswerkzeug.
