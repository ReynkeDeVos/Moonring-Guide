import test from 'node:test';
import assert from 'node:assert/strict';
import { confirmedHint, locationKnown, accessReady } from '../src/dungeon-model.ts';
import { dungeonHints, dungeons, taskDungeonIds, stageDungeonIds, dungeonProgressIds } from '../src/dungeons.ts';
import { getStages } from '../src/data.ts';

const hints=[
 {id:'rumour',requires:[]},
 {id:'map',requires:['rumour']},
 {id:'entrance',requires:['map']},
];
const dungeon={hints:['entrance'],accessChecks:['key']};

test('travel progress and a dungeon completion never imply location knowledge',()=>{
 const checked={'capital-0':true,'winter-0':true,'dungeon-done':true};
 assert.equal(locationKnown(dungeon,checked,hints),false);
 assert.equal(accessReady(dungeon,checked,hints),false);
});
test('location discovery and the access item are separate requirements',()=>{
 const checked={rumour:true,map:true,entrance:true};
 assert.equal(locationKnown(dungeon,checked,hints),true);
 assert.equal(accessReady(dungeon,checked,hints),false);
 assert.equal(accessReady(dungeon,{...checked,key:true},hints),true);
});
test('unchecking an upstream hint immediately blocks retained downstream confirmations',()=>{
 const checked={rumour:false,map:true,entrance:true,key:true};
 assert.equal(confirmedHint('entrance',checked,hints),false);
 assert.equal(locationKnown(dungeon,checked,hints),false);
 assert.equal(accessReady(dungeon,checked,hints),false);
 assert.equal(checked.entrance,true);
});
test('cyclic or empty discovery definitions fail closed',()=>{
 assert.equal(confirmedHint('a',{a:true,b:true},[{id:'a',requires:['b']},{id:'b',requires:['a']}]),false);
 assert.equal(locationKnown({hints:[]},{},hints),false);
});

test('the complete catalogue has valid discovery and route references',()=>{
 const ids=dungeons.map(d=>d.id),hintIds=dungeonHints.map(h=>h.id);
 assert.equal(new Set(ids).size,ids.length);
 assert.equal(new Set(hintIds).size,hintIds.length);
 const stageIds=new Set(getStages('wolf').map(s=>s.id));
 const validProgress=new Set([...dungeonProgressIds,...getStages('wolf').flatMap(s=>s.tasks.map(t=>t.id)),...getStages('lady').flatMap(s=>s.tasks.map(t=>t.id)),...['riddle','book','trees','stone','bones','graves'].map(s=>`clue-jest-${s}`),...Array.from({length:7},(_,i)=>`finale-${i}`)]);
 for(const d of dungeons){
  assert.ok(d.hints.length>0,d.id);
  for(const id of [...d.hints,...d.alternativeHints??[]])assert.ok(hintIds.includes(id),`${d.id}: ${id}`);
  for(const id of d.accessChecks??[])assert.ok(validProgress.has(id),`${d.id}: ${id}`);
  for(const stage of typeof d.stage==='string'?[d.stage]:Object.values(d.stage))assert.ok(stageIds.has(stage)||stage==='finale',`${d.id}: ${stage}`);
 }
 for(const h of dungeonHints){
  assert.ok(h.stages.every(id=>stageIds.has(id)),h.id);
  for(const id of h.requires??[])assert.ok(validProgress.has(id),`${h.id}: ${id}`);
 }
 for(const rows of [...Object.values(taskDungeonIds),...Object.values(stageDungeonIds)])for(const id of rows)assert.ok(ids.includes(id),id);
});
test('actual main-route confirmations do not turn into a discovery from completion alone',()=>{
 const checked=Object.fromEntries(dungeons.map(d=>[d.doneId,true]));
 for(const d of dungeons)assert.equal(locationKnown(d,checked,dungeonHints),false,d.id);
});
test('Tower location, stolen-key trail and physical access unlock independently',()=>{
 const tower=dungeons.find(d=>d.id==='tower'),thief=dungeons.find(d=>d.id==='thief');
 let checked={'dungeon-info-tower':true};
 assert.equal(locationKnown(tower,checked,dungeonHints),true);
 assert.equal(accessReady(tower,checked,dungeonHints),false);
 checked={...checked,'dungeon-trail-cloak':true,'dungeon-trail-triangle':true,'dungeon-trail-flimpy':true,'dungeon-trail-kenner':true,'dungeon-info-thief':true,'ship-1':true};
 assert.equal(accessReady(thief,checked,dungeonHints),true);
 assert.equal(accessReady(tower,{...checked,'tower-0':true},dungeonHints),true);
 assert.equal(locationKnown(thief,{...checked,'dungeon-trail-cloak':false},dungeonHints),false);
});
test('Repository gossip is insufficient until the henge route and entrance are confirmed',()=>{
 const d=dungeons.find(d=>d.id==='repository');
 assert.equal(locationKnown(d,{'dungeon-trail-repository':true},dungeonHints),false);
 assert.equal(locationKnown(d,{'dungeon-trail-repository':true,'repository-6':true,'dungeon-info-repository':true},dungeonHints),true);
});
test('a genuinely seen entrance is a valid alternative to its NPC trail, but not to access items',()=>{
 const d=dungeons.find(d=>d.id==='thief');
 assert.equal(locationKnown(d,{'dungeon-seen-thief':true},dungeonHints),true);
 assert.equal(accessReady(d,{'dungeon-seen-thief':true},dungeonHints),false);
 assert.equal(accessReady(d,{'dungeon-seen-thief':true,'ship-1':true},dungeonHints),true);
});
test('sea-only destinations require confirmed ship possession after their locations are known',()=>{
 for(const id of ['sea-cave','thief','ruin5','warrens','egg']){
  const d=dungeons.find(d=>d.id===id);
  const checked=Object.fromEntries(d.hints.map(h=>[h,true]));
  if(d.alternativeHints?.length)checked[d.alternativeHints[0]]=true;
  assert.equal(locationKnown(d,checked,dungeonHints),true,id);
  assert.equal(accessReady(d,checked,dungeonHints),false,id);
  assert.equal(accessReady(d,{...checked,'ship-1':true},dungeonHints),true,id);
 }
});
