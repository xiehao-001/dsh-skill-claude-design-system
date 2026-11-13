# Claude Design System Prompt (DSH skill bundle)

`@eduwork/dsh-skill-claude-design-system` · v0.1.0 · MIT

A DSH bundle that registers one agent skill: **claude-design-system-prompt**. The skill carries the MIT-licensed design philosophy and review procedures from [Trystan-SA/claude-design-system-prompt](https://github.com/Trystan-SA/claude-design-system-prompt), so an agent can audit and polish a UI instead of decorating it.

Nothing is injected into the system prompt. The bundle only adds a skill provider; remove or disable the plugin and the skill disappears.

## What the skill does

The upstream 20-chapter prompt covers content discipline, aesthetic discipline (no default gradients, emoji decoration, or template cards), color and imagery, hierarchy signals, rhythm and per-medium scales, WCAG contrast, semantic HTML, keyboard and screen readers, motion, forms, states and transitions. Fourteen procedural skills sit beside it:

| Skill | Use |
| --- | --- |
| `polish-pass` | Umbrella quality gate: scope, four parallel reviews, aggregate, fix, re-verify |
| `accessibility-audit` | Contrast, semantics, keyboard, motion, hit targets |
| `ai-slop-check` | Gradients, emoji, default fonts, house-style tropes |
| `hierarchy-rhythm-review` | Size, color, weight, position, density, spacing scale |
| `interaction-states-pass` | Default, hover, active, disabled, focus, loading |
| `design-system-extract` | Pull tokens out of existing sources |
| `component-extract` | Inventory reusable components |
| `discovery-questions` | Kickoff question protocol |
| `frontend-aesthetic-direction` | Commit to a look when no brand exists |
| `wireframe`, `generate-variations` | Low-fi and hi-fi exploration |
| `make-a-deck`, `make-a-prototype`, `make-tweakable` | Slide decks, clickable prototypes, in-design controls |

The SKILL.md entry point summarises the non-negotiables (flat by default, type with intent, tinted neutrals, 4/8px spacing grid, visible `:focus-visible`, 4.5:1 body contrast) and points at the full text under `references/`.

## Install

```bash
dsh plugin --profile <profile> add /absolute/path/to/dsh-skill-claude-design-system
```

Then enable the plugin on the Plugins page. Installation copies the bundle into the profile; the skill appears in the skills list for new sessions.

## Use

The agent invokes the skill automatically when a task mentions polishing, reviewing, or designing a UI. To force it, mention the skill by name in the prompt.

## Requirements

- DSH `>=0.2.1 <0.3.0`
- A profile that carries the `skills` service (any `dsh-base` profile)

## Notes and limits

- The bundle ships text only; it has no client module and no tools of its own.
- `references/` is read on demand, so the first review pays a small read cost.
- The upstream Material is English-only.
- Title, description, and icon are for the Plugins page and the market listing.

## License

MIT, inherited from the upstream repository (`LICENSE` in this package and under `assets/claude-design-system-prompt/`). Upstream: <https://github.com/Trystan-SA/claude-design-system-prompt>.

中文文档：[README.zh-CN.md](README.zh-CN.md)
