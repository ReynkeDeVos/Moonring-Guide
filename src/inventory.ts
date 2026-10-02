import type { BuildId } from './data';

export interface InventoryItem { id:string; name:string; facts:string; note?:string }
export interface InventoryGroup { id:string; title:string; items:InventoryItem[] }
interface InventoryCategory extends InventoryGroup { alternateNote:string }

// Names and values checked against PC 0.0.958 ObjectData - Sheet1.csv.
// Keep existing item IDs for per-build browser progress and JSON backups.
export const inventoryGroups:InventoryCategory[]=[
 {id:"melee",title:"Nahkampfwaffen",alternateNote:"Passt weniger zum Kampfaufbau dieses Builds; Attributanforderung, Gewicht und freie Hände prüfen.",items:[
  {"id":"sword","name":"Sword","facts":"Last 12 · STR 10 nötig"},
  {"id":"shortsword","name":"Shortsword","facts":"Last 10 · STR 5 nötig"},
  {"id":"cutlass","name":"Cutlass","facts":"Last 8 · STR 5 nötig"},
  {"id":"dagger","name":"Dagger","facts":"Last 4"},
  {"id":"mace","name":"Mace","facts":"Last 12 · END 5 nötig · Stealth -1"},
  {"id":"maul","name":"Maul","facts":"Last 12 · END 10 nötig · Stealth -2"},
  {"id":"bright-pin","name":"Bright Pin","facts":"Last 4 · INT 5 nötig · Stealth -1"},
  {"id":"dark-pin","name":"Dark Pin","facts":"Last 4 · INT 5 nötig"},
  {"id":"greatsword","name":"Greatsword","facts":"Last 18 · STR 20 nötig · zweihändig · Stealth -2","note":"STR 20 ist im Wolf-Plan erreichbar, aber zwei Hände verdrängen den Schild. Für Lady fehlt STR."},
  {"id":"arthrona","name":"Arthrona","facts":"Last 25 · STR 30 nötig · zweihändig · Stealth -3","note":"STR 30 und zwei Hände: über dem Wolf-Kern mit STR 25; Lady baut keine STR auf."},
  {"id":"godsneedle","name":"Godsneedle","facts":"Last 10 · FIN 30 nötig","note":"FIN 30: beide Kernpläne bleiben bei FIN 0."},
  {"id":"hornetspite","name":"Hornetspite","facts":"Last 4 · INT 30 nötig","note":"INT 30: beide Kernpläne bleiben bei INT 5."},
  {"id":"halterein","name":"Halterein","facts":"Last 28 · END 30 nötig · zweihändig · Stealth -2","note":"END 30: beide Kernpläne enden bei END 15."},
  {"id":"harvester","name":"Harvester","facts":"Last 18 · PER 30 nötig · zweihändig · Stealth -2","note":"PER 30 und zwei Hände: außerhalb beider Kernpläne."},
 ]},
 {id:"ranged",title:"Fernkampfwaffen",alternateNote:"Passt weniger zum Kampfaufbau dieses Builds; Attributanforderung, Gewicht und freie Hände prüfen.",items:[
  {"id":"shortbow","name":"Shortbow","facts":"Last 10 · PER 5 nötig"},
  {"id":"longbow","name":"Longbow","facts":"Last 16 · PER 10 nötig"},
  {"id":"crossbow","name":"Crossbow","facts":"Last 16 · STR 5 nötig"},
  {"id":"sightbane","name":"Sightbane","facts":"Last 10 · PER 25 nötig"},
  {"id":"staggerbow","name":"Staggerbow","facts":"Last 16 · STR 30 nötig","note":"STR 30: außerhalb beider Kernpläne."},
  {"id":"great-arc","name":"Great Arc","facts":"Last 16 · PER 30 nötig","note":"PER 30: selbst Lady endet im Kernplan bei PER 25."},
 ]},
 {id:"head",title:"Helme & Kopfbedeckungen",alternateNote:"Situative Alternative; für den sparsamen Standardweg kein vorrangiger Kauf.",items:[
  {"id":"cap","name":"Cap","facts":"Last 1 · phys. Schutz 1 · Stun-Schutz 5"},
  {"id":"hat","name":"Hat","facts":"Last 1 · phys. Schutz 1 · Stun-Schutz 8","note":"Leichte Alternative zur Start-Cap mit etwas mehr Stun-Schutz; kein wesentlicher Build-Schritt."},
  {"id":"hood","name":"Hood","facts":"Last 2 · phys. Schutz 1 · Stun-Schutz 10","note":"Etwas mehr Stun-Schutz als Cap, aber doppelte Last; kein vorrangiger Kauf."},
  {"id":"padded-cap","name":"Padded Cap","facts":"Last 1 · phys. Schutz 1 · Stun-Schutz 10 · Madness-Schutz 5","note":"Leichter Stun-/Madness-Schutz. Kein offensiver Buildbonus; bestehende Kopfbedeckung kann genügen."},
  {"id":"pointed-cap","name":"Pointed Cap","facts":"Last 1 · phys. Schutz 1 · Stun-Schutz 10 · Reichweite +2 · phys. Fernkampfschaden +20% · mag. Fernkampfschaden +20%","note":"Der Fernkampfbonus ist für den Wolf-Nahkampf nur bei einem tatsächlich benutzten Zusatzbogen interessant."},
  {"id":"pointed-hat","name":"Pointed Hat","facts":"Last 1 · mag. Schutz 3 · Stun-Schutz 10 · mag. Nahkampfschaden +20% · mag. Fernkampfschaden +20% · mag. Schutz +20%","note":"Magieschutz und magischer Schadensbonus für entsprechende Werkzeuge; kein Bonus für normale Sword-/Bogen-Treffer."},
  {"id":"horned-helmet","name":"Horned Helmet","facts":"Last 12 · phys. Schutz 2 · Stealth -1 · phys. Nahkampfschaden +20% · phys. Schutz +20%","note":"Der Nahkampfbonus unterstützt den Bogen nicht; 12 Last sind für Lady eine teure Reservewaffe-Ergänzung."},
  {"id":"jester-hat","name":"Jester Hat","facts":"Last 1 · Stealth -3","note":"Kein phys. Schutz und Stealth −3. Kein sinnvoller Standardkauf für diese Builds."},
  {"id":"leather-helmet","name":"Leather Helmet","facts":"Last 4 · phys. Schutz 2 · Stun-Schutz 18"},
  {"id":"nose-guard-helmet","name":"Nose-guard Helmet","facts":"Last 6 · phys. Schutz 3 · Stun-Schutz 15"},
  {"id":"iron-helmet","name":"Iron Helmet","facts":"Last 12 · phys. Schutz 3 · Stun-Schutz 20 · Stealth -1","note":"Gleiche Last wie Steel Helmet, aber weniger phys. Schutz und etwas mehr Stun-Schutz. Situativer Tausch."},
  {"id":"steel-helmet","name":"Steel Helmet","facts":"Last 12 · phys. Schutz 4 · Stun-Schutz 18 · Stealth -1","note":"8 mehr Last als Leather Helmet. Mehr phys. Schutz, Stealth −1; zuerst Gesamtlast prüfen."},
 ]},
 {id:"body",title:"Körperrüstung",alternateNote:"Situative Alternative; für den sparsamen Standardweg kein vorrangiger Kauf.",items:[
  {"id":"cotton-tunic","name":"Cotton Tunic","facts":"Last 8 · phys. Schutz 2"},
  {"id":"leather-armour","name":"Leather Armour","facts":"Last 15 · phys. Schutz 4 · Stealth -1"},
  {"id":"chainmail-armour","name":"Chainmail Armour","facts":"Last 30 · phys. Schutz 5 · Stealth -2","note":"Nur 1 phys. Schutz mehr als Leder, aber 15 mehr Last und Stealth −2. Wolf-Lederset: 56 → 71 bei END 15; kaum Reserve. Für Lady zu schwer im 68er-Set."},
  {"id":"platemail-armour","name":"Platemail Armour","facts":"Last 40 · phys. Schutz 7 · Stealth -3","note":"25 mehr Last als Leder. Wolf-Lederset: 56 → 81, Lady: 68 → 93; beides über 72,14 bei END 15."},
 ]},
 {id:"hands",title:"Handschuhe",alternateNote:"Situative Alternative; für den sparsamen Standardweg kein vorrangiger Kauf.",items:[
  {"id":"leather-gloves","name":"Leather Gloves","facts":"Last 2 · phys. Schutz 1"},
  {"id":"chainmail-gloves","name":"Chainmail Gloves","facts":"Last 6 · phys. Schutz 2 · Stealth -1","note":"4 mehr Last und Stealth −1 gegenüber Leder für 1 mehr phys. Schutz. Für Lady lieber Beweglichkeit und Lastreserve erhalten."},
  {"id":"platemail-gloves","name":"Platemail Gloves","facts":"Last 10 · phys. Schutz 3 · Stealth -1","note":"8 mehr Last als Leather Gloves für 2 mehr phys. Schutz. Schwerer Umbau statt Standardkauf."},
 ]},
 {id:"feet",title:"Beinschutz",alternateNote:"Situative Alternative; für den sparsamen Standardweg kein vorrangiger Kauf.",items:[
  {"id":"skirt","name":"Skirt","facts":"Last 1 · phys. Schutz 1","note":"Gleiche Last und gleicher phys. Schutz wie deine Start-Leggings; dafür kein zusätzlicher Kauf nötig."},
  {"id":"kilt","name":"Kilt","facts":"Last 1 · phys. Schutz 1","note":"Gleiche Last und gleicher phys. Schutz wie deine Start-Leggings; dafür kein zusätzlicher Kauf nötig."},
  {"id":"leggings","name":"Leggings","facts":"Last 1 · phys. Schutz 1"},
  {"id":"leather-greaves","name":"Leather Greaves","facts":"Last 6 · phys. Schutz 2"},
  {"id":"chainmail-greaves","name":"Chainmail Greaves","facts":"Last 10 · phys. Schutz 3 · Stealth -1","note":"4 mehr Last und Stealth −1 gegenüber Leder für 1 mehr phys. Schutz. Für Lady ein situativer schwerer Tausch."},
  {"id":"platemail-greaves","name":"Platemail Greaves","facts":"Last 14 · phys. Schutz 4 · Stealth -1","note":"8 mehr Last als Leather Greaves für 2 mehr phys. Schutz. Schwerer Umbau statt Standardkauf."},
 ]},
 {id:"shield",title:"Schilde",alternateNote:"Situative Alternative; für den sparsamen Standardweg kein vorrangiger Kauf.",items:[
  {"id":"buckler","name":"Buckler","facts":"Last 10 · 10% Basis-Block"},
  {"id":"round-shield","name":"Round Shield","facts":"Last 12 · 15% Basis-Block"},
  {"id":"large-shield","name":"Large Shield","facts":"Last 14 · Stealth -1 · 20% Basis-Block"},
  {"id":"heater-shield","name":"Heater Shield","facts":"Last 16 · Stealth -1 · 25% Basis-Block"},
  {"id":"kite-shield","name":"Kite Shield","facts":"Last 18 · Stealth -2 · 30% Basis-Block"},
  {"id":"shield-of-warding","name":"The Shield of Warding","facts":"Last 20 · END 20 nötig · Stun-Schutz 20 · Madness-Schutz 20 · Rot-Schutz 20 · Torpor-Schutz 20 · Blutungs-Schutz 20 · Feuer-Schutz 20 · Gift-Schutz 20 · Stealth -2 · 30% Basis-Block","note":"END 20: beide Kernpläne enden bei END 15. Nur mit zusätzlichem Attributbonus oder Umbau."},
 ]},
 {id:"cloak",title:"Umhänge",alternateNote:"Situativer Schutz; zusätzliche Last im eigenen Set prüfen. Kein Pflichtkauf.",items:[
  {"id":"velvet-cloak","name":"Velvet Cloak","facts":"Last 6 · phys. Schutz 2 · mag. Schutz 2 · Nässe-Schutz 10 · Stealth +2"},
  {"id":"fetid-cloak","name":"Fetid Cloak","facts":"Last 6 · phys. Schutz 2 · mag. Schutz 2 · Rot-Schutz 20 · Nässe-Schutz 10"},
  {"id":"oiled-cloak","name":"Oiled Cloak","facts":"Last 6 · phys. Schutz 2 · mag. Schutz 2 · Madness-Schutz 20 · Nässe-Schutz 10"},
  {"id":"cloak-of-counterforce","name":"Cloak of Counterforce","facts":"Last 6 · phys. Schutz 2 · mag. Schutz 2 · Stun-Schutz 20 · Nässe-Schutz 10"},
  {"id":"cloak-of-inertia","name":"Cloak of Inertia","facts":"Last 6 · phys. Schutz 2 · mag. Schutz 2 · Torpor-Schutz 40 · Nässe-Schutz 10"},
  {"id":"masked-cloak","name":"Masked Cloak","facts":"Last 6 · phys. Schutz 2 · mag. Schutz 2 · Blind-Schutz 40 · Nässe-Schutz 10"},
  {"id":"coagulated-cloak","name":"Coagulated Cloak","facts":"Last 6 · phys. Schutz 2 · mag. Schutz 2 · Blutungs-Schutz 40 · Nässe-Schutz 10"},
  {"id":"spider-s-cloak","name":"Spider's Cloak","facts":"Last 6 · phys. Schutz 2 · mag. Schutz 2 · Gift-Schutz 40 · Nässe-Schutz 10"},
  {"id":"waxed-cloak","name":"Waxed Cloak","facts":"Last 3 · Nässe-Schutz 80"},
  {"id":"woolen-cloak","name":"Woolen Cloak","facts":"Last 4 · phys. Schutz 1 · Nässe-Schutz 20 · Stealth +1"},
  {"id":"leather-cloak","name":"Leather Cloak","facts":"Last 5 · phys. Schutz 2"},
  {"id":"scaled-cloak","name":"Scaled Cloak","facts":"Last 6 · phys. Schutz 2 · mag. Schutz 2 · Feuer-Schutz 40 · Nässe-Schutz 10"},
 ]},
 {id:"neck",title:"Amulette",alternateNote:"Situativer Bonus oder Schutz. Belegt denselben Hals-Slot wie Lightning-bolt; maximale Energie vor Howl/Moonlight neu prüfen.",items:[
  {"id":"noman-s-hand-amulet","name":"Noman's Hand Amulet","facts":"Last 1 · phys. Nahkampfschaden +15% · phys. Fernkampfschaden +15%"},
  {"id":"noman-s-eye-amulet","name":"Noman's Eye Amulet","facts":"Last 1 · mag. Nahkampfschaden +15% · mag. Fernkampfschaden +15%","note":"Bonus für magischen Schaden; der physische Schwert-/Bogen-Kern profitiert davon nicht direkt."},
  {"id":"sigil-amulet","name":"Sigil Amulet","facts":"Last 1 · mag. Schutz +30%"},
  {"id":"harrodinus-amulet","name":"Harrodinus' Amulet","facts":"Last 1 · mag. Schutz 17"},
  {"id":"the-clown-s-pendant","name":"The Clown's Pendant","facts":"Last 1 · Madness-Schutz 25","note":"Situativ gegen Madness. Kein allgemeiner Schadensbonus; ersetzt das Energie-Amulett und kann neutrale Beschwörungen verhindern."},
  {"id":"pugilist-s-medallion","name":"Pugilist's Medallion","facts":"Last 1 · Stun-Schutz 25"},
  {"id":"coiled-amulet","name":"Coiled Amulet","facts":"Last 1 · FIN +5","note":"FIN ist kein Kernattribut dieser Builds; +5 allein öffnet keine FIN-30-Legendary."},
  {"id":"giant-s-amulet","name":"Giant's Amulet","facts":"Last 1 · END +5"},
  {"id":"amulet-of-the-cat","name":"Amulet of the Cat","facts":"Last 1 · Blind-Schutz 25"},
  {"id":"ancient-amulet","name":"Ancient Amulet","facts":"Last 1 · Torpor-Schutz 25"},
  {"id":"sanguine-amulet","name":"Sanguine Amulet","facts":"Last 1 · Blutungs-Schutz 25"},
  {"id":"shield-amulet","name":"Shield Amulet","facts":"Last 1 · phys. Schutz +30%"},
  {"id":"harrodius-amulet","name":"Harrodius' Amulet","facts":"Last 10 · phys. Schutz 10","note":"10 Last statt der üblichen 1 am Hals. Schutz nur bei ausreichender Lastreserve erwägen."},
  {"id":"old-maro-s-amulet","name":"Old Maro's Amulet","facts":"Last 1 · Rot-Schutz 25"},
  {"id":"amulet-of-wintertree","name":"Amulet of Wintertree","facts":"Last 1 · Feuer-Schutz 25","note":"Fund im Tower of Veils; situativ gegen Feuer. Kein Energiebonus."},
  {"id":"amulet-of-immunity","name":"Amulet of Immunity","facts":"Last 1 · Gift-Schutz 25"},
  {"id":"amulet-of-stone","name":"Amulet of Stone","facts":"Last 1 · phys. Schutz 6 · mag. Schutz 6"},
  {"id":"amulet-of-resistance","name":"Amulet of Resistance","facts":"Last 1 · Stun-Schutz 6 · Madness-Schutz 6 · Rot-Schutz 6 · Torpor-Schutz 6 · Blind-Schutz 6 · Blutungs-Schutz 6 · Feuer-Schutz 6 · Gift-Schutz 6 · Nässe-Schutz 6"},
  {"id":"amulet-of-desiccation","name":"Amulet of Desiccation","facts":"Last 1 · Nässe-Schutz 25","note":"Situativer Nässe-Schutz statt Energiebonus; kein allgemeines Kampfupgrade."},
  {"id":"ghostly-amulet","name":"Ghostly Amulet","facts":"Last 1 · Stealth +5","note":"Fund in Necropolis; Stealth statt Energiebonus. Für vorsichtige Erkundung, nicht automatisch zum Beschwören wechseln."},
  {"id":"wolf-amulet","name":"Wolf Amulet","facts":"Last 1 · STR +5"},
  {"id":"scholar-s-amulet","name":"Scholar's Amulet","facts":"Last 1 · INT +5","note":"Mehr INT statt Energie. Nur für einen bewussten Magie-Umbau, nicht für den Standardkampf."},
  {"id":"andera-s-amulet","name":"Andera's Amulet","facts":"Last 1 · PER +5"},
  {"id":"vermiers-amulet","name":"Vermier's Amulet","facts":"Last 1 · Reichweite +5"},
  {"id":"heart-shaped-amulet","name":"Heart-shaped Amulet","facts":"Last 1 · max. Gesundheit +20%"},
  {"id":"lightning-bolt-amulet","name":"Lightning-bolt Amulet","facts":"Last 1 · max. Energie +20%"},
  {"id":"gambler-s-amulet","name":"Gambler's Amulet","facts":"Last 1"},
 ]},
 {id:"quest",title:"Quest-Ausrüstung",alternateNote:"Questwerkzeug, kein normaler Ausrüstungskauf.",items:[
  {id:"advanced-cannon",name:"Advanced Cannon",facts:"Sea Cave · für Yeleba",note:"Für die optionale Legendary-Route behalten; kein Ersatz für deinen normalen Bogen oder Schild."}
 ]}
];
// Editorial suitability order, not a global damage/armour score or a shopping order.
// Only these choices are shown immediately; every other item stays checkable below.
type Recommendation = readonly [id:string, note:string];
const recommendations:Record<BuildId,Record<string,Recommendation[]>>={
 wolf:{
  melee:[
   ['sword','Standardziel · STR 10 nach Hurl; einhändig und mit Schild kombinierbar.'],
   ['shortsword','Früher Zwischenstand · STR 5 nach Slam. Für den direkten Sword-Kauf überspringbar.'],
   ['cutlass','Leichte STR-5-Alternative bei Fund: Last 8 statt Shortsword 10. Kein zusätzlicher Pflichtkauf.'],
   ['dagger','Startwaffe · behalten, solange Gold oder STR für das nächste Teil fehlen.'],
   ['bright-pin','Magische Nahkampfreserve · INT 5 nach Revelation; gegen physisch immune Gegner erwägen. Ersetzt Sword im selben Slot.']
  ],
  ranged:[
   ['shortbow','Leichte optionale Distanzhilfe · PER 5 nach Feast. Das Leder-Set mit 56 Last wird 66 bei END 15. Hurl kann den Kauf ersetzen.'],
   ['crossbow','Alternative mit Bolts · STR 5. Normale Last 16: im Leder-Set bereits 72 von 72,14; Shortbow lässt mehr Reserve.']
  ],
  head:[
   ['horned-helmet','Spätes Nahkampfziel · +20% phys. Nahkampfschaden und phys. Schutz. Leather Helmet → Horned: Leder-Set 56 → 64 bei END 15; mit Shortbow 74 und zu schwer. Basis 3.000, Wintersholl.'],
   ['leather-helmet','Leichter Standard · Last 4, ohne Stealth-Abzug. Vor dem teuren Horned Helmet oft die bessere Budgetwahl.'],
   ['nose-guard-helmet','Schutzalternative · 1 mehr phys. Schutz als Leather Helmet für 2 mehr Last, etwas weniger Stun-Schutz. Basis 600.'],
   ['cap','Startteil · kostenlos behalten, bis der Austausch ins Budget und in die Last passt.']
  ],
  body:[
   ['leather-armour','Standard · guter Schutz bei Last 15. Chainmail kostet für nur 1 mehr phys. Schutz weitere 15 Last.'],
   ['cotton-tunic','Startteil · Last 8. Behalten, wenn Schild und Waffe die Kapazität bereits ausfüllen.']
  ],
  hands:[
   ['leather-gloves','Standard · nur 2 zusätzliche Last für den freien Handslot; günstiger erster Schutz.'],
   ['chainmail-gloves','Spätes Schutzupgrade mit Reserve · 1 mehr phys. Schutz, aber 4 mehr Last und Stealth −1. Leder-Set 56 → 60; Basis 800.']
  ],
  feet:[
   ['leather-greaves','Standard · tragbarer Schutz. Den Austausch der Start-Leggings erst bei freier Last machen.'],
   ['chainmail-greaves','Spätes Schutzupgrade mit Reserve · 1 mehr phys. Schutz für 4 mehr Last und Stealth −1. Leder-Set 56 → 60; Basis 1.600.'],
   ['leggings','Startteil · Last 1; behalten ist bei knappem Gold und hoher Last sinnvoll.']
  ],
  shield:[
   ['heater-shield','Standardziel · 25% Basis-Block bei Last 16. END und Gesamtlast vor dem Austausch prüfen.'],
   ['large-shield','Zwischenlösung · 20% Basis-Block bei Last 14; direkt kaufen oder für Heater überspringen.'],
   ['round-shield','Günstiger Zwischenstand · 15% Basis-Block bei Last 12.'],
   ['buckler','Früher Einstieg · 10% Basis-Block, Basis 100 Gold. Kein Pflichtkauf vor einem größeren Schild.']
  ],
  cloak:[['woolen-cloak','Optionale Ergänzung · Stealth +1, aber 4 mehr Last. Ohne Umhang bleibt mehr Platz für Waffen und Schild.']],
  neck:[
   ['lightning-bolt-amulet','Erstes Ziel für den neutralen Build · Garden-Fund; 100 → 120 maximale Energie ermöglicht Howl.'],
   ['giant-s-amulet','Lastalternative bei Fund · END +5 erhöht die Kapazität um rund 10,71. Ersetzt den Energiebonus; Howl danach neu prüfen.'],
   ['noman-s-hand-amulet','Offensive Alternative bei Fund · +15% phys. Waffenschaden. Nur wechseln, wenn du den Energiebonus gerade entbehren kannst.'],
   ['wolf-amulet','STR-Alternative bei Fund · +5; kann beim vollständigen STR-25-Plan STR 30 öffnen. Kein Energiebonus und keine zusätzliche freie Hand.'],
   ['heart-shaped-amulet','Defensive Alternative · Jest-Fund, +20% maximale Gesundheit. Howl braucht nach dem Wechsel weiterhin 120 Energie.']
  ]
 },
 lady:{
  melee:[
   ['dagger','Leichte Standardreserve · schon vorhanden, ohne Stat-Schwelle. Mehr Platz für Bogen und Munitionseinsatz.'],
   ['mace','Stärkere Nahkampfreserve · END 5, aber 8 mehr Last als Dagger. Am besten erst mit END 10 und Reserve.'],
   ['bright-pin','Magische Nahkampfreserve · INT 5 nach Revelation; Last 4 wie Dagger. Gegen physisch immune Gegner erwägen.']
  ],
  ranged:[
   ['sightbane','Optionales spätes Fundziel · PER 25 passt zum fertigen Lady-Plan; Last 10 statt Longbow 16. Legendary-Zugang nötig, keine Kaufpflicht.'],
   ['longbow','Normales Standardziel · PER 10 nach Feast, Basis 5.000 in Red Grove. Shortbow behalten, wenn sonst Versorgungsgold fehlt.'],
   ['shortbow','Früher Einstieg · PER 5 nach Gash, Basis 1.000. Weiter benutzen, solange Longbow zu teuer ist.']
  ],
  head:[
   ['pointed-cap','Bogen-Ziel · +20% phys. Fernkampfschaden und Reichweite +2 bei nur Last 1. Basis 1.600 in Red Grove; ersetzt Cap ohne zusätzliche Last.'],
   ['leather-helmet','Günstige Schutzalternative · mehr phys. und Stun-Schutz, dafür Last 4 statt 1. Kein Bogenbonus.'],
   ['nose-guard-helmet','Schutzalternative · mehr phys. Schutz als Leather Helmet, aber 2 mehr Last und weniger Stun-Schutz. Nur mit Reserve.'],
   ['cap','Startteil · leicht und bereits bezahlt. Behalten, bis Pointed Cap oder Schutz ins Budget passt.']
  ],
  body:[
   ['leather-armour','Schutzstandard bei genug END · Last 15. Mit schwerer Nahkampfreserve erst ab END 10 einplanen.'],
   ['cotton-tunic','Leichte Budgetalternative · Startteil mit Last 8; mehr Beweglichkeit und Platz für den Bogen.']
  ],
  hands:[['leather-gloves','Leichter Standard · Last 2 ohne Stealth-Abzug. Chainmail/Platemail bringen für diesen Distanzweg viel zusätzliche Last.']],
  feet:[
   ['leather-greaves','Schutzstandard mit Reserve · 5 mehr Last als die Start-Leggings; einzeln und spät austauschen.'],
   ['leggings','Leichte Budgetalternative · Last 1 und bereits vorhanden. Bei häufigem Abstandhalten sinnvoll behalten.']
  ],
  shield:[
   ['round-shield','Optionale Schutzreserve · 15% Basis-Block bei Last 12. Der Slot darf für mehr Beweglichkeit frei bleiben.'],
   ['buckler','Leichtere, günstige Alternative · 10% Basis-Block bei Last 10. Mit dem frühen Longbow-Set schon an der Lastgrenze.']
  ],
  neck:[
   ['lightning-bolt-amulet','Erstes Ziel für den neutralen Build · Garden-Fund; 100 → 120 maximale Energie ermöglicht Moonlight.'],
   ['vermiers-amulet','Reichweitenalternative · Repository-Fund, Reichweite +5. Vor dem Wechsel Moonlight-Energie prüfen.'],
   ['noman-s-hand-amulet','Schadensalternative bei Fund · +15% phys. Fernkampfschaden. Verzicht auf den Energiebonus bewusst abwägen.'],
   ['andera-s-amulet','PER-Alternative bei Fund · +5; kann beim vollständigen PER-25-Plan PER 30 für Great Arc öffnen. Kein Energiebonus.'],
   ['giant-s-amulet','Lastalternative bei Fund · END +5 erhöht die Kapazität um rund 10,71. Moonlight nach dem Amulettwechsel neu prüfen.'],
   ['heart-shaped-amulet','Defensive Alternative · Jest-Fund, +20% maximale Gesundheit. Kein Energiebonus für Moonlight.']
  ]
 }
};

export function inventoryForBuild(build:BuildId){
 return inventoryGroups.map(group=>{
  const choices=recommendations[build][group.id]??[];
  const recommended=choices.map(([id,note])=>({...group.items.find(item=>item.id===id)!,note}));
  const ids=new Set(choices.map(([id])=>id));
  const alternatives=['body','hands','feet','shield'].includes(group.id)?[...group.items].reverse():group.items;
  const other=alternatives.filter(item=>!ids.has(item.id)).map(item=>({...item,note:item.note??group.alternateNote}));
  return {id:group.id,title:group.title,recommended,other};
 });
}
export const inventoryProgressIds=inventoryGroups.flatMap(group=>group.items.map(item=>`inventory-${item.id}`));
