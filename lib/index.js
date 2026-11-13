/**
 * Bundled skill: claude-design-system-prompt.
 *
 * Registers a read-only skill provider that serves the upstream MIT text
 * shipped under `assets/claude-design-system-prompt/`. The directory is the
 * skill's resource base, so the model can read `references/**` on demand
 * without copying anything at startup.
 */
import { readFileSync } from 'node:fs'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

/** Cordis plugin name. */
export const name = 'dsh-skill-claude-design-system'

/** The skill registry owns provider registration. */
export const inject = ['skills']

const SKILL_NAME = 'claude-design-system-prompt'
const PROVIDER = 'dsh-design-system'
/** Same rank as the host's own bundled skills. */
const RANK = 600
const BASE = fileURLToPath(new URL('../assets/claude-design-system-prompt/', import.meta.url))
const LOCATOR = join(BASE, 'SKILL.md')

const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/u

/**
 * Split a SKILL.md into frontmatter metadata and body.
 * @param raw - file content.
 * @param path - origin, for error messages.
 * @returns the description and the instruction body.
 */
function parseSkill(raw, path) {
  const frontmatter = FRONTMATTER.exec(raw)
  if (frontmatter?.[1] === undefined) {
    throw new Error(`${name}: ${path} has no YAML frontmatter`)
  }
  const line = frontmatter[1]
    .split(/\r?\n/u)
    .map((entry) => entry.trim())
    .find((entry) => /^description\s*:/iu.test(entry))
  if (line === undefined) throw new Error(`${name}: ${path} has no description`)
  const description = line.replace(/^description\s*:/iu, '').trim().replace(/^["']|["']$/gu, '')
  if (description.length === 0) throw new Error(`${name}: ${path} has an empty description`)
  return { description, content: raw.slice(frontmatter[0].length).trim() }
}

/**
 * Build the provider served to the skill registry.
 * @param description - frontmatter description of the bundled skill.
 * @returns a single-candidate provider.
 */
function createProvider(description) {
  const candidate = {
    name: SKILL_NAME,
    description,
    invocation: { modelInvocable: true, userInvocable: true },
    provider: PROVIDER,
    source: 'bundled',
    rank: RANK,
    resourceBase: { kind: 'directory', path: BASE },
    locator: LOCATOR,
  }
  return {
    name: PROVIDER,
    list: () => Promise.resolve([candidate]),
    async get(entry, options) {
      const { rank: _rank, locator, ...summary } = entry
      const raw = await readFile(locator, { encoding: 'utf8', signal: options?.signal })
      return { ...summary, content: parseSkill(raw, locator).content }
    },
  }
}

/**
 * Register the bundled skill; disposal unregisters the provider.
 * @param ctx - plugin context carrying the skill registry.
 */
export function apply(ctx) {
  const { description } = parseSkill(readFileSync(LOCATOR, 'utf8'), LOCATOR)
  ctx.effect(function* registerDesignSystemSkill() {
    yield ctx.skills.registerProvider(() => createProvider(description))
  }, 'claude design system prompt skill')
}
