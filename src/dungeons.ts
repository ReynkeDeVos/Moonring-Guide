import type { Dungeon, DungeonHint } from './dungeon-model';

// Primary-source catalogue for PC 0.0.958. Keep clue confirmations separate from visits.
export const dungeonHints:DungeonHint[]=[
 {
  "id": "dungeon-info-yarrow-cave",
  "stages": [
   "yarrow"
  ],
  "title": "Fundort von Yarrow Cave erfahren",
  "how": "Carems Notiz im südlichen verfallenen Schuppen tatsächlich lesen. Sie nennt die Höhle hinter den Familiengräbern und erklärt, wo der Graveyard Key liegt. Den Fundorthinweis bestätigen; den Schlüssel anschließend getrennt besorgen.",
  "source": "YarrowTriggers.csv:6–8,18,22,30,36–37; data/strings.lua:15; dungeon_data.lua:684–699; world_data.lua:87",
  "kind": "conversation"
 },
 {
  "id": "dungeon-info-lost-tunnels",
  "stages": [
   "capital",
   "prepare"
  ],
  "title": "Fundort von The Lost Tunnels erfahren",
  "how": "Den Eingang auf einer normalen Erkundung bei der Hauptstadt tatsächlich sehen; es gibt keine belegte NPC- oder Buchmarkierung.",
  "source": "OverworldTriggers.csv:203,235; world_data.lua:92; dungeon_data.lua:248–277; state_game.lua:21846–21862,21954–21969",
  "kind": "exploration"
 },
 {
  "id": "dungeon-info-fallen-tunnel",
  "stages": [
   "capital"
  ],
  "title": "Fundort von The Fallen Tunnel erfahren",
  "how": "In Moon-upon-Thoss mit dem Bewohner sprechen, der „Psst. Wanna know a secret?“ sagt: secret → treasure; danach die Kartenmarkierung prüfen.",
  "source": "DialogueData - Sheet1.csv:149–151; OverworldTriggers.csv:167,370; world_data.lua:119; dungeon_data.lua:725–749",
  "kind": "conversation"
 },
 {
  "id": "dungeon-info-crumbling-temple",
  "stages": [
   "harrow"
  ],
  "title": "Fundort von The Crumbling Temple erfahren",
  "how": "In Harrowdus den Bewohner mit der Partyeinladung fragen: fun → know more. Kartenmarker/Notiz heißt zunächst „Party Location“.",
  "source": "DialogueData - Sheet1.csv:288–291; OverworldTriggers.csv:15,106; world_data.lua:95; dungeon_data.lua:301–316",
  "kind": "conversation"
 },
 {
  "id": "dungeon-info-hole",
  "stages": [
   "winter"
  ],
  "title": "Fundort von The Hole erfahren",
  "how": "In Wintersholl den „Brrr“-Bewohner fragen: Brrr → The Hole; markierte Höhle prüfen.",
  "source": "DialogueData - Sheet1.csv:221–224; OverworldTriggers.csv:283,292; world_data.lua:122; dungeon_data.lua:773–796",
  "kind": "conversation"
 },
 {
  "id": "dungeon-info-sunken-edifice",
  "stages": [
   "barrow"
  ],
  "title": "Fundort von The Sunken Edifice erfahren",
  "how": "In Barrow-Linn dem Bewohner mit gefährlicher Feldforschung less academic sagen und die Markierung prüfen.",
  "source": "DialogueData - Sheet1.csv:342–344; OverworldTriggers.csv:9,21; world_data.lua:98; dungeon_data.lua:340–355",
  "kind": "conversation"
 },
 {
  "id": "dungeon-info-albens-bane",
  "stages": [
   "hearth"
  ],
  "title": "Fundort von Alben's Bane erfahren",
  "how": "In Hearthaven den „Fools“-Bewohner fragen: Fools → south; danach die Kartenmarkierung prüfen.",
  "source": "DialogueData - Sheet1.csv:181–183; OverworldTriggers.csv:160,248; world_data.lua:101; dungeon_data.lua:379–393",
  "kind": "conversation"
 },
 {
  "id": "dungeon-info-hollows",
  "stages": [
   "red",
   "prepare"
  ],
  "title": "Fundort von The Hollows erfahren",
  "how": "Bewohner in The Red Grove: Obsessed → zum seufzenden Gommer. Bei Gommer: The Hollows → talk → conspiracy → big secret → Sloar → Fenjaal → cheese → guess → treasure → why → tell the world. Erst letzter Dialog markiert den Eingang.",
  "source": "DialogueData - Sheet1.csv:395–409; OverworldTriggers.csv:130,302; world_data.lua:104; dungeon_data.lua:417–430",
  "kind": "conversation"
 },
 {
  "id": "dungeon-info-warrens",
  "stages": [
   "ship",
   "repository",
   "egg"
  ],
  "title": "Fundort von The Warrens erfahren",
  "how": "Den Eingang auf einer späten Schiffsreise selbst sehen und die Kartenmarkierung bestätigen. Keine spezielle NPC- oder Buchmarkierung ist belegt.",
  "source": "OverworldTriggers.csv:75,234; world_data.lua:128–129; dungeon_data.lua:870–895; state_game_dungeon_chunks.lua:877–878; state_game.lua:21846–21862,21954–21969",
  "kind": "exploration"
 },
 {
  "id": "dungeon-info-hold",
  "stages": [
   "winter"
  ],
  "title": "Fundort von The Hold erfahren",
  "how": "Den klagenden Wintersholl-Bewohner fragen: disgrace → rogue guardian → Imbeciles → history → weapon → pirates → coast. Die konkrete Küstenhöhlen-Spur nahe Henge und Tooth-Waffe notieren; der Dialog setzt keinen Kartenmarker.",
  "source": "DialogueData - Sheet1.csv:213–220; OverworldTriggers.csv:224,268; dungeon_data.lua:544–562; data/treasure_sets.lua:883–886",
  "kind": "conversation"
 },
 {
  "id": "dungeon-info-sleathen",
  "stages": [
   "winter"
  ],
  "title": "Fundort von Sleathen's Wood erfahren",
  "how": "Wintersholl-Priester: Garden → not far → the beast → hunting grounds; Jagdgebietsmarker und vier tote Bäume notieren.",
  "source": "DialogueData - Sheet1.csv:197–201; OverworldTriggers.csv:72; data/ActorData - Sheet1.csv:175; world_data.lua:54",
  "requires": [
   "dungeon-info-garden"
  ],
  "kind": "conversation"
 },
 {
  "id": "dungeon-info-garden",
  "stages": [
   "winter"
  ],
  "title": "Fundort von The Garden of Lorelei erfahren",
  "how": "Wintersholl-Priester: Relic → Garden → not far. Die markierte Garden-Position bestätigen; hunting grounds ist eine getrennte Sleathen-Spur.",
  "source": "DialogueData - Sheet1.csv:197–201; OverworldTriggers.csv:288,333,386; world_data.lua:148–154; dungeon_data.lua:904–1124; dungeon1-07Triggers.csv:20; data/treasure_sets.lua:773–779",
  "kind": "conversation"
 },
 {
  "id": "dungeon-info-click-clack",
  "stages": [
   "harrow"
  ],
  "title": "Fundort von Click Clack Hideout erfahren",
  "how": "In Harrowdus die verschlossene Tür im nordöstlichen Haus mit Lockpick öffnen und die Forgery-Notiz lesen; den genannten Espirus nach literature → click-clack gang fragen. Konkrete Südwest-Richtung und drei Kisten im Kreis notieren.",
  "source": "HarrowdusTriggers.csv:21; data/strings.lua:87; DialogueData - Sheet1.csv:285–287; OverworldTriggers.csv:66,187; clickclack-01Triggers.csv:2–12",
  "kind": "conversation"
 },
 {
  "id": "dungeon-info-sea-cave",
  "stages": [
   "capital"
  ],
  "title": "Fundort von The Sea Cave erfahren",
  "how": "In Moon-upon-Thoss den Bewohner ansprechen, der sich ein Schiff wünscht; cave fragen und den Marker prüfen.",
  "source": "DialogueData - Sheet1.csv:511–512; OverworldTriggers.csv:27,247; dungeon_data.lua:820–844; state_game_dungeon_chunks.lua:877–878; data/treasure_sets.lua:865–869",
  "kind": "conversation"
 },
 {
  "id": "dungeon-info-thief",
  "stages": [
   "prepare"
  ],
  "title": "Fundort von The Thief's Hideout erfahren",
  "how": "Nach Kenners Fluchtspur nach Moon-upon-Thoss zurückkehren. Bewohner nach Kenner und dann join fragen. Erst die tatsächliche Inselmarkierung auf der Weltkarte bestätigt den konkreten Fundort.",
  "source": "DialogueData - Sheet1.csv:177,210–212,263–265,334–340,389–394,504–507; OverworldTriggers.csv:93,238; thief_campTriggers.csv:2",
  "requires": [
   "dungeon-trail-kenner"
  ],
  "kind": "conversation"
 },
 {
  "id": "dungeon-info-tower",
  "stages": [
   "hearth"
  ],
  "title": "Fundort von Tower of Veils erfahren",
  "how": "Hearthaven-Priester: Relic → Tower of Veils → no way in; der Tower-Dialog setzt die Ortsmarkierung, no way in erklärt die gestohlenen Schlüssel.",
  "source": "DialogueData - Sheet1.csv:175–177; OverworldTriggers.csv:126,316; world_data.lua:188–194; dungeon_data.lua:1955–2256; dungeon5-07Triggers.csv:6; actor_boss.lua:1448–1500",
  "kind": "conversation"
 },
 {
  "id": "dungeon-info-jest",
  "stages": [
   "harrow"
  ],
  "title": "Fundort von The Jest erfahren",
  "how": "In Harrowdus das Buch The Jest lesen (Regal (52,63)): Es nennt den Shop-Rückraum. Priester: Relic → die → The Jest → insist → phrase für das separate Zugangsrätsel.",
  "source": "data/strings.lua:166; HarrowdusTriggers.csv:5,11; DialogueData - Sheet1.csv:243–247; world_data.lua:168–174; dungeon_data.lua:1365–1652; actor_boss.lua:945–1072",
  "kind": "conversation"
 },
 {
  "id": "dungeon-info-meida",
  "stages": [
   "harrow",
   "necropolis"
  ],
  "title": "Fundort von Meida's Hideout erfahren",
  "how": "Beim Ironmonger im Südwesten Harrowdus Treasure Map #10 kaufen und wirklich Read verwenden. Erst Lesen markiert den Dungeon; Meida-Gossip nennt keinen Fundort.",
  "source": "data/ObjectData - Sheet1.csv:398; OverworldTriggers.csv:145,150; state_game.lua:22527–22533; dungeon_data.lua:147–160; data/treasure_sets.lua:877–881",
  "kind": "map"
 },
 {
  "id": "dungeon-info-necropolis",
  "stages": [
   "red"
  ],
  "title": "Fundort von The Necropolis erfahren",
  "how": "In The Red Grove die Antwort Blood is all von Bewohnern lernen und der Handmaiden sagen; Candle → Necropolis → brave its tombs. Erst letzter Dialog markiert den Zugang.",
  "source": "DialogueData - Sheet1.csv:363–380; OverworldTriggers.csv:149,290; world_data.lua:158–164; dungeon_data.lua:1130–1359; dungeon4-07Triggers.csv:9,14",
  "kind": "conversation"
 },
 {
  "id": "dungeon-info-bael",
  "stages": [
   "harrow",
   "repository"
  ],
  "title": "Fundort von Bael's Tomb erfahren",
  "how": "Beim Harrowdus-Ironmonger Treasure Map #3 kaufen und Read verwenden; dadurch wird die Außenruine markiert. Dort erst den Dungeonzugang lokalisieren.",
  "source": "data/ObjectData - Sheet1.csv:391; OverworldTriggers.csv:5,19; world_data.lua:68,113; dungeon_data.lua:585–610; data/treasure_sets.lua:871–875",
  "kind": "map"
 },
 {
  "id": "dungeon-info-repository",
  "stages": [
   "repository"
  ],
  "title": "Fundort von The Repository erfahren",
  "how": "Nach fünf Fragmenten und Benutzung der Locus Box in Runacarr die Nordverbindung nach Thossacarr nehmen. Auf der Insel den Repository-Eingang selbst sehen und diesen konkreten Fundort bestätigen. Der Priesterdialog allein reicht hierfür nicht.",
  "source": "DialogueData - Sheet1.csv:316–323; state_game.lua:22502–22516,21846–21862; OverworldTriggers.csv:218,298; world_data.lua:178–184; dungeon_data.lua:1658–1950; actor_boss.lua:1152–1236",
  "requires": [
   "dungeon-trail-repository",
   "repository-6"
  ],
  "kind": "conversation"
 },
 {
  "id": "dungeon-info-temple-shield",
  "stages": [
   "prepare",
   "ship",
   "tower",
   "repository",
   "egg"
  ],
  "title": "Fundort von Temple of the Shield erfahren",
  "how": "Den Tempel bei normaler Erkundung selbst sehen und den Marker bestätigen. Keine eigene NPC-/Buchmarkierung belegt.",
  "source": "world_data.lua:317–324; OverworldTriggers.csv:314,363; shield-01Triggers.csv (locked_door great_key und weapon_guardian); data/ActorData - Sheet1.csv:179–187; state_game.lua:21846–21862,21954–21969",
  "kind": "exploration"
 },
 {
  "id": "dungeon-info-temple-dagger",
  "stages": [
   "prepare",
   "ship",
   "tower",
   "repository",
   "egg"
  ],
  "title": "Fundort von Temple of the Dagger erfahren",
  "how": "Den Tempel bei normaler Erkundung selbst sehen und den Marker bestätigen. Keine eigene NPC-/Buchmarkierung belegt.",
  "source": "world_data.lua:317–324; OverworldTriggers.csv:291,312; dagger-01Triggers.csv (locked_door great_key und weapon_guardian); data/ActorData - Sheet1.csv:179–187; state_game.lua:21846–21862,21954–21969",
  "kind": "exploration"
 },
 {
  "id": "dungeon-info-temple-rapier",
  "stages": [
   "prepare",
   "ship",
   "tower",
   "repository",
   "egg"
  ],
  "title": "Fundort von Temple of the Rapier erfahren",
  "how": "Den Tempel bei normaler Erkundung selbst sehen und den Marker bestätigen. Keine eigene NPC-/Buchmarkierung belegt.",
  "source": "world_data.lua:317–324; OverworldTriggers.csv:165,421; rapier-01Triggers.csv (locked_door great_key und weapon_guardian); data/ActorData - Sheet1.csv:179–187; state_game.lua:21846–21862,21954–21969",
  "kind": "exploration"
 },
 {
  "id": "dungeon-info-temple-bow",
  "stages": [
   "prepare",
   "ship",
   "tower",
   "repository",
   "egg"
  ],
  "title": "Fundort von Temple of the Bow erfahren",
  "how": "Den Tempel bei normaler Erkundung selbst sehen und den Marker bestätigen. Keine eigene NPC-/Buchmarkierung belegt.",
  "source": "world_data.lua:317–324; OverworldTriggers.csv:183,196; bow-01Triggers.csv (locked_door great_key und weapon_guardian); data/ActorData - Sheet1.csv:179–187; state_game.lua:21846–21862,21954–21969",
  "kind": "exploration"
 },
 {
  "id": "dungeon-info-temple-reaper",
  "stages": [
   "prepare",
   "ship",
   "tower",
   "repository",
   "egg"
  ],
  "title": "Fundort von Temple of the Reaper erfahren",
  "how": "Den Tempel bei normaler Erkundung selbst sehen und den Marker bestätigen. Keine eigene NPC-/Buchmarkierung belegt.",
  "source": "world_data.lua:317–324; OverworldTriggers.csv:194,251; greataxe-01Triggers.csv (locked_door great_key und weapon_guardian); data/ActorData - Sheet1.csv:179–187; state_game.lua:21846–21862,21954–21969",
  "kind": "exploration"
 },
 {
  "id": "dungeon-info-temple-mace",
  "stages": [
   "prepare",
   "ship",
   "tower",
   "repository",
   "egg"
  ],
  "title": "Fundort von Temple of the Mace erfahren",
  "how": "Den Tempel bei normaler Erkundung selbst sehen und den Marker bestätigen. Keine eigene NPC-/Buchmarkierung belegt.",
  "source": "world_data.lua:317–324; OverworldTriggers.csv:245,399; club-01Triggers.csv (locked_door great_key und weapon_guardian); data/ActorData - Sheet1.csv:179–187; state_game.lua:21846–21862,21954–21969",
  "kind": "exploration"
 },
 {
  "id": "dungeon-info-temple-sword",
  "stages": [
   "prepare",
   "ship",
   "tower",
   "repository",
   "egg"
  ],
  "title": "Fundort von Temple of the Sword erfahren",
  "how": "Den Tempel bei normaler Erkundung selbst sehen und den Marker bestätigen. Keine eigene NPC-/Buchmarkierung belegt.",
  "source": "world_data.lua:317–324; OverworldTriggers.csv:208,395; sword-01Triggers.csv (locked_door great_key und weapon_guardian); data/ActorData - Sheet1.csv:179–187; state_game.lua:21846–21862,21954–21969",
  "kind": "exploration"
 },
 {
  "id": "dungeon-info-temple-cloak",
  "stages": [
   "prepare",
   "ship",
   "tower",
   "repository",
   "egg"
  ],
  "title": "Fundort von Temple of the Cloak erfahren",
  "how": "Den Tempel bei normaler Erkundung selbst sehen und den Marker bestätigen. Keine eigene NPC-/Buchmarkierung belegt.",
  "source": "world_data.lua:317–324; OverworldTriggers.csv:70,286; cloak-01Triggers.csv (locked_door great_key und weapon_guardian); data/ActorData - Sheet1.csv:179–187; state_game.lua:21846–21862,21954–21969",
  "kind": "exploration"
 },
 {
  "id": "dungeon-info-heart1",
  "stages": [
   "prepare",
   "ship",
   "tower",
   "repository"
  ],
  "title": "Fundort von Heart Temple 1 erfahren",
  "how": "Tempel bei einer normalen Reise selbst sehen und dessen Kartenmarker bestätigen. Keine belegte spezielle Dialogmarkierung.",
  "source": "world_data.lua:327–332; OverworldTriggers.csv:294; heart1Triggers.csv:3; state_game.lua:21846–21862,21954–21969",
  "kind": "exploration"
 },
 {
  "id": "dungeon-info-heart2",
  "stages": [
   "prepare",
   "ship",
   "tower",
   "repository"
  ],
  "title": "Fundort von Heart Temple 2 erfahren",
  "how": "Tempel bei einer normalen Reise selbst sehen und dessen Kartenmarker bestätigen. Keine belegte spezielle Dialogmarkierung.",
  "source": "world_data.lua:327–332; OverworldTriggers.csv:189; heart2Triggers.csv:3; state_game.lua:21846–21862,21954–21969",
  "kind": "exploration"
 },
 {
  "id": "dungeon-info-heart4",
  "stages": [
   "prepare",
   "ship",
   "tower",
   "repository"
  ],
  "title": "Fundort von Heart Temple 4 erfahren",
  "how": "Tempel bei einer normalen Reise selbst sehen und dessen Kartenmarker bestätigen. Keine belegte spezielle Dialogmarkierung.",
  "source": "world_data.lua:327–332; OverworldTriggers.csv:257; heart4Triggers.csv:3; state_game.lua:21846–21862,21954–21969",
  "kind": "exploration"
 },
 {
  "id": "dungeon-info-heart5",
  "stages": [
   "prepare",
   "ship",
   "tower",
   "repository"
  ],
  "title": "Fundort von Heart Temple 5 erfahren",
  "how": "Tempel bei einer normalen Reise selbst sehen und dessen Kartenmarker bestätigen. Keine belegte spezielle Dialogmarkierung.",
  "source": "world_data.lua:327–332; OverworldTriggers.csv:217; heart5Triggers.csv:3; state_game.lua:21846–21862,21954–21969",
  "kind": "exploration"
 },
 {
  "id": "dungeon-info-tear1",
  "stages": [
   "prepare",
   "ship",
   "tower",
   "repository",
   "egg"
  ],
  "title": "Fundort von Delera erfahren",
  "how": "Ruineneingang bei normaler Erkundung sehen und den Marker bestätigen; vor Ort das Schild lesen. Keine eigene Ortsmarkierung durch ein belegtes NPC-Gespräch.",
  "source": "world_data.lua:338; OverworldTriggers.csv:10,79; data/strings.lua:4; state_game.lua:14781–14789; data/ActorData - Sheet1.csv:178",
  "kind": "exploration"
 },
 {
  "id": "dungeon-info-tear2",
  "stages": [
   "prepare",
   "ship",
   "tower",
   "repository",
   "egg"
  ],
  "title": "Fundort von Oveera erfahren",
  "how": "Ruineneingang bei normaler Erkundung sehen und den Marker bestätigen; vor Ort das Schild lesen. Keine eigene Ortsmarkierung durch ein belegtes NPC-Gespräch.",
  "source": "world_data.lua:340; OverworldTriggers.csv:179,336; data/strings.lua:5; state_game.lua:14781–14789; data/ActorData - Sheet1.csv:178",
  "kind": "exploration"
 },
 {
  "id": "dungeon-info-tear3",
  "stages": [
   "prepare",
   "ship",
   "tower",
   "repository",
   "egg"
  ],
  "title": "Fundort von Soccera erfahren",
  "how": "Ruineneingang bei normaler Erkundung sehen und den Marker bestätigen; vor Ort das Schild lesen. Keine eigene Ortsmarkierung durch ein belegtes NPC-Gespräch.",
  "source": "world_data.lua:342; OverworldTriggers.csv:136,239; data/strings.lua:6; state_game.lua:14781–14789; data/ActorData - Sheet1.csv:178",
  "kind": "exploration"
 },
 {
  "id": "dungeon-info-tear4",
  "stages": [
   "prepare",
   "ship",
   "tower",
   "repository",
   "egg"
  ],
  "title": "Fundort von Nostera erfahren",
  "how": "Ruineneingang bei normaler Erkundung sehen und den Marker bestätigen; vor Ort das Schild lesen. Keine eigene Ortsmarkierung durch ein belegtes NPC-Gespräch.",
  "source": "world_data.lua:344; OverworldTriggers.csv:123,264; data/strings.lua:7; state_game.lua:14781–14789; data/ActorData - Sheet1.csv:178",
  "kind": "exploration"
 },
 {
  "id": "dungeon-info-tear5",
  "stages": [
   "prepare",
   "ship",
   "tower",
   "repository",
   "egg"
  ],
  "title": "Fundort von Issera erfahren",
  "how": "Ruineneingang bei normaler Erkundung sehen und den Marker bestätigen; vor Ort das Schild lesen. Keine eigene Ortsmarkierung durch ein belegtes NPC-Gespräch.",
  "source": "world_data.lua:346; OverworldTriggers.csv:23,94; data/strings.lua:8; state_game.lua:14781–14789; data/ActorData - Sheet1.csv:178",
  "kind": "exploration"
 },
 {
  "id": "dungeon-info-tear6",
  "stages": [
   "prepare",
   "ship",
   "tower",
   "repository",
   "egg"
  ],
  "title": "Fundort von Dusera erfahren",
  "how": "Ruineneingang bei normaler Erkundung sehen und den Marker bestätigen; vor Ort das Schild lesen. Keine eigene Ortsmarkierung durch ein belegtes NPC-Gespräch.",
  "source": "world_data.lua:348; OverworldTriggers.csv:40,402; data/strings.lua:9; state_game.lua:14781–14789; data/ActorData - Sheet1.csv:178",
  "kind": "exploration"
 },
 {
  "id": "dungeon-info-tear7",
  "stages": [
   "prepare",
   "ship",
   "tower",
   "repository",
   "egg"
  ],
  "title": "Fundort von Hasera erfahren",
  "how": "Ruineneingang bei normaler Erkundung sehen und den Marker bestätigen; vor Ort das Schild lesen. Keine eigene Ortsmarkierung durch ein belegtes NPC-Gespräch.",
  "source": "world_data.lua:350; OverworldTriggers.csv:260,344; data/strings.lua:10; state_game.lua:14781–14789; data/ActorData - Sheet1.csv:178",
  "kind": "exploration"
 },
 {
  "id": "dungeon-info-tear8",
  "stages": [
   "prepare",
   "ship",
   "tower",
   "repository",
   "egg"
  ],
  "title": "Fundort von Duera erfahren",
  "how": "Ruineneingang bei normaler Erkundung sehen und den Marker bestätigen; vor Ort das Schild lesen. Keine eigene Ortsmarkierung durch ein belegtes NPC-Gespräch.",
  "source": "world_data.lua:352; OverworldTriggers.csv:22,73; data/strings.lua:11; state_game.lua:14781–14789; data/ActorData - Sheet1.csv:178",
  "kind": "exploration"
 },
 {
  "id": "dungeon-info-tear9",
  "stages": [
   "prepare",
   "ship",
   "tower",
   "repository",
   "egg"
  ],
  "title": "Fundort von Tulera erfahren",
  "how": "Ruineneingang bei normaler Erkundung sehen und den Marker bestätigen; vor Ort das Schild lesen. Keine eigene Ortsmarkierung durch ein belegtes NPC-Gespräch.",
  "source": "world_data.lua:354; OverworldTriggers.csv:13,418; data/strings.lua:12; state_game.lua:14781–14789; data/ActorData - Sheet1.csv:178",
  "kind": "exploration"
 },
 {
  "id": "dungeon-info-tear10",
  "stages": [
   "prepare",
   "ship",
   "tower",
   "repository",
   "egg"
  ],
  "title": "Fundort von Mulera erfahren",
  "how": "Ruineneingang bei normaler Erkundung sehen und den Marker bestätigen; vor Ort das Schild lesen. Keine eigene Ortsmarkierung durch ein belegtes NPC-Gespräch.",
  "source": "world_data.lua:356; OverworldTriggers.csv:68,141; data/strings.lua:13; state_game.lua:14781–14789; data/ActorData - Sheet1.csv:178",
  "kind": "exploration"
 },
 {
  "id": "dungeon-info-ancestors",
  "stages": [
   "harrow",
   "barrow"
  ],
  "title": "Fundort von The Tomb of the Ancestors / Ancestors' Ossuary erfahren",
  "how": "In Harrowdus sprechende Gans: secrets → Bael's Key → Idiot → However. Die Notiz nennt hinter einer Wand in Barrow-Linn-Ossuary; anschließend in Barrow-Linn das Eingangsschild finden.",
  "source": "DialogueData - Sheet1.csv:275–281,347; data/strings.lua:43; ancestorsTriggers.csv:2–4; world_data.lua:137; Barrow-LinnTriggers.csv:2,5,13",
  "kind": "conversation"
 },
 {
  "id": "dungeon-info-beneath-keep",
  "stages": [
   "prepare",
   "repository",
   "egg"
  ],
  "title": "Fundort von Beneath the Keep erfahren",
  "how": "In Moon-upon-Thoss den verborgenen Eingang im Keep tatsächlich finden und bestätigen; keine eigene benannte NPC-Ortsmarkierung belegt.",
  "source": "world_data.lua:32,144; archonDungeon-01Triggers.csv:8–45; Moon-upon-ThossTriggers.csv:16,63",
  "kind": "exploration"
 },
 {
  "id": "dungeon-info-four-lakes",
  "stages": [
   "winter",
   "barrow"
  ],
  "title": "Fundort von Four Lake Meet erfahren",
  "how": "Wintersholl-Bewohner: north → ruin → where (Marker), alternativ das Barrow-Linn-Buch mit beschädigter Vier-Seen-Karte lesen.",
  "source": "DialogueData - Sheet1.csv:494–497; data/strings.lua:110; OverworldTriggers.csv:362; world_data.lua:335",
  "kind": "conversation"
 },
 {
  "id": "dungeon-info-egg",
  "stages": [
   "ship",
   "repository",
   "egg"
  ],
  "title": "Fundort von The Egg · DX erfahren",
  "how": "Auf einer Schiffsreise den großen Eistein selbst sehen und seinen Fundort bestätigen. Es ist kein fester NPC- oder Buchhinweis belegt. Das Anrempeln öffnet den Eingang; damit warten, bis deine Reserven bereit sind.",
  "source": "OverworldTriggers.csv:205,384; actor.lua:4213–4234; world_data.lua:205–314; dungeon7-100Triggers.csv:9; research-egg.md; https://store.steampowered.com/app/3498040/Moonring_DX/",
  "kind": "exploration"
 },
 {
  "id": "dungeon-info-lament",
  "stages": [
   "egg"
  ],
  "title": "Fundort von The Lament / The Tether erfahren",
  "how": "Nach der Roche-/Serpents-Spur Roches Erklärung zum südlichen Henge-Stein bei Harrowdus lesen; Bael's Key am Südstein Issacarr verwenden, Nostacarr erreichen und dort den Lament-Eingang selbst sehen.",
  "source": "DialogueData - Sheet1.csv:464–484,534; henges.lua:35–40; actions.lua:2266–2287; OverworldTriggers.csv:274,297; world_data.lua:198–203; globals.lua:409; research-route.md",
  "kind": "conversation"
 },
 {
  "id": "dungeon-info-ruin1",
  "stages": [
   "harrow",
   "repository"
  ],
  "title": "Fundort von The Poison Cross erfahren",
  "how": "Beim Ironmonger in Harrowdus Treasure Map #1 kaufen und wirklich lesen; danach den konkreten Ruinenmarker prüfen.",
  "source": "data/ObjectData - Sheet1.csv:389; state_game.lua:22519–22524; world_data.lua:66–70; ruin1Triggers.csv; research-route.md",
  "kind": "map"
 },
 {
  "id": "dungeon-info-ruin2",
  "stages": [
   "harrow",
   "repository"
  ],
  "title": "Fundort von The Venom Cube erfahren",
  "how": "Beim Ironmonger in Harrowdus Treasure Map #2 kaufen und wirklich lesen; danach den konkreten Ruinenmarker prüfen.",
  "source": "data/ObjectData - Sheet1.csv:390; state_game.lua:22519–22524; world_data.lua:66–70; ruin2Triggers.csv; research-route.md",
  "kind": "map"
 },
 {
  "id": "dungeon-info-ruin4",
  "stages": [
   "harrow",
   "repository"
  ],
  "title": "Fundort von The Enflamed Glade erfahren",
  "how": "Beim Ironmonger in Harrowdus Treasure Map #4 kaufen und wirklich lesen; danach den konkreten Ruinenmarker prüfen.",
  "source": "data/ObjectData - Sheet1.csv:392; state_game.lua:22519–22524; world_data.lua:66–70; ruin4Triggers.csv; research-route.md",
  "kind": "map"
 },
 {
  "id": "dungeon-info-ruin5",
  "stages": [
   "harrow",
   "repository"
  ],
  "title": "Fundort von The Magma Chamber erfahren",
  "how": "Beim Ironmonger in Harrowdus Treasure Map #5 kaufen und wirklich lesen; danach den konkreten Ruinenmarker prüfen.",
  "source": "data/ObjectData - Sheet1.csv:393; state_game.lua:22519–22524; world_data.lua:66–70; ruin5Triggers.csv; research-route.md",
  "kind": "map"
 },
 {
  "id": "dungeon-info-herbs1",
  "stages": [
   "harrow",
   "necropolis"
  ],
  "title": "Endera-Fundort über Treasure Map #6 erfahren",
  "how": "Beim Ironmonger im Südwesten Harrowdus Treasure Map #6 kaufen und Read verwenden. Erst die gelesene Karte markiert die Vier-Stein-Gruppe; die Handmaiden nennt nur das allgemeine Motiv.",
  "source": "data/ObjectData - Sheet1.csv:394; state_game.lua:22527–22533; OverworldTriggers.csv:35,101; world_data.lua:138; witches_herb_1Triggers.csv:3–5; research-route.md",
  "kind": "map"
 },
 {
  "id": "dungeon-info-herbs2",
  "stages": [
   "harrow",
   "necropolis"
  ],
  "title": "Endera-Fundort über Treasure Map #7 erfahren",
  "how": "Beim Ironmonger im Südwesten Harrowdus Treasure Map #7 kaufen und Read verwenden. Erst die gelesene Karte markiert die Vier-Stein-Gruppe; die Handmaiden nennt nur das allgemeine Motiv.",
  "source": "data/ObjectData - Sheet1.csv:395; state_game.lua:22527–22533; OverworldTriggers.csv:329,359; world_data.lua:139; witches_herb_2Triggers.csv:3–5; research-route.md",
  "kind": "map"
 },
 {
  "id": "dungeon-info-herbs3",
  "stages": [
   "harrow",
   "necropolis"
  ],
  "title": "Endera-Fundort über Treasure Map #8 erfahren",
  "how": "Beim Ironmonger im Südwesten Harrowdus Treasure Map #8 kaufen und Read verwenden. Erst die gelesene Karte markiert die Vier-Stein-Gruppe; die Handmaiden nennt nur das allgemeine Motiv.",
  "source": "data/ObjectData - Sheet1.csv:396; state_game.lua:22527–22533; OverworldTriggers.csv:199,230; world_data.lua:140; witches_herb_3Triggers.csv:3–5; research-route.md",
  "kind": "map"
 },
 {
  "id": "dungeon-info-herbs4",
  "stages": [
   "harrow",
   "necropolis"
  ],
  "title": "Endera-Fundort über Treasure Map #9 erfahren",
  "how": "Beim Ironmonger im Südwesten Harrowdus Treasure Map #9 kaufen und Read verwenden. Erst die gelesene Karte markiert die Vier-Stein-Gruppe; die Handmaiden nennt nur das allgemeine Motiv.",
  "source": "data/ObjectData - Sheet1.csv:397; state_game.lua:22527–22533; OverworldTriggers.csv:110,121; world_data.lua:141; witches_herb_4Triggers.csv:3–5; research-route.md",
  "kind": "map"
 },
 {
  "id": "dungeon-trail-cloak",
  "stages": [
   "winter",
   "prepare"
  ],
  "title": "Tower-Schlüsselspur: red cloak in Wintersholl verfolgt",
  "how": "Nach dem Hearthaven-Priester in Wintersholl einen Bewohner nach red cloak fragen. Die Antwort über den Besucher und seine Rückkehr nach Harrowdus lesen. Beim Wolf-Build auf der Rückreise in Etappe 8 nachholen.",
  "source": "DialogueData - Sheet1.csv:177,210–212",
  "requires": [
   "dungeon-info-tower"
  ],
  "kind": "conversation"
 },
 {
  "id": "dungeon-trail-triangle",
  "stages": [
   "harrow",
   "prepare"
  ],
  "title": "Tower-Schlüsselspur: triangular key in Harrowdus erfahren",
  "how": "Den Bewohner ansprechen, der von einem furtive visitor spricht: furtive → Although → triangular key. Seine Barrow-Linn-Spur lesen.",
  "source": "DialogueData - Sheet1.csv:263–265",
  "requires": [
   "dungeon-trail-cloak"
  ],
  "kind": "conversation"
 },
 {
  "id": "dungeon-trail-flimpy",
  "stages": [
   "barrow",
   "prepare"
  ],
  "title": "Tower-Schlüsselspur: Flimpys Hinweis erhalten",
  "how": "In Barrow-Linn triangular key → Funny fragen. Flimpy aufsuchen und fence → guess sagen. Erst abhaken, wenn seine Spur nach The Red Grove bekannt ist.",
  "source": "DialogueData - Sheet1.csv:334–340",
  "requires": [
   "dungeon-trail-triangle"
  ],
  "kind": "conversation"
 },
 {
  "id": "dungeon-trail-kenner",
  "stages": [
   "prepare"
  ],
  "title": "Tower-Schlüsselspur: Kenners Flucht erfahren",
  "how": "In The Red Grove stranger → Kenner → fled → Moon-upon-Thoss fragen. Den Hinweis auf die Hauptstadt lesen, bevor du dort nach Kenner fragst.",
  "source": "DialogueData - Sheet1.csv:389–394",
  "requires": [
   "dungeon-trail-flimpy"
  ],
  "kind": "conversation"
 },
 {
  "id": "dungeon-trail-repository",
  "stages": [
   "barrow",
   "repository"
  ],
  "title": "Repository-Spur und Locus-Box-Aufgabe erfahren",
  "how": "Beim Barrow-Linn-Priester Relic → Repository → unlikely → Locus Box → functioning → parts fragen. Die Antwort nennt eine ferne Insel, einen verlorenen Steinkreis und Fragmente in Ruinen; sie markiert den Dungeon noch nicht.",
  "source": "DialogueData - Sheet1.csv:316–323",
  "kind": "conversation"
 },
 {
  "id": "dungeon-access-great-key",
  "stages": [
   "ship",
   "tower",
   "egg"
  ],
  "title": "Great Key für die Waffentempel erhalten",
  "how": "Den Great Key tatsächlich im Inventar prüfen. Er stammt von Yeleba; dafür ist die Advanced Cannon aus Sea Cave nötig. Das Buch Ancient Treasures in Barrow-Linn erklärt seine Verwendung, Fire! die besondere Cannon. Ein gelesener Buchtitel ersetzt den Schlüsselfund nicht.",
  "source": "data/ObjectData - Sheet1.csv:399; data/ActorData - Sheet1.csv:188; data/strings.lua:102,112; data/treasure_sets.lua:865–869",
  "kind": "access"
 },
 {
  "id": "dungeon-seen-yarrow-cave",
  "stages": [
   "winter"
  ],
  "title": "Yarrow Cave: Eingang selbst entdeckt",
  "how": "Alternativer Wissenserwerb: Den konkreten Eingang oder Ort im Spiel selbst gesehen und eindeutig identifiziert haben. Ein Name im Guide, eine gekaufte ungelesene Karte oder ein Stadtbesuch zählt dafür nicht.",
  "source": "Eigene Sichtung; Ortsbelege: YarrowTriggers.csv:6–8,18,22,30,36–37; data/strings.lua:15; dungeon_data.lua:684–699; world_data.lua:87",
  "kind": "exploration"
 },
 {
  "id": "dungeon-seen-fallen-tunnel",
  "stages": [
   "prepare"
  ],
  "title": "The Fallen Tunnel: Eingang selbst entdeckt",
  "how": "Alternativer Wissenserwerb: Den konkreten Eingang oder Ort im Spiel selbst gesehen und eindeutig identifiziert haben. Ein Name im Guide, eine gekaufte ungelesene Karte oder ein Stadtbesuch zählt dafür nicht.",
  "source": "Eigene Sichtung; Ortsbelege: DialogueData - Sheet1.csv:149–151; OverworldTriggers.csv:167,370; world_data.lua:119; dungeon_data.lua:725–749",
  "kind": "exploration"
 },
 {
  "id": "dungeon-seen-crumbling-temple",
  "stages": [
   "ship"
  ],
  "title": "The Crumbling Temple: Eingang selbst entdeckt",
  "how": "Alternativer Wissenserwerb: Den konkreten Eingang oder Ort im Spiel selbst gesehen und eindeutig identifiziert haben. Ein Name im Guide, eine gekaufte ungelesene Karte oder ein Stadtbesuch zählt dafür nicht.",
  "source": "Eigene Sichtung; Ortsbelege: DialogueData - Sheet1.csv:288–291; OverworldTriggers.csv:15,106; world_data.lua:95; dungeon_data.lua:301–316",
  "kind": "exploration"
 },
 {
  "id": "dungeon-seen-hole",
  "stages": [
   "tower"
  ],
  "title": "The Hole: Eingang selbst entdeckt",
  "how": "Alternativer Wissenserwerb: Den konkreten Eingang oder Ort im Spiel selbst gesehen und eindeutig identifiziert haben. Ein Name im Guide, eine gekaufte ungelesene Karte oder ein Stadtbesuch zählt dafür nicht.",
  "source": "Eigene Sichtung; Ortsbelege: DialogueData - Sheet1.csv:221–224; OverworldTriggers.csv:283,292; world_data.lua:122; dungeon_data.lua:773–796",
  "kind": "exploration"
 },
 {
  "id": "dungeon-seen-sunken-edifice",
  "stages": [
   "necropolis"
  ],
  "title": "The Sunken Edifice: Eingang selbst entdeckt",
  "how": "Alternativer Wissenserwerb: Den konkreten Eingang oder Ort im Spiel selbst gesehen und eindeutig identifiziert haben. Ein Name im Guide, eine gekaufte ungelesene Karte oder ein Stadtbesuch zählt dafür nicht.",
  "source": "Eigene Sichtung; Ortsbelege: DialogueData - Sheet1.csv:342–344; OverworldTriggers.csv:9,21; world_data.lua:98; dungeon_data.lua:340–355",
  "kind": "exploration"
 },
 {
  "id": "dungeon-seen-albens-bane",
  "stages": [
   "ship"
  ],
  "title": "Alben's Bane: Eingang selbst entdeckt",
  "how": "Alternativer Wissenserwerb: Den konkreten Eingang oder Ort im Spiel selbst gesehen und eindeutig identifiziert haben. Ein Name im Guide, eine gekaufte ungelesene Karte oder ein Stadtbesuch zählt dafür nicht.",
  "source": "Eigene Sichtung; Ortsbelege: DialogueData - Sheet1.csv:181–183; OverworldTriggers.csv:160,248; world_data.lua:101; dungeon_data.lua:379–393",
  "kind": "exploration"
 },
 {
  "id": "dungeon-seen-hollows",
  "stages": [
   "necropolis"
  ],
  "title": "The Hollows: Eingang selbst entdeckt",
  "how": "Alternativer Wissenserwerb: Den konkreten Eingang oder Ort im Spiel selbst gesehen und eindeutig identifiziert haben. Ein Name im Guide, eine gekaufte ungelesene Karte oder ein Stadtbesuch zählt dafür nicht.",
  "source": "Eigene Sichtung; Ortsbelege: DialogueData - Sheet1.csv:395–409; OverworldTriggers.csv:130,302; world_data.lua:104; dungeon_data.lua:417–430",
  "kind": "exploration"
 },
 {
  "id": "dungeon-seen-hold",
  "stages": [
   "hold"
  ],
  "title": "The Hold: Eingang selbst entdeckt",
  "how": "Alternativer Wissenserwerb: Den konkreten Eingang oder Ort im Spiel selbst gesehen und eindeutig identifiziert haben. Ein Name im Guide, eine gekaufte ungelesene Karte oder ein Stadtbesuch zählt dafür nicht.",
  "source": "Eigene Sichtung; Ortsbelege: DialogueData - Sheet1.csv:213–220; OverworldTriggers.csv:224,268; dungeon_data.lua:544–562; data/treasure_sets.lua:883–886",
  "kind": "exploration"
 },
 {
  "id": "dungeon-seen-sleathen",
  "stages": [
   "garden"
  ],
  "title": "Sleathen's Wood: Eingang selbst entdeckt",
  "how": "Alternativer Wissenserwerb: Den konkreten Eingang oder Ort im Spiel selbst gesehen und eindeutig identifiziert haben. Ein Name im Guide, eine gekaufte ungelesene Karte oder ein Stadtbesuch zählt dafür nicht.",
  "source": "Eigene Sichtung; Ortsbelege: DialogueData - Sheet1.csv:197–201; OverworldTriggers.csv:72; data/ActorData - Sheet1.csv:175; world_data.lua:54",
  "kind": "exploration"
 },
 {
  "id": "dungeon-seen-garden",
  "stages": [
   "garden"
  ],
  "title": "The Garden of Lorelei: Eingang selbst entdeckt",
  "how": "Alternativer Wissenserwerb: Den konkreten Eingang oder Ort im Spiel selbst gesehen und eindeutig identifiziert haben. Ein Name im Guide, eine gekaufte ungelesene Karte oder ein Stadtbesuch zählt dafür nicht.",
  "source": "Eigene Sichtung; Ortsbelege: DialogueData - Sheet1.csv:197–201; OverworldTriggers.csv:288,333,386; world_data.lua:148–154; dungeon_data.lua:904–1124; dungeon1-07Triggers.csv (lord_of_trees); data/treasure_sets.lua:773–779",
  "kind": "exploration"
 },
 {
  "id": "dungeon-seen-click-clack",
  "stages": [
   "ship"
  ],
  "title": "Click Clack Hideout: Eingang selbst entdeckt",
  "how": "Alternativer Wissenserwerb: Den konkreten Eingang oder Ort im Spiel selbst gesehen und eindeutig identifiziert haben. Ein Name im Guide, eine gekaufte ungelesene Karte oder ein Stadtbesuch zählt dafür nicht.",
  "source": "Eigene Sichtung; Ortsbelege: HarrowdusTriggers.csv:21; data/strings.lua:87; DialogueData - Sheet1.csv:285–287; OverworldTriggers.csv:66,187; clickclack-01Triggers.csv:2–12",
  "kind": "exploration"
 },
 {
  "id": "dungeon-seen-sea-cave",
  "stages": [
   "ship"
  ],
  "title": "The Sea Cave: Eingang selbst entdeckt",
  "how": "Alternativer Wissenserwerb: Den konkreten Eingang oder Ort im Spiel selbst gesehen und eindeutig identifiziert haben. Ein Name im Guide, eine gekaufte ungelesene Karte oder ein Stadtbesuch zählt dafür nicht.",
  "source": "Eigene Sichtung; Ortsbelege: DialogueData - Sheet1.csv:511–512; OverworldTriggers.csv:27,247; dungeon_data.lua:820–844; state_game_dungeon_chunks.lua:877–878; data/treasure_sets.lua:865–869",
  "kind": "exploration"
 },
 {
  "id": "dungeon-seen-thief",
  "stages": [
   "tower"
  ],
  "title": "The Thief's Hideout: Eingang selbst entdeckt",
  "how": "Alternativer Wissenserwerb: Den konkreten Eingang oder Ort im Spiel selbst gesehen und eindeutig identifiziert haben. Ein Name im Guide, eine gekaufte ungelesene Karte oder ein Stadtbesuch zählt dafür nicht.",
  "source": "Eigene Sichtung; Ortsbelege: DialogueData - Sheet1.csv:177,210–212,263–265,334–340,389–394,504–507; OverworldTriggers.csv:93,238; thief_campTriggers.csv:2",
  "kind": "exploration"
 },
 {
  "id": "dungeon-seen-tower",
  "stages": [
   "tower"
  ],
  "title": "Tower of Veils: Eingang selbst entdeckt",
  "how": "Alternativer Wissenserwerb: Den konkreten Eingang oder Ort im Spiel selbst gesehen und eindeutig identifiziert haben. Ein Name im Guide, eine gekaufte ungelesene Karte oder ein Stadtbesuch zählt dafür nicht.",
  "source": "Eigene Sichtung; Ortsbelege: DialogueData - Sheet1.csv:175–177; OverworldTriggers.csv:126,316; world_data.lua:188–194; dungeon_data.lua:1955–2256; dungeon5-07Triggers.csv:6; actor_boss.lua:1448–1500",
  "kind": "exploration"
 },
 {
  "id": "dungeon-seen-jest",
  "stages": [
   "jest"
  ],
  "title": "The Jest: Eingang selbst entdeckt",
  "how": "Alternativer Wissenserwerb: Den konkreten Eingang oder Ort im Spiel selbst gesehen und eindeutig identifiziert haben. Ein Name im Guide, eine gekaufte ungelesene Karte oder ein Stadtbesuch zählt dafür nicht.",
  "source": "Eigene Sichtung; Ortsbelege: data/strings.lua:166; HarrowdusTriggers.csv:5,11; DialogueData - Sheet1.csv:243–247; world_data.lua:168–174; dungeon_data.lua:1365–1652; actor_boss.lua:945–1072",
  "kind": "exploration"
 },
 {
  "id": "dungeon-seen-meida",
  "stages": [
   "necropolis"
  ],
  "title": "Meida's Hideout: Eingang selbst entdeckt",
  "how": "Alternativer Wissenserwerb: Den konkreten Eingang oder Ort im Spiel selbst gesehen und eindeutig identifiziert haben. Ein Name im Guide, eine gekaufte ungelesene Karte oder ein Stadtbesuch zählt dafür nicht.",
  "source": "Eigene Sichtung; Ortsbelege: data/ObjectData - Sheet1.csv:398; OverworldTriggers.csv:145,150; state_game.lua:22527–22533; dungeon_data.lua:147–160; data/treasure_sets.lua:877–881",
  "kind": "exploration"
 },
 {
  "id": "dungeon-seen-necropolis",
  "stages": [
   "necropolis"
  ],
  "title": "The Necropolis: Eingang selbst entdeckt",
  "how": "Alternativer Wissenserwerb: Den konkreten Eingang oder Ort im Spiel selbst gesehen und eindeutig identifiziert haben. Ein Name im Guide, eine gekaufte ungelesene Karte oder ein Stadtbesuch zählt dafür nicht.",
  "source": "Eigene Sichtung; Ortsbelege: DialogueData - Sheet1.csv:363–380; OverworldTriggers.csv:149,290; world_data.lua:158–164; dungeon_data.lua:1130–1359; dungeon4-07Triggers.csv:9,14",
  "kind": "exploration"
 },
 {
  "id": "dungeon-seen-bael",
  "stages": [
   "repository"
  ],
  "title": "Bael's Tomb: Eingang selbst entdeckt",
  "how": "Alternativer Wissenserwerb: Den konkreten Eingang oder Ort im Spiel selbst gesehen und eindeutig identifiziert haben. Ein Name im Guide, eine gekaufte ungelesene Karte oder ein Stadtbesuch zählt dafür nicht.",
  "source": "Eigene Sichtung; Ortsbelege: data/ObjectData - Sheet1.csv:391; OverworldTriggers.csv:5,19; world_data.lua:68,113; dungeon_data.lua:585–610; data/treasure_sets.lua:871–875",
  "kind": "exploration"
 },
 {
  "id": "dungeon-seen-repository",
  "stages": [
   "repository"
  ],
  "title": "The Repository: Eingang selbst entdeckt",
  "how": "Alternativer Wissenserwerb: Den konkreten Eingang oder Ort im Spiel selbst gesehen und eindeutig identifiziert haben. Ein Name im Guide, eine gekaufte ungelesene Karte oder ein Stadtbesuch zählt dafür nicht.",
  "source": "Eigene Sichtung; Ortsbelege: DialogueData - Sheet1.csv:316–323; state_game.lua:22502–22516,21846–21862; OverworldTriggers.csv:218,298; world_data.lua:178–184; dungeon_data.lua:1658–1950; actor_boss.lua:1152–1236",
  "kind": "exploration"
 },
 {
  "id": "dungeon-seen-ancestors",
  "stages": [
   "barrow"
  ],
  "title": "The Tomb of the Ancestors / Ancestors' Ossuary: Eingang selbst entdeckt",
  "how": "Alternativer Wissenserwerb: Den konkreten Eingang oder Ort im Spiel selbst gesehen und eindeutig identifiziert haben. Ein Name im Guide, eine gekaufte ungelesene Karte oder ein Stadtbesuch zählt dafür nicht.",
  "source": "Eigene Sichtung; Ortsbelege: DialogueData - Sheet1.csv:275–281,347; data/strings.lua:43; ancestorsTriggers.csv:2–4; world_data.lua:137; Barrow-LinnTriggers.csv:2,5,13",
  "kind": "exploration"
 },
 {
  "id": "dungeon-seen-four-lakes",
  "stages": [
   "jest"
  ],
  "title": "Four Lake Meet: Eingang selbst entdeckt",
  "how": "Alternativer Wissenserwerb: Den konkreten Eingang oder Ort im Spiel selbst gesehen und eindeutig identifiziert haben. Ein Name im Guide, eine gekaufte ungelesene Karte oder ein Stadtbesuch zählt dafür nicht.",
  "source": "Eigene Sichtung; Ortsbelege: DialogueData - Sheet1.csv:494–497; data/strings.lua:110; OverworldTriggers.csv:362; world_data.lua:335",
  "kind": "exploration"
 },
 {
  "id": "dungeon-seen-lament",
  "stages": [
   "egg"
  ],
  "title": "The Lament / The Tether: Eingang selbst entdeckt",
  "how": "Alternativer Wissenserwerb: Den konkreten Eingang oder Ort im Spiel selbst gesehen und eindeutig identifiziert haben. Ein Name im Guide, eine gekaufte ungelesene Karte oder ein Stadtbesuch zählt dafür nicht.",
  "source": "Eigene Sichtung; Ortsbelege: DialogueData - Sheet1.csv:464–484,534; henges.lua:35–40; actions.lua:2266–2287; OverworldTriggers.csv:274,297; world_data.lua:198–203; globals.lua:409; research-route.md",
  "kind": "exploration"
 },
 {
  "id": "dungeon-seen-ruin1",
  "stages": [
   "repository"
  ],
  "title": "The Poison Cross: Eingang selbst entdeckt",
  "how": "Alternativer Wissenserwerb: Den konkreten Eingang oder Ort im Spiel selbst gesehen und eindeutig identifiziert haben. Ein Name im Guide, eine gekaufte ungelesene Karte oder ein Stadtbesuch zählt dafür nicht.",
  "source": "Eigene Sichtung; Ortsbelege: data/ObjectData - Sheet1.csv:389; state_game.lua:22519–22524; world_data.lua:66–70; ruin1Triggers.csv; research-route.md",
  "kind": "exploration"
 },
 {
  "id": "dungeon-seen-ruin2",
  "stages": [
   "repository"
  ],
  "title": "The Venom Cube: Eingang selbst entdeckt",
  "how": "Alternativer Wissenserwerb: Den konkreten Eingang oder Ort im Spiel selbst gesehen und eindeutig identifiziert haben. Ein Name im Guide, eine gekaufte ungelesene Karte oder ein Stadtbesuch zählt dafür nicht.",
  "source": "Eigene Sichtung; Ortsbelege: data/ObjectData - Sheet1.csv:390; state_game.lua:22519–22524; world_data.lua:66–70; ruin2Triggers.csv; research-route.md",
  "kind": "exploration"
 },
 {
  "id": "dungeon-seen-ruin4",
  "stages": [
   "repository"
  ],
  "title": "The Enflamed Glade: Eingang selbst entdeckt",
  "how": "Alternativer Wissenserwerb: Den konkreten Eingang oder Ort im Spiel selbst gesehen und eindeutig identifiziert haben. Ein Name im Guide, eine gekaufte ungelesene Karte oder ein Stadtbesuch zählt dafür nicht.",
  "source": "Eigene Sichtung; Ortsbelege: data/ObjectData - Sheet1.csv:392; state_game.lua:22519–22524; world_data.lua:66–70; ruin4Triggers.csv; research-route.md",
  "kind": "exploration"
 },
 {
  "id": "dungeon-seen-ruin5",
  "stages": [
   "repository"
  ],
  "title": "The Magma Chamber: Eingang selbst entdeckt",
  "how": "Alternativer Wissenserwerb: Den konkreten Eingang oder Ort im Spiel selbst gesehen und eindeutig identifiziert haben. Ein Name im Guide, eine gekaufte ungelesene Karte oder ein Stadtbesuch zählt dafür nicht.",
  "source": "Eigene Sichtung; Ortsbelege: data/ObjectData - Sheet1.csv:393; state_game.lua:22519–22524; world_data.lua:66–70; ruin5Triggers.csv; research-route.md",
  "kind": "exploration"
 },
 {
  "id": "dungeon-seen-herbs1",
  "stages": [
   "necropolis"
  ],
  "title": "Endera-Viersteingruppe · Map #6: Eingang selbst entdeckt",
  "how": "Alternativer Wissenserwerb: Den konkreten Eingang oder Ort im Spiel selbst gesehen und eindeutig identifiziert haben. Ein Name im Guide, eine gekaufte ungelesene Karte oder ein Stadtbesuch zählt dafür nicht.",
  "source": "Eigene Sichtung; Ortsbelege: data/ObjectData - Sheet1.csv:394; state_game.lua:22527–22533; OverworldTriggers.csv:35,101; world_data.lua:138; witches_herb_1Triggers.csv:3–5; research-route.md",
  "kind": "exploration"
 },
 {
  "id": "dungeon-seen-herbs2",
  "stages": [
   "necropolis"
  ],
  "title": "Endera-Viersteingruppe · Map #7: Eingang selbst entdeckt",
  "how": "Alternativer Wissenserwerb: Den konkreten Eingang oder Ort im Spiel selbst gesehen und eindeutig identifiziert haben. Ein Name im Guide, eine gekaufte ungelesene Karte oder ein Stadtbesuch zählt dafür nicht.",
  "source": "Eigene Sichtung; Ortsbelege: data/ObjectData - Sheet1.csv:395; state_game.lua:22527–22533; OverworldTriggers.csv:329,359; world_data.lua:139; witches_herb_2Triggers.csv:3–5; research-route.md",
  "kind": "exploration"
 },
 {
  "id": "dungeon-seen-herbs3",
  "stages": [
   "necropolis"
  ],
  "title": "Endera-Viersteingruppe · Map #8: Eingang selbst entdeckt",
  "how": "Alternativer Wissenserwerb: Den konkreten Eingang oder Ort im Spiel selbst gesehen und eindeutig identifiziert haben. Ein Name im Guide, eine gekaufte ungelesene Karte oder ein Stadtbesuch zählt dafür nicht.",
  "source": "Eigene Sichtung; Ortsbelege: data/ObjectData - Sheet1.csv:396; state_game.lua:22527–22533; OverworldTriggers.csv:199,230; world_data.lua:140; witches_herb_3Triggers.csv:3–5; research-route.md",
  "kind": "exploration"
 },
 {
  "id": "dungeon-seen-herbs4",
  "stages": [
   "necropolis"
  ],
  "title": "Endera-Viersteingruppe · Map #9: Eingang selbst entdeckt",
  "how": "Alternativer Wissenserwerb: Den konkreten Eingang oder Ort im Spiel selbst gesehen und eindeutig identifiziert haben. Ein Name im Guide, eine gekaufte ungelesene Karte oder ein Stadtbesuch zählt dafür nicht.",
  "source": "Eigene Sichtung; Ortsbelege: data/ObjectData - Sheet1.csv:397; state_game.lua:22527–22533; OverworldTriggers.csv:110,121; world_data.lua:141; witches_herb_4Triggers.csv:3–5; research-route.md",
  "kind": "exploration"
 }
];

export const dungeons:Dungeon[]=[
 {
  "id": "yarrow-cave",
  "name": "Yarrow Cave",
  "category": "route",
  "hints": [
   "dungeon-info-yarrow-cave"
  ],
  "stage": {
   "wolf": "winter",
   "lady": "red"
  },
  "difficulty": "Früh, aber gefährlich",
  "assessment": "Kleine Starterhöhle ohne generierte Fallen, aber noch schwacher Startcharakter; früh möglich und trotzdem gefährlich.",
  "size": "1 Etage",
  "boss": "Shield Bug als Hauptwächter; Silverwolf als mögliche Minibosse.",
  "retreat": "Der Eingang schließt hinter dir. Master Key aus dem Hauptschatz finden, dann zum Ausgang zurückkehren.",
  "location": "Im Familienfriedhof nördlich der Yarrow-Farm.",
  "anchor": "Yarrow lokal (42,41).",
  "access": "Graveyard Key öffnet das Friedhofstor. Einwegwarnung beachten.",
  "plan": "Nach der ersten Wolf-Gabe oder Gash/Feast der Lady früh zurückkehren; keine vollständige Städtereise abwarten.",
  "doneId": "yarrow-2",
  "doneText": "Yarrow Cave abschließen und den Hauptfund mitnehmen.",
  "source": "YarrowTriggers.csv:6–8,18,22,30,36–37; data/strings.lua:15; dungeon_data.lua:684–699; world_data.lua:87",
  "accessChecks": [
   "yarrow-1"
  ],
  "alternativeHints": [
   "dungeon-seen-yarrow-cave"
  ]
 },
 {
  "id": "lost-tunnels",
  "name": "The Lost Tunnels",
  "category": "optional",
  "hints": [
   "dungeon-info-lost-tunnels"
  ],
  "stage": "prepare",
  "difficulty": "Mittel",
  "assessment": "Forgotten, stärkere Fledermäuse/Hive, Rot-/Blindheitsfallen und zwei Bell-Räume; Nähe zur Hauptstadt macht den Kampf nicht leicht.",
  "size": "1 Etage",
  "boss": "Gourmand oder Hulk als generierter Hauptwächter/Miniboss.",
  "retreat": "Der Eingang schließt hinter dir. Master Key aus dem Hauptschatz finden, dann zum Ausgang zurückkehren.",
  "location": "Direkt östlich Moon-upon-Thoss.",
  "anchor": "(253,243)",
  "access": "Keine besondere Zugangssperre.",
  "plan": "Nur bei bestätigtem Fundorthinweis und aufgefüllter Heilung, Energie, Poise sowie passender Munition angehen.",
  "doneId": "dungeon-done-lost-tunnels",
  "doneText": "The Lost Tunnels abschließen und den Hauptfund mitnehmen.",
  "source": "OverworldTriggers.csv:203,235; world_data.lua:92; dungeon_data.lua:248–277; state_game.lua:21846–21862,21954–21969"
 },
 {
  "id": "fallen-tunnel",
  "name": "The Fallen Tunnel",
  "category": "optional",
  "hints": [
   "dungeon-info-fallen-tunnel"
  ],
  "stage": "prepare",
  "difficulty": "Mittel",
  "assessment": "Forgotten/Fledermäuse der ersten Gruppenstufe, Status- und Feuerfallen; Warlord und verriegelter Rückweg machen dies schwerer als Yarrow.",
  "size": "1 Etage",
  "boss": "Silverwolf als Hauptwächter; Warlord als mögliche Minibosse.",
  "retreat": "Der Eingang schließt hinter dir. Master Key aus dem Hauptschatz finden, dann zum Ausgang zurückkehren.",
  "location": "Östlich Yarrow, auf der Reise Richtung Wintersholl.",
  "anchor": "(294,229)",
  "access": "Keine besondere Zugangssperre.",
  "plan": "Nur bei bestätigtem Fundorthinweis und aufgefüllter Heilung, Energie, Poise sowie passender Munition angehen.",
  "doneId": "dungeon-done-fallen-tunnel",
  "doneText": "The Fallen Tunnel abschließen und den Hauptfund mitnehmen.",
  "source": "DialogueData - Sheet1.csv:149–151; OverworldTriggers.csv:167,370; world_data.lua:119; dungeon_data.lua:725–749",
  "alternativeHints": [
   "dungeon-seen-fallen-tunnel"
  ]
 },
 {
  "id": "crumbling-temple",
  "name": "The Crumbling Temple",
  "category": "optional",
  "hints": [
   "dungeon-info-crumbling-temple"
  ],
  "stage": "ship",
  "difficulty": "Schwer",
  "assessment": "Forgotten_2, Hive/Bats, Stacheln/Stun/Amber und Negate-Turrets. Erst nach Garden mit stärkerem Build.",
  "size": "1 Etage",
  "boss": "Hulk als generierter Hauptwächter und mögliche Minibosse.",
  "retreat": "Der Eingang schließt hinter dir. Master Key aus dem Hauptschatz finden, dann zum Ausgang zurückkehren.",
  "location": "Nordwestlich Harrowdus im Wald; südwestlich Wintersholl.",
  "anchor": "(292,269)",
  "access": "Keine besondere Zugangssperre.",
  "plan": "Nur bei bestätigtem Fundorthinweis und aufgefüllter Heilung, Energie, Poise sowie passender Munition angehen.",
  "doneId": "dungeon-done-crumbling-temple",
  "doneText": "The Crumbling Temple abschließen und den Hauptfund mitnehmen.",
  "source": "DialogueData - Sheet1.csv:288–291; OverworldTriggers.csv:15,106; world_data.lua:95; dungeon_data.lua:301–316",
  "alternativeHints": [
   "dungeon-seen-crumbling-temple"
  ]
 },
 {
  "id": "hole",
  "name": "The Hole",
  "category": "optional",
  "hints": [
   "dungeon-info-hole"
  ],
  "stage": "tower",
  "difficulty": "Schwer",
  "assessment": "Vor allem Feuerfallen (Gewichtung 10), zusätzlich Rot/Gift/Blindheit. Wintertree-Amulett aus Tower ist eine sinnvolle spätere Hilfe.",
  "size": "1 Etage",
  "boss": "Silverwolf als Hauptwächter; Warlord als mögliche Minibosse.",
  "retreat": "Der Eingang schließt hinter dir. Master Key aus dem Hauptschatz finden, dann zum Ausgang zurückkehren.",
  "location": "In den Bergen westlich und leicht südlich Wintersholl.",
  "anchor": "(295,254)",
  "access": "Keine besondere Zugangssperre.",
  "plan": "Nur bei bestätigtem Fundorthinweis und aufgefüllter Heilung, Energie, Poise sowie passender Munition angehen.",
  "doneId": "dungeon-done-hole",
  "doneText": "The Hole abschließen und den Hauptfund mitnehmen.",
  "source": "DialogueData - Sheet1.csv:221–224; OverworldTriggers.csv:283,292; world_data.lua:122; dungeon_data.lua:773–796",
  "alternativeHints": [
   "dungeon-seen-hole"
  ]
 },
 {
  "id": "sunken-edifice",
  "name": "The Sunken Edifice",
  "category": "optional",
  "hints": [
   "dungeon-info-sunken-edifice"
  ],
  "stage": "necropolis",
  "difficulty": "Schwer",
  "assessment": "Stärkere Forgotten_3/Bats_3, Rot-Maiden, Negate-Turrets und Feuer/Stacheln/Stun; nicht beim ersten Stadtbesuch erzwingen.",
  "size": "1 Etage",
  "boss": "Hulk als generierter Hauptwächter und mögliche Minibosse.",
  "retreat": "Der Eingang schließt hinter dir. Master Key aus dem Hauptschatz finden, dann zum Ausgang zurückkehren.",
  "location": "Südwestlich Barrow-Linn auf dessen Insel.",
  "anchor": "(180,302)",
  "access": "Keine besondere Zugangssperre.",
  "plan": "Nur bei bestätigtem Fundorthinweis und aufgefüllter Heilung, Energie, Poise sowie passender Munition angehen.",
  "doneId": "dungeon-done-sunken-edifice",
  "doneText": "The Sunken Edifice abschließen und den Hauptfund mitnehmen.",
  "source": "DialogueData - Sheet1.csv:342–344; OverworldTriggers.csv:9,21; world_data.lua:98; dungeon_data.lua:340–355",
  "alternativeHints": [
   "dungeon-seen-sunken-edifice"
  ]
 },
 {
  "id": "albens-bane",
  "name": "Alben's Bane",
  "category": "optional",
  "hints": [
   "dungeon-info-albens-bane"
  ],
  "stage": "ship",
  "difficulty": "Schwer",
  "assessment": "Revenants_2, stärkere Bats/Hive und ein breites Feld an Statusfallen. Nach Garden als optionalen Umweg anbieten.",
  "size": "1 Etage",
  "boss": "Borog als generierter Hauptwächter und mögliche Minibosse.",
  "retreat": "Der Eingang schließt hinter dir. Master Key aus dem Hauptschatz finden, dann zum Ausgang zurückkehren.",
  "location": "Südlich Hearthaven, nahe dem Weg zum Tower.",
  "anchor": "(247,173)",
  "access": "Keine besondere Zugangssperre.",
  "plan": "Nur bei bestätigtem Fundorthinweis und aufgefüllter Heilung, Energie, Poise sowie passender Munition angehen.",
  "doneId": "dungeon-done-albens-bane",
  "doneText": "Alben's Bane abschließen und den Hauptfund mitnehmen.",
  "source": "DialogueData - Sheet1.csv:181–183; OverworldTriggers.csv:160,248; world_data.lua:101; dungeon_data.lua:379–393",
  "alternativeHints": [
   "dungeon-seen-albens-bane"
  ]
 },
 {
  "id": "hollows",
  "name": "The Hollows",
  "category": "optional",
  "hints": [
   "dungeon-info-hollows"
  ],
  "stage": "necropolis",
  "difficulty": "Schwer",
  "assessment": "Revenants_3, Bats_4, Warlord und Amber/Stun/Torpor-Fallen. Nach Tower mit zuverlässiger Distanz-/Heilroutine.",
  "size": "1 Etage",
  "boss": "Warlord als generierter Hauptwächter und mögliche Minibosse.",
  "retreat": "Der Eingang schließt hinter dir. Master Key aus dem Hauptschatz finden, dann zum Ausgang zurückkehren.",
  "location": "Südlich The Red Grove in den Bergen.",
  "anchor": "(180,216)",
  "access": "Keine besondere Zugangssperre.",
  "plan": "Nur bei bestätigtem Fundorthinweis und aufgefüllter Heilung, Energie, Poise sowie passender Munition angehen.",
  "doneId": "dungeon-done-hollows",
  "doneText": "The Hollows abschließen und den Hauptfund mitnehmen.",
  "source": "DialogueData - Sheet1.csv:395–409; OverworldTriggers.csv:130,302; world_data.lua:104; dungeon_data.lua:417–430",
  "alternativeHints": [
   "dungeon-seen-hollows"
  ]
 },
 {
  "id": "warrens",
  "name": "The Warrens",
  "category": "optional",
  "hints": [
   "dungeon-info-warrens"
  ],
  "stage": "egg",
  "difficulty": "Sehr schwer",
  "assessment": "Revenants_3, Todes-Maiden und Gift/Rot/Blindheit/Stun. Nach fünf Relikten, vor dem Abschluss; ein schwerer optionaler Ausflug.",
  "size": "1 Etage",
  "boss": "Revenant oder Warlord aus dem Miniboss-Pool wird Hauptwächter.",
  "retreat": "Der Eingang schließt hinter dir. Master Key aus dem Hauptschatz finden, dann zum Ausgang zurückkehren.",
  "location": "Südöstlich der Caldera, nur über das Meer erreichbar.",
  "anchor": "(344,404)",
  "access": "Keine besondere Zugangssperre.",
  "plan": "Nur bei bestätigtem Fundorthinweis und aufgefüllter Heilung, Energie, Poise sowie passender Munition angehen.",
  "doneId": "dungeon-done-warrens",
  "doneText": "The Warrens abschließen und den Hauptfund mitnehmen.",
  "source": "OverworldTriggers.csv:75,234; world_data.lua:128–129; dungeon_data.lua:870–895; state_game_dungeon_chunks.lua:877–878; state_game.lua:21846–21862,21954–21969",
  "accessChecks": [
   "ship-1"
  ]
 },
 {
  "id": "hold",
  "name": "The Hold",
  "category": "route",
  "hints": [
   "dungeon-info-hold"
  ],
  "stage": "hold",
  "difficulty": "Schwer",
  "assessment": "Cyroden hat 1.000 Health (ActorData.csv:190); früh in der Reliktroute, aber kein leichter Starterboss.",
  "size": "1 Etage",
  "boss": "Cyroden als Hauptwächter; Revenants und mögliche Revenant-Minibosse.",
  "retreat": "Der Eingang schließt hinter dir. Master Key aus dem Hauptschatz finden, dann zum Ausgang zurückkehren.",
  "location": "An der Küste südwestlich Wintersholl, nahe Fieracarr.",
  "anchor": "(322,251)",
  "access": "Keine besondere Zugangssperre.",
  "plan": "Nach Städtereise und Vorbereitung vor Sleathen/Garden. Tooth of Sleathen aus dem Hauptschatz holen.",
  "doneId": "hold-0",
  "doneText": "The Hold abschließen und den Hauptfund mitnehmen.",
  "source": "DialogueData - Sheet1.csv:213–220; OverworldTriggers.csv:224,268; dungeon_data.lua:544–562; data/treasure_sets.lua:883–886",
  "alternativeHints": [
   "dungeon-seen-hold"
  ]
 },
 {
  "id": "sleathen",
  "name": "Sleathen's Wood",
  "category": "route",
  "hints": [
   "dungeon-info-sleathen"
  ],
  "stage": "garden",
  "difficulty": "Schwer",
  "assessment": "Besondere Waffenregel und gefährlicher Einzelgegner: erst nach The Hold. Tooth of Sleathen ist auch beim Bogen-Build nötig.",
  "size": "Offenes Waldareal",
  "boss": "Sleathen; normale Waffen umgehen die Spezialwaffenregel nicht.",
  "retreat": "Offenes Areal; Abstand gewinnen und zum Weltkartenrand zurückziehen ist möglich.",
  "location": "Nordwestlich Wintersholl, bei vier toten Bäumen.",
  "anchor": "(294,206)",
  "access": "Tooth of Sleathen aus The Hold als Nahkampfwaffe wirklich ausrüsten.",
  "plan": "Nach The Hold; Kopf für Garden aufnehmen.",
  "doneId": "garden-0",
  "doneText": "Sleathen's Wood abschließen und den Hauptfund mitnehmen.",
  "source": "DialogueData - Sheet1.csv:197–201; OverworldTriggers.csv:72; data/ActorData - Sheet1.csv:175; world_data.lua:54",
  "accessChecks": [
   "hold-0"
  ],
  "alternativeHints": [
   "dungeon-seen-sleathen"
  ]
 },
 {
  "id": "garden",
  "name": "The Garden of Lorelei",
  "category": "route",
  "hints": [
   "dungeon-info-garden"
  ],
  "stage": "garden",
  "difficulty": "Schwer",
  "assessment": "Sieben Etagen mit wechselnden Gegnergruppen und Statusfallen; erster großer Ausdauertest nach The Hold und Sleathen.",
  "size": "7 Etagen",
  "boss": "The Lord of Trees auf Etage 7; davor eigene Etagenwächter.",
  "retreat": "Kein Rückweg an die Oberfläche vom Eingang. Zwischen mittleren Etagen kann man zurück; zum Verlassen Lord of Trees besiegen.",
  "location": "Nördlich Wintersholl.",
  "anchor": "(335,226)",
  "access": "Sleathen's Head öffnet den Zugang.",
  "plan": "Erstes empfohlenes Relikt nach The Hold/Sleathen. Steadfast Hand und Lightning-bolt Amulet nehmen.",
  "doneId": "garden-1",
  "doneText": "The Garden of Lorelei abschließen und den Hauptfund mitnehmen.",
  "source": "DialogueData - Sheet1.csv:197–201; OverworldTriggers.csv:288,333,386; world_data.lua:148–154; dungeon_data.lua:904–1124; dungeon1-07Triggers.csv (lord_of_trees); data/treasure_sets.lua:773–779",
  "accessChecks": [
   "garden-0"
  ],
  "alternativeHints": [
   "dungeon-seen-garden"
  ]
 },
 {
  "id": "click-clack",
  "name": "Click Clack Hideout",
  "category": "route",
  "hints": [
   "dungeon-info-click-clack"
  ],
  "stage": "ship",
  "difficulty": "Schwer",
  "assessment": "Mehrere Assassinen und ein Anführer in einem festen Areal. Nach dem ersten Relikt angehen; der freie Rückweg erleichtert einen abgebrochenen Versuch.",
  "size": "1 festes Areal",
  "boss": "Click Clack Leader und mehrere Bandit Assassins.",
  "retreat": "Offenes festes Areal; Rückzug an den Rand möglich. Kein Master-Key-Dungeon.",
  "location": "Südwestlich Harrowdus.",
  "anchor": "(296,319)",
  "access": "Keine besondere Zugangssperre.",
  "plan": "Nach Garden für den Forged Ship Title. Leader-Schlüssel für die Truhe benutzen.",
  "doneId": "ship-0",
  "doneText": "Click Clack Hideout abschließen und den Hauptfund mitnehmen.",
  "source": "HarrowdusTriggers.csv:21; data/strings.lua:87; DialogueData - Sheet1.csv:285–287; OverworldTriggers.csv:66,187; clickclack-01Triggers.csv:2–12",
  "alternativeHints": [
   "dungeon-seen-click-clack"
  ]
 },
 {
  "id": "sea-cave",
  "name": "The Sea Cave",
  "category": "route",
  "hints": [
   "dungeon-info-sea-cave"
  ],
  "stage": "ship",
  "difficulty": "Schwer",
  "assessment": "Revenants_3, Blind-/Negate-Turrets, Fallen und ein Bell-Raum; kein kampfloser Cannon-Fund.",
  "size": "1 Etage",
  "boss": "Revenant oder Warlord aus dem Miniboss-Pool wird Hauptwächter.",
  "retreat": "Der Eingang schließt hinter dir. Master Key aus dem Hauptschatz finden, dann zum Ausgang zurückkehren.",
  "location": "Kurz südwestlich Moon-upon-Thoss, hinter unpassierbarer Küste.",
  "anchor": "(245,254)",
  "access": "Ein Schiff; Zugang vom Meer.",
  "plan": "Nach dem Forged Ship Title; Advanced Cannon aus dem Hauptschatz nehmen.",
  "doneId": "ship-2",
  "doneText": "The Sea Cave abschließen und den Hauptfund mitnehmen.",
  "source": "DialogueData - Sheet1.csv:511–512; OverworldTriggers.csv:27,247; dungeon_data.lua:820–844; state_game_dungeon_chunks.lua:877–878; data/treasure_sets.lua:865–869",
  "accessChecks": [
   "ship-1"
  ],
  "alternativeHints": [
   "dungeon-seen-sea-cave"
  ]
 },
 {
  "id": "thief",
  "name": "The Thief's Hideout",
  "category": "route",
  "hints": [
   "dungeon-info-thief"
  ],
  "stage": "tower",
  "difficulty": "Schwer",
  "assessment": "Bewaffneter Schlüsselwächter auf einer Insel. Nach Garden und Schiffsbesorgung einplanen, mit aufgefüllten Kampfreserven.",
  "size": "1 festes Areal",
  "boss": "Thief of Keys (Kenner).",
  "retreat": "Offenes Inselareal; Rückzug an den Kartenrand möglich.",
  "location": "Auf einer Insel nordöstlich Wintersholl, südöstlich des großen Meereskreuzes.",
  "anchor": "(360,148)",
  "access": "Ein Schiff für die Insel.",
  "plan": "Vor Tower die Tower Keys erkämpfen.",
  "doneId": "tower-0",
  "doneText": "The Thief's Hideout abschließen und den Hauptfund mitnehmen.",
  "source": "DialogueData - Sheet1.csv:177,210–212,263–265,334–340,389–394,504–507; OverworldTriggers.csv:93,238; thief_campTriggers.csv:2",
  "accessChecks": [
   "ship-1"
  ],
  "alternativeHints": [
   "dungeon-seen-thief"
  ]
 },
 {
  "id": "tower",
  "name": "Tower of Veils",
  "category": "route",
  "hints": [
   "dungeon-info-tower"
  ],
  "stage": "tower",
  "difficulty": "Schwer",
  "assessment": "Sieben Etagen, mechanische Gegner und ein Boss mit eigener Schildmechanik. Nach Garden; das Feuerabwehr-Amulett hilft bei den folgenden Zielen.",
  "size": "7 Etagen",
  "boss": "Almas the Unseeing auf Etage 7; Great Gazers/Tanks als Etagenwächter.",
  "retreat": "Eingang geschlossen; sieben Etagen und Reliktboss für Rückkehr an die Oberfläche.",
  "location": "Südwestlich Hearthaven.",
  "anchor": "(238,169)",
  "access": "Tower Keys aus The Thief's Hideout.",
  "plan": "Nach Garden/Schiff/Kenner, vor Jest; All-seeing Eye und Amulet of Wintertree holen. Alle vier Braziers nutzen, um Almas' Dunkelheit/Schild aufzulösen.",
  "doneId": "tower-1",
  "doneText": "Tower of Veils abschließen und den Hauptfund mitnehmen.",
  "source": "DialogueData - Sheet1.csv:175–177; OverworldTriggers.csv:126,316; world_data.lua:188–194; dungeon_data.lua:1955–2256; dungeon5-07Triggers.csv:6; actor_boss.lua:1448–1500",
  "accessChecks": [
   "tower-0"
  ],
  "alternativeHints": [
   "dungeon-seen-tower"
  ]
 },
 {
  "id": "jest",
  "name": "The Jest",
  "category": "route",
  "hints": [
   "dungeon-info-jest"
  ],
  "stage": "jest",
  "difficulty": "Schwer",
  "assessment": "Sieben Etagen und ein Boss mit wechselnden Anweisungen; Fehler im Rätselverhalten sind gefährlich. Nach Tower mit Feuer-/Statusreserve.",
  "size": "7 Etagen",
  "boss": "The Laughing One; Reaper- und Darknight-Etagenkämpfe.",
  "retreat": "Eingang geschlossen; Reliktwächter auf Etage 7 besiegen.",
  "location": "In Harrowdus, Grocer-Rückraum hinter falscher Wand.",
  "anchor": "Harrowdus lokal (79,82)",
  "access": "Vollständige Fünfwortphrase aus tatsächlich gefundenen Hinweisen in Eingangsnähe rufen.",
  "plan": "Nach Tower empfohlen; beim Boss says befolgen, laughs Gegenteil. Trickster's Mask und Heart-shaped Amulet holen.",
  "doneId": "jest-1",
  "doneText": "The Jest abschließen und den Hauptfund mitnehmen.",
  "source": "data/strings.lua:166; HarrowdusTriggers.csv:5,11; DialogueData - Sheet1.csv:243–247; world_data.lua:168–174; dungeon_data.lua:1365–1652; actor_boss.lua:945–1072",
  "accessChecks": [
   "clue-jest-riddle",
   "clue-jest-book",
   "clue-jest-trees",
   "clue-jest-stone",
   "clue-jest-bones",
   "clue-jest-graves"
  ],
  "alternativeHints": [
   "dungeon-seen-jest"
  ]
 },
 {
  "id": "meida",
  "name": "Meida's Hideout",
  "category": "optional",
  "hints": [
   "dungeon-info-meida"
  ],
  "stage": "necropolis",
  "difficulty": "Schwer",
  "assessment": "Revenants_3, Warlord/Revenant und Rot/Blindheit/Gift/Amber; der Hauptschatz enthält nur eine garantierte Endera Herb.",
  "size": "1 Etage",
  "boss": "Warlord als Hauptwächter; mögliche Revenant-Minibosse.",
  "retreat": "Der Eingang schließt hinter dir. Master Key aus dem Hauptschatz finden, dann zum Ausgang zurückkehren.",
  "location": "Südöstlich The Red Grove, östlich und etwas südlich Poison Cross.",
  "anchor": "(231,207)",
  "access": "Keine besondere Zugangssperre.",
  "plan": "Optionale Endera-Quelle nach Tower; bei fünf vorhandenen Kräutern nicht erforderlich.",
  "doneId": "dungeon-done-meida",
  "doneText": "Meida's Hideout abschließen und den Hauptfund mitnehmen.",
  "source": "data/ObjectData - Sheet1.csv:398; OverworldTriggers.csv:145,150; state_game.lua:22527–22533; dungeon_data.lua:147–160; data/treasure_sets.lua:877–881",
  "alternativeHints": [
   "dungeon-seen-meida"
  ]
 },
 {
  "id": "necropolis",
  "name": "The Necropolis",
  "category": "route",
  "hints": [
   "dungeon-info-necropolis"
  ],
  "stage": "necropolis",
  "difficulty": "Schwer",
  "assessment": "Sieben Etagen und zwei Endgegner; mit voller unabhängiger Heil-/Statusreserve nach Tower und Jest.",
  "size": "7 Etagen",
  "boss": "The Bloody Twins auf Etage 7, Darknights als Etagenwächter.",
  "retreat": "Eingang geschlossen; beide Reliktbosse für die Rückkehr besiegen.",
  "location": "Südöstlich The Red Grove.",
  "anchor": "(197,213)",
  "access": "Fünf Endera Herbs → bei Handmaiden brew → Witches' Solvent am Eingang anwenden.",
  "plan": "Nach Tower/Jest mit Öl gegen Rot und vollen Reserven; Crimson Candle holen.",
  "doneId": "necropolis-3",
  "doneText": "The Necropolis abschließen und den Hauptfund mitnehmen.",
  "source": "DialogueData - Sheet1.csv:363–380; OverworldTriggers.csv:149,290; world_data.lua:158–164; dungeon_data.lua:1130–1359; dungeon4-07Triggers.csv:9,14",
  "accessChecks": [
   "necropolis-2"
  ],
  "alternativeHints": [
   "dungeon-seen-necropolis"
  ]
 },
 {
  "id": "bael",
  "name": "Bael's Tomb",
  "category": "route",
  "hints": [
   "dungeon-info-bael"
  ],
  "stage": "repository",
  "difficulty": "Schwer",
  "assessment": "Revenants_3, Warlord/Revenant, Torpor-Maiden, Gift-Turrets/Bells und breite Fallenpalette.",
  "size": "Außenruine + 1 Dungeonetage",
  "boss": "Warlord als Hauptwächter; mögliche Revenant-Minibosse.",
  "retreat": "Der Eingang schließt hinter dir. Master Key aus dem Hauptschatz finden, dann zum Ausgang zurückkehren.",
  "location": "Deutlich südlich The Red Grove, südöstlich Essacarr.",
  "anchor": "(173,228)",
  "access": "Keine besondere Zugangssperre.",
  "plan": "Vor Repository ein Locus Fragment aus Hauptschatz holen. Bael's Key liegt an einem anderen Ort.",
  "doneId": "repository-4",
  "doneText": "Bael's Tomb abschließen und den Hauptfund mitnehmen.",
  "source": "data/ObjectData - Sheet1.csv:391; OverworldTriggers.csv:5,19; world_data.lua:68,113; dungeon_data.lua:585–610; data/treasure_sets.lua:871–875",
  "alternativeHints": [
   "dungeon-seen-bael"
  ]
 },
 {
  "id": "repository",
  "name": "The Repository",
  "category": "route",
  "hints": [
   "dungeon-info-repository"
  ],
  "stage": "repository",
  "difficulty": "Sehr schwer",
  "assessment": "Sieben Etagen, Maschinen und mehrphasiger Schildboss. Spät nach den anderen Relikten und den fünf Fragmentprüfungen.",
  "size": "7 Etagen",
  "boss": "The Lens Keeper; Tank-/Spectral-Knight-Etagenkämpfe.",
  "retreat": "Eingang geschlossen; Lens Keeper auf Etage 7 für Oberflächenrückkehr besiegen.",
  "location": "Auf der Insel nördlich der Barrow-Linn-/Red-Grove-Region; nordöstlich Thossacarr.",
  "anchor": "(187,141)",
  "access": "Locus Box aus allen fünf Fragmenten, Hengeweg nach Thossacarr.",
  "plan": "Letztes empfohlenes Relikt. Maschinen/Status vorbereiten; Lens-Keeper-Schildkristalle zerstören, nach Phasenwechsel erneut.",
  "doneId": "repository-7",
  "doneText": "The Repository abschließen und den Hauptfund mitnehmen.",
  "source": "DialogueData - Sheet1.csv:316–323; state_game.lua:22502–22516,21846–21862; OverworldTriggers.csv:218,298; world_data.lua:178–184; dungeon_data.lua:1658–1950; actor_boss.lua:1152–1236",
  "accessChecks": [
   "repository-6"
  ],
  "alternativeHints": [
   "dungeon-seen-repository"
  ]
 },
 {
  "id": "temple-shield",
  "name": "Temple of the Shield",
  "category": "challenge",
  "hints": [
   "dungeon-info-temple-shield"
  ],
  "stage": "egg",
  "difficulty": "Sehr schwer",
  "assessment": "Ein Guardian mit 1.000 Health, teils zusätzliche Turrets und eine Great-Key-Sperre. Späte freiwillige Ausrüstungsprüfung; die Belohnung muss zu deinen Attributen passen.",
  "size": "1 feste Prüfung",
  "boss": "Shield Guardian (1.000 Health); teils Turrets.",
  "retreat": "Fester Tempel; keine Master-Key-Eingangssperre. Die Great-Key-Tür öffnet die Prüfung.",
  "location": "Nordwestlich Moon-upon-Thoss und südöstlich The Red Grove. Dem selbst entdeckten Marker folgen; die Himmelsrichtung allein ist keine geprüfte Laufroute.",
  "anchor": "(219,177)",
  "access": "Great Key: Sea Cave Advanced Cannon → Yeleba besiegen. Die passende Waffe/Rüstung muss ihre tatsächlichen Attributanforderungen erfüllen.",
  "plan": "Optional nach fünf Relikten/Great Key und vor Finale; nur zum Build passende Belohnung verfolgen.",
  "doneId": "dungeon-done-temple-shield",
  "doneText": "Temple of the Shield abschließen und den Hauptfund mitnehmen.",
  "source": "world_data.lua:317–324; OverworldTriggers.csv:314,363; shield-01Triggers.csv (locked_door great_key und weapon_guardian); data/ActorData - Sheet1.csv:179–187; state_game.lua:21846–21862,21954–21969",
  "accessChecks": [
   "dungeon-access-great-key"
  ]
 },
 {
  "id": "temple-dagger",
  "name": "Temple of the Dagger",
  "category": "challenge",
  "hints": [
   "dungeon-info-temple-dagger"
  ],
  "stage": "egg",
  "difficulty": "Sehr schwer",
  "assessment": "Ein Guardian mit 1.000 Health, teils zusätzliche Turrets und eine Great-Key-Sperre. Späte freiwillige Ausrüstungsprüfung; die Belohnung muss zu deinen Attributen passen.",
  "size": "1 feste Prüfung",
  "boss": "Dagger Guardian (1.000 Health); teils Turrets.",
  "retreat": "Fester Tempel; keine Master-Key-Eingangssperre. Die Great-Key-Tür öffnet die Prüfung.",
  "location": "Nördlich Harrowdus, südwestlich Wintersholl. Dem selbst entdeckten Marker folgen; die Himmelsrichtung allein ist keine geprüfte Laufroute.",
  "anchor": "(305,287)",
  "access": "Great Key: Sea Cave Advanced Cannon → Yeleba besiegen. Die passende Waffe/Rüstung muss ihre tatsächlichen Attributanforderungen erfüllen.",
  "plan": "Optional nach fünf Relikten/Great Key und vor Finale; nur zum Build passende Belohnung verfolgen.",
  "doneId": "dungeon-done-temple-dagger",
  "doneText": "Temple of the Dagger abschließen und den Hauptfund mitnehmen.",
  "source": "world_data.lua:317–324; OverworldTriggers.csv:291,312; dagger-01Triggers.csv (locked_door great_key und weapon_guardian); data/ActorData - Sheet1.csv:179–187; state_game.lua:21846–21862,21954–21969",
  "accessChecks": [
   "dungeon-access-great-key"
  ]
 },
 {
  "id": "temple-rapier",
  "name": "Temple of the Rapier",
  "category": "challenge",
  "hints": [
   "dungeon-info-temple-rapier"
  ],
  "stage": "egg",
  "difficulty": "Sehr schwer",
  "assessment": "Ein Guardian mit 1.000 Health, teils zusätzliche Turrets und eine Great-Key-Sperre. Späte freiwillige Ausrüstungsprüfung; die Belohnung muss zu deinen Attributen passen.",
  "size": "1 feste Prüfung",
  "boss": "Rapier Guardian (1.000 Health); teils Turrets.",
  "retreat": "Fester Tempel; keine Master-Key-Eingangssperre. Die Great-Key-Tür öffnet die Prüfung.",
  "location": "Nordöstlich Harrowdus. Dem selbst entdeckten Marker folgen; die Himmelsrichtung allein ist keine geprüfte Laufroute.",
  "anchor": "(319,302)",
  "access": "Great Key: Sea Cave Advanced Cannon → Yeleba besiegen. Die passende Waffe/Rüstung muss ihre tatsächlichen Attributanforderungen erfüllen.",
  "plan": "Optional nach fünf Relikten/Great Key und vor Finale; nur zum Build passende Belohnung verfolgen.",
  "doneId": "dungeon-done-temple-rapier",
  "doneText": "Temple of the Rapier abschließen und den Hauptfund mitnehmen.",
  "source": "world_data.lua:317–324; OverworldTriggers.csv:165,421; rapier-01Triggers.csv (locked_door great_key und weapon_guardian); data/ActorData - Sheet1.csv:179–187; state_game.lua:21846–21862,21954–21969",
  "accessChecks": [
   "dungeon-access-great-key"
  ]
 },
 {
  "id": "temple-bow",
  "name": "Temple of the Bow",
  "category": "challenge",
  "hints": [
   "dungeon-info-temple-bow"
  ],
  "stage": "egg",
  "difficulty": "Sehr schwer",
  "assessment": "Ein Guardian mit 1.000 Health, teils zusätzliche Turrets und eine Great-Key-Sperre. Späte freiwillige Ausrüstungsprüfung; die Belohnung muss zu deinen Attributen passen.",
  "size": "1 feste Prüfung",
  "boss": "Bow Guardian (1.000 Health); teils Turrets.",
  "retreat": "Fester Tempel; keine Master-Key-Eingangssperre. Die Great-Key-Tür öffnet die Prüfung.",
  "location": "Östlich und etwas südlich The Red Grove. Dem selbst entdeckten Marker folgen; die Himmelsrichtung allein ist keine geprüfte Laufroute.",
  "anchor": "(201,187)",
  "access": "Great Key: Sea Cave Advanced Cannon → Yeleba besiegen. Die passende Waffe/Rüstung muss ihre tatsächlichen Attributanforderungen erfüllen.",
  "plan": "Optional nach fünf Relikten/Great Key und vor Finale; nur zum Build passende Belohnung verfolgen.",
  "doneId": "dungeon-done-temple-bow",
  "doneText": "Temple of the Bow abschließen und den Hauptfund mitnehmen.",
  "source": "world_data.lua:317–324; OverworldTriggers.csv:183,196; bow-01Triggers.csv (locked_door great_key und weapon_guardian); data/ActorData - Sheet1.csv:179–187; state_game.lua:21846–21862,21954–21969",
  "accessChecks": [
   "dungeon-access-great-key"
  ]
 },
 {
  "id": "temple-reaper",
  "name": "Temple of the Reaper",
  "category": "challenge",
  "hints": [
   "dungeon-info-temple-reaper"
  ],
  "stage": "egg",
  "difficulty": "Sehr schwer",
  "assessment": "Ein Guardian mit 1.000 Health, teils zusätzliche Turrets und eine Great-Key-Sperre. Späte freiwillige Ausrüstungsprüfung; die Belohnung muss zu deinen Attributen passen.",
  "size": "1 feste Prüfung",
  "boss": "Reaper Guardian (1.000 Health); teils Turrets.",
  "retreat": "Fester Tempel; keine Master-Key-Eingangssperre. Die Great-Key-Tür öffnet die Prüfung.",
  "location": "Nordwestlich Wintersholl und östlich Hearthaven. Dem selbst entdeckten Marker folgen; die Himmelsrichtung allein ist keine geprüfte Laufroute.",
  "anchor": "(304,189)",
  "access": "Great Key: Sea Cave Advanced Cannon → Yeleba besiegen. Die passende Waffe/Rüstung muss ihre tatsächlichen Attributanforderungen erfüllen.",
  "plan": "Optional nach fünf Relikten/Great Key und vor Finale; nur zum Build passende Belohnung verfolgen.",
  "doneId": "dungeon-done-temple-reaper",
  "doneText": "Temple of the Reaper abschließen und den Hauptfund mitnehmen.",
  "source": "world_data.lua:317–324; OverworldTriggers.csv:194,251; greataxe-01Triggers.csv (locked_door great_key und weapon_guardian); data/ActorData - Sheet1.csv:179–187; state_game.lua:21846–21862,21954–21969",
  "accessChecks": [
   "dungeon-access-great-key"
  ]
 },
 {
  "id": "temple-mace",
  "name": "Temple of the Mace",
  "category": "challenge",
  "hints": [
   "dungeon-info-temple-mace"
  ],
  "stage": "egg",
  "difficulty": "Sehr schwer",
  "assessment": "Ein Guardian mit 1.000 Health, teils zusätzliche Turrets und eine Great-Key-Sperre. Späte freiwillige Ausrüstungsprüfung; die Belohnung muss zu deinen Attributen passen.",
  "size": "1 feste Prüfung",
  "boss": "Mace Guardian (1.000 Health); teils Turrets.",
  "retreat": "Fester Tempel; keine Master-Key-Eingangssperre. Die Great-Key-Tür öffnet die Prüfung.",
  "location": "Westlich Wintersholl und südöstlich Hearthaven. Dem selbst entdeckten Marker folgen; die Himmelsrichtung allein ist keine geprüfte Laufroute.",
  "anchor": "(284,185)",
  "access": "Great Key: Sea Cave Advanced Cannon → Yeleba besiegen. Die passende Waffe/Rüstung muss ihre tatsächlichen Attributanforderungen erfüllen.",
  "plan": "Optional nach fünf Relikten/Great Key und vor Finale; nur zum Build passende Belohnung verfolgen.",
  "doneId": "dungeon-done-temple-mace",
  "doneText": "Temple of the Mace abschließen und den Hauptfund mitnehmen.",
  "source": "world_data.lua:317–324; OverworldTriggers.csv:245,399; club-01Triggers.csv (locked_door great_key und weapon_guardian); data/ActorData - Sheet1.csv:179–187; state_game.lua:21846–21862,21954–21969",
  "accessChecks": [
   "dungeon-access-great-key"
  ]
 },
 {
  "id": "temple-sword",
  "name": "Temple of the Sword",
  "category": "challenge",
  "hints": [
   "dungeon-info-temple-sword"
  ],
  "stage": "egg",
  "difficulty": "Sehr schwer",
  "assessment": "Ein Guardian mit 1.000 Health, teils zusätzliche Turrets und eine Great-Key-Sperre. Späte freiwillige Ausrüstungsprüfung; die Belohnung muss zu deinen Attributen passen.",
  "size": "1 feste Prüfung",
  "boss": "Sword Guardian (1.000 Health); teils Turrets.",
  "retreat": "Fester Tempel; keine Master-Key-Eingangssperre. Die Great-Key-Tür öffnet die Prüfung.",
  "location": "Westlich und etwas südlich Hearthaven. Dem selbst entdeckten Marker folgen; die Himmelsrichtung allein ist keine geprüfte Laufroute.",
  "anchor": "(232,153)",
  "access": "Great Key: Sea Cave Advanced Cannon → Yeleba besiegen. Die passende Waffe/Rüstung muss ihre tatsächlichen Attributanforderungen erfüllen.",
  "plan": "Optional nach fünf Relikten/Great Key und vor Finale; nur zum Build passende Belohnung verfolgen.",
  "doneId": "dungeon-done-temple-sword",
  "doneText": "Temple of the Sword abschließen und den Hauptfund mitnehmen.",
  "source": "world_data.lua:317–324; OverworldTriggers.csv:208,395; sword-01Triggers.csv (locked_door great_key und weapon_guardian); data/ActorData - Sheet1.csv:179–187; state_game.lua:21846–21862,21954–21969",
  "accessChecks": [
   "dungeon-access-great-key"
  ]
 },
 {
  "id": "temple-cloak",
  "name": "Temple of the Cloak",
  "category": "challenge",
  "hints": [
   "dungeon-info-temple-cloak"
  ],
  "stage": "egg",
  "difficulty": "Sehr schwer",
  "assessment": "Ein Guardian mit 1.000 Health, teils zusätzliche Turrets und eine Great-Key-Sperre. Späte freiwillige Ausrüstungsprüfung; die Belohnung muss zu deinen Attributen passen.",
  "size": "1 feste Prüfung",
  "boss": "Cloak Guardian (1.000 Health); teils Turrets.",
  "retreat": "Fester Tempel; keine Master-Key-Eingangssperre. Die Great-Key-Tür öffnet die Prüfung.",
  "location": "Südöstlich Barrow-Linn, auf dessen Insel. Dem selbst entdeckten Marker folgen; die Himmelsrichtung allein ist keine geprüfte Laufroute.",
  "anchor": "(178,285)",
  "access": "Great Key: Sea Cave Advanced Cannon → Yeleba besiegen. Die passende Waffe/Rüstung muss ihre tatsächlichen Attributanforderungen erfüllen.",
  "plan": "Optional nach fünf Relikten/Great Key und vor Finale; nur zum Build passende Belohnung verfolgen.",
  "doneId": "dungeon-done-temple-cloak",
  "doneText": "Temple of the Cloak abschließen und den Hauptfund mitnehmen.",
  "source": "world_data.lua:317–324; OverworldTriggers.csv:70,286; cloak-01Triggers.csv (locked_door great_key und weapon_guardian); data/ActorData - Sheet1.csv:179–187; state_game.lua:21846–21862,21954–21969",
  "accessChecks": [
   "dungeon-access-great-key"
  ]
 },
 {
  "id": "heart1",
  "name": "Heart Temple 1",
  "category": "challenge",
  "hints": [
   "dungeon-info-heart1"
  ],
  "stage": "prepare",
  "difficulty": "Mittel",
  "assessment": "Rätsel-/Fundort, kein siebenstöckiger Reliktdungeon. Kein garantierter kampfloser Weg dorthin.",
  "size": "1 fester Rätselort",
  "boss": "Kein fest eingetragener Boss in der Triggerdatei. Umgebung/Rätsel trotzdem prüfen.",
  "retreat": "Fester Außenort; Rückzug an den Kartenrand möglich.",
  "location": "Südlich The Red Grove.",
  "anchor": "(181,203)",
  "access": "Keine besondere Zugangssperre.",
  "plan": "Optional nach Fund und Rätsellösung für ein Max-Health-Objekt. Bei unbekannter Gefahr später wiederkommen.",
  "doneId": "dungeon-done-heart1",
  "doneText": "Heart Temple 1 abschließen und den Hauptfund mitnehmen.",
  "source": "world_data.lua:327–332; OverworldTriggers.csv:294; heart1Triggers.csv:3; state_game.lua:21846–21862,21954–21969"
 },
 {
  "id": "heart2",
  "name": "Heart Temple 2",
  "category": "challenge",
  "hints": [
   "dungeon-info-heart2"
  ],
  "stage": "prepare",
  "difficulty": "Mittel",
  "assessment": "Rätsel-/Fundort, kein siebenstöckiger Reliktdungeon. Kein garantierter kampfloser Weg dorthin.",
  "size": "1 fester Rätselort",
  "boss": "Kein fest eingetragener Boss in der Triggerdatei. Umgebung/Rätsel trotzdem prüfen.",
  "retreat": "Fester Außenort; Rückzug an den Kartenrand möglich.",
  "location": "Weit östlich Wintersholl.",
  "anchor": "(408,202)",
  "access": "Keine besondere Zugangssperre.",
  "plan": "Optional nach Fund und Rätsellösung für ein Max-Health-Objekt. Bei unbekannter Gefahr später wiederkommen.",
  "doneId": "dungeon-done-heart2",
  "doneText": "Heart Temple 2 abschließen und den Hauptfund mitnehmen.",
  "source": "world_data.lua:327–332; OverworldTriggers.csv:189; heart2Triggers.csv:3; state_game.lua:21846–21862,21954–21969"
 },
 {
  "id": "heart4",
  "name": "Heart Temple 4",
  "category": "challenge",
  "hints": [
   "dungeon-info-heart4"
  ],
  "stage": "prepare",
  "difficulty": "Mittel",
  "assessment": "Rätsel-/Fundort, kein siebenstöckiger Reliktdungeon. Kein garantierter kampfloser Weg dorthin.",
  "size": "1 fester Rätselort",
  "boss": "Kein fest eingetragener Boss in der Triggerdatei. Umgebung/Rätsel trotzdem prüfen.",
  "retreat": "Fester Außenort; Rückzug an den Kartenrand möglich.",
  "location": "Südlich Hearthaven.",
  "anchor": "(259,179)",
  "access": "Keine besondere Zugangssperre.",
  "plan": "Optional nach Fund und Rätsellösung für ein Max-Health-Objekt. Bei unbekannter Gefahr später wiederkommen.",
  "doneId": "dungeon-done-heart4",
  "doneText": "Heart Temple 4 abschließen und den Hauptfund mitnehmen.",
  "source": "world_data.lua:327–332; OverworldTriggers.csv:257; heart4Triggers.csv:3; state_game.lua:21846–21862,21954–21969"
 },
 {
  "id": "heart5",
  "name": "Heart Temple 5",
  "category": "challenge",
  "hints": [
   "dungeon-info-heart5"
  ],
  "stage": "prepare",
  "difficulty": "Mittel",
  "assessment": "Rätsel-/Fundort, kein siebenstöckiger Reliktdungeon. Kein garantierter kampfloser Weg dorthin.",
  "size": "1 fester Rätselort",
  "boss": "Kein fest eingetragener Boss in der Triggerdatei. Umgebung/Rätsel trotzdem prüfen.",
  "retreat": "Fester Außenort; Rückzug an den Kartenrand möglich.",
  "location": "Südlich Harrowdus.",
  "anchor": "(309,336)",
  "access": "Keine besondere Zugangssperre.",
  "plan": "Optional nach Fund und Rätsellösung für ein Max-Health-Objekt. Bei unbekannter Gefahr später wiederkommen.",
  "doneId": "dungeon-done-heart5",
  "doneText": "Heart Temple 5 abschließen und den Hauptfund mitnehmen.",
  "source": "world_data.lua:327–332; OverworldTriggers.csv:217; heart5Triggers.csv:3; state_game.lua:21846–21862,21954–21969"
 },
 {
  "id": "tear1",
  "name": "Delera",
  "category": "challenge",
  "hints": [
   "dungeon-info-tear1"
  ],
  "stage": "ship",
  "difficulty": "Schwer",
  "assessment": "Das Rätsel ruft einen Spectral Knight mit 500 Health hervor. Nach dem ersten Relikt als freiwilligen Ausflug angehen; kein früher Gratispunkt.",
  "size": "1 fester Wächter-/Rätselort",
  "boss": "Spectral Knight (500 Health); Tear erst nach Rätselauslösung und Sieg.",
  "retreat": "Fester Außenort; bei zu starkem Wächter an den Kartenrand zurückziehen und später versuchen.",
  "location": "Nördlich Moon-upon-Thoss, südlich Yarrow. Dem selbst entdeckten Marker folgen; die Himmelsrichtung allein ist keine geprüfte Laufroute.",
  "anchor": "(248,234)",
  "access": "Eigenes Schildrätsel; danach muss der Wächter besiegt werden.",
  "plan": "Optional für tatsächlich erkämpfte Tears; keine frühe Gratis-Tear einplanen. Benötigte Feuereffekte, Begleiter oder Statusbedingungen vor Ort prüfen.",
  "doneId": "dungeon-done-tear1",
  "doneText": "Delera abschließen und den Hauptfund mitnehmen.",
  "source": "world_data.lua:338; OverworldTriggers.csv:10,79; data/strings.lua:4; state_game.lua:14781–14789; data/ActorData - Sheet1.csv:178"
 },
 {
  "id": "tear2",
  "name": "Oveera",
  "category": "challenge",
  "hints": [
   "dungeon-info-tear2"
  ],
  "stage": "ship",
  "difficulty": "Schwer",
  "assessment": "Das Rätsel ruft einen Spectral Knight mit 500 Health hervor. Nach dem ersten Relikt als freiwilligen Ausflug angehen; kein früher Gratispunkt.",
  "size": "1 fester Wächter-/Rätselort",
  "boss": "Spectral Knight (500 Health); Tear erst nach Rätselauslösung und Sieg.",
  "retreat": "Fester Außenort; bei zu starkem Wächter an den Kartenrand zurückziehen und später versuchen.",
  "location": "Nordöstlich Harrowdus, südöstlich Wintersholl. Dem selbst entdeckten Marker folgen; die Himmelsrichtung allein ist keine geprüfte Laufroute.",
  "anchor": "(307,185)",
  "access": "Eigenes Schildrätsel; danach muss der Wächter besiegt werden.",
  "plan": "Optional für tatsächlich erkämpfte Tears; keine frühe Gratis-Tear einplanen. Benötigte Feuereffekte, Begleiter oder Statusbedingungen vor Ort prüfen.",
  "doneId": "dungeon-done-tear2",
  "doneText": "Oveera abschließen und den Hauptfund mitnehmen.",
  "source": "world_data.lua:340; OverworldTriggers.csv:179,336; data/strings.lua:5; state_game.lua:14781–14789; data/ActorData - Sheet1.csv:178"
 },
 {
  "id": "tear3",
  "name": "Soccera",
  "category": "challenge",
  "hints": [
   "dungeon-info-tear3"
  ],
  "stage": "ship",
  "difficulty": "Schwer",
  "assessment": "Das Rätsel ruft einen Spectral Knight mit 500 Health hervor. Nach dem ersten Relikt als freiwilligen Ausflug angehen; kein früher Gratispunkt.",
  "size": "1 fester Wächter-/Rätselort",
  "boss": "Spectral Knight (500 Health); Tear erst nach Rätselauslösung und Sieg.",
  "retreat": "Fester Außenort; bei zu starkem Wächter an den Kartenrand zurückziehen und später versuchen.",
  "location": "Nördlich Harrowdus, südwestlich Wintersholl. Dem selbst entdeckten Marker folgen; die Himmelsrichtung allein ist keine geprüfte Laufroute.",
  "anchor": "(311,281)",
  "access": "Eigenes Schildrätsel; danach muss der Wächter besiegt werden.",
  "plan": "Optional für tatsächlich erkämpfte Tears; keine frühe Gratis-Tear einplanen. Benötigte Feuereffekte, Begleiter oder Statusbedingungen vor Ort prüfen.",
  "doneId": "dungeon-done-tear3",
  "doneText": "Soccera abschließen und den Hauptfund mitnehmen.",
  "source": "world_data.lua:342; OverworldTriggers.csv:136,239; data/strings.lua:6; state_game.lua:14781–14789; data/ActorData - Sheet1.csv:178"
 },
 {
  "id": "tear4",
  "name": "Nostera",
  "category": "challenge",
  "hints": [
   "dungeon-info-tear4"
  ],
  "stage": "ship",
  "difficulty": "Schwer",
  "assessment": "Das Rätsel ruft einen Spectral Knight mit 500 Health hervor. Nach dem ersten Relikt als freiwilligen Ausflug angehen; kein früher Gratispunkt.",
  "size": "1 fester Wächter-/Rätselort",
  "boss": "Spectral Knight (500 Health); Tear erst nach Rätselauslösung und Sieg.",
  "retreat": "Fester Außenort; bei zu starkem Wächter an den Kartenrand zurückziehen und später versuchen.",
  "location": "Westlich Wintersholl, nordöstlich Yarrow. Dem selbst entdeckten Marker folgen; die Himmelsrichtung allein ist keine geprüfte Laufroute.",
  "anchor": "(287,207)",
  "access": "Eigenes Schildrätsel; danach muss der Wächter besiegt werden.",
  "plan": "Optional für tatsächlich erkämpfte Tears; keine frühe Gratis-Tear einplanen. Benötigte Feuereffekte, Begleiter oder Statusbedingungen vor Ort prüfen.",
  "doneId": "dungeon-done-tear4",
  "doneText": "Nostera abschließen und den Hauptfund mitnehmen.",
  "source": "world_data.lua:344; OverworldTriggers.csv:123,264; data/strings.lua:7; state_game.lua:14781–14789; data/ActorData - Sheet1.csv:178"
 },
 {
  "id": "tear5",
  "name": "Issera",
  "category": "challenge",
  "hints": [
   "dungeon-info-tear5"
  ],
  "stage": "ship",
  "difficulty": "Schwer",
  "assessment": "Das Rätsel ruft einen Spectral Knight mit 500 Health hervor. Nach dem ersten Relikt als freiwilligen Ausflug angehen; kein früher Gratispunkt.",
  "size": "1 fester Wächter-/Rätselort",
  "boss": "Spectral Knight (500 Health); Tear erst nach Rätselauslösung und Sieg.",
  "retreat": "Fester Außenort; bei zu starkem Wächter an den Kartenrand zurückziehen und später versuchen.",
  "location": "Südöstlich Moon-upon-Thoss. Dem selbst entdeckten Marker folgen; die Himmelsrichtung allein ist keine geprüfte Laufroute.",
  "anchor": "(268,274)",
  "access": "Eigenes Schildrätsel; danach muss der Wächter besiegt werden.",
  "plan": "Optional für tatsächlich erkämpfte Tears; keine frühe Gratis-Tear einplanen. Benötigte Feuereffekte, Begleiter oder Statusbedingungen vor Ort prüfen.",
  "doneId": "dungeon-done-tear5",
  "doneText": "Issera abschließen und den Hauptfund mitnehmen.",
  "source": "world_data.lua:346; OverworldTriggers.csv:23,94; data/strings.lua:8; state_game.lua:14781–14789; data/ActorData - Sheet1.csv:178"
 },
 {
  "id": "tear6",
  "name": "Dusera",
  "category": "challenge",
  "hints": [
   "dungeon-info-tear6"
  ],
  "stage": "ship",
  "difficulty": "Schwer",
  "assessment": "Das Rätsel ruft einen Spectral Knight mit 500 Health hervor. Nach dem ersten Relikt als freiwilligen Ausflug angehen; kein früher Gratispunkt.",
  "size": "1 fester Wächter-/Rätselort",
  "boss": "Spectral Knight (500 Health); Tear erst nach Rätselauslösung und Sieg.",
  "retreat": "Fester Außenort; bei zu starkem Wächter an den Kartenrand zurückziehen und später versuchen.",
  "location": "Westlich Harrowdus und südlich Wintersholl. Dem selbst entdeckten Marker folgen; die Himmelsrichtung allein ist keine geprüfte Laufroute.",
  "anchor": "(281,308)",
  "access": "Eigenes Schildrätsel; danach muss der Wächter besiegt werden.",
  "plan": "Optional für tatsächlich erkämpfte Tears; keine frühe Gratis-Tear einplanen. Benötigte Feuereffekte, Begleiter oder Statusbedingungen vor Ort prüfen.",
  "doneId": "dungeon-done-tear6",
  "doneText": "Dusera abschließen und den Hauptfund mitnehmen.",
  "source": "world_data.lua:348; OverworldTriggers.csv:40,402; data/strings.lua:9; state_game.lua:14781–14789; data/ActorData - Sheet1.csv:178"
 },
 {
  "id": "tear7",
  "name": "Hasera",
  "category": "challenge",
  "hints": [
   "dungeon-info-tear7"
  ],
  "stage": "ship",
  "difficulty": "Schwer",
  "assessment": "Das Rätsel ruft einen Spectral Knight mit 500 Health hervor. Nach dem ersten Relikt als freiwilligen Ausflug angehen; kein früher Gratispunkt.",
  "size": "1 fester Wächter-/Rätselort",
  "boss": "Spectral Knight (500 Health); Tear erst nach Rätselauslösung und Sieg.",
  "retreat": "Fester Außenort; bei zu starkem Wächter an den Kartenrand zurückziehen und später versuchen.",
  "location": "Südlich Harrowdus. Dem selbst entdeckten Marker folgen; die Himmelsrichtung allein ist keine geprüfte Laufroute.",
  "anchor": "(306,330)",
  "access": "Eigenes Schildrätsel; danach muss der Wächter besiegt werden.",
  "plan": "Optional für tatsächlich erkämpfte Tears; keine frühe Gratis-Tear einplanen. Benötigte Feuereffekte, Begleiter oder Statusbedingungen vor Ort prüfen.",
  "doneId": "dungeon-done-tear7",
  "doneText": "Hasera abschließen und den Hauptfund mitnehmen.",
  "source": "world_data.lua:350; OverworldTriggers.csv:260,344; data/strings.lua:10; state_game.lua:14781–14789; data/ActorData - Sheet1.csv:178"
 },
 {
  "id": "tear8",
  "name": "Duera",
  "category": "challenge",
  "hints": [
   "dungeon-info-tear8"
  ],
  "stage": "ship",
  "difficulty": "Schwer",
  "assessment": "Das Rätsel ruft einen Spectral Knight mit 500 Health hervor. Nach dem ersten Relikt als freiwilligen Ausflug angehen; kein früher Gratispunkt.",
  "size": "1 fester Wächter-/Rätselort",
  "boss": "Spectral Knight (500 Health); Tear erst nach Rätselauslösung und Sieg.",
  "retreat": "Fester Außenort; bei zu starkem Wächter an den Kartenrand zurückziehen und später versuchen.",
  "location": "Auf einer Insel weit südöstlich Barrow-Linn; Schiff einplanen. Dem selbst entdeckten Marker folgen; die Himmelsrichtung allein ist keine geprüfte Laufroute.",
  "anchor": "(198,372)",
  "access": "Eigenes Schildrätsel; danach muss der Wächter besiegt werden.",
  "plan": "Optional für tatsächlich erkämpfte Tears; keine frühe Gratis-Tear einplanen. Benötigte Feuereffekte, Begleiter oder Statusbedingungen vor Ort prüfen.",
  "doneId": "dungeon-done-tear8",
  "doneText": "Duera abschließen und den Hauptfund mitnehmen.",
  "source": "world_data.lua:352; OverworldTriggers.csv:22,73; data/strings.lua:11; state_game.lua:14781–14789; data/ActorData - Sheet1.csv:178"
 },
 {
  "id": "tear9",
  "name": "Tulera",
  "category": "challenge",
  "hints": [
   "dungeon-info-tear9"
  ],
  "stage": "ship",
  "difficulty": "Schwer",
  "assessment": "Das Rätsel ruft einen Spectral Knight mit 500 Health hervor. Nach dem ersten Relikt als freiwilligen Ausflug angehen; kein früher Gratispunkt.",
  "size": "1 fester Wächter-/Rätselort",
  "boss": "Spectral Knight (500 Health); Tear erst nach Rätselauslösung und Sieg.",
  "retreat": "Fester Außenort; bei zu starkem Wächter an den Kartenrand zurückziehen und später versuchen.",
  "location": "Weit östlich Harrowdus; Schiff für die östliche Insel einplanen. Dem selbst entdeckten Marker folgen; die Himmelsrichtung allein ist keine geprüfte Laufroute.",
  "anchor": "(397,318)",
  "access": "Eigenes Schildrätsel; danach muss der Wächter besiegt werden.",
  "plan": "Optional für tatsächlich erkämpfte Tears; keine frühe Gratis-Tear einplanen. Benötigte Feuereffekte, Begleiter oder Statusbedingungen vor Ort prüfen.",
  "doneId": "dungeon-done-tear9",
  "doneText": "Tulera abschließen und den Hauptfund mitnehmen.",
  "source": "world_data.lua:354; OverworldTriggers.csv:13,418; data/strings.lua:12; state_game.lua:14781–14789; data/ActorData - Sheet1.csv:178"
 },
 {
  "id": "tear10",
  "name": "Mulera",
  "category": "challenge",
  "hints": [
   "dungeon-info-tear10"
  ],
  "stage": "ship",
  "difficulty": "Schwer",
  "assessment": "Das Rätsel ruft einen Spectral Knight mit 500 Health hervor. Nach dem ersten Relikt als freiwilligen Ausflug angehen; kein früher Gratispunkt.",
  "size": "1 fester Wächter-/Rätselort",
  "boss": "Spectral Knight (500 Health); Tear erst nach Rätselauslösung und Sieg.",
  "retreat": "Fester Außenort; bei zu starkem Wächter an den Kartenrand zurückziehen und später versuchen.",
  "location": "Nördlich The Red Grove, auf der Inselregion westlich Hearthaven. Dem selbst entdeckten Marker folgen; die Himmelsrichtung allein ist keine geprüfte Laufroute.",
  "anchor": "(181,149)",
  "access": "Eigenes Schildrätsel; danach muss der Wächter besiegt werden.",
  "plan": "Optional für tatsächlich erkämpfte Tears; keine frühe Gratis-Tear einplanen. Benötigte Feuereffekte, Begleiter oder Statusbedingungen vor Ort prüfen.",
  "doneId": "dungeon-done-tear10",
  "doneText": "Mulera abschließen und den Hauptfund mitnehmen.",
  "source": "world_data.lua:356; OverworldTriggers.csv:68,141; data/strings.lua:13; state_game.lua:14781–14789; data/ActorData - Sheet1.csv:178"
 },
 {
  "id": "ancestors",
  "name": "The Tomb of the Ancestors / Ancestors' Ossuary",
  "category": "optional",
  "hints": [
   "dungeon-info-ancestors"
  ],
  "stage": "barrow",
  "difficulty": "Mittel",
  "assessment": "Vor allem ein Stadtinnenraum mit falscher Wand und Schlüsselfund; keine vergleichbare Bossprüfung wie in einem Reliktdungeon.",
  "size": "1 fester Innenraum",
  "boss": "Kein Boss in der Triggerdatei.",
  "retreat": "Fester Stadtinnenraum mit Rückweg nach Barrow-Linn.",
  "location": "In Barrow-Linn, beim als Ancestors' Ossuary beschilderten Eingang.",
  "anchor": "Barrow-Linn Innenraum; Key-Container lokal (40,42).",
  "access": "Keine besondere Zugangssperre.",
  "plan": "Beim Barrow-Linn-Besuch Bael's Key hinter der falschen Wand holen und behalten.",
  "doneId": "barrow-2",
  "doneText": "In der Ossuary Bael's Key hinter der falschen Wand finden und behalten.",
  "source": "DialogueData - Sheet1.csv:275–281,347; data/strings.lua:43; ancestorsTriggers.csv:2–4; world_data.lua:137; Barrow-LinnTriggers.csv:2,5,13",
  "alternativeHints": [
   "dungeon-seen-ancestors"
  ]
 },
 {
  "id": "beneath-keep",
  "name": "Beneath the Keep",
  "category": "optional",
  "hints": [
   "dungeon-info-beneath-keep"
  ],
  "stage": "egg",
  "difficulty": "Sehr schwer",
  "assessment": "Mehrere Tanks und Nomans plus verschachtelte Türen. Für die normale Reliktroute unnötig; sehr spät und mit Fernangriff erkunden.",
  "size": "1 feste Maschinenanlage",
  "boss": "Mehrere Nomans und Tanks, kein eigens markierter Reliktboss.",
  "retreat": "canReturn=true; Rückweg zum Keep möglich.",
  "location": "Unter dem Archon-Keep in Moon-upon-Thoss.",
  "anchor": "Moon-upon-Thoss → archonDungeon-01",
  "access": "Die Anlage hat eigene nummerierte Türen und Schlüsselgegner; keine frühe Pflichtaufgabe.",
  "plan": "Später optional erkunden; Finale/Story nicht versehentlich mit der Throninteraktion auslösen.",
  "doneId": "dungeon-done-beneath-keep",
  "doneText": "Beneath the Keep abschließen und den Hauptfund mitnehmen.",
  "source": "world_data.lua:32,144; archonDungeon-01Triggers.csv:8–45; Moon-upon-ThossTriggers.csv:16,63"
 },
 {
  "id": "four-lakes",
  "name": "Four Lake Meet",
  "category": "challenge",
  "hints": [
   "dungeon-info-four-lakes"
  ],
  "stage": "jest",
  "difficulty": "Mittel",
  "assessment": "Ein Hinweisort statt einer langen Dungeonexpedition; für die Steininschrift keinen vollständigen Kampfabschluss voraussetzen.",
  "size": "1 fester Hinweis-/Rätselort",
  "boss": "Kein eigener Kampfabschluss notwendig für den Jest-Worthinweis.",
  "retreat": "Fester Außenort; Rückzug an den Kartenrand möglich.",
  "location": "Nördlich Wintersholl, in einer Ruine zwischen vier Seen an der Ostküste.",
  "anchor": "(330,190)",
  "access": "Keine besondere Zugangssperre.",
  "plan": "Vor Jest den vor Ort gefundenen Phrasenhinweis lesen; Ortswissen ist getrennt von Hinweiserhalt.",
  "doneId": "clue-jest-stone",
  "doneText": "Bei Four Lake Meet die Steininschrift lesen und den Jest-Worthinweis notieren.",
  "source": "DialogueData - Sheet1.csv:494–497; data/strings.lua:110; OverworldTriggers.csv:362; world_data.lua:335",
  "alternativeHints": [
   "dungeon-seen-four-lakes"
  ]
 },
 {
  "id": "egg",
  "name": "The Egg · DX",
  "category": "route",
  "hints": [
   "dungeon-info-egg"
  ],
  "stage": "egg",
  "difficulty": "Sehr schwer",
  "assessment": "100 Etagen mit stark ansteigenden Gegnergruppen und knappen Reserven. Der Umfang macht dies zum späten Ausdauertest.",
  "size": "100 Etagen",
  "boss": "Eigener Guardian auf Etage 100; lange, steigende Gegner-/Minibossfolge.",
  "retreat": "Kein Oberflächenausgang auf Etage 1. Guardian auf Etage 100 besiegen und finalen Ausgang benutzen.",
  "location": "Weit südwestlich Barrow-Linn an bergiger Küstenbucht; vom Oststeg westwärts zum großen Ei.",
  "anchor": "Ei (114,341), Steg (120,341)",
  "access": "DX-DLC und Schiff zur Bucht; keine mechanische Fünf-Relikt-Sperre.",
  "plan": "Nach fünf Relikten und fertigem Build, vor beiden Schlussrouten. Späte Einordnung ist Empfehlung des Guides und offiziellen DLC-Texts.",
  "doneId": "egg-3",
  "doneText": "The Egg · DX abschließen und den Hauptfund mitnehmen.",
  "source": "OverworldTriggers.csv:205,384; actor.lua:4213–4234; world_data.lua:205–314; dungeon7-100Triggers.csv:9; research-egg.md; https://store.steampowered.com/app/3498040/Moonring_DX/",
  "accessChecks": [
   "ship-1"
  ]
 },
 {
  "id": "lament",
  "name": "The Lament / The Tether",
  "category": "finale",
  "hints": [
   "dungeon-info-lament"
  ],
  "stage": "finale",
  "difficulty": "Sehr schwer",
  "assessment": "Fünf feste Arenen vor dem Endboss, geschlossener Eingang und besondere Zugangswissen-/Namensanforderungen. Erst ganz am Ende.",
  "size": "5 feste Arenen + Tether auf Etage 6",
  "boss": "Arena-Kampfserien, dann The Tether.",
  "retreat": "Eingang verriegelt; Arena-Gauntlet und Tether abschließen. Vor Beginn sämtliche Reserven kaufen.",
  "location": "Auf Finaleinsel nördlich Nostacarr.",
  "anchor": "(404,364), Nostacarr (404,371)",
  "access": "Bael's Key/Hengeweg und für den Tether alle fünf wahren Gottesnamen. Nach fünf Relikten empfohlen, kein belegtes zusätzliches Reliktgate am Eingang.",
  "plan": "Alternative Schlussroute erst nach Egg/optionalen Zielen. Namen am passenden Altar rufen, danach Tether bekämpfen; göttliche Gaben fallen beim Verlassen nach dem Sieg weg.",
  "doneId": "finale-5",
  "doneText": "The Lament / The Tether abschließen und den Hauptfund mitnehmen.",
  "source": "DialogueData - Sheet1.csv:464–484,534; henges.lua:35–40; actions.lua:2266–2287; OverworldTriggers.csv:274,297; world_data.lua:198–203; globals.lua:409; research-route.md",
  "accessChecks": [
   "finale-1",
   "finale-2",
   "finale-3"
  ],
  "alternativeHints": [
   "dungeon-seen-lament"
  ]
 },
 {
  "id": "ruin1",
  "name": "The Poison Cross",
  "category": "route",
  "hints": [
   "dungeon-info-ruin1"
  ],
  "stage": "repository",
  "difficulty": "Schwer",
  "assessment": "Giftfallen in einer festen Außenruine. Mit Statusmitteln angehen und den Fragmentfund priorisieren.",
  "size": "1 feste Außenruine",
  "boss": "Giftfallen; feste Ruine.",
  "retreat": "Feste Außenruine; freier Rückzug an den Kartenrand, keine Master-Key-Sperre.",
  "location": "Südöstlich Red Grove.",
  "anchor": "(217,204)",
  "access": "Ruinenmarker und sicherer Reiseweg.",
  "plan": "Locus Fragment aus Container holen; alle fünf Fragmente für Repository behalten.",
  "doneId": "repository-3",
  "doneText": "The Poison Cross abschließen und den Hauptfund mitnehmen.",
  "source": "data/ObjectData - Sheet1.csv:389; state_game.lua:22519–22524; world_data.lua:66–70; ruin1Triggers.csv; research-route.md",
  "alternativeHints": [
   "dungeon-seen-ruin1"
  ]
 },
 {
  "id": "ruin2",
  "name": "The Venom Cube",
  "category": "route",
  "hints": [
   "dungeon-info-ruin2"
  ],
  "stage": "repository",
  "difficulty": "Schwer",
  "assessment": "Giftfallen und ein mechanischer Noman. Mit unabhängiger Heilung und brauchbarem Fernangriff vorbereitet.",
  "size": "1 feste Außenruine",
  "boss": "Giftfallen und Noman.",
  "retreat": "Feste Außenruine; freier Rückzug an den Kartenrand, keine Master-Key-Sperre.",
  "location": "Nordwestlich Wintersholl, nordöstlich Yarrow.",
  "anchor": "(306,219)",
  "access": "Ruinenmarker und sicherer Reiseweg.",
  "plan": "Locus Fragment aus Container holen; alle fünf Fragmente für Repository behalten.",
  "doneId": "repository-2",
  "doneText": "The Venom Cube abschließen und den Hauptfund mitnehmen.",
  "source": "data/ObjectData - Sheet1.csv:390; state_game.lua:22519–22524; world_data.lua:66–70; ruin2Triggers.csv; research-route.md",
  "alternativeHints": [
   "dungeon-seen-ruin2"
  ]
 },
 {
  "id": "ruin4",
  "name": "The Enflamed Glade",
  "category": "route",
  "hints": [
   "dungeon-info-ruin4"
  ],
  "stage": "repository",
  "difficulty": "Schwer",
  "assessment": "Feuerfallen und Great Gazer. Water und sichere Schusslinien vorbereiten; optional nach dem Fragmentfund zurückziehen.",
  "size": "1 feste Außenruine",
  "boss": "Feuerfallen und Great Gazer.",
  "retreat": "Feste Außenruine; freier Rückzug an den Kartenrand, keine Master-Key-Sperre.",
  "location": "Südwestlich Wintersholl, nördlich Harrowdus.",
  "anchor": "(313,268)",
  "access": "Ruinenmarker und sicherer Reiseweg.",
  "plan": "Locus Fragment aus Container holen; alle fünf Fragmente für Repository behalten.",
  "doneId": "repository-1",
  "doneText": "The Enflamed Glade abschließen und den Hauptfund mitnehmen.",
  "source": "data/ObjectData - Sheet1.csv:392; state_game.lua:22519–22524; world_data.lua:66–70; ruin4Triggers.csv; research-route.md",
  "alternativeHints": [
   "dungeon-seen-ruin4"
  ]
 },
 {
  "id": "ruin5",
  "name": "The Magma Chamber",
  "category": "route",
  "hints": [
   "dungeon-info-ruin5"
  ],
  "stage": "repository",
  "difficulty": "Sehr schwer",
  "assessment": "Amberfallen, mehrere Turrets und Anreise per Schiff. Späte Fragmentprüfung mit Fernangriff und Statusreserve.",
  "size": "1 feste Außenruine",
  "boss": "Amberfallen und mehrere Acht-Wege-Turrets.",
  "retreat": "Feste Außenruine; freier Rückzug an den Kartenrand, keine Master-Key-Sperre.",
  "location": "An der äußersten Südküste, per Schiff.",
  "anchor": "(267,412)",
  "access": "Magma Chamber benötigt ein Schiff.",
  "plan": "Locus Fragment aus Container holen; alle fünf Fragmente für Repository behalten.",
  "doneId": "repository-5",
  "doneText": "The Magma Chamber abschließen und den Hauptfund mitnehmen.",
  "source": "data/ObjectData - Sheet1.csv:393; state_game.lua:22519–22524; world_data.lua:66–70; ruin5Triggers.csv; research-route.md",
  "alternativeHints": [
   "dungeon-seen-ruin5"
  ],
  "accessChecks": [
   "ship-1"
  ]
 },
 {
  "id": "herbs1",
  "name": "Endera-Viersteingruppe · Map #6",
  "category": "challenge",
  "hints": [
   "dungeon-info-herbs1"
  ],
  "stage": "necropolis",
  "difficulty": "Schwer",
  "assessment": "Kleine Kräuterquelle mit Geistern oder Umgebungsgefahren. Kräuter sammeln und gefährliche Kämpfe vermeiden; kein notwendiger Bossabschluss.",
  "size": "1 feste Kräutergruppe",
  "boss": "Kein besonderer Endboss im Herb-Trigger. Geister/Umgebungsgefahren nicht erzwingen.",
  "retreat": "Feste Außenansicht; Rückzug an den Kartenrand möglich.",
  "location": "Nordwestlich Harrowdus.",
  "anchor": "(298,295)",
  "access": "Gelesene Karte oder selbst bestätigte tatsächliche Entdeckung; Gruppe betreten, in Lokalansicht wechseln.",
  "plan": "Nur solange insgesamt noch Endera Herbs fehlen. Bei fünf Kräutern zur Handmaiden zurück, brew.",
  "doneId": "dungeon-done-herbs1",
  "doneText": "Endera-Viersteingruppe · Map #6: erreichbare Endera Herbs einsammeln; bei insgesamt fünf zur Handmaiden zurückkehren.",
  "source": "data/ObjectData - Sheet1.csv:394; state_game.lua:22527–22533; OverworldTriggers.csv:35,101; world_data.lua:138; witches_herb_1Triggers.csv:3–5; research-route.md",
  "alternativeHints": [
   "dungeon-seen-herbs1"
  ]
 },
 {
  "id": "herbs2",
  "name": "Endera-Viersteingruppe · Map #7",
  "category": "challenge",
  "hints": [
   "dungeon-info-herbs2"
  ],
  "stage": "necropolis",
  "difficulty": "Schwer",
  "assessment": "Kleine Kräuterquelle mit Geistern oder Umgebungsgefahren. Kräuter sammeln und gefährliche Kämpfe vermeiden; kein notwendiger Bossabschluss.",
  "size": "1 feste Kräutergruppe",
  "boss": "Kein besonderer Endboss im Herb-Trigger. Geister/Umgebungsgefahren nicht erzwingen.",
  "retreat": "Feste Außenansicht; Rückzug an den Kartenrand möglich.",
  "location": "Nordwestlich Wintersholl, nordwestlich Sleathens Wald.",
  "anchor": "(288,199)",
  "access": "Gelesene Karte oder selbst bestätigte tatsächliche Entdeckung; Gruppe betreten, in Lokalansicht wechseln.",
  "plan": "Nur solange insgesamt noch Endera Herbs fehlen. Bei fünf Kräutern zur Handmaiden zurück, brew.",
  "doneId": "dungeon-done-herbs2",
  "doneText": "Endera-Viersteingruppe · Map #7: erreichbare Endera Herbs einsammeln; bei insgesamt fünf zur Handmaiden zurückkehren.",
  "source": "data/ObjectData - Sheet1.csv:395; state_game.lua:22527–22533; OverworldTriggers.csv:329,359; world_data.lua:139; witches_herb_2Triggers.csv:3–5; research-route.md",
  "alternativeHints": [
   "dungeon-seen-herbs2"
  ]
 },
 {
  "id": "herbs3",
  "name": "Endera-Viersteingruppe · Map #8",
  "category": "challenge",
  "hints": [
   "dungeon-info-herbs3"
  ],
  "stage": "necropolis",
  "difficulty": "Schwer",
  "assessment": "Kleine Kräuterquelle mit Geistern oder Umgebungsgefahren. Kräuter sammeln und gefährliche Kämpfe vermeiden; kein notwendiger Bossabschluss.",
  "size": "1 feste Kräutergruppe",
  "boss": "Kein besonderer Endboss im Herb-Trigger. Geister/Umgebungsgefahren nicht erzwingen.",
  "retreat": "Feste Außenansicht; Rückzug an den Kartenrand möglich.",
  "location": "Direkt westlich Enflamed Glade, südwestlich Wintersholl.",
  "anchor": "(303,267)",
  "access": "Gelesene Karte oder selbst bestätigte tatsächliche Entdeckung; Gruppe betreten, in Lokalansicht wechseln.",
  "plan": "Nur solange insgesamt noch Endera Herbs fehlen. Bei fünf Kräutern zur Handmaiden zurück, brew.",
  "doneId": "dungeon-done-herbs3",
  "doneText": "Endera-Viersteingruppe · Map #8: erreichbare Endera Herbs einsammeln; bei insgesamt fünf zur Handmaiden zurückkehren.",
  "source": "data/ObjectData - Sheet1.csv:396; state_game.lua:22527–22533; OverworldTriggers.csv:199,230; world_data.lua:140; witches_herb_3Triggers.csv:3–5; research-route.md",
  "alternativeHints": [
   "dungeon-seen-herbs3"
  ]
 },
 {
  "id": "herbs4",
  "name": "Endera-Viersteingruppe · Map #9",
  "category": "challenge",
  "hints": [
   "dungeon-info-herbs4"
  ],
  "stage": "necropolis",
  "difficulty": "Schwer",
  "assessment": "Kleine Kräuterquelle mit Geistern oder Umgebungsgefahren. Kräuter sammeln und gefährliche Kämpfe vermeiden; kein notwendiger Bossabschluss.",
  "size": "1 feste Kräutergruppe",
  "boss": "Kein besonderer Endboss im Herb-Trigger. Geister/Umgebungsgefahren nicht erzwingen.",
  "retreat": "Feste Außenansicht; Rückzug an den Kartenrand möglich.",
  "location": "Westlich und etwas südlich Barrow-Linn auf derselben Insel.",
  "anchor": "(171,293)",
  "access": "Gelesene Karte oder selbst bestätigte tatsächliche Entdeckung; Gruppe betreten, in Lokalansicht wechseln.",
  "plan": "Nur solange insgesamt noch Endera Herbs fehlen. Bei fünf Kräutern zur Handmaiden zurück, brew.",
  "doneId": "dungeon-done-herbs4",
  "doneText": "Endera-Viersteingruppe · Map #9: erreichbare Endera Herbs einsammeln; bei insgesamt fünf zur Handmaiden zurückkehren.",
  "source": "data/ObjectData - Sheet1.csv:397; state_game.lua:22527–22533; OverworldTriggers.csv:110,121; world_data.lua:141; witches_herb_4Triggers.csv:3–5; research-route.md",
  "alternativeHints": [
   "dungeon-seen-herbs4"
  ]
 }
];

export const taskDungeonIds:Record<string,string[]>={
 "yarrow-2": [
  "yarrow-cave"
 ],
 "hold-0": [
  "hold"
 ],
 "garden-0": [
  "sleathen"
 ],
 "garden-1": [
  "garden"
 ],
 "ship-0": [
  "click-clack"
 ],
 "ship-2": [
  "sea-cave"
 ],
 "tower-0": [
  "thief"
 ],
 "tower-1": [
  "tower"
 ],
 "jest-1": [
  "jest"
 ],
 "necropolis-3": [
  "necropolis"
 ],
 "repository-4": [
  "bael"
 ],
 "repository-7": [
  "repository"
 ],
 "barrow-2": [
  "ancestors"
 ],
 "clue-jest-stone": [
  "four-lakes"
 ],
 "egg-3": [
  "egg"
 ],
 "finale-5": [
  "lament"
 ],
 "repository-3": [
  "ruin1"
 ],
 "repository-2": [
  "ruin2"
 ],
 "repository-1": [
  "ruin4"
 ],
 "repository-5": [
  "ruin5"
 ],
 "hold-1": [
  "hold"
 ],
 "garden-2": [
  "garden"
 ],
 "garden-3": [
  "garden"
 ],
 "ship-1": [
  "click-clack"
 ],
 "egg-1": [
  "egg"
 ],
 "egg-2": [
  "egg"
 ],
 "yarrow-stone-hint": [
  "yarrow-cave"
 ],
 "prepare-1": [
  "yarrow-cave"
 ],
 "finale-4": [
  "lament"
 ],
 "finale-6": [
  "lament"
 ]
};
export const stageDungeonIds:Record<string,string[]>={
 "hold": [
  "hold"
 ],
 "garden": [
  "sleathen",
  "garden"
 ],
 "ship": [
  "click-clack",
  "sea-cave"
 ],
 "tower": [
  "thief",
  "tower"
 ],
 "jest": [
  "jest"
 ],
 "necropolis": [
  "necropolis"
 ],
 "repository": [
  "ruin1",
  "ruin2",
  "ruin4",
  "ruin5",
  "bael",
  "repository"
 ],
 "egg": [
  "egg"
 ]
};
export const dungeonProgressIds=[...dungeonHints.map(h=>h.id),...dungeons.map(d=>d.doneId)];

// These dialogue tasks depend on an earlier city's actual answer.
export const taskHintIds:Record<string,string[]>={
 'harrow-0':['dungeon-trail-cloak'],
 'barrow-1':['dungeon-trail-triangle'],
 'prepare-0':['dungeon-trail-flimpy'],
 'repository-6':['dungeon-trail-repository']
};
