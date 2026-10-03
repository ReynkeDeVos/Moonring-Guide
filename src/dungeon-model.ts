import type { BuildId } from './data';

export type Progress = Record<string,boolean>;
export interface DungeonHint {
 id:string;
 stages:string[];
 title:string;
 how:string;
 source:string;
 requires?:string[];
 kind?:'conversation'|'map'|'exploration'|'access';
}
export interface Dungeon {
 id:string;
 name:string;
 category:'route'|'optional'|'challenge'|'finale';
 hints:string[];
 alternativeHints?:string[];
 stage:string|Record<BuildId,string>;
 difficulty:'Früh, aber gefährlich'|'Mittel'|'Schwer'|'Sehr schwer';
 assessment:string;
 size:string;
 boss:string;
 retreat:string;
 location:string;
 anchor:string;
 access:string;
 plan:string;
 doneId:string;
 doneText:string;
 source:string;
 accessChecks?:string[];
}

// A saved child confirmation cannot bypass a subsequently unchecked parent hint.
export function confirmedHint(id:string,checked:Progress,hints:readonly DungeonHint[],seen=new Set<string>()):boolean {
 if(checked[id]!==true||seen.has(id))return false;
 const hint=hints.find(h=>h.id===id);
 if(!hint)return true; // Existing quest, item or secret confirmation.
 const ancestors=new Set(seen);ancestors.add(id);
 return (hint.requires??[]).every(parent=>confirmedHint(parent,checked,hints,ancestors));
}
export const locationKnown=(dungeon:Dungeon,checked:Progress,hints:readonly DungeonHint[])=>(dungeon.hints.length>0&&dungeon.hints.every(id=>confirmedHint(id,checked,hints)))||(dungeon.alternativeHints??[]).some(id=>confirmedHint(id,checked,hints));
export const accessReady=(dungeon:Dungeon,checked:Progress,hints:readonly DungeonHint[])=>locationKnown(dungeon,checked,hints)&&(dungeon.accessChecks??[]).every(id=>confirmedHint(id,checked,hints));
export const recommendedStage=(dungeon:Dungeon,build:BuildId)=>typeof dungeon.stage==='string'?dungeon.stage:dungeon.stage[build];
