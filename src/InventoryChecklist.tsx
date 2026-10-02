import { inventoryGroups, inventoryProgressIds } from './inventory';

export function InventoryChecklist({checked,toggle}:{checked:Record<string,boolean>;toggle:(id:string)=>void}){
 const owned=inventoryProgressIds.filter(id=>checked[id]).length;
 return <section class="inventory" aria-labelledby="inventory-heading">
  <div class="inventory-heading"><h3 id="inventory-heading">Dein Inventar</h3><span aria-live="polite">{owned}/{inventoryProgressIds.length} vorhanden</span></div>
  <p>Hake ab, was du bereits besitzt. Ein erneuter Klick entfernt den Haken. „Noch nicht“ heißt nur, dass du das Teil nicht markiert hast; du musst diese Sammlung nicht vervollständigen.</p>
  <p class="small-note">Pro Build in diesem Browser gespeichert und in deiner JSON-Sicherung enthalten. Besitz bedeutet nicht automatisch ausgerüstet oder anlegbar. Die vier Startteile kannst du selbst bestätigen; verkaufte Teile wieder abwählen.</p>
  {inventoryGroups.map(group=><fieldset class="inventory-group" key={group.id}>
   <legend>{group.title}</legend>
   <div class="inventory-items">{group.items.map(item=>{
    const id=`inventory-${item.id}`,owned=!!checked[id];
    return <label key={id} class={`check-row inventory-item ${owned?'is-done':''}`}>
     <input type="checkbox" checked={owned} onChange={()=>toggle(id)} aria-label={`${item.name} vorhanden`}/>
     <span class="inventory-name"><strong>{item.name}</strong>{item.note&&<small>{item.note}</small>}</span>
     <span class="inventory-status" aria-hidden="true">{owned?'Vorhanden':'Noch nicht'}</span>
    </label>;
   })}</div>
  </fieldset>)}
 </section>;
}
