export interface SecretClue {
 id:string;
 stageId:string;
 title:string;
 how:string;
 anchor:string;
 source:string;
 revisit?:string[];
}
export interface Secret {
 id:string;
 title:string;
 introduction:string;
 destination:string;
 destinationStageId:string;
 clues:SecretClue[];
 solution:string[];
 source:string;
}

// These are confirmations of actual discoveries, never inferred from route progress.
export const secrets:Secret[]=[
 {
  id:'hidden-heart',title:'Das Herz hinter der Friedhofsmauer',
  introduction:'„My heart hides behind a word made by walls“: Die Friedhofsinschrift und sechs Wandinschriften gehören zusammen. Notiere jeden gefundenen Buchstaben im Spiel.',
  destination:'Moon-upon-Thoss · Friedhof',destinationStageId:'capital',
  clues:[
   {id:'clue-heart-riddle',stageId:'capital',revisit:['prepare'],title:'Friedhofsinschrift gelesen',how:'Im Friedhof der Hauptstadt von den Gräbern ostwärts zur Mauer gehen. Die im Gras verborgene Inschrift untersuchen.',anchor:'Moon-upon-Thoss, lokal (77,47).',source:'Moon-upon-ThossTriggers.csv:46; strings.lua:60'},
   {id:'clue-wall-capital',stageId:'capital',revisit:['prepare'],title:'Wandinschrift in Moon-upon-Thoss gelesen',how:'Im westlichen Stadtteil nahe Hafen und Fährmann die Mauerinschrift untersuchen und den Buchstaben notieren.',anchor:'Moon-upon-Thoss, lokal (20,72).',source:'Moon-upon-ThossTriggers.csv:61; strings.lua:58'},
   {id:'clue-wall-winter',stageId:'winter',title:'Wandinschrift in Wintersholl gelesen',how:'Im nordwestlichen Stadtbereich die Mauerinschrift suchen, untersuchen und den Buchstaben notieren.',anchor:'Wintersholl, lokal (27,28).',source:'WintershollTriggers.csv:24; strings.lua:55'},
   {id:'clue-wall-hearth',stageId:'hearth',title:'Wandinschrift in Hearthaven gelesen',how:'Auf der Stadtkarte von Hearthaven die Inschrift nördlich der Stadtmitte suchen, leicht nach Osten versetzt. Der Kartenanker liegt an der Nordwand eines kleinen Raums. Untersuchen und den Buchstaben notieren; der genaue Zugang zu diesem Raum ist noch nicht geprüft.',anchor:'Hearthaven, lokal (55,43), innerhalb der Stadt.',source:'HearthavenTriggers.csv:23; strings.lua:53'},
   {id:'clue-wall-red',stageId:'red',revisit:['prepare'],title:'Wandinschrift in The Red Grove gelesen',how:'Im nördlichen Stadtbereich die Inschrift an der Mauer beim einzelnen Bücherregal untersuchen und den Buchstaben notieren.',anchor:'The Red Grove, lokal (43,29); das Bücherregal liegt direkt südwestlich davon.',source:'The_Red_GroveTriggers.csv:5,14; strings.lua:54'},
   {id:'clue-wall-harrow',stageId:'harrow',title:'Wandinschrift in Harrowdus gelesen',how:'Im südöstlichen Stadtbereich die Mauerinschrift suchen, untersuchen und den Buchstaben notieren.',anchor:'Harrowdus, lokal (73,72).',source:'HarrowdusTriggers.csv:4; strings.lua:57'},
   {id:'clue-wall-barrow',stageId:'barrow',title:'Wandinschrift in Barrow-Linn gelesen',how:'Südwestlich der Stadtmitte die Mauerinschrift untersuchen und den Buchstaben notieren.',anchor:'Barrow-Linn, lokal (37,56).',source:'Barrow-LinnTriggers.csv:28; strings.lua:56'}
  ],
  solution:[
   'Die sechs Buchstaben ergeben BYPASS. Sie stammen aus Hearthaven (P), The Red Grove (A), Wintersholl (S), Barrow-Linn (S), Harrowdus (B) und Moon-upon-Thoss (Y); die Reiseroute gibt keine Buchstabenreihenfolge vor.',
   'Zur Inschrift an der östlichen Friedhofsmauer von Moon-upon-Thoss zurückkehren. Direkt daneben Y für Yell drücken, BYPASS eingeben und bestätigen. Der Ruf muss nahe der Inschrift erfolgen; die Mauer reagiert nur in einem Umkreis von zwei Kacheln je Achse.',
   'Durch die geöffnete Mauer treten und das Herz dahinter aufnehmen. Es erhöht deine maximale Gesundheit. Dies ist ein optionaler Fund, kein Relikt und kein Pflichtschritt für den Build.'
  ],
  source:'strings.lua:53–60; Moon-upon-ThossTriggers.csv:44,46,50,61; state_game.lua:15952–15954,22063–22100,22161–22170; globals.lua:335'
 },
 {
  id:'jest-phrase',title:'Die fünf Wörter für Jest',
  introduction:'Der Priester in Harrowdus gibt dir ein Rätsel, das fünf verstreute Wörter beschreibt. Auch bereits früher gefundene Wörter zählen: Hake nur ab, was du selbst gelesen oder erkannt hast.',
  destination:'Harrowdus · Jest-Eingang',destinationStageId:'jest',
  clues:[
   {id:'clue-jest-riddle',stageId:'harrow',title:'Rätsel des Harrowdus-Priesters erhalten',how:'Mit dem Priester über Relic → die → insist → phrase sprechen. Seine Notiz nennt die fünf Fundstellen und die Reihenfolge der Wörter.',anchor:'Gespräch in Harrowdus; das Rätsel steht anschließend in deinen Ingame-Notizen.',source:'DialogueData.csv:239–245'},
   {id:'clue-jest-book',stageId:'red',revisit:['prepare'],title:'Das ungewöhnliche Buch in The Red Grove gelesen',how:'Im nördlichen Stadtbereich das einzelne Bücherregal bei der Mauerinschrift untersuchen. Den Titel des auffälligen weißen Buchs notieren.',anchor:'The Red Grove, lokal (42,30).',source:'The_Red_GroveTriggers.csv:14; strings.lua:83'},
   {id:'clue-jest-trees',stageId:'winter',title:'Das Wort in Wintersholls Bäumen erkannt',how:'Die Bäume im nördlichen Stadtbereich als Ganzes betrachten: Ihre Anordnung bildet ein Wort. Das erkannte Wort notieren; hier gibt es keinen eigenen Notiz-Trigger.',anchor:'Wintersholl.png: Baumformation nördlich der Stadtmitte.',source:'strings.lua:84; Wintersholl.png'},
   {id:'clue-jest-stone',stageId:'barrow',title:'Steininschrift bei Four Lake Meet gelesen',how:'In Barrow-Linn in der Bibliothek das Buch mit der beschädigten Karte lesen: Es markiert Four Lake Meet. Der Ort liegt nordöstlich Wintersholl. Dorthin reisen, in die Lokalansicht wechseln und die Steininschrift im Zentrum untersuchen. Das Wort notieren. Das Kartenbuch allein zählt noch nicht als Wortfund.',anchor:'Kartenbuch in Barrow-Linn, lokal (39,47); Four Lake Meet auf der Weltkarte (330,190), Stein lokal (46,47).',source:'strings.lua:85,110; Barrow-LinnTriggers.csv:9; OverworldTriggers.csv:304,362; Four_Lake_MeetTriggers.csv:23'},
   {id:'clue-jest-bones',stageId:'hearth',title:'Notiz bei den Knochen in Hearthaven gelesen',how:'Im westlichen Stadtbereich die Knochen durchsuchen. Die Notiz lesen und ihr einzelnes Wort notieren.',anchor:'Hearthaven, lokal (17,53).',source:'HearthavenTriggers.csv:34; strings.lua:86'},
   {id:'clue-jest-graves',stageId:'capital',revisit:['prepare'],title:'Das Wort um Henries Grab ermittelt',how:'Im Friedhof Henrie of the Black Watch finden und die benachbarten Grabsteine lesen. Laut Priesterrätsel die Initialen westlich, südlich und östlich seines Grabes zusammensetzen. Erst abhaken, wenn du das Wort ermittelt hast.',anchor:'Henries Grab in Moon-upon-Thoss, lokal (69,45); Nachbargräber (67,45), (69,48), (71,45).',source:'DialogueData.csv:245; strings.lua:64–69; Moon-upon-ThossTriggers.csv:38,43,52,59'}
  ],
  solution:[
   'In der Reihenfolge des Priesterrätsels lauten die Wörter: Death (Buch in The Red Grove), Has (Bäume in Wintersholl), Dominion (Stein bei Four Lake Meet), Over (Knochennotiz in Hearthaven), All (Initialen von Albret, Lionne und Larry um Henries Grab).',
   'Zum Jest-Eingang im Grocer-Rückraum von Harrowdus gehen, hinter die falsche Wand. Direkt bei der verschlossenen Eingangstür Y für Yell drücken und Death Has Dominion Over All eingeben. Bestätigen; die Tür wird entsperrt. Der Ruf reagiert im Umkreis von einer Kachel je Achse um die Tür (lokal 79,82).',
   'Das vollständige Rätsel öffnet den Zugang, es ersetzt die Dungeonvorbereitung nicht. Für die sieben Etagen mit voller Gesundheit, Energie, Heilung und passender Munition starten; in der Route ist dies Etappe 13.'
  ],
  source:'DialogueData.csv:244–247; strings.lua:81–89; HarrowdusTriggers.csv:11; state_game.lua:22063–22125; globals.lua:335'
 }
];

export const secretProgressIds=secrets.flatMap(s=>[...s.clues.map(c=>c.id),`secret-${s.id}-done`]);
export const hasAllClues=(secret:Secret,checked:Record<string,boolean>)=>secret.clues.every(c=>checked[c.id]===true);
export const cluesForStage=(secret:Secret,stageId:string)=>secret.clues.filter(c=>c.stageId===stageId||c.revisit?.includes(stageId));
