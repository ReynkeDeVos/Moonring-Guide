# Ausrüstung nach Slot und Build

Stand: 2. Oktober 2026. Primärquelle ist der nur gelesene ZIP-Anhang der installierten PC-Fassung **Moonring 0.0.958**, Steam-Build **24843312**. Namen und Werte stammen aus `data/ObjectData - Sheet1.csv`. Die Spieldateien und Spielstände wurden nicht verändert.

## Katalog und Werte

Der Inventarkatalog umfasst 91 Gegenstände: alle normalen Kopfbedeckungen, Körperteile, Handschuhe, Beinteile, Schilde, Umhänge und Amulette dieser Tabelle sowie eine Auswahl von Waffen und das Questwerkzeug Advanced Cannon. Keine behauptete vollständige Sammlung aller Waffen, Technologien oder Questobjekte. Die besondere Egg-Belohnung bleibt ausschließlich in der eingeklappten Egg-Hilfe.

CSV-Zeilen: Nahkampf-Auswahl 4–34; normale Bögen/Crossbow und legendäre Fernwaffen 61–69; Kopf/Körper/Hände/Beine 168–192; Umhänge 193–204; Schilde 205–210; Amulette 317–343; Advanced Cannon 405. CSV mit `csv.DictReader` gelesen: Felder `name`, `category`, `weight`, `*Req`, `*Def`, `stealth`, `*Bonus`, `*Mult`, `shieldBlockFraction`. Interne Objekt-/Grafiknamen sind keine Anzeigenamen: `steel_helmet` heißt **Iron Helmet**, `steel_helmet_norman` heißt **Steel Helmet**, `halfplate_armour` heißt **Chainmail Armour**.

| Gegenstand | Last | Phys. Schutz | Weitere relevante Werte |
| --- | ---: | ---: | --- |
| Leather Helmet | 4 | 2 | Stun 18 |
| Nose-guard Helmet | 6 | 3 | Stun 15 |
| Iron Helmet | 12 | 3 | Stun 20, Stealth −1 |
| Steel Helmet | 12 | 4 | Stun 18, Stealth −1 |
| Horned Helmet | 12 | 2 | Phys. Nahkampfschaden +20%, phys. Schutz +20%, Stealth −1 |
| Pointed Cap | 1 | 1 | Stun 10, phys./mag. Fernkampfschaden +20%, Reichweite +2 |
| Leather Armour | 15 | 4 | Stealth −1 |
| Chainmail Armour | 30 | 5 | Stealth −2 |
| Platemail Armour | 40 | 7 | Stealth −3 |
| Leather / Chainmail / Platemail Gloves | 2 / 6 / 10 | 1 / 2 / 3 | Chainmail/Platemail: Stealth −1 |
| Leather / Chainmail / Platemail Greaves | 6 / 10 / 14 | 2 / 3 / 4 | Chainmail/Platemail: Stealth −1 |
| The Clown's Pendant | 1 | 0 | Madness-Schutz 25 |
| Giant's Amulet | 1 | 0 | END +5 |
| Noman's Hand Amulet | 1 | 0 | Phys. Nah-/Fernkampfschaden +15% |
| Wolf / Andera's Amulet | 1 | 0 | STR / PER +5 |

Schutzwerte sind Datenwerte und keine Prozentwerte der Schadensminderung. Multiplikatorfelder stehen getrennt: etwa `physicalMeleeDamMult=0.2` als +20%; die Spiel-Inventaranzeige zeigt `1 + v.physicalMeleeDamMult` (`inventory_panel.lua:870–877`). Die ausgerüsteten Reichweitenboni werden addiert (`state_game.lua:10990–11010`). Stat-Anforderungen werden anhand der aktuellen Attribute geprüft (`state_game.lua:10534–10540`). Die Lastrechnung zählt die ausgerüsteten Slots, mit Austausch im selben Slot; Kapazität hängt von END ab (`state_game.lua:10474–10525`). END +5 erhöht die Kapazität um 75 × 5 / 35 ≈ 10,71.

## Unsere Sortierung

Die Reihenfolge ist eine redaktionelle Empfehlung für die vorhandenen neutralen Anfänger-Builds, keine vom Spiel vorgegebene globale Stärke-Rangliste. Innerhalb eines Slots stehen passende Zielteile vor Zwischenstufen und Startteilen. Leichte Nahkampfreserve und tragbare Rüstung können für Lady sinnvoller sein als stärkere, schwere Teile. Alle nicht ausgewählten Einträge bleiben pro Slot eingeklappt und als Besitz markierbar. Situativer Statusschutz kann im entsprechenden Kampf wichtiger sein als ein offensiver Bonus.

- **Wolf:** Sword als normales Einhand-/Schildziel; Horned Helmet als spätes Nahkampfziel mit Lastprüfung. Leather Helmet bleibt das leichte Budgetteil. Leather Gloves/Greaves stehen wegen geringer Last vor den optionalen Chainmail-Upgrades. Heater Shield als normales Schildziel.
- **Lady:** Pointed Cap als leichtes Bogen-Ziel, Longbow als normales Waffenziel; Sightbane als optionales spätes Fundziel mit PER 25, Last 10 statt Longbow 16. Dagger bleibt die leichte Nahkampfreserve, Mace die schwerere Alternative. Kein Umhang als Standardkauf.
- **Beide:** Lightning-bolt zuerst für neutrale 120-Energie-Beschwörungen. Noman's Hand, Giant's, Attribut- und Gesundheitsamulette sind Alternativen im selben Hals-Slot, keine gleichzeitig stapelbaren Ergänzungen. Nach jedem Wechsel die maximale Energie prüfen.
- **Legendäre Grenzen:** Wolf endet ohne Ausrüstungsboni bei STR 25, Lady bei PER 25, beide bei END 15, INT 5 und FIN 0. STR/PER-Amulette können Schwellen öffnen, ersetzen aber Lightning-bolt. Nicht ohne diesen Umbau STR/PER 30 oder END 20 voraussetzen.

Lastbeispiele beziehen sich ausdrücklich auf die vorhandenen Leder-Vergleichssets: Wolf 56, Lady 68 bei END 15 / Kapazität 72,14. Einzelner Austausch beim Wolf: Horned Helmet 64, Chainmail Gloves **oder** Greaves 60, Chainmail Armour 71, Platemail Armour 81. Horned Helmet **plus** optionaler Shortbow 74 wäre zu schwer. Lady mit Pointed Cap statt Leather Helmet: 65; die Einkaufsbeispiele rechnen weiterhin mit Leather Helmet und geben die Differenz von −3 an. Die obersten empfohlenen Teile sind zusammen kein geprüftes Set.

## Frühe Hirschjagd im Wolf-Plan

Die Empfehlung in Etappe 3 setzt Hurl nicht mehr als Werkzeug zum Bezahlen von Hurl voraus. `achievements.lua:9` verlangt fünf getötete Hirsche und gibt zwei Wolf-Punkte. Die Jagd darf nachgeholt werden; die Reise und der frühe Höhlenversuch verlangen diesen Kauf nicht. Lifesight und Feast dürfen bei fehlenden Hurl-Punkten aus den Stadtbesuchspunkten vorgezogen werden; die nummerierte Liste bleibt eine Priorität. Gabenkäufe haben keine vorgeschalteten Gaben als Voraussetzung (`skill_tree.lua:157–167,330–351`; siehe research-powers.md).

Erneut direkt im ZIP der installierten EXE geprüft: `data/ObjectData - Sheet1.csv:61–64` führt Shortbow mit PER 5, Last 10, Preis 1.000, Bestand in Moon-upon-Thoss und The Red Grove; normale Crossbow mit STR 5, Last 16, Preis 1.000, Bestand in Moon-upon-Thoss und Wintersholl. Die besondere `crossbow_fast` mit Last 8 hat keinen regulären Ladenbestand und ist kein Kaufziel. Beide normalen Waffen haben Basisreichweite 4; Reichweitenboni und PER werden in `state_game.lua:10974–11015` hinzugefügt. Preis und Ladenbestand sind dynamisch (`economy.lua:335–390`). Crossbow braucht Bolts, Shortbow Arrows; passende Munition zusätzlich einplanen.

Redaktionelle Progression ohne zusätzliche Gaben: nach Slam bei Bedarf Crossbow kaufen, nach Feast ist Shortbow eine leichtere Alternative, vorhandene Crossbow darf bleiben. Shortsword 10 + Cap 1 + Cotton Tunic 8 + Leggings 1 + Crossbow 16 = 36 / 40 bei END 0; Buckler zusätzlich ergibt 46 und passt nicht. Dagger statt Shortsword mit Buckler ergibt 40. Shortbow + Sword + Startkleidung + Buckler = 42 / 50,71 bei END 5. END 15 ist nur für das bisherige volle Leder-/Heater-Set plus Fernwaffe die Empfehlung, keine allgemeine Fernwaffen-Schwelle. Keine Garantie auf erfolgreiche Jagd oder einen Kill mit einem Schuss; die zwei Hirschzeilen in `data/ActorData - Sheet1.csv:24–25` haben jeweils 200 Basisgesundheit.

## Speicherung

Alle 37 bisherigen Gegenstands-IDs bleiben bestehen, einschließlich `inventory-steel-helmet`, `inventory-vermiers-amulet` und `inventory-shield-of-warding`. Neue Einträge verwenden zusätzliche IDs im unveränderten pro-Build-Speicher und JSON-Sicherungsformat. Besitz verändert weder Route noch Gaben; eingeklappter Besitz zählt weiterhin und wird im jeweiligen Aufklapptitel angezeigt. Beim Buildwechsel werden die Aufklappbereiche wieder geschlossen.
