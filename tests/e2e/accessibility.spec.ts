import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const PAGES = [
  { name: 'Home', path: '/' },
  { name: 'Chat', path: '/chat' },
  { name: 'Timeline', path: '/timeline' },
  { name: 'Steps', path: '/steps' },
  { name: 'Quiz', path: '/quiz' },
  { name: 'Glossary', path: '/glossary' },
  { name: 'Compare', path: '/compare' },
];

for (const { name, path } of PAGES) {
  test(`${name} page — zero critical WCAG violations`, async ({ page }) => {
    await page.goto(path);
    // Wait for content to settle
    await page.waitForLoadState('networkidle');

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      // Exclude known third-party widget issues
      .exclude('[data-radix-popper-content-wrapper]')
      .analyze();

    const critical = results.violations.filter((v) => v.impact === 'critical');
    const serious = results.violations.filter((v) => v.impact === 'serious');

    if (critical.length > 0 || serious.length > 0) {
      const msgs = [...critical, ...serious].map(
        (v) => `[${v.impact}] ${v.id}: ${v.description}\n  → ${v.helpUrl}`
      );
      throw new Error(`WCAG violations on ${name}:\n${msgs.join('\n')}`);
    }

    expect(results.violations.filter((v) => ['critical', 'serious'].includes(v.impact ?? ''))).toHaveLength(0);
  });
}

test('all pages have unique document titles', async ({ page }) => {
  const titles: string[] = [];
  for (const { path } of PAGES) {
    await page.goto(path);
    await page.waitForLoadState('domcontentloaded');
    titles.push(await page.title());
  }
  const uniqueTitles = new Set(titles);
  expect(uniqueTitles.size).toBe(titles.length);
});

test('skip nav link is the first focusable element', async ({ page }) => {
  await page.goto('/');
  await page.keyboard.press('Tab');
  const focused = page.locator(':focus');
  await expect(focused).toHaveAttribute('href', '#main-content');
});
