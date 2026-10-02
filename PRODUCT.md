# Product

<!-- impeccable:product-schema 1 -->

## Platform
web

## Stack
Delegated by user: a recommended framework. Preact with TypeScript and Vite; export a self-contained offline HTML guide. User chose code-first; workflow recorded in .impeccable/config.json.

## Users
A German-speaking Moonring beginner on their first playthrough, reading alongside the game.

## Product Purpose
Make two strong, forgiving builds actionable through exact ordered god gifts, linked travel and quest milestones, and sensible equipment purchases.

## Operating Context
Offline artifact in Documents/Moonring-Walkthrough plus a public GitHub repository and a Cloudflare-hosted page. The user follows the next step, checks completed actions, and can read ahead. Complete base-game progression and DX / The Egg before the ending, with story and boss spoilers initially collapsed.

## Capabilities and Constraints
Two switchable builds with pros and cons; exact gift purchase order; route and quest prerequisites; equipment choices tied to progression. German explanations and exact English in-game names. Persistent local progress. Research based on installed primary game data and online official sources. Unknown or procedural details must be identified. Cloudflare Workers Static Assets with native Workers Builds deploys every push/merge to main. The offline single-file artifact remains supported; browser progress stays local.

## Evidence on Hand
Installed game at /home/kawa/.local/share/Steam/steamapps/common/Moonring/Moonring.exe; official Steam store https://store.steampowered.com/app/2373630/Moonring/. Background findings are written to research-powers.md, research-route.md and research-egg.md. The official DX listing is https://store.steampowered.com/app/3498040/Moonring_DX/.

## Product Principles
- Help the player decide their next action.
- Prefer forgiving, strong choices over exploit or maximum damage routes.
- Separate game facts from our recommended order.
- Keep story revelations under explicit user control.
