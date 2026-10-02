---
name: Moonring Walkthrough
description: 'Night Atlas: a calm companion for a first Moonring playthrough.'
colors:
  ground: '#171622'
  panel: '#201e2e'
  rail: '#26233c'
  line: '#49445f'
  muted: '#bab4cd'
  accent: '#dfa78d'
  lavender: '#b4acf0'
  mint: '#a4d3c3'
  text: '#edeaf5'
  button-ink: '#201a34'
  button-hover: '#d0c8ff'
  stage-selected: '#524873'
  stage-hover: '#343047'
  stage-text: '#d1cade'
  checkbox-line: '#82768f'
  white: '#fff'
  wolf-tag-text: '#f0b398'
  wolf-tag-ground: '#413038'
  lady-tag-text: '#b3e1d2'
  lady-tag-ground: '#263e3b'
  angels-tag-text: '#ddd0fe'
  angels-tag-ground: '#3a304d'
  dust-tag-text: '#d5d6e0'
  dust-tag-ground: '#353441'
typography:
  display:
    fontFamily: Chivo, system-ui, sans-serif
    fontSize: clamp(2rem, 3.2vw, 3.3rem)
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -.035em
  headline:
    fontFamily: Chivo, system-ui, sans-serif
    fontSize: 1.95rem
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -.025em
  title:
    fontFamily: Chivo, system-ui, sans-serif
    fontSize: 1.14rem
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.65
  reading-row:
    fontFamily: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
    fontSize: .93rem
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
    fontSize: .78rem
    fontWeight: 400
    lineHeight: 1.3
  button:
    fontFamily: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
    fontSize: .8rem
    fontWeight: 400
  button-primary:
    fontFamily: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
    fontSize: .8rem
    fontWeight: 600
  text-action:
    fontFamily: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
    fontSize: .79rem
    fontWeight: 400
    lineHeight: 1.5
  tag:
    fontFamily: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
    fontSize: .64rem
    fontWeight: 600
    lineHeight: 1.3
  notes:
    fontFamily: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
    fontSize: .88rem
    fontWeight: 400
    lineHeight: 1.7
  chapter-number:
    fontFamily: Chivo, system-ui, sans-serif
    fontSize: 4rem
    fontWeight: 400
    lineHeight: 1
    letterSpacing: -.04em
rounded:
  checkbox-tag: 3px
  register-row: 4px
  control: 5px
  disclosure: 6px
  build-picker: 10px
spacing:
  compact: 8px
  small: 10px
  inline: 12px
  reading-gap: 13px
  medium: 15px
  control: 16px
  inset: 18px
  section: 20px
  large: 24px
  columns: 30px
components:
  button-primary:
    backgroundColor: '{colors.lavender}'
    textColor: '{colors.button-ink}'
    typography: '{typography.button-primary}'
    rounded: '{rounded.control}'
    padding: 11px 16px
  button-primary-hover:
    backgroundColor: '{colors.button-hover}'
    textColor: '{colors.button-ink}'
  button-outline:
    backgroundColor: transparent
    textColor: '{colors.text}'
    typography: '{typography.button}'
    rounded: '{rounded.control}'
    padding: 11px 16px
  button-text:
    backgroundColor: transparent
    textColor: '{colors.lavender}'
    typography: '{typography.text-action}'
    padding: 5px 0
  build-picker:
    backgroundColor: transparent
    textColor: '{colors.text}'
    rounded: '{rounded.build-picker}'
  notes-field:
    backgroundColor: '{colors.panel}'
    textColor: '{colors.text}'
    typography: '{typography.notes}'
    rounded: '{rounded.control}'
    padding: 15px
  stage-navigation:
    backgroundColor: transparent
    textColor: '{colors.stage-text}'
    typography: '{typography.label}'
    rounded: '{rounded.register-row}'
    padding: 7px 9px
  stage-navigation-active:
    backgroundColor: '{colors.stage-selected}'
    textColor: '{colors.white}'
  view-navigation:
    backgroundColor: transparent
    textColor: '{colors.muted}'
    padding: 13px 0 15px
  travel-card:
    backgroundColor: '{colors.panel}'
    textColor: '{colors.text}'
    padding: 16px 18px
  check-row:
    backgroundColor: transparent
    textColor: '{colors.text}'
    typography: '{typography.reading-row}'
    padding: 13px 0
  tag-wolf:
    backgroundColor: '{colors.wolf-tag-ground}'
    textColor: '{colors.wolf-tag-text}'
    typography: '{typography.tag}'
    rounded: '{rounded.checkbox-tag}'
    padding: 3px 7px
  tag-lady:
    backgroundColor: '{colors.lady-tag-ground}'
    textColor: '{colors.lady-tag-text}'
    typography: '{typography.tag}'
    rounded: '{rounded.checkbox-tag}'
    padding: 3px 7px
  tag-angels:
    backgroundColor: '{colors.angels-tag-ground}'
    textColor: '{colors.angels-tag-text}'
    typography: '{typography.tag}'
    rounded: '{rounded.checkbox-tag}'
    padding: 3px 7px
  tag-dust:
    backgroundColor: '{colors.dust-tag-ground}'
    textColor: '{colors.dust-tag-text}'
    typography: '{typography.tag}'
    rounded: '{rounded.checkbox-tag}'
    padding: 3px 7px
---

# Design System: Moonring Walkthrough

## Overview

**Creative North Star: "Night Atlas"**

Night Atlas is a quiet expedition register: indigo navigation beside an aubergine reading ground, with mist lavender numerals that make the current place easy to find. Peach and mint distinguish the two builds without replacing written names or completion marks.

Self-hosted Chivo headings give the atlas its restrained voice; system sans-serif keeps German instructions comfortable to read beside the game. Thin rules, open rows and flat tonal surfaces provide structure. This code-first system has no approved image composition or shipping raster assets; review screenshots are QA evidence.

**Key Characteristics:**

- Indigo register and aubergine reading ground.
- Lavender numbering; peach Wolf and mint Lady accents.
- Restrained Chivo headings and comfortable sans-serif reading text.
- Flat tonal depth, open rows and explicit completion marks.

## Colors

A muted night palette supports sustained reading, with warm and cool build accents kept distinct from the navigation voice. The frontmatter is the normative color source.

### Primary

- **Mist Lavender** (`lavender`): route numbers, links, selected view tabs, focus outlines and the next-stage button.

### Secondary

- **Wolf Peach** (`accent`): the default build, selected build mark, progress and contextual purchase headings.
- **Lady Mint** (`mint`): replaces the build accent when Lady is selected.

### Tertiary

- **God tags**: each god has a paired text and ground token. These quiet tags name affiliations; they do not recolor the whole reading surface.

### Neutral

- **Aubergine Ground** (`ground`): the continuous reading field.
- **Inset Aubergine** (`panel`): travel instructions, supplies and notes.
- **Indigo Register** (`rail`): desktop navigation and the mobile stage selector.
- **Restrained Rule** (`line`): boundaries between registers, rows and disclosures.
- **Reading Ink** (`text`) and **Muted Ink** (`muted`): primary instructions and supporting conditions.
- State tokens record the shipped selected, hover and checkbox treatments; they are component states, not extra theme accents.

**The Build Accent Rule.** Use peach for Wolf and mint for Lady; keep lavender for navigation and numbering. Pair color with names and status marks.

## Typography

**Display Font:** self-hosted variable Chivo, with system-ui and sans-serif fallbacks (`src/assets/chivo.ttf`, weights 100–900, swap loading).

**Body Font:** the system sans-serif stack recorded in the frontmatter.

**Character:** restrained grotesque headings with clear, familiar reading text. Route and purchase numbers use tabular numerals; there is no separate decorative or monospaced display family.

### Hierarchy

- **Display:** the main title; use the frontmatter clamp and tight tracking. The shipped title becomes 2.3rem at the tablet breakpoint and 2.13rem at the narrow breakpoint.
- **Headline:** section headings. The active stage title is 2.04rem on desktop, 1.8rem in the compact desktop layout and 1.57rem on narrow screens; reference headings use 1.9rem, then 1.72rem on narrow screens.
- **Title:** local subsections; compact gift rows reduce this hierarchy to fit their column.
- **Body / Reading Row:** explanatory paragraphs and checklists. Paragraphs and task text are limited to 74ch; checklists use the reading-row token rather than the root size.
- **Label / Button / Tag:** compact navigation, controls and named god tags retain their distinct observed sizes. Do not promote these metadata sizes to reading text.
- **Chapter Number:** conspicuous lavender numerals, reducing to 3.5rem on tablet and 3rem on narrow screens.

**The Reading Voice Rule.** Use Chivo for headings and prominent route numbers; keep instructions and controls in the system sans-serif stack.

## Layout

The desktop register is fixed at 256px with an independently scrolling stage list. The reading region starts at the same offset, has a maximum width of 1350px and uses 46px top padding with horizontal padding clamped from 28px to 68px. At 1600px and above its maximum width becomes 1400px.

At 1120px and below, the register narrows to 225px and the reading inset becomes 30px. At 820px and below, the register is replaced by a labelled native stage selector with a direct resume action; the main column uses 24px side padding. At 540px and below, the side padding becomes 19px and the two supporting columns stack. The two build choices remain side by side. View tabs scroll horizontally, and wide equipment tables have their own scroll region.

Use the frontmatter spacing steps for small gaps, control insets and section separation. Long text remains in open rows; the supporting gifts/gear grid uses a 1.2:1 ratio and a 30px desktop gap. Preserve the responsive substitutions rather than shrinking the desktop register into the reading column.

## Elevation & Depth

There are no box shadows. Ground, panel and register colors establish flat tonal depth; thin rules separate adjacent content. Selection is a tonal fill or a short underline, not a raised surface.

**The Flat Atlas Rule.** Separate regions with tonal fields and thin rules. Do not add decorative shadows or simulated parchment.

## Shapes

Controls and navigation are gently rectangular. The frontmatter records small checkbox/tag corners, slightly softer register rows and controls, disclosure corners, and the shared outer build-picker corner. Open content rows use rules instead of individual card shells. The next-open marker is a small circle; it is a status device, not a general rounding convention.

## Components

### Buttons

Quiet, direct controls. Primary pagination uses lavender with dark ink; outline tools use a thin rule on the ground; text actions use lavender without a filled shell. Primary hover lightens its fill, outline hover uses a darker tonal field, and text hover adds an underline. Paginated and tool buttons have a minimum height of 42px; disabled controls use .45 opacity. The armed reset state uses warm warning text and border rather than changing the visual hierarchy.

### Build Picker

Two adjacent choices share one outlined, rounded enclosure. A selected choice receives a tonal fill and an explicit check mark. The build accent changes with the chosen build; the word labels and simple inline SVGs preserve identification without color.

### Chips / Tags

God tags are compact text labels with paired muted grounds, the tag typography token and small corners. They communicate affiliation, not an interactive filter state.

The mint „Geheimnis“ tag links from the selected route stage to a ready riddle. It only appears when every clue has been explicitly confirmed. Secret sections use open rows, the existing line token, source disclosures and independent checkboxes. The clue count stays beside the heading; optional clue checks never count toward route completion. Each stage gives the local acquisition instructions, including an explicit empty state when no new clue is available. The Geheimnisse reference retains the selected stage and links back to clue locations. Solutions render only after all confirmations and remain behind a native disclosure; removing any confirmation hides them immediately.

### Cards / Containers

Travel instructions and supplies use the inset panel tone with modest padding and no shadow. Stage instructions and gift references remain open rows. The help disclosure has a thin outlined shell; story disclosures use a single top rule and native disclosure markers.

### Inputs / Fields

Notes use the panel ground, a thin rule border, control corners and the notes typography token. The textarea is vertically resizable with a 150px minimum height. Checklist boxes are outlined when open, filled with the active build accent when checked, and contain a drawn check mark; completed copy becomes muted. Native stage selection uses the register tone.

### Navigation

The register uses compact numbered rows, a tonal selected state, an explicit completion mark and a small next-open accent dot. View tabs use muted default text, lavender selection and a 2px underline. Global keyboard focus is a lavender 2px outline offset by 4px; view tabs move that outline inward to avoid clipping.

The place marker has a localized .18s ease-out color transition; selecting a stage plays a .22s ease-out tonal animation. Reduced motion disables animation, transitions and smooth scrolling. The sidecar records the exact motion and breakpoint values and contains isolated previews of the shipped primitives.

## Do's and Don'ts

### Do:

- Do preserve the indigo register, aubergine reading field and lavender numbering.
- Do pair build accents and completion colors with written names, numbers or explicit marks.
- Do keep keyboard focus visible and disable marker motion when reduced motion is requested.
- Do keep long instructions in open reading rows with the observed comfortable line length.

### Don't:

- Don't replace Chivo headings with a system display face.
- Don't introduce decorative fantasy parchment, bevels or dashboard-style tile grids.
- Don't use screenshots as shipping artwork or invent a raster-led composition.
