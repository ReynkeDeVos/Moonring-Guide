---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: ["src/App.tsx","src/styles.css"]
---

# Moonring walkthrough

Mode: Read, with checklist operation. Target index.html, related src/App.tsx and src/styles.css.
Audience task: follow a researched first-playthrough route alongside Moonring. Two switchable builds; exact gift order, quests and gear. Whole game plus the owned DX / The Egg, inserted as stage 16 before both endings, with story and boss details concealed by default.

## Direction contract
THESIS: A night expedition atlas makes each researched purchase part of an actionable travel stage; no marketing dashboard or decorative fantasy manuscript.
OWN-WORLD: Indigo navigation and aubergine reading ground, mist lavender numbering, muted mint Lady accent and peach Wolf accent. Chivo headings, comfortable sans-serif reading text, rectangular tabs and restrained rules.
STORY: Choose a forgiving build, understand its tradeoffs, follow the next incomplete stage and mark actions complete. Reference views carry exact names and cited mechanics.
FIRST VIEWPORT: A 250px left register with numbered route stages; main column begins with the Moonring title and two build choices, then a concise next-step section with location, tasks, gifts and gear. Mobile replaces the register with a native stage selector. Signature interaction: completion moves the persistent place marker to the next unfinished stage; gift checkboxes share state between route and reference.
FORM: Night expedition atlas, grounded candidate5, seed569fac57. User confirmed side-by-side checklist use and code-first. User chose the assigned Night Atlas direction via the decision page (ANSWER optionId assigned, code-first). Raising donors: fixed status cells from timetable; resume marker from cutting bench; conditional uncertainty at each step from cloud edge; labelled discrete phases from cyclorama.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

DX extends the existing atlas: the same route sheet, ten selectable floor bands with 100 persistent floor checkboxes per build, and a separate reset for the current Egg attempt. The 100-floor generator is represented with sourced patterns, not invented fixed room routes. No raster assets planned. Real source data must be integrated before UI implementation; no invented game facts.

## Dungeon extension · 3 October 2026

The Dungeons reference extends the Read surface with 56 catalogued dungeon, puzzle and access-related encounter records: 17 route, 11 optional, 27 challenge and one alternative-finale record. The scope and exclusions follow `research-dungeons.md`; this count does not imply fixed procedural room routes. `src/dungeons.ts` holds the researched facts and editorial recommendations; `src/dungeon-model.ts` separates confirmed location knowledge, access readiness and recorded completion.

Acquisition instructions appear in the relevant travel stages before visit recommendations. NPC conversations, books/maps and actual entrance sightings require explicit confirmation; a city visit or finished stage supplies no location knowledge. Exploration confirmations stay in a native disclosure. Known locations reveal their directions and access instructions; completion becomes available only when access checks also pass. Removing a prerequisite hides the dependent guidance while retaining saved marks. Optional visits do not advance route completion. Hint and completion marks share the existing per-build save and JSON transfer. The Four Lake Meet inscription and The Jest destination also respect location knowledge in the Secrets view.

Keep the Night Atlas expression: the existing horizontal view navigation, open reading rows, restrained rules, lavender headings and muted written status labels. `src/DungeonsGuide.tsx` uses native details for visit entries, source evidence and exploration; a labelled native select filters all, confirmed or missing locations. Difficulty, boss danger, extent and retreat are written facts beside editorial timing. `src/styles.css` reuses existing palette variables and checklist treatment, preserves the 74ch reading measure, and narrows fact-label columns at the existing 540px breakpoint. No new palette, font, shadow, raster asset or visual identity was introduced.

Evidence: source review of `src/App.tsx`, `src/DungeonsGuide.tsx`, `src/dungeon-model.ts`, `src/dungeons.ts`, `src/SecretsGuide.tsx` and `src/styles.css` against `PRODUCT.md` and `DESIGN.md`; the final offline artifact is `Moonring-Walkthrough.html`. This is a source-scope documentation pass. Current desktop/mobile screenshots are unavailable and the T3 preview host is explicitly disconnected; rendered layout, focus behavior and responsive overflow are not visually approved by this pass.

Existing documentation drift remains outside this extension's write scope: FIRST VIEWPORT above says 250px, while the normative design and implemented desktop register use 256px. The sidecar's component samples remain the earlier primitive set and do not preview the later inventory, secrets or dungeon reference patterns. `DESIGN.md` and `.impeccable/design.json` were left unchanged.
