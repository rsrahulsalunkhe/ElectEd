# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.ts >> all pages have unique document titles
- Location: tests\e2e\accessibility.spec.ts:40:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 7
Received: 1
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - link "Skip to main content" [ref=e3] [cursor=pointer]:
    - /url: "#main-content"
  - status [ref=e4]
  - banner [ref=e5]:
    - generic [ref=e7]:
      - link "ElectEd – Home" [ref=e8] [cursor=pointer]:
        - /url: /
        - img [ref=e10]
        - generic [ref=e13]: ElectEd
      - navigation "Main navigation" [ref=e14]:
        - link "Chat with our AI election guide" [ref=e15] [cursor=pointer]:
          - /url: /chat
          - text: AI Assistant
        - link "Election timeline visualizer" [ref=e16] [cursor=pointer]:
          - /url: /timeline
          - text: Timeline
        - link "Step-by-step voting guide" [ref=e17] [cursor=pointer]:
          - /url: /steps
          - text: Voting Steps
        - link "Test your election knowledge" [ref=e18] [cursor=pointer]:
          - /url: /quiz
          - text: Quiz
        - link "Election terms dictionary" [ref=e19] [cursor=pointer]:
          - /url: /glossary
          - text: Glossary
        - link "Compare election systems worldwide" [ref=e20] [cursor=pointer]:
          - /url: /compare
          - text: Compare
      - generic [ref=e22]:
        - 'button "Language: English. Click to change." [ref=e24]':
          - img [ref=e25]
          - generic [ref=e28]: English
        - button "Sign in with Google to save progress" [ref=e29]:
          - img [ref=e30]
          - generic [ref=e33]: Sign in
  - main [ref=e34]:
    - status "Loading page" [ref=e35]:
      - status "Loading" [ref=e36]
  - contentinfo [ref=e37]:
    - generic [ref=e38]:
      - generic [ref=e39]:
        - generic [ref=e40]:
          - heading "ElectEd" [level=2] [ref=e41]
          - paragraph [ref=e42]: Election learning made simple, interactive, and non-partisan.
        - navigation "Footer navigation" [ref=e43]:
          - heading "Links" [level=3] [ref=e44]
          - list [ref=e45]:
            - listitem [ref=e46]:
              - link "Home" [ref=e47] [cursor=pointer]:
                - /url: /
            - listitem [ref=e48]:
              - link "Chat" [ref=e49] [cursor=pointer]:
                - /url: /chat
            - listitem [ref=e50]:
              - link "Timeline" [ref=e51] [cursor=pointer]:
                - /url: /timeline
            - listitem [ref=e52]:
              - link "Steps" [ref=e53] [cursor=pointer]:
                - /url: /steps
            - listitem [ref=e54]:
              - link "Quiz" [ref=e55] [cursor=pointer]:
                - /url: /quiz
            - listitem [ref=e56]:
              - link "Glossary" [ref=e57] [cursor=pointer]:
                - /url: /glossary
        - generic [ref=e58]:
          - paragraph [ref=e59]: ElectEd is a non-partisan educational platform. We do not support any political party or candidate.
          - paragraph [ref=e60]: "Data source: Election Commission of India"
      - generic [ref=e61]:
        - paragraph [ref=e62]: © 2026 ElectEd. All rights reserved.
        - paragraph [ref=e63]: Built for civic education
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import AxeBuilder from '@axe-core/playwright';
  3  | 
  4  | const PAGES = [
  5  |   { name: 'Home', path: '/' },
  6  |   { name: 'Chat', path: '/chat' },
  7  |   { name: 'Timeline', path: '/timeline' },
  8  |   { name: 'Steps', path: '/steps' },
  9  |   { name: 'Quiz', path: '/quiz' },
  10 |   { name: 'Glossary', path: '/glossary' },
  11 |   { name: 'Compare', path: '/compare' },
  12 | ];
  13 | 
  14 | for (const { name, path } of PAGES) {
  15 |   test(`${name} page — zero critical WCAG violations`, async ({ page }) => {
  16 |     await page.goto(path);
  17 |     // Wait for content to settle
  18 |     await page.waitForLoadState('networkidle');
  19 | 
  20 |     const results = await new AxeBuilder({ page })
  21 |       .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
  22 |       // Exclude known third-party widget issues
  23 |       .exclude('[data-radix-popper-content-wrapper]')
  24 |       .analyze();
  25 | 
  26 |     const critical = results.violations.filter((v) => v.impact === 'critical');
  27 |     const serious = results.violations.filter((v) => v.impact === 'serious');
  28 | 
  29 |     if (critical.length > 0 || serious.length > 0) {
  30 |       const msgs = [...critical, ...serious].map(
  31 |         (v) => `[${v.impact}] ${v.id}: ${v.description}\n  → ${v.helpUrl}`
  32 |       );
  33 |       throw new Error(`WCAG violations on ${name}:\n${msgs.join('\n')}`);
  34 |     }
  35 | 
  36 |     expect(results.violations.filter((v) => ['critical', 'serious'].includes(v.impact ?? ''))).toHaveLength(0);
  37 |   });
  38 | }
  39 | 
  40 | test('all pages have unique document titles', async ({ page }) => {
  41 |   const titles: string[] = [];
  42 |   for (const { path } of PAGES) {
  43 |     await page.goto(path);
  44 |     await page.waitForLoadState('domcontentloaded');
  45 |     titles.push(await page.title());
  46 |   }
  47 |   const uniqueTitles = new Set(titles);
> 48 |   expect(uniqueTitles.size).toBe(titles.length);
     |                             ^ Error: expect(received).toBe(expected) // Object.is equality
  49 | });
  50 | 
  51 | test('skip nav link is the first focusable element', async ({ page }) => {
  52 |   await page.goto('/');
  53 |   await page.keyboard.press('Tab');
  54 |   const focused = page.locator(':focus');
  55 |   await expect(focused).toHaveAttribute('href', '#main-content');
  56 | });
  57 | 
```