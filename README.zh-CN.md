# Claude 设计系统提示词（DSH 技能包）

`@eduwork/dsh-skill-claude-design-system` · v0.1.0 · MIT

这是一个 DSH 技能包，注册一个技能：**claude-design-system-prompt**。技能内容来自 [Trystan-SA/claude-design-system-prompt](https://github.com/Trystan-SA/claude-design-system-prompt)（MIT），把「设计哲学 + 审校流程」交给模型，让界面被认真审过，而不是被装饰过。

不注入系统提示词，只注册技能 provider。停用或卸载插件，技能即消失。

## 技能内容

上游 20 章提示词覆盖：内容纪律、审美纪律（禁止默认渐变、emoji 装饰、模板卡片）、色彩与图像、图标、层级信号、节奏与各媒介尺度、WCAG 对比度、语义 HTML、键盘与读屏、动效、表单、状态与过渡。另有 14 个流程技能：

| 技能 | 用途 |
| --- | --- |
| `polish-pass` | 总闸：确认范围 → 四路并行审校 → 聚合去重 → 修复复验 → 简报 |
| `accessibility-audit` | 对比度、语义、键盘、动效、触控目标 |
| `ai-slop-check` | 渐变、emoji、默认字体、模板味 |
| `hierarchy-rhythm-review` | 字号/字重/颜色/位置/密度与间距尺度 |
| `interaction-states-pass` | 默认、悬停、按下、禁用、聚焦、加载 |
| `design-system-extract` | 从现有来源抽取设计 token |
| `component-extract` | 盘点可复用组件 |
| `discovery-questions` | 开工前的问题清单 |
| `frontend-aesthetic-direction` | 无品牌时确定风格方向 |
| `wireframe`、`generate-variations` | 低保真与高保真探索 |
| `make-a-deck`、`make-a-prototype`、`make-tweakable` | 幻灯片、可点击原型、设计内调节面板 |

SKILL.md 汇总了硬性红线（默认扁平、字体要有意图、中性色带色调、4/8px 间距栅格、可见 `:focus-visible`、正文 4.5:1），并指向 `references/` 下的全文。

## 安装

```bash
dsh plugin --profile <profile> add /absolute/path/to/dsh-skill-claude-design-system
```

然后在插件页启用。安装会把整包复制进 profile，新会话的技能列表即可看到。

## 使用

任务里出现「润色 / 审校 / 设计界面」时模型会自动调用；也可在提示里直接点名该技能。

## 环境要求

- DSH `>=0.2.1 <0.3.0`
- 带 `skills` 服务的 profile（任何 `dsh-base` 系 profile）

## 说明与限制

- 纯文本包，没有客户端模块，也没有自己的工具。
- `references/` 按需读取，首次审校有少量读取开销。
- 上游材料只有英文。
- 标题、描述、图标用于插件页与市场条目。

## 许可

MIT，随上游仓库（本包 `LICENSE` 与 `assets/claude-design-system-prompt/LICENSE`）。上游：<https://github.com/Trystan-SA/claude-design-system-prompt>。

English: [README.md](README.md)
