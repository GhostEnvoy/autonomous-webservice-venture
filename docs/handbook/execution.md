# Execution

## Current Phase
Phase: preflight
Focus: run one supervised first-user loop, confirm the engine behaves coherently, then allow recurring iteration

## Active Checklist
- [x] Replace the broken server-form public surface with a static GitHub Pages-safe experience.
- [x] Improve the first-visit hook so the first user understands why to stay within 10 seconds.
- [x] Add one interaction loop that rewards exploration during the first 60 seconds.
- [x] Add an honest share moment that appears after enough engagement or interaction.
- [x] Track engaged time, return visits, and share-intent interactions on the public page.
- [x] Deploy staging and production surfaces successfully.
- [ ] Run one supervised first-user session on the live production site.
- [ ] Confirm analytics capture, handbook updates, and oversight behavior from that first session.
- [ ] Let the company adapt the next slice from real evidence rather than assumptions.

## Current Design Slice (EXP-002)
**Feature**: Personalized Outcome Card

**Trigger**: After 30-60s of engaged time + meaningful interaction (scroll depth > 70% OR at least 2 interactions)

**Behavior**:
- Card fades in from bottom-right with subtle animation
- Displays unique outcome based on interaction pattern (3-4 variants)
- "Share your outcome" button (copies unique URL with outcome seed)
- Dismiss button to close

**Instrumentation**:
- `outcome_card_shown` - when card renders
- `outcome_card_shared` - on share click
- `outcome_card_dismissed` - on dismiss

**Consent**: Card suppressed if analytics consent not granted

**Bundle constraint**: ≤2KB inline JS

**Expected impact**: +30-60s engaged time, +15-25% share intent

## Definition Of Done
A slice is done when repo changes exist, checks ran if possible, relevant tools/skills/MCP alternatives were checked before escalation, and any true missing human dependency is recorded in human-todo.md.
