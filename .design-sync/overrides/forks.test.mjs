// Tests for the [FORK] edits in this directory (see NOTES.md). Needs the
// gitignored .ds-sync/ skill lib that the overrides import from; skipped when
// it's absent. Run: node --test .design-sync/overrides/forks.test.mjs

import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('../../', import.meta.url));
const skip = !existsSync(join(ROOT, '.ds-sync/lib/common.mjs')) && '.ds-sync/ lib not installed';

describe('docs.mjs ingestDoc category', { skip }, () => {
  let dir;
  const write = (rel, body) => {
    const p = join(dir, rel);
    mkdirSync(join(p, '..'), { recursive: true });
    writeFileSync(p, body);
    return p;
  };
  const ingest = async (p) => (await import('./docs.mjs')).ingestDoc(p);

  test.beforeEach(() => { dir = mkdtempSync(join(tmpdir(), 'ds-docs-')); });
  test.afterEach(() => rmSync(dir, { recursive: true, force: true }));

  test('derives the category from a route-group folder', async () => {
    const p = write('components/(typography)/typography.mdx', '# Typography\n');
    assert.equal((await ingest(p)).category, 'typography');
  });

  test('keeps multi-word route-group names intact', async () => {
    const p = write('components/(date-and-time)/calendar.mdx', '# Calendar\n');
    assert.equal((await ingest(p)).category, 'date-and-time');
  });

  test('frontmatter category wins over the folder', async () => {
    const p = write('components/(typography)/typography.mdx', '---\ncategory: text\n---\n# T\n');
    assert.equal((await ingest(p)).category, 'text');
  });

  test('leaves category undefined outside a route group', async () => {
    const p = write('components/button.mdx', '# Button\n');
    assert.equal((await ingest(p)).category, undefined);
  });

  test('real Typography doc lands in the typography group', async () => {
    const p = join(ROOT, 'apps/docs/content/docs/en/react/components/(typography)/typography.mdx');
    if (!existsSync(p)) return;
    assert.equal((await ingest(p)).category, 'typography');
  });
});

describe('preview-gen-storybook.mjs centered layout', { skip }, () => {
  // Pull compose() out of the generated wrapper, strip its TS annotations, and
  // run it against a React stub that records createElement calls as plain objects.
  const loadCompose = async () => {
    const { generatePreviewSource } = await import('./preview-gen-storybook.mjs');
    const src = generatePreviewSource(
      { name: 'Button', storySrc: join(ROOT, 'button.stories.tsx'), storyIds: [{ id: 'b--default', name: 'Default', exportKey: 'Default' }] },
      {},
    );
    const fn = /function compose[\s\S]*?\n}/.exec(src)[0];
    const { transform } = await import('esbuild');
    const { code } = await transform(fn, { loader: 'ts' });
    const React = { createElement: (type, props, ...children) => ({ type, props, children }) };
    return new Function('React', `${code}\nreturn compose;`)(React);
  };

  const story = { render: () => 'field' };

  test('wraps meta-level centered stories in a fit-content div', async () => {
    const compose = await loadCompose();
    const out = compose({ default: { parameters: { layout: 'centered' } }, Default: story }, 'Default')();
    assert.equal(out.type, 'div');
    assert.deepEqual(out.props.style, { width: 'fit-content', maxWidth: '100%' });
    assert.deepEqual(out.children, ['field']);
  });

  test('story-level layout overrides meta', async () => {
    const compose = await loadCompose();
    const S = { default: { parameters: { layout: 'centered' } }, Default: { ...story, parameters: { layout: 'fullscreen' } } };
    assert.equal(compose(S, 'Default')(), 'field');
  });

  test('story-level centered wraps without meta layout', async () => {
    const compose = await loadCompose();
    const out = compose({ default: {}, Default: { ...story, parameters: { layout: 'centered' } } }, 'Default')();
    assert.equal(out.type, 'div');
  });

  test('leaves non-centered stories unwrapped', async () => {
    const compose = await loadCompose();
    assert.equal(compose({ default: {}, Default: story }, 'Default')(), 'field');
  });
});
