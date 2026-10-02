export type BuildId = 'wolf' | 'lady';
export type GodId = 'wolf' | 'lady' | 'angels' | 'dust';
export interface Gift { id:string; name:string; god:GodId; devotion:number; energy:number; stat:string; condition:string; purpose:string; caution:string; source:string }
export interface Task { id:string; text:string }
export interface Stage { id:string; title:string; region:string; direction:string; tasks:Task[]; gifts:string[]; gear:string; gate?:string; hint?:string; spoiler?:boolean; source:string }
export const gods:Record<GodId,{name:string;stat:string;short:string}> = {
  wolf:{name:'The Great Forest Wolf',stat:'Strength',short:'Wolf'},
  lady:{name:'Our Lady of the Sanguine Moon',stat:'Perception',short:'Lady'},
  angels:{name:'The Blind Angels',stat:'Endurance',short:'Angels'},
  dust:{name:'The Lords of Dust',stat:'Intellect',short:'Dust'}
};
const g=(id:string,name:string,god:GodId,devotion:number,energy:number,stat:string,condition:string,purpose:string,caution:string,source='skill_tree.lua:37–83; actions.lua') : Gift => ({id,name,god,devotion,energy,stat,condition,purpose,caution,source});
export const gifts:Record<BuildId,Gift[]> = {
 wolf:[
 g('slam','Slam','wolf',2,40,'STR 5','Wintersholl besuchen: +2 Wolf-Punkte. Die erste freie Tear für Angels sparen; Wintersholl allein bezahlt Slam.','Schiebt einen Gegner weg. Gegen eine Wand oder ein Hindernis gerichtet wird der Abstand besonders wertvoll.','Zuerst eine sichere Stellung suchen; kein endloser Slam-Loop nötig.'),
 g('hurl','Hurl','wolf',2,50,'STR 10','Weitere 2 Wolf-Punkte: z. B. insgesamt fünf Hirsche unterwegs erlegen (+2).','Wirft die ausgerüstete Nahkampfwaffe als Fernangriff. Kostet keine Pfeile und öffnet die Sword-Schwelle.','Eine Nahkampfwaffe muss ausgerüstet sein. Hurl + Feast kosten neutral zusammen 110 Energie.','actions.lua:3730–3767'),
 g('lifesight','Lifesight','angels',1,30,'END 5','Hearthaven besuchen: +2 Angels-Punkte; nach dem Kauf bleibt einer übrig.','Zeigt Lebewesen hinter Sichthindernissen. Der END-Zuwachs hilft bei der Ausrüstungslast.','Ein Erkundungswerkzeug, kein Schadenszauber.'),
 g('feast','Feast','lady',2,60,'PER 5','The Red Grove besuchen: +2 Lady-Punkte bezahlen den Kauf.','Heilt durch einen Angriff auf einen geeigneten benachbarten Gegner.','Heilung kann bei Resistenz, Block oder Immunität ausbleiben. Heilt Gesundheit, nicht Hunger.','actions.lua:4993–5047; main.lua:89–90'),
 g('blind-leap','Blind Leap','angels',2,40,'END 10','Insgesamt 3 Angels-Punkte. Alle fünf Gottstädte besuchen gibt weitere +2.','Versetzt dich auf ein freies, sichtbares und zu Fuß erreichbares Feld.','Macht dich selbst blind. Lifesight vorher lernen; kein Sprung durch geschlossene Wände.','actions.lua:5230–5250'),
 g('revelation','Revelation','dust',1,30,'INT 5','Barrow-Linn besuchen: +2 Dust-Punkte, davon einen ausgeben.','Prüft Fallen und verborgene Türen. Besonders hilfreich vor langen Dungeons.','Die Gabe ersetzt keine Kampfvorbereitung.'),
 g('hallow','Hallow','wolf',2,40,'STR 15','Weitere 2 freie Wolf-Punkte oder Erkundungstränen. Erst nach tatsächlichem Verdienst kaufen.','Weiht den Bereich einer Leiche oder von Knochen. Dort verfehlen normale Nahkampfschläge nicht und verursachen ×1,5 Schaden.','Braucht Leiche/Knochen. Erst nach dem ersten geeigneten Kill benutzen.','actions.lua:3817–3872; 6865–6871'),
 g('retribution','Retribution','angels',2,80,'END 15','Insgesamt 5 Angels-Punkte. Ortsbesuche geben 4; eine Tear ergänzt den fehlenden Punkt. Alternativ später 100 Untote (+2).','Schützt gegen einen Treffer innerhalb eines begrenzten Zeitfensters und wirft Schaden zurück.','Nach dem Treffer verbraucht. END 15 erhöht den reflektierten Anteil gegenüber END 5 noch nicht. 80 Energie bewusst reservieren.','actions.lua:5221; actor.lua'),
 g('howl','Howl','wolf',5,120,'STR 20','Nach Garden of Lorelei: Lightning-bolt Amulet anlegen und max. Energie ≥120 prüfen. Zusätzlich 5 freie Wolf-Punkte.','Ruft einen spektralen Wolf für schwierige Begegnungen.','Bei genau 120 Energie bleibt nach der Beschwörung 0. Nicht sofort eine weitere Gabe einplanen.','actions.lua:4122; treasure_sets.lua:773–779'),
 g('shockwave','Shockwave','wolf',2,60,'STR 25','Später weitere 2 Wolf-Punkte, z. B. aus natürlich erreichten Kampf-/Fundaufgaben.','Sprung mit Flächenschaden für größere Gruppen.','Kann deinen Wolf und andere Verbündete treffen. Normaler Sword-Angriff bleibt der Standard.','actions.lua:3783–3810')
 ],
 lady:[
 g('gash','Gash','lady',1,50,'PER 5','Erste Devotional Tear vom Priest of Balance der Lady zuordnen.','Nahbereichsangriff mit Blutverlust und Chance auf Phials of Blood. Der Kauf ermöglicht Shortbow.','Gash ist kein Fernschuss. Blutphials sind bei niedriger PER nicht garantiert.','actions.lua:4960–4987'),
 g('feast','Feast','lady',2,60,'PER 10','The Red Grove besuchen: +2 Lady-Punkte.','Heilt beim Angriff auf einen geeigneten benachbarten Gegner. Der Kauf ermöglicht Longbow.','Kann ohne Heilung enden. Gash + Feast kosten neutral 110 Energie; keine automatische Zweierkombo.','actions.lua:4993–5047'),
 g('lifesight','Lifesight','angels',1,30,'END 5','Hearthaven besuchen: +2 Angels-Punkte.','Findet Lebewesen hinter Hindernissen. Erhöht Tragfähigkeit und ermöglicht die Mace als Reserve.','Nicht alle möglichen Ziele sind dadurch schon sicher erreichbar.'),
 g('drill-shot','Drill Shot','lady',2,40,'PER 15','Weitere 2 Lady-Punkte: 25 Wildkräuter finden (+2) oder zwei tatsächlich gewonnene Erkundungstränen.','Schießt durch Körper und Stein. Gegner in einer Linie oder hinter Hindernissen sind gute Ziele.','Ausgerüstete Fernwaffe und eine passende Munition nötig. Nicht jedes normale Einzelziel braucht diese Gabe.','actions.lua:5049–5096'),
 g('blind-leap','Blind Leap','angels',2,40,'END 10','Insgesamt 3 Angels-Punkte; alle fünf Gottstädte besuchen liefert weitere +2.','Schafft Abstand auf einem sichtbaren, freien, begehbaren Feld.','Eigene Blindheit beachten. Lifesight vorher lernen.','actions.lua:5230–5250'),
 g('revelation','Revelation','dust',1,30,'INT 5','Barrow-Linn besuchen: +2 Dust-Punkte.','Deckt Fallen und verborgene Türen auf.','Erst Drill Shot und Blind Leap in dieser Kaufreihenfolge abschließen.'),
 g('moonlight','Moonlight','lady',5,120,'PER 20','Nach Garden of Lorelei: Lightning-bolt Amulet anlegen, max. Energie ≥120 und 5 freie Lady-Punkte prüfen.','Beschwört einen Helfer, während du mit dem Bogen aus Abstand weiterkämpfst.','Bei genau 120 Energie ist die Leiste anschließend leer. Energiebedarf für Heilung und Flucht berücksichtigen.','actions.lua:5198–5218; treasure_sets.lua:773–779'),
 g('retribution','Retribution','angels',2,80,'END 15','Insgesamt 5 Angels-Punkte: Ortsaufgaben plus eine Tear oder später 100 Untote.','Schutz gegen einen Treffer innerhalb eines begrenzten Zeitfensters, wenn der Abstand zusammenbricht.','Nach einem Treffer verbraucht. Teure Absicherung; normales Schießen und Positionieren tragen den Build.','actions.lua:5221'),
 g('star-shot','Star Shot','lady',3,60,'PER 25','Später 3 weitere Lady-Punkte; Fernkampf-, Kräuter- und Reliktaufgaben nutzen.','Kreisförmige Salve: acht Geschosse, jeweils doppelter normaler Schussschaden.','Braucht Fernwaffe und 8 passende Munition. Für Gruppen aufheben.','actions.lua:5099–5140')
 ]
};
export const builds:Record<BuildId,{name:string;subtitle:string;description:string;pros:string[];cons:string[];loop:string[];stats:string;funding:string}> = {
 wolf:{name:'Wolf & Schild',subtitle:'Nahkampf · Kontrolle · Begleiter',description:'Die Empfehlung für den ersten Durchlauf. Eine Einhandwaffe und ein Schild tragen den Kampf; Gaben schaffen Abstand, heilen bei Gelegenheit und bringen später einen Helfer.',pros:['Einfache Grundroutine: Einzelgegner, normale Schläge, gezielte Kontrolle.','Hurl gibt einen Fernangriff ohne Munitionskosten.','Hallow belohnt einen gut gewählten Kampfplatz.'],cons:['Du stehst häufiger im Nahkampf und musst Poise im Blick behalten.','Feast hilft gegen Maschinen und andere ungeeignete Ziele nicht zuverlässig.','Der Wolf kommt erst nach ausreichender Energiekapazität und Devotion.'],loop:['Einzelnen Gegner an einen Engpass locken; mit normalen Schlägen oder Hurl beginnen.','Wenn er zu nah kommt: Slam Richtung Hindernis. Bei passender Leiche Hallow und auf dem geweihten Boden kämpfen.','Bei echtem Heilbedarf und geeignetem Ziel Feast. Für Rückzug Blind Leap mit der anschließenden Blindheit einplanen.','Später Howl vor schwierigen Begegnungen; danach Energievorrat für weitere Gaben prüfen. Shockwave von Verbündeten fernhalten.'],stats:'STR 25 · END 15 · PER 5 · INT 5 · FIN 0',funding:'21 Devotion: Wolf 13 · Angels 5 · Lady 2 · Dust 1. Aufgabenpunkte sind an ihren Gott gebunden; Tears sind frei zuordenbar.'},
 lady:{name:'Lady & Bogen',subtitle:'Fernkampf · Blutheilung · Durchschüsse',description:'Für dich, wenn du lieber Abstand hältst. Perception öffnet früh die Bögen; Lifesight und Drill Shot helfen gegen verdeckte Gegner. Heilung und Positionswechsel sichern Nahkontakt ab.',pros:['Viele Kämpfe lassen sich aus sicherem Abstand eröffnen.','Lifesight + Drill Shot helfen bei Hindernissen und Gegnerlinien.','Feast und später Moonlight geben zusätzliche Sicherheitswerkzeuge.'],cons:['Pfeile kosten Geld; Munition vor jeder Expedition prüfen.','Gash und Feast erfordern trotzdem kontrollierten Nahkontakt.','Etwas mehr Ziel- und Energieplanung; Blutheilung ist kein Universalheilmittel.'],loop:['Rückzugsfelder sichern und normale Bogenschüsse als Standard benutzen.','Bei verdeckten Zielen Lifesight; Drill Shot für lohnende Hindernisse oder Gegnerlinien.','Gash nur bei kontrolliertem Nahkontakt. Feast bei Heilbedarf an geeignetem Ziel; sonst mit Blind Leap Abstand schaffen.','Später Moonlight vor schweren Begegnungen. Star Shot für mehrere sinnvoll verteilte Gegner und mindestens 8 Munition.'],stats:'PER 25 · END 15 · INT 5 · STR 0 · FIN 0',funding:'19 Devotion: Lady 13 · Angels 5 · Dust 1. Lady-Punkte aus Ortsbesuch, Kräutern, Fernkampf und später der Crimson Candle; Tears füllen Lücken.'}
};
const s=(id:string,title:string,region:string,direction:string,texts:string[],giftIds:string[],gear:string,source:string,gate?:string,hint?:string,spoiler=false):Stage=>({id,title,region,direction,tasks:texts.map((text,i)=>({id:`${id}-${i}`,text})),gifts:giftIds,gear,source,gate,hint,spoiler});
export function getStages(build:BuildId):Stage[]{
const w=build==='wolf';
return [
s('yarrow','Yarrow','Ankommen','Im Startdorf: vom Farmhaus zum südlichen verfallenen Gebäude, dann zum nördlichen Familienfriedhof.',[
 'Im verfallenen Gebäude die Käfer besiegen, Carems Notiz lesen und Tiny Key nehmen.',
 'Im Farmhaus die falsche Wand finden; die verschlossene Truhe öffnen und Graveyard Key nehmen.',
 'Am Familienfriedhof die Höhle abschließen. Black Eyed Stone behalten – du brauchst ihn später.'
],[],'Noch keinen großen Kauf erzwingen. Mit Startausrüstung einzelne Gegner bekämpfen und Rückzug lernen.','YarrowTriggers.csv:6–8,17–18,22,30,36; treasure_sets.lua:767–770'),
s('capital','Moon-upon-Thoss','Ankommen','Von Yarrow auf der Straße südwestwärts zur Hauptstadt. Im Osten liegt die Street of the Gods.',[
 'Priest of Balance ansprechen: Dreamless → become Archon → Relics → simple. Die kostenlose Devotional Tear erhalten.',
 'Bei jedem der fünf anderen Priester nach relic fragen. Die Reliktaufgabe und Ortsnamen notieren.',
 w?'Die erste Tear für Angels sparen: Sie schließt später die Lücke zu Retribution. Slam wird über Wintersholl bezahlt.':'Die erste Tear der Lady zuordnen und Gash als erste Gabe kaufen.'
],w?[]:['gash'],w?'Heiltränke, günstiger Buckler und leichte freie Rüstungsslots. Shortsword erst mit STR 5.':'Shortbow beim Weaponsmith: PER 5, Basis 1.000. Pfeile und Heiltränke zuerst einplanen.','DialogueData.csv:31–38,72,86,97–98,111–112,126–127'),
...(w?[
s('winter','Wintersholl','Städtereise','Von der Hauptstadt zurück in Richtung Yarrow, dann ostwärts über die Straßen nach Wintersholl.',[
 'Wintersholl besuchen: +2 Wolf-Devotion. Slam kaufen, damit STR 5 erreichen.',
 'Priester: Garden → not far → the beast → hunting grounds. Die Ziele markieren lassen.',
 'Klagenden Bewohner: disgrace → rogue guardian → history → weapon → pirates → coast.',
 'Unterwegs insgesamt fünf Hirsche erlegen, wenn die Kämpfe sicher sind: +2 Wolf-Punkte. Dann Hurl als zweiten Kauf lernen.'
],['slam','hurl'],'Shortsword ab STR 5 (Basis 1.000). Sword ab STR 10 nur hier (Basis 2.000). Vor END 5 bei leichter Tunic und Buckler bleiben.','DialogueData.csv:198–220; achievements.lua:7–13','Hurl erst mit 2 freien Wolf-Punkten. Der Besuch bezahlt nicht beide Gaben.'),
s('hearth','Hearthaven','Städtereise','Zurück auf die Straßen und nordwärts ins Gebirge nach Hearthaven.',[
 'Hearthaven besuchen: +2 Angels-Devotion. Lifesight als dritten Kauf lernen.',
 'Priest of the Blind Angels: Relic → Tower of Veils → no way in.',
 'Die Spur red cloak notieren; bei der nächsten Rückkehr nach Wintersholl mit Bewohnern darüber sprechen. Die Spur führt nach Harrowdus.'
],['lifesight'],'Mit END 5 ist das 49-Last-Set aus Sword, Lederteilen und Buckler möglich. Steel Helmet ist hier kaufbar, für dieses frühe Set aber zu schwer.','DialogueData.csv:175–177,210–211; ObjectData.csv'),
s('red','The Red Grove','Städtereise','Von Hearthaven zurück über die Straßen Richtung Westen/Südwesten nach The Red Grove.',[
 'The Red Grove besuchen: +2 Lady-Punkte. Feast als vierten Kauf lernen.',
 'Von einem Bewohner Blood is all erfahren und dies der Handmaiden sagen.',
 'Handmaiden: Candle → Necropolis → brave its tombs → not enough → solvent → Endera. Fünf Endera Herbs als späteres Ziel notieren.'
],['feast'],'Heiltränke und Sera-leaf Oil kaufen. Oil heilt Rot; es bietet keine vorbeugende Immunität. Shortbow ist mit PER 5 möglich, aber beide ausgerüsteten Waffen zählen zur Last.','DialogueData.csv:363–380; speech_area.lua:18')
]:[
s('red','The Red Grove','Städtereise','Von Moon-upon-Thoss auf den westlichen Straßen nordwestwärts nach The Red Grove.',[
 'Besuch gibt +2 Lady-Devotion. Feast als zweiten Kauf lernen: PER 10 erreichen.',
 'Bewohner nach Blood is all fragen und dies der Handmaiden sagen.',
 'Handmaiden: Candle → Necropolis → brave its tombs → not enough → solvent → Endera. Für später fünf Endera Herbs notieren.',
 'Auf allen Reisen Wildkräuter aufnehmen. Insgesamt 25 Wildkräuter geben +2 Lady-Punkte für den späteren Drill-Shot-Kauf.'
],['feast'],'Longbow ist hier ab PER 10 erhältlich (Basis 5.000). Wenn das Geld fehlt, Shortbow weiter benutzen; Pfeile und Heilung sind wichtiger.','DialogueData.csv:363–380; achievements.lua:45–51; ObjectData.csv'),
s('hearth','Hearthaven','Städtereise','Von The Red Grove über die Straßen ostwärts und nordwärts ins Gebirge nach Hearthaven.',[
 'Hearthaven besuchen: +2 Angels-Devotion. Lifesight als dritten Kauf lernen.',
 'Priest of the Blind Angels: Relic → Tower of Veils → no way in. Die Spur red cloak notieren.'
],['lifesight'],'Mace als Nahkampfreserve ab END 5 (Basis 1.000). Longbow + Mace + leichte Rüstung + Buckler wiegen bereits 50; noch keinen Cloak ergänzen.','DialogueData.csv:175–177; ObjectData.csv'),
s('winter','Wintersholl','Städtereise','Zurück Richtung Yarrow, dann ostwärts nach Wintersholl.',[
 'Priester: Garden → not far → the beast → hunting grounds. Die Ziele markieren lassen.',
 'Bewohner nach red cloak fragen: die Tower-Schlüsselspur führt nach Harrowdus.',
 'Klagenden Bewohner: disgrace → rogue guardian → history → weapon → pirates → coast. Die besondere Waffe für Sleathen notieren.'
],[],'Hier keine STR-Waffe für diesen Build kaufen. Bögen aus Hauptstadt/Red Grove behalten; die Wolf-Punkte vom Besuch vorerst liegen lassen.','DialogueData.csv:198–220')
]),
s('harrow','Harrowdus','Städtereise','Von Wintersholl südwärts über die Straßen nach Harrowdus.',[
 'Bewohner: furtive → Although → triangular key → Barrow-Linn. Die Tower-Schlüsselspur verfolgen.',
 'Priester: Relic → die → insist → phrase. Die Jest-Zugangsphrase als Rätsel aufnehmen.',
 'Sprechende Gans: secrets → Bael\'s Key → Idiot → However.',
 'Im nordöstlichen Haus die verschlossene Tür mit Lockpick öffnen und die Notiz lesen. Den dort genannten Bewohner Espirus nach literature und click-clack gang fragen.'
],[],'Einige Lockpicks beim Ironmonger (Basis 200), Oil und Heilung beim Apothecary. Vor der nächsten Stadt auffüllen: Barrow-Linn hat keinen Apothecary.','DialogueData.csv:243–248,263–287; HarrowdusTriggers.csv:21; village_sim.lua:53'),
s('barrow','Barrow-Linn','Städtereise','Zur Hauptstadt zurück, die Fähre südwestwärts nehmen; vom Fährort nordwestlich nach Barrow-Linn.',[
 'Priester: Relic → Repository → unlikely → Locus Box → functioning → parts → Roche → still lives.',
 'Bewohner nach triangular key → Funny fragen. Flimpy: fence → guess. Die Spur führt zu Kenner in The Red Grove.',
 'In der Ancestors\' Ossuary die falsche Wand finden und Bael\'s Key nehmen. Für die mögliche alternative Schlussroute behalten.',
 'Prüfen: alle fünf Gottstädte besucht. Das gibt +2 Angels-Punkte; Barrow-Linn selbst gibt +2 Dust-Punkte.'
],w?['blind-leap','revelation']:[],'Vorher gekaufte Heilung behalten. Waffen und Rüstung gibt es hier, Heiltränke jedoch nicht regulär bei einem Apothecary.','DialogueData.csv:316–340; ancestorsTriggers.csv:4; achievements.lua:32–39,56–65'),
s('prepare','Spuren verbinden','Vor dem ersten Relikt','The Red Grove erneut besuchen, dann nach Moon-upon-Thoss zurückkehren.',[
 'In The Red Grove: stranger → Kenner → fled → Moon-upon-Thoss. In der Hauptstadt Bewohner nach Kenner fragen, bis Thief\'s Hideout markiert wird.',
 'Mit Black Eyed Stone beim Priest of Balance: Serpent\'s Eye → predecessor → Ruined Quarter. Im nordwestlichen Ruinenviertel Nevin ansprechen: Nevin → Roche.',
 w?'Nächste Käufe vorbereiten: Hallow, dann Retribution. Hallow kann bis zu den Garden-Belohnungen warten; die erste gesparte Tear ergänzt Angels für Retribution.':'Mit 2 zusätzlichen Lady-Punkten Drill Shot lernen; danach Blind Leap und Revelation. Kräuteraufgabe oder tatsächlich gewonnene Tears nutzen.',
 'Heilung, passende Munition, Hotkeys und aktuelle Last prüfen. Lange Reliktdungeons erst vorbereitet betreten.'
],w?['hallow','retribution']:['drill-shot','blind-leap','revelation'],w?'Sword + Schild behalten. Bei END 10 ist eine leichte zweite Fernwaffe möglich; bei END 15 kann Heater Shield den Buckler ersetzen.':'Longbow anstreben, Mace als Reserve. Bei END 10 passt leichte Rüstung plus Halslast 1; volle Lederteile erst später bei END 15.','DialogueData.csv:57–59,148,385–394,504,507; achievements.lua','Punkte sind keine automatische Questbelohnung. Fehlende Gaben verzögern den Kauf, nicht deine ganze Reise.','Tears aus Rätselorten sind optional: Delera nördlich Hauptstadt, Issera südöstlich davon, Soccera nördlich Harrowdus, Hasera südlich davon. Rätsel lösen UND den Wächter besiegen. Spektrale Ritter können sehr gefährlich sein; später zurückkehren ist sinnvoll.'),
s('hold','The Hold','Erstes Relikt','Von Wintersholl zur südwestlichen Küste. The Hold liegt nahe Fieracarr.',[
 'The Hold abschließen und die garantierte Tooth of Sleathen aus dem Endschatz nehmen.',
 'Zur Stadt zurückkehren, Heilung auffüllen und die besondere Waffe für den nächsten Kampf bereithalten.'
],[],'Tooth of Sleathen ist ein Fund, kein Ladenkauf. Nicht mit The Hole verwechseln – das ist ein anderer Dungeon.','world_data.lua:110; dungeon_data.lua:525–553; treasure_sets.lua:883–886'),
s('garden','Sleathen & Garden','Erstes Relikt','Sleathens Wald liegt nordwestlich Wintersholl; Garden of Lorelei liegt nördlich der Stadt.',[
 'Tooth of Sleathen wirklich als Nahkampfwaffe ausrüsten, dann Sleathen besiegen und Sleathen\'s Head einsammeln. Keine Attributanforderung, einhändig, Last 10: Schild behalten; beim Wechsel von Dagger (Last 4) die zusätzliche Last prüfen.',
 'Mit dem Kopf Garden of Lorelei öffnen. Sieben Etagen und Lord of Trees bewältigen; Steadfast Hand und Endtruhe nehmen.',
 'Lightning-bolt Amulet anlegen: bei 100 Basisenergie auf 120 maximale Energie kommen. Die zusätzliche Halslast 1 prüfen.',
 w?'Howl als neunten Kauf erst lernen, wenn auch die vorherigen Gaben und 5 freie Wolf-Punkte vorhanden sind.':'Moonlight als siebten Kauf erst lernen, wenn auch die vorherigen Gaben und 5 freie Lady-Punkte vorhanden sind.'
],w?['howl']:['moonlight'], 'Lightning-bolt Amulet ist hier beim ersten Abschluss garantiert. Für neutrale Beschwörungen vorerst dieses Amulett tragen.','ActorData.csv:175; world_data.lua:148–154; treasure_sets.lua:773–779','Sleathen ist auch für den Bogen-Build ein besonderer Nahkampf. Slam, Feast und Retribution umgehen seine spezielle Waffenregel nicht.','Vor einem siebenstöckigen Reliktdungeon die Warnung des Spiels beachten: kein einfacher Rückzug durch den Eingang wie in einem Außenareal.'),
s('ship','Schiff & Sea Cave','Weitere Relikte','Harrowdus → südwestliches Click Clack Hideout; danach zum Schiff bei Moon-upon-Thoss.',[
 'Im Click Clack Hideout die Assassinen einzeln bekämpfen, dann den Leader. Mit seinem Schlüssel die Truhe öffnen: Forged Ship Title nehmen.',
 'Zum Schiff neben Moon-upon-Thoss gehen und den Titel nutzen. Die Kaufalternative kostet ungefähr 100.000 Basisgold und ist für diese Route unnötig.',
 'Mit dem Schiff die Sea Cave südlich der Hauptstadt abschließen. Advanced Cannon mitnehmen.'
],[], 'Heilung und Pfeile vor dem Hideout ergänzen. Den erkämpften Forged Ship Title nutzen; Advanced Cannon ist ein Dungeonfund.','ClickclackTriggers.csv:2–12; treasure_sets.lua:863–869; help.lua:60–67'),
s('tower','Tower of Veils','Weitere Relikte','Kennerinsel nordöstlich Wintersholl, südöstlich des großen Meereskreuzes; danach Tower südwestlich Hearthaven.',[
 'Thief\'s Hideout auf der markierten Kennerinsel anfahren und besiegen. Tower Keys nehmen.',
 'Tower of Veils mit den Schlüsseln öffnen und abschließen. All-seeing Eye und Amulet of Wintertree aus dem Endschatz mitnehmen.'
],w?['shockwave']:['retribution'],'Wintertree-Amulett als Feuerabwehr merken. Ein Wechsel ersetzt das Energie-Amulett: neutrale Beschwörungen brauchen weiterhin max. 120 Energie.','OverworldTriggers.csv:93,126; treasure_sets.lua:806–812','Die hier vorgeschlagenen späten Gaben erst kaufen, wenn ihre vorherigen Käufe und Punkte vorhanden sind.','Boss-Hilfe: Almas\' Dunkelheit und Schild über alle vier Braziers auflösen. In der Dunkelheit keine Schläge auf das Schild verschwenden.'),
s('jest','Jest','Weitere Relikte','In Harrowdus in den Grocer-Rückraum; hinter der falschen Wand liegt der Eingang.',[
 'Die fünf Phrase-Hinweise vervollständigen oder die aufklappbare Lösung verwenden.',
 'Die vollständige Phrase in Eingangsnähe rufen. Sieben Etagen abschließen; Trickster\'s Mask und Heart-shaped Amulet nehmen.'
],w?[]:['star-shot'],'Feuer-/Statusreserve und genügend Munition. Bei Wintertree-Wechsel Energiegrenze neu prüfen. Star Shot braucht 8 Pfeile/Bolzen pro Einsatz.','strings.lua:83–86; HarrowdusTriggers.csv:11; actor_boss.lua:945–1072',undefined,'Zugangslösung: Death has dominion over all. Hinweise: Red-Grove-Buch „Death“, Wintersholl-Schrift „has“, Four Lake Meet „dominion“, Hearthaven-Knochen „over“, Henries Grab in der Hauptstadt „all“. Boss: „says“ bedeutet befolgen; „laughs“ bedeutet das Gegenteil. Nicht pauschal alles umkehren.'),
s('necropolis','Necropolis','Weitere Relikte','Von Harrowdus zuerst zur Kräutergruppe nordwestlich der Stadt, danach zur Gruppe westlich der Enflamed Glade. Sobald du fünf Herbs hast, zur Handmaiden in The Red Grove.',[
 'Falls du die Fundorte noch nicht kennst: Beim Ironmonger (Hardware Store) im Südwesten von Harrowdus Treasure Map #6 und #8 kaufen, jeweils Basis 2.000. Nur benötigte Karten kaufen. Auf Land: I → Karte auswählen → Enter → Read bestätigen; dann der neuen Weltkartenmarkierung folgen. Kräuterorte heißen anfangs „a secret location“ / „???“.',
 'Fünf Endera Herbs sammeln: zuerst die Vier-Stein-Gruppe nordwestlich Harrowdus (#6, Brücke an der Westseite), danach südwestlich Wintersholl die Gruppe direkt westlich Enflamed Glade (#8, Brücke südlich der Gruppe). Im Zentrum mit Enter in Lokalansicht wechseln und Kräuter aufnehmen. Bei fünf aufhören; weitere Quellen stehen unter „Wegdetails“.',
 'Mit fünf Kräutern zur Handmaiden zurück: brew. Witches\' Solvent bekommen; der Kauf für Basis 400.000 ist kein Anfängerziel.',
 'Solvent am Necropolis-Zugang südöstlich The Red Grove verwenden. Sieben Etagen abschließen und Crimson Candle samt Endschatz nehmen.'
],[], 'Oil gegen Rot und passende Heilung. Karten sind Orientierungshilfen, kein Pflichtkauf. Kräuter aufnehmen und Geistern ausweichen; nicht jeden optionalen Kampf erzwingen.','ObjectData.csv:389–398,403; state_game.lua:22527–22533; speech_area.lua:18,2096–2100; witches_herb_Triggers.csv; DialogueData.csv:379', 'Fünf Kräuter sind erforderlich, nicht fünf getrennte Schreine. Bestand im Inventar zählen; ausgelassene Quellen sind kein Rückstand.','Alle Quellen, falls noch Kräuter fehlen: Map #6 = nordwestlich Harrowdus (298,295); #8 = westlich Enflamed Glade, südwestlich Wintersholl (303,267); #7 = nordwestlich Wintersholl und nordwestlich Sleathens Jagdgebiet (288,199); #9 = westlich und etwas südlich Barrow-Linn auf derselben Insel (171,293). Erst auf die Barrow-Insel reisen. #10 = Meida\'s Hideout südöstlich Red Grove, östlich und etwas südlich Poison Cross (231,207): Treppenabgang, Dungeon mit eingeschränktem Rückzug, eine garantierte Herb im Hauptschatz. Vorher volle Reserven. Die vier Steingruppen enthalten jeweils mehrere einzelne Kräuter; Meida allein ist keine Abkürzung zu fünf. Koordinaten sind nur sekundäre Rechercheanker; nutze Stadt, Landmarke und Kartenmarker.'),
s('repository','Repository','Letztes Relikt','Empfohlener Sammelkurs: Harrowdus → Enflamed Glade → Venom Cube → Poison Cross → Bael\'s Tomb → Magma Chamber per Schiff. Danach Runacarr bei der Hauptstadt.',[
 'Fehlende Orte markieren: beim Ironmonger im Südwesten von Harrowdus nur die benötigten Treasure Maps #1–#5 kaufen (Basis je 2.000). Auf Land mit I → Karte → Enter → Read lesen, dann den Weltkartenmarker verfolgen. Gelesene Karten werden verbraucht; die Markierung bleibt.',
 'Enflamed Glade: Map #4. Südwestlich Wintersholl und nördlich Harrowdus, direkt östlich der Map-#8-Kräutergruppe. Per Schiff am Steg unmittelbar nördlich anlegen, dann südwärts zur Ruine. In Lokalansicht Feuerfallen beachten und Fragment aus dem Container nehmen.',
 'Venom Cube: Map #2. Nordwestlich Wintersholl, nordöstlich Yarrow, im Inneren der großen ringförmigen Waldregion. Dem Marker folgen, Lokalansicht betreten und Fragment aus dem Container nehmen; Giftfallen und Gegner beachten.',
 'Poison Cross: Map #1. Südöstlich The Red Grove und westlich Meida\'s Hideout. Vom südlichen Red-Grove-Ausgang dem Weg ost-/südostwärts durch den Berg-/Flussdurchgang über die Brücken folgen; die Ruine liegt zuletzt nördlich des Weges. Fragment aus dem Container nehmen; Giftfallen beachten.',
 'Bael\'s Tomb: Map #3. Deutlich südlich The Red Grove, etwas westlicher als die Stadt; südöstlich Essacarr Henge. Den südlichen Weg über die Brücken verfolgen. Die Außenruine führt in einen Dungeon: vorbereitet abschließen und Fragment aus dem Hauptschatz nehmen. Dies ist nicht Bael\'s Key aus Barrow-Linn.',
 'Magma Chamber: Map #5. Mit dem Schiff zur äußersten Südküste, südlich Moon-upon-Thoss und südwestlich Harrowdus. Am Steg an der Südseite der kleinen Landstelle anlegen, wenige Felder nordwärts zur Ruine. Amberfallen und Turrets beachten; Fragment aus dem Container nehmen.',
 'Mit fünf Fragmenten entsteht automatisch Locus Box. An Runacarr benutzen, um Thossacarr sichtbar zu machen.',
 'Über die Nordverbindung des Henges auf die Insel; vom Insel-Henge nordöstlich zum Repository. Dungeon abschließen; Pale Heart und Vermier\'s Amulet nehmen.'
],[], 'Magma Chamber braucht das Schiff. Heilung, Statusmittel und Fernangriff vorbereiten; Water gegen Feuer für Enflamed Glade. Karten nur für fehlende Orte kaufen; gegen Maschinen optional Sabotage erwägen.','ObjectData.csv:389–393; world_data.lua:66–70; state_game.lua:22502–22533; OverworldTriggers.csv; treasure_sets.lua:799–805,871–875','Hengeziele wirklich besuchen/sehen; nur eine Kartenmarkierung genügt nicht. Vor Bael\'s Tomb und Repository volle Reserven.','Sekundäre Rechercheanker: Poison Cross (217,204), Venom Cube (306,219), Bael\'s Tomb (173,228), Enflamed Glade (313,268), Magma Chamber (267,412). Folge den Kartenmarkern statt einer ungeprüften geraden Linie durch Berg oder Meer. Lens Keeper: zuerst Shield Crystals zerstören; nach Phasenwechsel erneut.'),
s('egg','The Egg · DX','Vor dem Abschluss','Mit dem Schiff von Barrow-Linn südwestwärts zur weit westlichen, bergigen Küstenbucht. Von der Meeresseite an den nach Osten zeigenden Steg anlegen; an Land sechs Weltkacheln westwärts durch das Gehölz zum großen Ei.',[
 'Nach den fünf Relikten die nummerierte Gabenliste und das späte END-15-Set fertigstellen. In einer Stadt gesund, mit voller Energie, Nahrung und Reserven starten. The Egg jetzt einschieben, bevor du eine der Schlussrouten beginnst.',
 'Den Anleger und das Ei erreichen. Sekundäre Kartenanker: Steg (120,341), Ei (114,341), deutlich südwestlich Barrow-Linn. Kein gerader Landweg durch die umliegenden Berge.',
 'Das große Ei anrempeln; danach auf den geöffneten Eingang gehen und Enter drücken. Die Einwegwarnung erst bestätigen, wenn du für den langen Dungeon bereit bist. Bei „Dee Ell See“ die DLC-Installation in Steam prüfen.',
 'Den Lauf bis Etage 100 abschließen, den Preis aufnehmen und durch den dortigen Ausgang wieder an die Oberfläche zurückkehren. Danach in einer Stadt auffüllen und erst dann den Abschluss wählen.'
],[],w?'Sword + Heater Shield, leichtes Lederset; Hurl als Distanzhilfe. Das bisherige 70/72,14-Set bleibt gültig. Heil-/Statusmittel, Nahrung, Water und Energieversorgung auffüllen.':'Longbow + Mace + Round Shield, leichtes Lederset; das bisherige 68/72,14-Set behalten. Pfeile, Heil-/Statusmittel, Nahrung, Water und Energieversorgung auffüllen.','OverworldTriggers.csv:205,384; Overworld.png; actor.lua:4213–4234; state_game.lua:11463–11495; world_data.lua:205–314; research-egg.md','DX ist Zusatzinhalt; für diese Route ist es eingeplant. Zugang hat kein Relikt-Gate, die späte Einordnung ist unsere Vorbereitungsempfehlung. Auf Etage 1 gibt es keinen Rückweg nach draußen. Neutral Howl/Moonlight nur mit aktuell mindestens 120 maximaler Energie benutzen.')
];
}
export const eggFloorIds=Array.from({length:100},(_,i)=>`egg-floor-${i+1}`);
export const eggBands=[
 {enemies:'Hive, Käfer, Fledermäuse, Spinnen, Wölfe und erste humanoide Gruppen. Minibosse können Dire Wolf, Hunter oder Spectral Knight sein.',tip:'Die normale Kampfroutine trägt den Lauf. Früh prüfen, ob du Energie und Heilung zuverlässig einteilen kannst.'},
 {enemies:'Stärkere Varianten der frühen Gruppen; Dolls werden möglich.',tip:'Vor unbekannten Türen deine Stellung und freie Rückzugsfelder sichern.'},
 {enemies:'Ghost Bats, Rotlings und Light Spectres; Gazer werden als Minibosse möglich.',tip:'Rot- und Blindheitsmittel für später behalten. Die ersten leichten Etagen sind keine Zusage für den Rest.'},
 {enemies:'Silverwolves, Amberghasts und stärkere Untote; Reaper und Death-Maidens werden möglich.',tip:'Sichtlinien und Status im Blick behalten. Ab Etage 34 können Bell-Räume bis zu zwei Bells vorsehen.'},
 {enemies:'Forgotten Hulks, Hunters, Creepers, Boggarts und Mimics; Darknight wird als Miniboss möglich.',tip:'Räume und Truhen bewusst sichern. Ein vollständiges Leerräumen jeder Etage ist kein Pflichtziel.'},
 {enemies:'Bug Eyes, Ghosts und Blindwolves; Great Gazer wird als Miniboss möglich.',tip:'Lifesight vor verdeckten Begegnungen nutzen. Keine sichere Auffüllung durch zufällige Beute erwarten.'},
 {enemies:'Borog, Techs, Impalers und Shimmershee; mechanische Gruppen werden möglich.',tip:'Feast bleibt ein Gelegenheitswerkzeug. Unabhängige Heilung aufheben; ab Etage 67 sind bis zu drei Bells vorgesehen.'},
 {enemies:'Zusätzlich Constructs, Spikers, Bombers und Dice.',tip:'Freie Bewegungsfelder und einen normalen Fernangriff bewahren. Teure Gaben gezielt einsetzen.'},
 {enemies:'Stärkere Techs/Constructs, Firewalkers und Piercers.',tip:'Feuer- und Statusreserven vor weiterem Abstieg prüfen. Lebensmittel ersetzen keine HP-Heilung.'},
 {enemies:'Auf 91–99 stärkste Gruppen, einschließlich Dark Spectres. Reaper, Darknight und Great Gazer im Miniboss-Pool; 100 ist eine feste Abschlusskarte.',tip:'Auf 99 vor dem Abstieg heilen, Status bereinigen und Energie, Munition sowie Amulett prüfen. Von Etage 100 führt keine normale Treppe zurück zu 99.'}
];
export function eggFloorMarkers(n:number){
 if(n===100)return 'Feste Abschlusskarte · Hilfe unten eingeklappt';
 const tags:string[]=[];
 if(n%4===3)tags.push('Maiden möglich');
 if(n%4===0)tags.push(`Bells vorgesehen (bis ${n<=33?1:n<=66?2:3})`);
 if(n%7===6)tags.push('Library vorgesehen');
 if(n===34||n===67)tags.push('Mehr Bells ab diesem Band');
 if(n===99)tags.push('Vor Abstieg zu 100 vorbereiten');
 return tags.join(' · ')||'Abstieg, nötige Schlüssel, Reserven';
}
export const equipment = {
 wolf:[
 {phase:'Vor Lifesight · END 0',items:'Shortsword 10 + Cotton Tunic 8 + Cap 1 + Leather Gloves 2 + Leggings 1 + Buckler 10 + Woolen Cloak 4',load:'36 / 40',note:'Sword wiegt 12 statt 10: dieselbe leichte Kombination wiegt dann 38. Noch kein vollständiges Lederset und keine zweite Waffe ergänzen.'},
 {phase:'Nach Lifesight · END 5',items:'Sword 12 + Leather Armour 15 + Leather Gloves 2 + Leather Greaves 6 + Leather Helmet 4 + Buckler 10',load:'49 / 50,71',note:'Ohne Cloak und ausgerüsteten Bogen. Gute leichte Nahkampfgrundlage.'},
 {phase:'Nach Blind Leap · END 10',items:'Voriges 49er-Set + Shortbow 10 + Lightning-bolt Amulet 1',load:'60 / 61,43',note:'Amulett erst nach tatsächlichem Fund. Noch kein Cloak.'},
 {phase:'Nach Retribution · END 15',items:'Sword 12 + Shortbow 10 + Lederkörper/-handschuhe/-beine/-helm 27 + Heater Shield 16 + Lightning-bolt Amulet 1 + Woolen Cloak 4',load:'70 / 72,14',note:'Für Sicherheit Sword und Schild behalten. Greatsword ist optional und verdrängt den Schild.'}
 ],
 lady:[
 {phase:'Vor Lifesight · END 0',items:'Shortbow 10 + Dagger 4 + Cotton Tunic 8 + Cap 1 + Leather Gloves 2 + Leggings 1 + Buckler 10 + Woolen Cloak 4',load:'40 / 40',note:'Der normale Dagger hat keine Stat-Anforderung. Bei Longbow (+6 Last) Cloak und Nebenwaffe weglassen.'},
 {phase:'Nach Lifesight · END 5',items:'Longbow 16 + Mace 12 + Cotton Tunic 8 + Cap 1 + Leather Gloves 2 + Leggings 1 + Buckler 10',load:'50 / 50,71',note:'Kein Cloak und noch kein Amulett. Normale Cap (Basis 150); Padded Cap (1.500) ist kein nötiger Frühkauf.'},
 {phase:'Nach Blind Leap · END 10',items:'Voriges 50er-Set + Lightning-bolt Amulet 1; optional Leather Armour statt Cotton Tunic (+7)',load:'51 bzw. 58 / 61,43',note:'Noch keine vollständige Lederhelm-/Bein-Aufrüstung ergänzen.'},
 {phase:'Nach Retribution · END 15',items:'Longbow 16 + Mace 12 + Lederkörper/-handschuhe/-beine/-helm 27 + Round Shield 12 + Lightning-bolt Amulet 1',load:'68 / 72,14',note:'Optional Woolen Cloak (+4): dann 72. Auch unter der Grenze macht mehr Last Bewegung langsamer.'}
 ]
};
export const shops:Record<BuildId,{item:string;price:string;where:string;requirement:string;why:string}[]>={
 wolf:[
 {item:'Shortsword → Sword',price:'1.000 → 2.000',where:'Shortsword: alle Städte. Sword: Wintersholl.',requirement:'STR 5 → STR 10',why:'Slam → Hurl öffnet beide Schwellen. Gleichwertige Beute ersetzt den Kauf.'},
 {item:'Buckler → Heater Shield',price:'100 → 800',where:'Armourer in allen sechs Städten.',requirement:'Keine Stat-Schwelle; Last 10 → 16',why:'10% → 25% Datenblockchance. Heater erst mit ausreichender Lastreserve.'},
 {item:'Cotton Tunic → Leather Armour',price:'Leather: 800',where:'Armourer in allen sechs Städten.',requirement:'Last 8 → 15',why:'Vor END 5 leicht bleiben. Lederhandschuhe 300 und -beine 600 nach Lastprüfung.'},
 {item:'Shortbow oder Crossbow',price:'Je 1.000',where:'Shortbow: Hauptstadt/Red Grove. Crossbow: Hauptstadt/Wintersholl.',requirement:'PER 5 bzw. STR 5',why:'Optionale Distanzreserve. Hurl reicht oft; Pfeile bzw. Bolzen und Zweitwaffenlast einplanen.'},
 {item:'Kite Shield / Steel Helmet',price:'1.600 / 1.000',where:'Kite: alle Städte. Steel Helmet: Wintersholl/Hearthaven.',requirement:'Keine Stat-Schwelle; Last vorher prüfen.',why:'Spätere gezielte Upgrades. Steel Helmet wiegt 12 statt Leather Helmet 4.'},
 {item:'Greatsword / Platemail Armour',price:'8.000 / 4.000',where:'Wintersholl / Hearthaven.',requirement:'STR 20 / Rüstung ohne Stat-Schwelle',why:'Optionale Abzweigung, kein Standard. Greatsword ist zweihändig; Platemail wiegt allein 40.'}
 ],
 lady:[
 {item:'Shortbow → Longbow',price:'1.000 → 5.000',where:'Shortbow: Hauptstadt/Red Grove. Longbow: Red Grove.',requirement:'PER 5 → PER 10',why:'Gash → Feast öffnet die Bögen. Einen vorhandenen Shortbow weiter nutzen, bis Reservegeld da ist.'},
 {item:'Mace',price:'1.000',where:'Weaponsmith in allen sechs Städten.',requirement:'END 5; Last 12',why:'Nach Lifesight als Nahkampfreserve. Für Sleathen brauchst du trotzdem Tooth of Sleathen.'},
 {item:'Buckler → Round Shield',price:'100 → 200',where:'Armourer in allen sechs Städten.',requirement:'Keine Stat-Schwelle; Last 10 → 12',why:'Leichte Reserve für Nahkontakt. Weiterer Schildausbau erst nach Lastprüfung.'},
 {item:'Cap / Leather Gloves',price:'150 / 300',where:'Armourer in allen sechs Städten.',requirement:'Last 1 / 2',why:'Günstige freie Slots. Schwere Zwischenstufen vermeiden, wenn Longbow + Mace das Budget füllen.'},
 {item:'Leather Armour / Greaves / Helmet',price:'800 / 600 / 400',where:'Armourer in allen sechs Städten.',requirement:'Last 15 / 6 / 4',why:'Körper bei END 10 möglich; vollständiges Set samt Reservewaffe und Schild erst bei END 15.'}
 ]
};
export const finale = [
 {title:'Erster Abschluss',text:'Alle fünf Relikte sammeln: Steadfast Hand, All-seeing Eye, Trickster\'s Mask, Crimson Candle und Pale Heart. Für die DX-Route zuerst The Egg abschließen. Nach Moon-upon-Thoss zum Archon zurückkehren und mit dem Thron interagieren. Das löst das erste Ende aus. Wenn du die alternative Route möchtest, vor der Throninteraktion weiterlesen.'},
 {title:'Roche und die Glocke',text:'Mit Black Eyed Stone zu Hermit\'s Hut auf der Insel nordwestlich Red Grove (Welt 140,172), per Schiff oder bekannter Henge-Verbindung. Gespräch: Roche → lives → Serpents → guardian → nothing → learned much / gods / move on → Tether → true names → too old → shades → free them. Tarthus notieren und Roche\'s Bell nehmen.'},
 {title:'Vier Geister finden',text:'Die Glocke weist zur nächsten offenen Stelle. Auf der Weltkachel in Lokalansicht wechseln und in der Nähe klingeln: Yarrow am Wasser nordwestlich der Farm (lokal 26,43), Weltmeer (224,397), Sumpf südlich Harrowdus (312,333), Kraterrand nördlich Wintersholl (302,80). Geister besiegen und Caryon, Anun, Balatoth, Hezreh erfahren. Wiederholtes Klingeln kann Statusbelastungen verursachen.'},
 {title:'Issacarr öffnen',text:'Bael\'s Key aus der Ossuary in Barrow-Linn am geschützten südlichen Stein in Issacarr, südöstlich Harrowdus (317,319), anwenden. Nostacarr (404,371) wird aktiv. Die Südseite der Henge-Verbindung benutzen: vom Norden zur Warpmitte gehen. Auf der Finaleinsel liegt The Lament nördlich des Henges (404,364).'},
 {title:'Vor The Lament',text:'Nach allen fünf Relikten ist dies die empfohlene Fortsetzung; kein zusätzliches Relikt-Gate am Eingang wird behauptet. The Egg vorher abschließen. Alles danach erneut auffüllen: Heilung, Energie, Ammo, Statusmittel. Fünf Arenen und eine sechste Boss-Ebene; der Eingang schließt. Passende normale Ausrüstung genügt als Ziel, keine Legendary-Pflicht.'},
 {title:'Die fünf Altäre',text:'Im Tether-Raum Bodensymbole beachten; Altäre stehen je nach Run unterschiedlich. In Rufreichweite 2 am passenden Altar den Namen rufen: Wolf Tarthus; Harlequin Caryon; Dust Anun; Lady Balatoth; Angels Hezreh. Nach allen fünf erlischt der Schild; dann Tether bekämpfen. Todesblick kann aus Distanz 4 gefährlich werden: Blicklinie vermeiden. Der letzte Altar löst zudem einen Lebens-/Statusangriff auf dich und deine Helfer aus.'},
 {title:'Nach dem finalen Kampf',text:'The Lament verlassen. Dadurch verändert sich die Welt und die göttlichen Gaben, Devotion und Eid werden zurückgesetzt; Attributwerte und normale Ausrüstung bleiben wichtig. Für den Abschluss nach Moon-upon-Thoss zum Archon und mit dem Thron interagieren. Danach keine Kampfroute mehr auf Feast oder Howl aufbauen.'}
];
