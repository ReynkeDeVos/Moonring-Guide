# Moonring: Geheimnisse erst mit vollständigen Hinweisen

Stand: 2. Oktober 2026. Primärprüfung anhand des ZIP-Anhangs der installierten **Moonring.exe, PC 0.0.958**. Recherchekopie: `/tmp/moonring-secrets/game`. Die Installation und Spielstände wurden nur gelesen. Die folgenden Lösungen sind Spoiler; im Guide werden sie erst mit ausdrücklich bestätigten Hinweisen gerendert und bleiben zunächst eingeklappt.

## Friedhofsherz / Wandwort

`data/strings.lua:53–60` verknüpft sechs Buchstaben mit der Friedhofsinschrift. Erforderliche Sammelbestätigungen im Guide: die Rätselinschrift selbst und jede der sechs Wandinschriften. Kein Stadtbesuch ersetzt das Lesen einer Inschrift.

| Hinweis | Primärbeleg | Lokaler, nullbasierter Kartenanker |
| --- | --- | --- |
| Friedhofsrätsel | `data/save/Moon-upon-ThossTriggers.csv:46`; `data/strings.lua:60` | 77,47 |
| Hauptstadt: Y | `Moon-upon-ThossTriggers.csv:61`; `strings.lua:58` | 20,72 |
| Wintersholl: S | `WintershollTriggers.csv:24`; `strings.lua:55` | 27,28 |
| Hearthaven: P | `HearthavenTriggers.csv:23`; `strings.lua:53` | 55,43 |
| The Red Grove: A | `The_Red_GroveTriggers.csv:5`; `strings.lua:54` | 43,29 |
| Harrowdus: B | `HarrowdusTriggers.csv:4`; `strings.lua:57` | 73,72 |
| Barrow-Linn: S | `Barrow-LinnTriggers.csv:28`; `strings.lua:56` | 37,56 |

Die Triggerdateien liegen unter `data/save/`. Die Kartenanker sind Recherchehilfen, keine behauptete Ingame-Koordinatenanzeige. Die im Guide beschriebenen Stadtbereiche folgen den lokalen Positionen relativ zur Stadtmitte. Das Red-Grove-Regal liegt direkt südwestlich der dortigen Inschrift (`The_Red_GroveTriggers.csv:14`, 42,30).

**Lösung:** Das Wort ist `BYPASS`; keine Route oder Stadtbesuchsreihenfolge liefert automatisch die Buchstabenfolge. `Moon-upon-ThossTriggers.csv:50` enthält `yell,bypass,fnYellRemove`, Position 77,47, Radius 2. `state_game.lua:22063–22100` vergleicht den Ruf ohne Beachtung der Groß-/Kleinschreibung und prüft die Entfernung separat auf beiden Achsen. `state_game.lua:22161–22170` ersetzt die Mauerzelle durch eine begehbare Zelle. Dahinter liegt `max_health` bei 79,47 (`Moon-upon-ThossTriggers.csv:44`). Die Aufnahme erhöht maximale Gesundheit (`state_game.lua:15952–15958`). Standardtaste für Yell: Y (`globals.lua:335`).

## Jest-Zugangsphrase

`data/DialogueData - Sheet1.csv:239–245` enthält die Gesprächskette des Harrowdus-Priesters und die Rätselnotiz. Die Notiz bestimmt die Wortreihenfolge und die Initialenlesung am Grab. Der Guide verlangt diese Notiz und fünf tatsächlich ermittelte Wörter; eine gelesene Standortkarte genügt nicht als Wortfund.

| Wort | Erwerb | Primärbeleg |
| --- | --- | --- |
| Death | Auffälliges weißes Buch im nördlichen The Red Grove untersuchen | `strings.lua:83`; `The_Red_GroveTriggers.csv:14` (42,30) |
| Has | Baumformation im nördlichen Wintersholl erkennen | `strings.lua:84`; `data/save/Wintersholl.png` |
| Dominion | Steininschrift im Zentrum von Four Lake Meet lesen | `strings.lua:85`; `Four_Lake_MeetTriggers.csv:23` (46,47) |
| Over | Notiz aus den Knochen im westlichen Hearthaven lesen | `strings.lua:86`; `HearthavenTriggers.csv:34` (17,53) |
| All | Initialen der Gräber westlich, südlich und östlich von Henrie kombinieren: Albret, Lionne, Larry | `DialogueData.csv:245`; `strings.lua:63–68`; `Moon-upon-ThossTriggers.csv:38,43,52,59` |

Four Lake Meet wird durch das beschädigte Kartenbuch in Barrow-Linn markiert (`strings.lua:110`, `Barrow-LinnTriggers.csv:9`, lokal 39,47). Die Weltposition ist 330,190 (`OverworldTriggers.csv:304,362`), nordöstlich Wintersholl. Daher hängt der Guide den dortigen Abstecher an die Barrow-Linn-Etappe, sobald das Kartenbuch zugänglich ist. Dies ist eine redaktionelle Sammelreihenfolge, kein mechanisches Zugangstor. Die übrigen Wörter können schon vor Erhalt der Priesternotiz entdeckt werden.

**Lösung:** `Death Has Dominion Over All`. `HarrowdusTriggers.csv:11` enthält `yell,Death_Has_Dominion_Over_All,fnYellUnlock` bei 79,82 mit Radius 1. `state_game.lua:22063–22125` ersetzt Leerzeichen durch Unterstriche und entsperrt bei erfolgreicher Phrase den Zugang. Groß-/Kleinschreibung ist irrelevant. Die Boss-Hilfe bleibt im Reiseplan separat eingeklappt; sie enthält keine ungesperrte Zugangslösung mehr.

## Hearthaven: unsichtbare Wände und Bücher

Spielerfund vom 3. Oktober 2026: Hinter einer unsichtbaren / falschen Wand in Hearthaven folgen mehrere weitere unsichtbare Wände und Räume mit zahlreichen Büchern und Lore. In Etappe 04 wird bei beiden Builds ausdrücklich auf die weitere Suche nach Durchgängen und das Lesen der Bücher hingewiesen. Der neue Checklistenpunkt hat die eigene ID `hearth-hidden-library`; bestehende Aufgaben-IDs bleiben erhalten.

Die Büchersammlung ist in den lokalen Spieldaten belegt: `data/save/HearthavenTriggers.csv` enthält vier reguläre Buchtrigger (`hearthaven_book_1` bis `_4`) und 16 weitere (`hearthaven_book_locked_1` bis `_16`). Ihre Texte stehen in `data/strings.lua:138–159`, unter anderem zu Calderas Geschichte, den Göttern, Amber und Ancient Sibaroon. Die Abfolge der unsichtbaren Wände stammt aus dem Spielerfund; ein genauer Einstieg und eine vollständige Raumroute wurden hier nicht unabhängig geprüft.

## Umsetzung und Grenzen

- Eigene Hinweis-IDs in den vorhandenen buildbezogenen Häkchen speichern; bestehende Fortschritts- und Etappen-IDs bleiben erhalten.
- Nur `every(clue => checked[clue.id] === true)` gibt eine Lösung frei. Route, Gaben, Kartenlesen oder ein früherer Abschlussvermerk ersetzen keine fehlende Hinweisbestätigung.
- Die Reiseetappe zeigt die dort erwerbbaren Hinweise und ihre konkrete Suchanleitung. Hauptstadt und The Red Grove werden bei „Spuren verbinden“ erneut angeboten.
- Bereite Geheimnisse werden an der aktuell ausgewählten Etappe verlinkt. Die Geheimnisansicht verlinkt zurück zur Etappe und zum Fundort jedes Hinweises.
- Optionale Hinweise zählen nicht zum Etappenabschluss. Ein abgewählter Hinweis entfernt Lösung und Geheimnis-Link sofort wieder.
- Kein automatisches Auslesen des Moonring-Spielstands. „Gefunden“ ist eine bewusste Bestätigung durch den Spieler, keine aus Reisehäkchen geschätzte Entdeckung.
- Die Sammlung umfasst das Friedhofsherz und die mehrteilige Jest-Phrase; sie behauptet kein vollständiges Verzeichnis aller Geheimnisse im Spiel.
