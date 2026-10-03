import type { Stage } from './data';
import { cluesForStage, hasAllClues, secrets } from './secrets';
import type { SecretClue } from './secrets';
import { dungeons, dungeonHints } from './dungeons';
import { locationKnown } from './dungeon-model';

interface Props { checked:Record<string,boolean>; toggle:(id:string)=>void; stage:Stage; stages:Stage[] }
function ClueRow({clue,checked,toggle,progress}:{clue:SecretClue;checked:boolean;toggle:(id:string)=>void;progress:Record<string,boolean>}){
 const known=clue.id!=='clue-jest-stone'||locationKnown(dungeons.find(d=>d.id==='four-lakes')!,progress,dungeonHints);
 return <div class="secret-clue">
  <label class={`check-row ${checked?'is-done':''}`}><input type="checkbox" checked={checked} disabled={!known&&!checked} onChange={()=>toggle(clue.id)}/><span><strong>{clue.title}</strong><span class="clue-how">{known?clue.how:'Zuerst das Kartenbuch in Barrow-Linn lesen oder Wintersholls Vier-Seen-Hinweis erhalten. Den Fundort unter „Dungeons“ bestätigen; danach erscheint die Anleitung zur Steininschrift.'}</span></span></label>
  {known&&<details class="source"><summary>Fundort genauer einordnen</summary><p>{clue.anchor} Koordinaten sind nullbasierte Rechercheanker, keine Koordinatenanzeige im Spiel. Spieldaten: {clue.source}.</p></details>}
 </div>;
}

export function StageSecrets({checked,toggle,stage,stages,openSecret}:Props&{openSecret:(id:string)=>void}){
 const relevant=secrets.filter(s=>cluesForStage(s,stage.id).length||s.destinationStageId===stage.id||hasAllClues(s,checked));
 return <section class="stage-secrets" aria-label="Hinweise und Geheimnisse dieser Etappe">
  <h3>Hinweise & Geheimnisse</h3>
  <p class="small-note">Nur tatsächlich gelesene oder erkannte Hinweise abhaken. Diese optionalen Häkchen zählen nicht zum Etappenabschluss.</p>
  {!relevant.length&&<p class="secret-empty">In dieser Etappe gibt es keine neuen Hinweise zu den hier erfassten Rätseln. Bereits gesammelte Hinweise bleiben gespeichert.</p>}
  {relevant.map(secret=>{
   const ready=hasAllClues(secret,checked), count=secret.clues.filter(c=>checked[c.id]).length;
   return <div class="stage-secret" key={secret.id}>
    <div class="secret-heading"><h4>{secret.title}</h4><span class="secret-count">{count}/{secret.clues.length} Hinweise</span></div>
    {cluesForStage(secret,stage.id).map(clue=><ClueRow key={clue.id} clue={clue} checked={!!checked[clue.id]} toggle={toggle} progress={checked}/>)}
    {ready?<p class="secret-ready"><button class="secret-tag" onClick={()=>openSecret(secret.id)}>Geheimnis</button><button class="text-button" onClick={()=>openSecret(secret.id)}>Alle Hinweise beisammen · zur Rätselhilfe</button></p>:<p class="secret-locked">Die Rätselhilfe bleibt gesperrt, bis alle {secret.clues.length} Hinweise bestätigt sind. {stage.id==='jest'&&secret.id==='jest-phrase'&&<span>Fehlende Hinweise findest du in The Red Grove, Wintersholl, Hearthaven, Moon-upon-Thoss, Barrow-Linn / Four Lake Meet und beim Harrowdus-Priester.</span>}</p>}
   </div>;
  })}
 </section>;
}

export function SecretsGuide({checked,toggle,stage,stages,jump}:Props&{jump:(id:string)=>void}){
 const stageLabel=(id:string)=>{const i=stages.findIndex(s=>s.id===id);return `Etappe ${i+1}: ${stages[i].title}`};
 return <section class="reference secrets-guide">
  <h2>Geheimnisse, Hinweis für Hinweis.</h2>
  <p>Wandinschriften und verstreute Wörter sammeln sich über mehrere Etappen. Die Lösung und der Weg zum Fund erscheinen erst, wenn du jeden benötigten Hinweis ausdrücklich als gefunden markiert hast.</p>
  <p class="condition-note">Aktuell ausgewählt: <button class="text-button" onClick={()=>jump(stage.id)}>{stageLabel(stage.id)}</button>. Die Hinweise werden pro Build gespeichert. Etappenhäkchen schalten keine Rätselhilfe frei.</p>
  {secrets.map(secret=>{
   const ready=hasAllClues(secret,checked),count=secret.clues.filter(c=>checked[c.id]).length;
   const destinationKnown=secret.id!=='jest-phrase'||locationKnown(dungeons.find(d=>d.id==='jest')!,checked,dungeonHints);
   return <article class="secret-entry" id={`secret-${secret.id}`} tabIndex={-1} key={secret.id}>
    <div class="secret-heading"><h3>{secret.title}</h3><span class="secret-count" aria-live="polite">{count}/{secret.clues.length} Hinweise</span></div>
    <p>{secret.introduction}</p>
    <details class="secret-clue-list"><summary>{ready?'Gesammelte Hinweise prüfen':'Hinweise sammeln · Fundstellen & Etappen'}</summary>
     {secret.clues.map(clue=><div class="secret-location" key={clue.id}><ClueRow clue={clue} checked={!!checked[clue.id]} toggle={toggle} progress={checked}/><button class="text-button" onClick={()=>jump(clue.stageId)}>Zum Fundort im Reiseplan · {stageLabel(clue.stageId)}</button></div>)}
    </details>
    {ready?<div class="secret-unlocked">
     <p class="secret-ready"><span class="secret-tag">Geheimnis</span>Alle Hinweise beisammen · jetzt lösbar</p>
     <details class="help-details" key={`solution-${secret.id}`}><summary>Lösung & Weg zum Geheimnis öffnen</summary>{secret.solution.map((p,i)=>i===1&&!destinationKnown?<p key={p}>Für den Eingang fehlt noch ein bestätigter Fundort. In Harrowdus das Buch The Jest lesen oder den Eingang selbst entdecken; unter „Dungeons“ bestätigen. Danach erscheint hier der Weg.</p>:<p key={p}>{p}</p>)}<button class="text-button" onClick={()=>jump(secret.destinationStageId)}>Zum Ziel im Reiseplan · {stageLabel(secret.destinationStageId)}</button><label class={`check-row ${checked[`secret-${secret.id}-done`]?'is-done':''}`}><input type="checkbox" checked={!!checked[`secret-${secret.id}-done`]} onChange={()=>toggle(`secret-${secret.id}-done`)}/><span>Geheimnis gelöst / Fund eingesammelt</span></label></details>
    </div>:<div class="secret-locked" role="status"><strong>Noch {secret.clues.length-count} {secret.clues.length-count===1?'Hinweis fehlt':'Hinweise fehlen'}.</strong><p>Lösung, Zielweg und Geheimnis-Link bleiben gesperrt. Öffne die Fundstellen oben oder sammle die Hinweise direkt an der jeweiligen Reiseetappe.</p></div>}
    <details class="source"><summary>Spieldaten</summary><p>{secret.source} · PC-Build 0.0.958. Vollständige Belege: research-secrets.md.</p></details>
   </article>;
  })}
 </section>;
}
