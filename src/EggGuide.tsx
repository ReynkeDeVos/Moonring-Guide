import { useEffect, useState } from 'preact/hooks';
import { eggBands, eggFloorIds, eggFloorMarkers } from './data';
import type { BuildId } from './data';

export function EggGuide({build,checked,toggle,reset}:{build:BuildId;checked:Record<string,boolean>;toggle:(key:string)=>void;reset:()=>void}){
 const firstOpen=eggFloorIds.findIndex(id=>!checked[id]);
 const initialBand=()=>firstOpen<0?9:Math.floor(firstOpen/10);
 const [band,setBand]=useState(initialBand);
 const [armed,setArmed]=useState(false);
 const count=eggFloorIds.filter(id=>checked[id]).length;
 useEffect(()=>{setBand(initialBand());setArmed(false)},[build]);
 const numbers=Array.from({length:10},(_,i)=>band*10+i+1);
 return <section class="egg-guide" aria-labelledby="egg-guide-title">
  <h3 id="egg-guide-title">Im Egg: dein laufender Versuch.</h3>
  <p>Etagen 1–99 werden für jeden Lauf erzeugt. Folge der Abstiegsroutine; die Liste hält fest, welche Etagen du tatsächlich abgeschlossen hast.</p>
  <div class="condition-note"><strong>Ein langer Dungeon, mit Speicherpause</strong><p>Keine bestätigten Zwischen-Checkpoints oder Einkaufsportale. Auf 2–99 kannst du innerhalb des Eggs zurücktreppen. Für eine längere Pause: stillstehen, Escape → Options → Save and Quit. Laden setzt diesen unterbrochenen Lauf fort; ein Tod im Normalmodus setzt ihn auf den Stand vor Eintritt zurück.</p></div>
  <details class="help-details"><summary>Meine Routine auf jeder Etage</summary>
   <ol>
    <li>Rückzugsfelder sichern, mit Lifesight verdeckte Gegner prüfen und Revelation für Fallen nutzen. Normale Treffer sind der Standard und liefern Energie; Warten füllt weder HP noch Spielerenergie.</li>
    <li>Abstieg finden. Ist der Durchgang gesperrt, nötige lokale Schlüssel oder Mechanismen suchen: Haupt-Miniboss, weitere Minibosse, erreichbare Truhen und Druckplatten. Kein mitgebrachter storyweiter Master Key ist als Egg-Ausweg vorgesehen.</li>
    <li>Nur sinnvolle Beute und Reserven mitnehmen. Nahrung ermöglicht Poise-Erholung nach ausreichender Zeit ohne angrenzenden Gegner; sie heilt deine HP nicht automatisch. Zufallsbeute und fremde Betten sind keine zugesicherten Reststops.</li>
    <li>Bell-Etagen zügig und aufmerksam durchqueren: Bells lösen Doom-Effekte aus. Maidens können schädlichen Status auslösen. Library-Räume sind keine festen Händler oder Außenwarps.</li>
    <li>Nach tatsächlichem Abschluss die Etage abhaken. Durch Trapdoors übersprungene Etagen bleiben offen. Die Häkchen sind deine Notizen, keine Ingame-Checkpoints.</li>
   </ol>
  </details>
  <h3>Vorbereitung für {build==='wolf'?'Wolf & Schild':'Lady & Bogen'}</h3>
  <p>{build==='wolf'?'Normale Sword-Treffer, einzelne Gegner und Engpässe bleiben dein Grundplan. Hurl für Abstand, Slam für Stellung, Hallow an geeigneten Knochen/Leichen. Howl für schwere Begegnungen aufsparen; Shockwave kann den Begleiter treffen.':'Normale Longbow-Schüsse und freie Rückzugsfelder bleiben dein Grundplan. Drill Shot für lohnende Linien/Hindernisse, Mace für unvermeidbaren Nahkontakt. Moonlight für schwere Begegnungen aufsparen; Star Shot verbraucht acht passende Geschosse.'} Feast heilt nur an geeigneten benachbarten Zielen; unabhängige Heilmittel behalten.</p>
  <p><strong>Energie einkaufen:</strong> Staria Root (+30) wird in allen sechs Städten angeboten. Staria Draft (+60) und Arnaut’s Panacea gegen Status gibt es in The Red Grove. Heilung, Nahrung, Statusmittel, Water und {build==='lady'?'Pfeile':'Munition bei ausgerüsteter Fernwaffe'} nach deiner bisherigen Verbrauchsrate auffüllen; keine feste Stückzahl garantiert 100 Etagen.</p>
  <p class="small-note">Keine zusätzliche Pflichtgabe und keine Legendary-Waffe nötig. Lightning-bolt Amulet für neutrale 120-Energie-Beschwörungen behalten; bei jedem Amulettwechsel die tatsächliche Kapazität neu prüfen.</p>
  <div class="egg-tracker">
   <div class="egg-tracker-heading"><h3>100 Etagen im Blick</h3><span>{count}/100 markiert</span></div>
   <p class="small-note">{firstOpen<0?'Alle Etagen sind markiert. Preis und Rückkehr oben ebenfalls abhaken.':`Erste unmarkierte Etage: ${firstOpen+1}. Das ist kein automatisch ausgelesener Spielstand.`}</p>
   <div class="egg-band-picker"><label for="egg-band">Etagenband</label><select id="egg-band" value={band} onChange={e=>setBand(Number(e.currentTarget.value))}>{eggBands.map((_,i)=><option key={i} value={i}>{i*10+1}–{i*10+10}</option>)}</select>{firstOpen>=0&&<button class="text-button" onClick={()=>setBand(Math.floor(firstOpen/10))}>Zur ersten unmarkierten Etage</button>}</div>
   <p class="egg-band-tip">{eggBands[band].tip}</p>
   <details class="source"><summary>Mögliche Gegner in diesem Band</summary><p>{eggBands[band].enemies} Die Pools sind Alternativen; Namen und Marker garantieren keine konkrete Begegnung oder Raumposition.</p></details>
   <div class="egg-floors">{numbers.map(n=><label key={n} class={`check-row ${checked[`egg-floor-${n}`]?'is-done':''}`}><input type="checkbox" checked={!!checked[`egg-floor-${n}`]} onChange={()=>toggle(`egg-floor-${n}`)}/><span><strong>Etage {n}</strong><small>{eggFloorMarkers(n)}</small></span></label>)}</div>
   <div class="reset-tools"><button class={armed?'danger':''} onClick={()=>{if(!armed){setArmed(true);return}reset();setBand(0);setArmed(false)}}>{armed?'Jetzt nur diesen Egg-Versuch zurücksetzen':'Neuen Egg-Versuch beginnen'}</button>{armed&&<button onClick={()=>setArmed(false)}>Abbrechen</button>}</div>
   <p class="small-note">{armed?'Löscht die 100 Etagenhäkchen sowie Eintritt und Abschluss dieser Etappe.':'Nach einem Tod oder einem neuen Lauf diese Etagenliste zurücksetzen.'} Gaben, Grundspielroute, Vorbereitung und Notizen bleiben erhalten. Vor der Rücksetzung kannst du die höchste erreichte Tiefe unten notieren.</p>
  </div>
  <details class="story-details egg-boss"><summary>Etage 100: Boss, Preis & Ausgang <span>DX-Spoiler</span></summary>
   <h3>The Progenitor</h3>
   <p>Zuerst die mit dem Schild verbundenen <strong>Chickens</strong> ausschalten. Solange diese Verbindungen bestehen, keine Angriffe auf den geschützten Boss verschwenden. Die Goose Eggs können später Gänse hervorbringen, sind aber nicht die Schildquellen.</p>
   <p>Bei der Cross-Ankündigung „HOOOONK!“ aus derselben Reihe oder Spalte wie der Boss treten. Der folgende magische Angriff läuft in den vier Himmelsrichtungen bis zu 20 Kacheln. Diagonale Versetzung hilft gegen dieses Kreuz; die anderen Angriffe bleiben gefährlich.</p>
   <p>Bei höchstens 60% Boss-HP beginnt die zweite Phase: Teleport, neue Eier und neue Schildhühner. Wieder die verknüpften Chickens zuerst entfernen. Während der Schild besteht, kommen auch Flame Pulses; Feuerreserve und freie Bewegung behalten.</p>
   <p>{build==='wolf'?'Mit Sword oder Hurl die Schildhühner beseitigen. Howl kann helfen, aber sein Verhalten ersetzt die Zielwahl nicht; nach der Beschwörung Restenergie prüfen.':'Mit normalen Bogenschüssen zuerst die Schildhühner, dann den ungeschützten Boss angreifen. Moonlight kann helfen; für Star Shot und Rückzug weiter Munition und Energie einteilen.'}</p>
   <h3>Preis aufnehmen, dann hinaus</h3>
   <p><strong>Daimon Amulet</strong> vom Boden aufnehmen: Last 1, jeweils 10 physische/magische sowie neun Status-Abwehrwerte in den Daten. Es erhöht deine Energie nicht. Beim Tausch gegen Lightning-bolt können Howl/Moonlight neutral wieder unbenutzbar sein.</p>
   <p>Zum aktivierten Warp am Bossplatz gehen (lokal 48,45), Enter und „Return to the surface?“ bestätigen. Draußen Inventar prüfen und in einer Stadt auffüllen. Danach ist deine gewählte Schlussroute dran.</p>
  </details>
 </section>;
}
