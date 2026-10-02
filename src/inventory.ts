export interface InventoryItem { id:string; name:string; note?:string }
export interface InventoryGroup { id:string; title:string; items:InventoryItem[] }

// Stable IDs share the existing per-build progress store and JSON backups.
export const inventoryGroups:InventoryGroup[]=[
 {id:'starting',title:'Startausrüstung',items:[
  {id:'dagger',name:'Dagger'}, {id:'cap',name:'Cap'},
  {id:'cotton-tunic',name:'Cotton Tunic'}, {id:'leggings',name:'Leggings'}
 ]},
 {id:'weapons',title:'Waffen',items:[
  {id:'shortsword',name:'Shortsword'}, {id:'sword',name:'Sword'},
  {id:'shortbow',name:'Shortbow'}, {id:'longbow',name:'Longbow'},
  {id:'crossbow',name:'Crossbow'}, {id:'mace',name:'Mace'},
  {id:'greatsword',name:'Greatsword',note:'Späte Alternative · zweihändig'},
  {id:'advanced-cannon',name:'Advanced Cannon',note:'Sea Cave · für Yeleba'}
 ]},
 {id:'armour',title:'Rüstung & Schilde',items:[
  {id:'buckler',name:'Buckler'}, {id:'round-shield',name:'Round Shield'},
  {id:'heater-shield',name:'Heater Shield'}, {id:'kite-shield',name:'Kite Shield'},
  {id:'leather-gloves',name:'Leather Gloves'}, {id:'leather-armour',name:'Leather Armour'},
  {id:'leather-helmet',name:'Leather Helmet'}, {id:'leather-greaves',name:'Leather Greaves'},
  {id:'woolen-cloak',name:'Woolen Cloak'}, {id:'steel-helmet',name:'Steel Helmet'},
  {id:'platemail-armour',name:'Platemail Armour',note:'Späte Alternative'}
 ]},
 {id:'amulets',title:'Amulette',items:[
  {id:'lightning-bolt-amulet',name:'Lightning-bolt Amulet',note:'Garden'},
  {id:'amulet-of-wintertree',name:'Amulet of Wintertree',note:'Tower of Veils'},
  {id:'heart-shaped-amulet',name:'Heart-shaped Amulet',note:'Jest'},
  {id:'ghostly-amulet',name:'Ghostly Amulet',note:'Necropolis'},
  {id:'vermiers-amulet',name:"Vermier's Amulet",note:'Repository'}
 ]},
 {id:'legendary',title:'Legendäre Ausrüstung · optionale Fundziele',items:[
  {id:'arthrona',name:'Arthrona',note:'STR 30'},
  {id:'godsneedle',name:'Godsneedle',note:'FIN 30'},
  {id:'hornetspite',name:'Hornetspite',note:'INT 30'},
  {id:'halterein',name:'Halterein',note:'END 30'},
  {id:'harvester',name:'Harvester',note:'PER 30'},
  {id:'great-arc',name:'Great Arc',note:'PER 30'},
  {id:'staggerbow',name:'Staggerbow',note:'STR 30'},
  {id:'sightbane',name:'Sightbane',note:'PER 25'},
  {id:'shield-of-warding',name:'Shield of Warding',note:'END 20'}
 ]}
];
export const inventoryProgressIds=inventoryGroups.flatMap(group=>group.items.map(item=>`inventory-${item.id}`));
