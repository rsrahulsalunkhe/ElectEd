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
        - generic [ref=e14]: ElectEd
      - navigation "Main navigation" [ref=e15]:
        - link "Chat with our AI election guide" [ref=e16] [cursor=pointer]:
          - /url: /chat
          - text: AI Assistant
        - link "Election timeline visualizer" [ref=e17] [cursor=pointer]:
          - /url: /timeline
          - text: Timeline
        - link "Step-by-step voting guide" [ref=e18] [cursor=pointer]:
          - /url: /steps
          - text: Voting Steps
        - link "Test your election knowledge" [ref=e19] [cursor=pointer]:
          - /url: /quiz
          - text: Quiz
        - link "Election terms dictionary" [ref=e21] [cursor=pointer]:
          - /url: /glossary
          - text: Glossary
        - link "Compare election systems worldwide" [ref=e22] [cursor=pointer]:
          - /url: /compare
          - text: Compare
      - generic [ref=e23]:
        - 'button "Language: English. Click to change." [ref=e25]':
          - img [ref=e26]
          - generic [ref=e30]: English
        - button "Sign in with Google to save progress" [ref=e31]:
          - img [ref=e32]
          - generic [ref=e36]: Sign in
  - main [ref=e37]:
    - generic [ref=e38]:
      - generic [ref=e39]:
        - heading "Election Knowledge Quiz" [level=1] [ref=e40]
        - paragraph [ref=e41]: Choose a difficulty level and test your understanding of elections, voting, and electoral systems.
      - generic [ref=e42]:
        - article [ref=e43]:
          - generic [ref=e44]:
            - paragraph [ref=e45]: 🟢
            - generic [ref=e46]: Beginner
          - heading "Election Basics" [level=2] [ref=e47]
          - paragraph [ref=e48]: Start with core election concepts and terminology.
          - generic [ref=e49]:
            - paragraph [ref=e50]: "Questions: 10"
            - paragraph [ref=e51]: "Estimated time: 6-8 min"
            - paragraph [ref=e52]: "Best score: 0%"
          - button "Start Quiz" [ref=e53]
        - article [ref=e54]:
          - generic [ref=e55]:
            - paragraph [ref=e56]: 🟡
            - generic [ref=e57]: Intermediate
          - heading "Voting Process" [level=2] [ref=e58]
          - paragraph [ref=e59]: Understand forms, booth process, observers, and rules.
          - generic [ref=e60]:
            - paragraph [ref=e61]: "Questions: 10"
            - paragraph [ref=e62]: "Estimated time: 8-10 min"
            - paragraph [ref=e63]: "Best score: 0%"
          - button "Start Quiz" [ref=e64]
        - article [ref=e65]:
          - generic [ref=e66]:
            - paragraph [ref=e67]: 🔴
            - generic [ref=e68]: Advanced
          - heading "Electoral Systems" [level=2] [ref=e69]
          - paragraph [ref=e70]: Dive into representation models and election law.
          - generic [ref=e71]:
            - paragraph [ref=e72]: "Questions: 10"
            - paragraph [ref=e73]: "Estimated time: 10-12 min"
            - paragraph [ref=e74]: "Best score: 0%"
          - button "Start Quiz" [ref=e75]
        - article [ref=e76]:
          - generic [ref=e77]:
            - paragraph [ref=e78]: 🏆
            - generic [ref=e79]: Challenge
          - heading "Mixed Topics" [level=2] [ref=e80]
          - paragraph [ref=e81]: Timed mixed round across all categories.
          - generic [ref=e82]:
            - paragraph [ref=e83]: "Questions: 15"
            - paragraph [ref=e84]: "Estimated time: 7-8 min"
            - paragraph [ref=e85]: "Best score: 0%"
          - button "Start Quiz" [ref=e86]
  - contentinfo [ref=e87]:
    - generic [ref=e88]:
      - generic [ref=e89]:
        - generic [ref=e90]:
          - heading "ElectEd" [level=2] [ref=e91]
          - paragraph [ref=e92]: Election learning made simple, interactive, and non-partisan.
        - navigation "Footer navigation" [ref=e93]:
          - heading "Links" [level=3] [ref=e94]
          - list [ref=e95]:
            - listitem [ref=e96]:
              - link "Home" [ref=e97] [cursor=pointer]:
                - /url: /
            - listitem [ref=e98]:
              - link "Chat" [ref=e99] [cursor=pointer]:
                - /url: /chat
            - listitem [ref=e100]:
              - link "Timeline" [ref=e101] [cursor=pointer]:
                - /url: /timeline
            - listitem [ref=e102]:
              - link "Steps" [ref=e103] [cursor=pointer]:
                - /url: /steps
            - listitem [ref=e104]:
              - link "Quiz" [ref=e105] [cursor=pointer]:
                - /url: /quiz
            - listitem [ref=e106]:
              - link "Glossary" [ref=e107] [cursor=pointer]:
                - /url: /glossary
        - generic [ref=e108]:
          - paragraph [ref=e109]: ElectEd is a non-partisan educational platform. We do not support any political party or candidate.
          - paragraph [ref=e110]: "Data source: Election Commission of India"
      - generic [ref=e111]:
        - paragraph [ref=e112]: © 2026 ElectEd. All rights reserved.
        - paragraph [ref=e113]: Built for civic education
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