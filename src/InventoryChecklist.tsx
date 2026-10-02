import { inventoryForBuild, inventoryProgressIds } from './inventory';
import type { InventoryItem } from './inventory';
import type { BuildId } from './data';

export function InventoryChecklist({build,checked,toggle}:{build:BuildId;checked:Record<string,boolean>;toggle:(id:string)=>void}){
 const owned=inventoryProgressIds.filter(id=>checked[id]).length;
 const groups=inventoryForBuild(build);
 const rows=(items:InventoryItem[])=><div class="inventory-items">{items.map(item=>{
  const id=`inventory-${item.id}`,owned=!!checked[id];
  return <label key={id} class={`check-row inventory-item ${owned?'is-done':''}`}>
   <input type="checkbox" checked={owned} onChange={()=>toggle(id)} aria-label={`${item.name} vorhanden`}/>
   <span class="inventory-name"><strong>{item.name}</strong><small class="inventory-facts">{item.facts}</small><small>{item.note}</small></span>
   <span class="inventory-status" aria-hidden="true">{owned?'Vorhanden':'Noch nicht'}</span>
  </label>;
 })}</div>;
 return <section class="inventory" aria-labelledby="inventory-heading">
  <div class="inventory-heading"><h3 id="inventory-heading">Dein Inventar · {build==='wolf'?'Wolf & Schild':'Lady & Bogen'}</h3><span aria-live="polite">{owned} Teile vorhanden</span></div>
  <p><strong>Pro Slot: passendste Optionen zuerst.</strong> Die offene Liste zeigt unsere Auswahl für deinen Build, vom Zielteil bis zum brauchbaren Einstieg. Gewicht, Kampfrolle und Attributplan zählen mit; es gibt keine allgemeine Rangliste nach Stärke. Situative Alternativen stehen jeweils darunter zum Aufklappen.</p>
  <p>Die Reihenfolge ist keine Einkaufskette und die obersten Teile bilden zusammen kein geprüftes Set. Späte Fundziele und schwere Upgrades nur wählen, wenn deine aktuellen Attribute, Last und Versorgung passen. Die vier Startteile darfst du bis dahin behalten.</p>
  <p class="small-note">Hake deinen Besitz ab, auch bei den Alternativen. Erneuter Klick entfernt den Haken. Pro Build gespeichert und in der JSON-Sicherung enthalten; Besitz bedeutet nicht ausgerüstet. Schutzwerte sind Spielwerte, keine Prozentwerte der Schadensminderung. „Noch nicht“ ist keine Kaufaufforderung.</p>
  {groups.map(group=><fieldset class="inventory-group" key={`${build}-${group.id}`}>
   <legend>{group.title}</legend>
   {group.recommended.length?rows(group.recommended):<p class="small-note">{group.id==='cloak'?'Kein Umhang als Standardkauf: Last für Bogen und Beweglichkeit freihalten.':'Kein normales Ausrüstungsteil für den Standardkampf.'}</p>}
   {!!group.other.length&&<details class="inventory-alternatives">
    <summary>Weitere {group.title} · situativ oder weniger passend{group.other.some(item=>checked[`inventory-${item.id}`])?` · ${group.other.filter(item=>checked[`inventory-${item.id}`]).length} vorhanden`:''}</summary>
    {rows(group.other)}
   </details>}
  </fieldset>)}
 </section>;
}
