import { useState } from 'preact/hooks';
import type { BuildId, Stage } from './data';
import type { Dungeon, DungeonHint, Progress } from './dungeon-model';
import { accessReady, confirmedHint, locationKnown, recommendedStage } from './dungeon-model';
import { dungeons, dungeonHints } from './dungeons';

interface Props { build:BuildId; checked:Progress; toggle:(id:string)=>void; stages:Stage[]; jump:(id:string)=>void }
const stageLabel=(stages:Stage[],id:string)=>{const i=stages.findIndex(s=>s.id===id);return i<0?'Alternative Schlussroute':`Etappe ${i+1}: ${stages[i].title}`};
function HintRow({hint,checked,toggle,stages,jump}:Omit<Props,'build'>&{hint:DungeonHint}){
 const missing=(hint.requires??[]).filter(id=>!confirmedHint(id,checked,dungeonHints));
 return <div class="dungeon-hint">
  <label class={`check-row ${confirmedHint(hint.id,checked,dungeonHints)?'is-done':''}`}>
   <input type="checkbox" checked={!!checked[hint.id]} disabled={missing.length>0&&!checked[hint.id]} onChange={()=>toggle(hint.id)}/>
   <span><strong>{hint.title}</strong>{missing.length?<span class="clue-how">Zuerst bestätigen: {missing.map(id=>dungeonHints.find(h=>h.id===id)?.title??'die vorherige Questaufgabe').join('; ')}.</span>:<span class="clue-how">{hint.how}</span>}</span>
  </label>
  {jump&&<button class="text-button" onClick={()=>jump(hint.stages[0])}>{stageLabel(stages,hint.stages[0])}</button>}
  <details class="source"><summary>Hinweisquelle prüfen</summary><p>{hint.source}</p></details>
 </div>;
}
function DungeonDetails({dungeon,build,checked,toggle,stages,jump}:Props&{dungeon:Dungeon}){
 const known=locationKnown(dungeon,checked,dungeonHints),ready=accessReady(dungeon,checked,dungeonHints);
 const target=recommendedStage(dungeon,build);
 return <div class="dungeon-details">
  <p class="dungeon-plan"><strong>Unsere Einordnung: {dungeon.difficulty}.</strong> {dungeon.assessment}</p>
  <dl class="dungeon-facts"><div><dt>Umfang</dt><dd>{dungeon.size}</dd></div><div><dt>Bossgefahr</dt><dd>{dungeon.boss}</dd></div><div><dt>Rückzug</dt><dd>{dungeon.retreat}</dd></div></dl>
  <p><strong>Wann einplanen:</strong> {stageLabel(stages,target)}. {dungeon.plan}</p>
  {known?<>
   <p><strong>Wo:</strong> {dungeon.location}</p>
   <p><strong>Vor dem Eintritt:</strong> {dungeon.access}</p>
   <details class="source"><summary>Kartenposition genauer einordnen</summary><p>{dungeon.anchor} Koordinaten sind Rechercheanker; nutze die Hinweise und Marker im Spiel.</p></details>
   {!ready&&<p class="dungeon-locked">Die Ortsinformation ist bestätigt. Vor dem Besuch noch die Zugangsvoraussetzungen erfüllen: {dungeon.access}.</p>}
   <label class={`check-row ${checked[dungeon.doneId]?'is-done':''}`}><input type="checkbox" checked={!!checked[dungeon.doneId]} disabled={!ready&&!checked[dungeon.doneId]} onChange={()=>toggle(dungeon.doneId)}/><span>{dungeon.doneText}</span></label>
   {checked[dungeon.doneId]&&!ready&&<p class="small-note">Dein gespeicherter Abschluss bleibt erhalten. Für eine neue Besuchsempfehlung fehlen die oben genannten Bestätigungen.</p>}
  </>:<p class="dungeon-locked">Fundort noch nicht bestätigt. Sammle zuerst den Hinweis unten; Weg und Abschlusshäkchen erscheinen danach.</p>}
  <details class="source"><summary>Belege & Grenzen der Einschätzung</summary><p>{dungeon.source}. Schwierigkeit und Reihenfolge sind unsere Einschätzung anhand von Gegnern, Fallen, Zugang und Umfang; kein garantierter Sieg und kein vollständiger Testdurchlauf. Ausführlich: research-dungeons.md.</p></details>
  <button class="text-button" onClick={()=>jump(target==='finale'?'egg':target)}>{target==='finale'?'Zur letzten Etappe vor der Schlussroute':`Zur empfohlenen Etappe · ${stageLabel(stages,target)}`}</button>
 </div>;
}

export function StageDungeons(props:Props&{stage:Stage;openDungeons:()=>void}){
 const {stage,build,checked}=props;
 const finaleHints=new Set(dungeons.filter(d=>d.category==='finale').flatMap(d=>[...d.hints,...d.alternativeHints??[]]));
 const hints=dungeonHints.filter(h=>h.stages.includes(stage.id)&&!finaleHints.has(h.id));
 const sources=hints.filter(h=>h.kind!=='exploration');
 const exploration=hints.filter(h=>h.kind==='exploration');
 const visits=dungeons.filter(d=>recommendedStage(d,build)===stage.id);
 if(!hints.length&&!visits.length)return null;
 return <section class="stage-dungeons" aria-label="Dungeonhinweise und Besuche dieser Etappe">
  <h3>Dungeonhinweise & Besuche</h3>
  <p class="small-note">Nur selbst erhaltene Ortsinformationen abhaken. Gespräch, Kartenlesen und Besuch sind getrennte Schritte. Optionale Ausflüge zählen nicht zum Etappenabschluss.</p>
  {!!sources.length&&<div class="dungeon-acquisition"><h4>Hier Fundorte erfahren</h4>{sources.map(h=><HintRow key={h.id} {...props} hint={h}/>)}</div>}
  {!!exploration.length&&<details class="dungeon-exploration"><summary>Unterwegs entdeckte Orte bestätigen · {exploration.filter(h=>confirmedHint(h.id,checked,dungeonHints)).length}/{exploration.length}</summary><p class="small-note">Selbst gesehene Eingänge sind ebenfalls Fundortwissen. Manche Orte haben keinen eigenen Gesprächs- oder Buchmarker; bei anderen ist die Sichtung eine Alternative zum Hinweis. Ein Stadtbesuch allein genügt nicht.</p>{exploration.map(h=><HintRow key={h.id} {...props} hint={h}/>)}</details>}
  {!!visits.length&&<div class="dungeon-visits"><h4>Besuche nach bestätigtem Hinweis</h4>{visits.map(d=><details class="dungeon-visit" key={d.id}>
   <summary><span>{d.name}</span><span class="dungeon-status">{d.category==='optional'||d.category==='challenge'?'Optional · ':''}{d.difficulty} · {locationKnown(d,checked,dungeonHints)?checked[d.doneId]?'Abgeschlossen':'Fundort bekannt':'Hinweis fehlt'}</span></summary>
   <DungeonDetails {...props} dungeon={d}/>
   {!locationKnown(d,checked,dungeonHints)&&[...d.hints,...d.alternativeHints??[]].map(id=>{const h=dungeonHints.find(h=>h.id===id)!;return <HintRow key={id} {...props} hint={h}/>})}
  </details>)}</div>}
  <button class="text-button" onClick={props.openDungeons}>Alle Dungeons & fehlende Hinweise ansehen</button>
 </section>;
}

export function FinaleDungeons(props:Props){
 return <section class="stage-dungeons"><h3>Dungeon der alternativen Schlussroute</h3>{dungeons.filter(d=>d.category==='finale').map(d=><div key={d.id}><h4>{d.name}</h4><DungeonDetails {...props} dungeon={d}/>{[...d.hints,...d.alternativeHints??[]].map(id=><HintRow key={id} {...props} hint={dungeonHints.find(h=>h.id===id)!}/>)}</div>)}</section>;
}

export function DungeonsGuide(props:Props){
 const [filter,setFilter]=useState<'all'|'known'|'missing'>('all');
 const {checked}=props;
 const filtered=dungeons.filter(d=>filter==='all'||(filter==='known')===locationKnown(d,checked,dungeonHints));
 const groups=[{id:'route',title:'Dungeons der Hauptroute'},{id:'optional',title:'Weitere Höhlen & Verstecke'},{id:'challenge',title:'Ruinen, Tempel & Wächterprüfungen'},{id:'finale',title:'Alternative Schlussroute'}] as const;
 return <section class="reference dungeons-guide">
  <h2>Erst den Fundort erfahren, dann aufbrechen.</h2>
  <p>Hier sind die benannten Dungeons und Kampfprüfungen deiner PC-Version erfasst. Die Schwierigkeit ist unsere Einschätzung für den ersten Durchlauf; kurze Höhlen können trotzdem gefährliche Endgegner haben.</p>
  <p class="small-note">Deine Hinweis- und Abschlusshäkchen gehören zum gewählten Build. Ein Stadtbesuch oder eine erledigte Etappe bestätigt keinen Fundort. Wer einen Ort selbst entdeckt hat, bestätigt genau diese Entdeckung bei den entsprechenden Hinweisen.</p>
  <div class="dungeon-filter"><label for="dungeon-filter">Anzeigen</label><select id="dungeon-filter" value={filter} onChange={e=>setFilter(e.currentTarget.value as typeof filter)}><option value="all">Alle Orte</option><option value="known">Fundort bestätigt</option><option value="missing">Fundorthinweis fehlt</option></select><span aria-live="polite">{dungeons.filter(d=>locationKnown(d,checked,dungeonHints)).length}/{dungeons.length} Fundorte bestätigt</span></div>
  {!filtered.length&&<p class="dungeon-locked">In dieser Auswahl gibt es noch keine Orte. Wähle „Alle Orte“ oder sammle weitere Hinweise an den Reiseetappen.</p>}
  {groups.map(group=>{const entries=filtered.filter(d=>d.category===group.id);return !!entries.length&&<section class="dungeon-group" key={group.id}><h3>{group.title}</h3>{group.id==='finale'&&<p class="small-note">Enthält Namen und Gefahren der optionalen Schlussroute. Die eigentliche Storyanleitung bleibt im Reiseplan eingeklappt.</p>}{entries.map(d=><details class="dungeon-entry" key={d.id} id={`dungeon-${d.id}`}>
   <summary><span>{d.name}</span><span class="dungeon-status">{d.difficulty} · {locationKnown(d,checked,dungeonHints)?checked[d.doneId]?'Abgeschlossen':'Fundort bekannt':'Hinweis fehlt'}</span></summary>
   <DungeonDetails {...props} dungeon={d}/>
   <h4>Fundorthinweise abhaken</h4>{[...d.hints,...d.alternativeHints??[]].map(id=><HintRow key={id} {...props} hint={dungeonHints.find(h=>h.id===id)!}/>)}
  </details>)}</section>})}
  <p class="small-note">Zufällige Ruinen und gewöhnliche Weltbegegnungen haben keine feste Stadtgeschichte oder sichere Schwierigkeitsstufe. Unbekannte Fallen und Gegner prüfen; die Eintrittswarnung des Spiels entscheidet über den möglichen Rückweg.</p>
 </section>;
}
