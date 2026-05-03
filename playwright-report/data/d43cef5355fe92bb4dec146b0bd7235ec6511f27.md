# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.ts >> Quiz page — zero critical WCAG violations
- Location: tests\e2e\accessibility.spec.ts:15:3

# Error details

```
Error: WCAG violations on Quiz:
[serious] color-contrast: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
  → https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
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
        - link "Election terms dictionary" [ref=e20] [cursor=pointer]:
          - /url: /glossary
          - text: Glossary
        - link "Compare election systems worldwide" [ref=e21] [cursor=pointer]:
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
    - generic [ref=e35]:
      - generic [ref=e36]:
        - heading "Election Knowledge Quiz" [level=1] [ref=e37]
        - paragraph [ref=e38]: Choose a difficulty level and test your understanding of elections, voting, and electoral systems.
      - generic [ref=e39]:
        - article [ref=e40]:
          - generic [ref=e41]:
            - paragraph [ref=e42]: 🟢
            - generic [ref=e43]: Beginner
          - heading "Election Basics" [level=2] [ref=e44]
          - paragraph [ref=e45]: Start with core election concepts and terminology.
          - generic [ref=e46]:
            - paragraph [ref=e47]: "Questions: 10"
            - paragraph [ref=e48]: "Estimated time: 6-8 min"
            - paragraph [ref=e49]: "Best score: 0%"
          - button "Start Quiz" [ref=e50]
        - article [ref=e51]:
          - generic [ref=e52]:
            - paragraph [ref=e53]: 🟡
            - generic [ref=e54]: Intermediate
          - heading "Voting Process" [level=2] [ref=e55]
          - paragraph [ref=e56]: Understand forms, booth process, observers, and rules.
          - generic [ref=e57]:
            - paragraph [ref=e58]: "Questions: 10"
            - paragraph [ref=e59]: "Estimated time: 8-10 min"
            - paragraph [ref=e60]: "Best score: 0%"
          - button "Start Quiz" [ref=e61]
        - article [ref=e62]:
          - generic [ref=e63]:
            - paragraph [ref=e64]: 🔴
            - generic [ref=e65]: Advanced
          - heading "Electoral Systems" [level=2] [ref=e66]
          - paragraph [ref=e67]: Dive into representation models and election law.
          - generic [ref=e68]:
            - paragraph [ref=e69]: "Questions: 10"
            - paragraph [ref=e70]: "Estimated time: 10-12 min"
            - paragraph [ref=e71]: "Best score: 0%"
          - button "Start Quiz" [ref=e72]
        - article [ref=e73]:
          - generic [ref=e74]:
            - paragraph [ref=e75]: 🏆
            - generic [ref=e76]: Challenge
          - heading "Mixed Topics" [level=2] [ref=e77]
          - paragraph [ref=e78]: Timed mixed round across all categories.
          - generic [ref=e79]:
            - paragraph [ref=e80]: "Questions: 15"
            - paragraph [ref=e81]: "Estimated time: 7-8 min"
            - paragraph [ref=e82]: "Best score: 0%"
          - button "Start Quiz" [ref=e83]
  - contentinfo [ref=e84]:
    - generic [ref=e85]:
      - generic [ref=e86]:
        - generic [ref=e87]:
          - heading "ElectEd" [level=2] [ref=e88]
          - paragraph [ref=e89]: Election learning made simple, interactive, and non-partisan.
        - navigation "Footer navigation" [ref=e90]:
          - heading "Links" [level=3] [ref=e91]
          - list [ref=e92]:
            - listitem [ref=e93]:
              - link "Home" [ref=e94] [cursor=pointer]:
                - /url: /
            - listitem [ref=e95]:
              - link "Chat" [ref=e96] [cursor=pointer]:
                - /url: /chat
            - listitem [ref=e97]:
              - link "Timeline" [ref=e98] [cursor=pointer]:
                - /url: /timeline
            - listitem [ref=e99]:
              - link "Steps" [ref=e100] [cursor=pointer]:
                - /url: /steps
            - listitem [ref=e101]:
              - link "Quiz" [ref=e102] [cursor=pointer]:
                - /url: /quiz
            - listitem [ref=e103]:
              - link "Glossary" [ref=e104] [cursor=pointer]:
                - /url: /glossary
        - generic [ref=e105]:
          - paragraph [ref=e106]: ElectEd is a non-partisan educational platform. We do not support any political party or candidate.
          - paragraph [ref=e107]: "Data source: Election Commission of India"
      - generic [ref=e108]:
        - paragraph [ref=e109]: © 2026 ElectEd. All rights reserved.
        - paragraph [ref=e110]: Built for civic education
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
> 33 |       throw new Error(`WCAG violations on ${name}:\n${msgs.join('\n')}`);
     |             ^ Error: WCAG violations on Quiz:
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
  48 |   expect(uniqueTitles.size).toBe(titles.length);
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