# Metrics

## Core Signals
- engaged time on page
- unique visitors
- repeat visitors
- bounce rate
- scroll depth
- interaction depth

## Current Instrumentation Status
Analytics provider: starter local tracker + Claw collector live sync
Coverage:
- [x] engaged time on page
- [x] milestone events (15s / 30s / 60s / 120s)
- [x] primary interaction events
- [x] max scroll depth
- [x] repeat visitors (via anonymous local visitor id in export files)
- [x] rolling 7-day baseline tracking
- [ ] external traffic attribution

Compliance profile:
- Default region mode: eu_first
- Analytics depth: balanced
- Rich tracking requires consent: yes

## Latest Observations
- No live collector sessions have been ingested yet.
- The sensing layer is ready; the next real visit should become the first genuine company signal.

## Interpretation
What we think the data means:
- The sensing layer is live and automatic now, but the company still has no real user evidence to reason from.
- The next meaningful milestone is one genuine first-user session that the company can analyze and adapt around.
- Protect the survival baseline once rolling 7-day users reach 50; future changes should compound above that floor rather than sacrifice it.

What we are not yet confident about:
- Whether the current experience genuinely earns longer sessions.
- Which interaction loops are producing the deepest attention rather than passive dwell.
- Whether stronger time on page will translate into repeat usage.

## Recommended Next Experiment
- Observe the first real session, then let the company adapt the next experiment from that evidence.

## Current Instrumentation Status
Analytics provider: starter local tracker + Claw collector live sync
Coverage:
- [x] engaged time on page
- [x] milestone events (15s / 30s / 60s / 120s)
- [x] primary interaction events
- [x] max scroll depth
- [x] repeat visitors (via anonymous local visitor id in export files)
- [x] rolling 7-day baseline tracking
- [ ] external traffic attribution

Compliance profile:
- Default region mode: eu_first
- Analytics depth: balanced
- Rich tracking requires consent: yes

## Latest Observations
- 2026-03-29: Synced live Claw collector sessions for /. 0 session updates from 0 unique visitors. Average engaged time was 0.0 seconds, repeat-visit rate was 0.0%, average scroll depth was 0.0%, and interaction rate was 0.0%.
- Rolling 7-day unique users: 0.
- Rolling 7-day engaged-time average: 0.0s.
- Protected baseline: 0.0s (insufficient_data).

## Interpretation
What we think the data means:
- The north-star metric is now backed by a lightweight first-party collector instead of only browser exports.
- This keeps the sensing layer aligned to the company mission without depending on Docker, a database, or a hosted analytics SaaS.
- Protect the survival baseline once rolling 7-day users reach 50; future changes should compound above that floor rather than sacrifice it.

What we are not yet confident about:
- Whether stronger time on page is translating into repeat usage at scale.
- Which interaction loops are producing the deepest attention rather than passive dwell.
- Whether the current public collector bridge remains stable enough for unattended collection over long periods.

## Current Instrumentation Status
Analytics provider: starter local tracker + Claw collector live sync
Coverage:
- [x] engaged time on page
- [x] milestone events (15s / 30s / 60s / 120s)
- [x] primary interaction events
- [x] max scroll depth
- [x] repeat visitors (via anonymous local visitor id in export files)
- [x] rolling 7-day baseline tracking
- [ ] external traffic attribution

Compliance profile:
- Default region mode: eu_first
- Analytics depth: balanced
- Rich tracking requires consent: yes

## Latest Observations
- 2026-03-29: Synced live Claw collector sessions for /. 0 session updates from 0 unique visitors. Average engaged time was 0.0 seconds, repeat-visit rate was 0.0%, average scroll depth was 0.0%, and interaction rate was 0.0%.
- Rolling 7-day unique users: 0.
- Rolling 7-day engaged-time average: 0.0s.
- Protected baseline: 0.0s (insufficient_data).

## Interpretation
What we think the data means:
- The north-star metric is now backed by a lightweight first-party collector instead of only browser exports.
- This keeps the sensing layer aligned to the company mission without depending on Docker, a database, or a hosted analytics SaaS.
- Protect the survival baseline once rolling 7-day users reach 50; future changes should compound above that floor rather than sacrifice it.

What we are not yet confident about:
- Whether stronger time on page is translating into repeat usage at scale.
- Which interaction loops are producing the deepest attention rather than passive dwell.
- Whether the current public collector bridge remains stable enough for unattended collection over long periods.

## Current Instrumentation Status
Analytics provider: starter local tracker + Claw collector live sync
Coverage:
- [x] engaged time on page
- [x] milestone events (15s / 30s / 60s / 120s)
- [x] primary interaction events
- [x] max scroll depth
- [x] repeat visitors (via anonymous local visitor id in export files)
- [x] rolling 7-day baseline tracking
- [ ] external traffic attribution

Compliance profile:
- Default region mode: eu_first
- Analytics depth: balanced
- Rich tracking requires consent: yes

## Latest Observations
- 2026-03-29: Synced live Claw collector sessions for /. 1 session updates from 1 unique visitors. Average engaged time was 75.1 seconds, repeat-visit rate was 0.0%, average scroll depth was 100.0%, and interaction rate was 100.0%.
- Rolling 7-day unique users: 1.
- Rolling 7-day engaged-time average: 75.1s.
- Protected baseline: 0.0s (insufficient_data).

## Interpretation
What we think the data means:
- The north-star metric is now backed by a lightweight first-party collector instead of only browser exports.
- This keeps the sensing layer aligned to the company mission without depending on Docker, a database, or a hosted analytics SaaS.
- Protect the survival baseline once rolling 7-day users reach 50; future changes should compound above that floor rather than sacrifice it.

What we are not yet confident about:
- Whether stronger time on page is translating into repeat usage at scale.
- Which interaction loops are producing the deepest attention rather than passive dwell.
- Whether the current public collector bridge remains stable enough for unattended collection over long periods.
