---
name: claude-design-system-prompt
description: Use when designing, reviewing, or polishing any user interface — an HTML page, landing page, dashboard, slide deck, prototype, or design system — with an opinionated, accessibility-aware, AI-slop-resistant design review. Covers WCAG checks, typography and spacing scales, hierarchy and rhythm, interaction states, and the polish-pass quality gate. Trigger on "polish this page", "review the design", "make it look less AI-generated", "audit accessibility", or before shipping any UI.
---

# Claude Design System Prompt

An opinionated design collaborator: content discipline, aesthetic discipline, hierarchy and rhythm, accessibility, interaction states, system thinking. The point is not decoration — it is care. A polished and an unpolished design are the same idea executed at different levels of care, and the gap is what people actually see.

Use it before shipping a UI, or when a page looks generically "AI-made" and the reason is not obvious.

## When to use

- Polishing or reviewing an existing page, deck, or component set.
- Building UI from scratch and choosing type, color, spacing, and states.
- Auditing accessibility (contrast, semantics, keyboard, motion).
- Detecting AI slop: gradients, emoji decoration, default fonts, off-scale spacing, pure white on pure black.

## The non-negotiables

1. **Every element earns its place.** No filler copy, no decorative chrome, no "just in case" sections.
2. **Flat by default.** No aggressive gradients, no neon, no 3+ color blends unless the brand demands it.
3. **No emoji as decoration.** Emoji only when the brand uses them or they carry meaning.
4. **Cards need a reason.** Rounded corners plus a colored left border is the template look; prefer subtle shadow, hairline border, or background shift — chosen, not defaulted.
5. **Type with intent.** Do not default to Inter, Roboto, Arial, Fraunces, or a bare system stack. Pick a family pair and say why.
6. **Neutrals carry a tint.** `#FAFAFA` / `#1A1A1A`, not `#FFFFFF` on `#000000`.
7. **Every color traces to a token** (or an explicit `oklch()` value), not a one-off hex.
8. **Spacing on a 4/8px grid.** No 7px, 13px, 18px.
9. **The warm editorial look needs a brand reason** (cream + serif display + terracotta is not a neutral default).
10. **Accessibility is not polish.** Body text 4.5:1, large text and UI 3:1, one `h1`, semantic elements, visible `:focus-visible`, 44×44 hit targets, `prefers-reduced-motion`, never color-only signaling.

## Working method

For a review, run the umbrella gate in `references/skills/polish-pass.md`: confirm scope, four parallel reviews (accessibility, AI slop, hierarchy and rhythm, interaction states), aggregate and dedupe into blockers / quality / polish, fix, re-verify, then report a short verdict.

For a build, start from `references/skills/discovery-questions.md` or `references/skills/frontend-aesthetic-direction.md`, then pull tokens with `references/skills/design-system-extract.md`.

## Reference map

Base directory for this skill holds the full upstream material, MIT licensed:

- `references/system-prompt.md` — the 20-chapter source prompt (content discipline, defaults, color, imagery, icons, hierarchy signals, rhythm, per-medium scales, WCAG, semantic HTML, keyboard, screen readers, motion, forms, states, transitions, feedback, the 5-second test, components, tokens).
- `references/skills/polish-pass.md` — end-of-design quality gate (start here for reviews).
- `references/skills/accessibility-audit.md` — WCAG, semantics, keyboard, motion.
- `references/skills/ai-slop-check.md` — gradient / emoji / font / house-style trope detection.
- `references/skills/hierarchy-rhythm-review.md` — size, weight, color, spacing scale discipline.
- `references/skills/interaction-states-pass.md` — hover, active, disabled, focus, loading.
- `references/skills/design-system-extract.md`, `component-extract.md` — token and component inventories.
- `references/skills/discovery-questions.md`, `frontend-aesthetic-direction.md`, `wireframe.md`, `generate-variations.md`, `make-a-deck.md`, `make-a-prototype.md`, `make-tweakable.md` — production skills.

Read only the files the current task needs; resolve relative paths against this base directory.

## Reporting

End a review with: verdict (ready to ship / ready after flagged decisions / needs iteration first), counts of blockers and quality fixes applied, open decisions that need the user's call, and what was out of scope.

## Source

Upstream: https://github.com/Trystan-SA/claude-design-system-prompt (MIT). This package ships the upstream text unmodified under `references/`; the SKILL.md summary above is the DSH-facing entry point.
