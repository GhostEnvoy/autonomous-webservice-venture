# Current Experiment

## Experiment ID
EXP-001

## Bucket
interaction loop

## Status
ready_for_test

## Hypothesis
If the first public page feels alive, remembers the visitor, and reveals a shareable outcome only after a short interaction loop, the first user will spend more meaningful time on the page and become more willing to share it with someone else.

## Target Audience Moment
The first 10-90 seconds of the CEO's first live session, including the moment where sharing feels earned rather than requested.

## Expected Engaged-Time Lift
+45 to +90 seconds versus the current rolling baseline.

## Junk-Attention Risk
Do not inflate time on page through confusion, forced waiting, empty animation, or guilt-based sharing prompts.

## Rollback Trigger
Rollback if engaged time stays flat, if the page feels manipulative, or if the share prompt appears before the experience has earned it.

## Share Goal
The first version should make it natural for the CEO to think "I should send this to one other person" after interacting with the page.

## Notes
- The public Pages-safe surface is live on staging and production.
- Engaged-time, interaction, return-visit, and share-intent instrumentation are present.
- The next step is a supervised first real session, not another infrastructure rewrite.
- Only one active experiment should live in this file at a time.
- If a backup idea is needed, place it in experiment_backlog.md instead.
