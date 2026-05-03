# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.ts >> Home page — zero critical WCAG violations
- Location: tests\e2e\accessibility.spec.ts:15:3

# Error details

```
Error: WCAG violations on Home:
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
        - link "Election terms dictionary" [ref=e19] [cursor=pointer]:
          - /url: /glossary
          - text: Glossary
        - link "Compare election systems worldwide" [ref=e20] [cursor=pointer]:
          - /url: /compare
          - text: Compare
      - generic [ref=e21]:
        - 'button "Language: English. Click to change." [ref=e23]':
          - img [ref=e24]
          - generic [ref=e27]: English
        - button "Sign in with Google to save progress" [ref=e28]:
          - img [ref=e29]
          - generic [ref=e32]: Sign in
  - main [ref=e33]:
    - generic [ref=e34]:
      - generic [ref=e36]:
        - generic [ref=e37]:
          - heading "Understand Your Vote. Shape Your Future." [level=1] [ref=e38]
          - paragraph [ref=e39]: ElectEd makes learning about elections simple, interactive and engaging for every citizen
          - generic [ref=e40]:
            - link "Ask AI Assistant" [ref=e41] [cursor=pointer]:
              - /url: /chat
              - button "Ask AI Assistant" [ref=e42]:
                - img [ref=e44]
                - text: Ask AI Assistant
            - link "Start Learning" [ref=e46] [cursor=pointer]:
              - /url: /steps
              - button "Start Learning" [ref=e47]
        - generic [ref=e50]:
          - paragraph [ref=e51]: 🧑‍💼🗳️
          - paragraph [ref=e52]: Indian voter with ballot
      - generic [ref=e54]:
        - generic [ref=e55]:
          - paragraph [ref=e56]: 🗳️ 970 Million+
          - paragraph [ref=e57]: Eligible Voters in India
        - generic [ref=e58]:
          - paragraph [ref=e59]: 🏛️ 543
          - paragraph [ref=e60]: Lok Sabha Constituencies
        - generic [ref=e61]:
          - paragraph [ref=e62]: 📅 5 years
          - paragraph [ref=e63]: Elections cycle
        - generic [ref=e64]:
          - paragraph [ref=e65]: ✅ 100%
          - paragraph [ref=e66]: Free & Non-partisan
      - generic [ref=e68]:
        - heading "Explore ElectEd Features" [level=2] [ref=e69]
        - generic [ref=e70]:
          - link "AI Chat Assistant Ask any election question and get instant, clear, non-partisan answers Explore" [ref=e71] [cursor=pointer]:
            - /url: /chat
            - generic [ref=e72]:
              - paragraph [ref=e73]: 🤖
              - heading "AI Chat Assistant" [level=3] [ref=e74]
              - paragraph [ref=e75]: Ask any election question and get instant, clear, non-partisan answers
              - paragraph [ref=e76]:
                - text: Explore
                - img [ref=e77]
          - link "Interactive Timeline Explore every phase of the election process from announcement to results Explore" [ref=e79] [cursor=pointer]:
            - /url: /timeline
            - generic [ref=e80]:
              - paragraph [ref=e81]: 🗓️
              - heading "Interactive Timeline" [level=3] [ref=e82]
              - paragraph [ref=e83]: Explore every phase of the election process from announcement to results
              - paragraph [ref=e84]:
                - text: Explore
                - img [ref=e85]
          - link "Step-by-Step Guide First time voter? We'll walk you through every step from registration to casting your vote Explore" [ref=e87] [cursor=pointer]:
            - /url: /steps
            - generic [ref=e88]:
              - paragraph [ref=e89]: 👣
              - heading "Step-by-Step Guide" [level=3] [ref=e90]
              - paragraph [ref=e91]: First time voter? We'll walk you through every step from registration to casting your vote
              - paragraph [ref=e92]:
                - text: Explore
                - img [ref=e93]
          - link "Knowledge Quiz Test your election knowledge with our interactive quizzes across multiple difficulty levels Explore" [ref=e95] [cursor=pointer]:
            - /url: /quiz
            - generic [ref=e96]:
              - paragraph [ref=e97]: 🧠
              - heading "Knowledge Quiz" [level=3] [ref=e98]
              - paragraph [ref=e99]: Test your election knowledge with our interactive quizzes across multiple difficulty levels
              - paragraph [ref=e100]:
                - text: Explore
                - img [ref=e101]
          - link "Election Glossary Look up any election term with simple, clear definitions and AI explanations Explore" [ref=e103] [cursor=pointer]:
            - /url: /glossary
            - generic [ref=e104]:
              - paragraph [ref=e105]: 📖
              - heading "Election Glossary" [level=3] [ref=e106]
              - paragraph [ref=e107]: Look up any election term with simple, clear definitions and AI explanations
              - paragraph [ref=e108]:
                - text: Explore
                - img [ref=e109]
          - link "Compare Systems Explore how different countries conduct their elections and compare systems Explore" [ref=e111] [cursor=pointer]:
            - /url: /compare
            - generic [ref=e112]:
              - paragraph [ref=e113]: 🌍
              - heading "Compare Systems" [level=3] [ref=e114]
              - paragraph [ref=e115]: Explore how different countries conduct their elections and compare systems
              - paragraph [ref=e116]:
                - text: Explore
                - img [ref=e117]
      - generic [ref=e120]:
        - heading "How It Works" [level=2] [ref=e121]
        - generic [ref=e122]:
          - generic [ref=e123]:
            - paragraph [ref=e124]: Step 1
            - paragraph [ref=e125]: Choose a topic you want to learn about
          - generic [ref=e126]:
            - paragraph [ref=e127]: Step 2
            - paragraph [ref=e128]: Explore interactive content and AI explanations
          - generic [ref=e129]:
            - paragraph [ref=e130]: Step 3
            - paragraph [ref=e131]: Test your knowledge with quizzes
      - generic [ref=e133]:
        - heading "What Learners Say" [level=2] [ref=e134]
        - generic [ref=e135]:
          - blockquote [ref=e136]: "\"Finally understood how EVM works!\" — First-time voter"
          - blockquote [ref=e137]: "\"The timeline feature is brilliant\" — College student"
          - blockquote [ref=e138]: "\"Great resource for teaching civics\" — Teacher"
  - contentinfo [ref=e139]:
    - generic [ref=e140]:
      - generic [ref=e141]:
        - generic [ref=e142]:
          - heading "ElectEd" [level=2] [ref=e143]
          - paragraph [ref=e144]: Election learning made simple, interactive, and non-partisan.
        - navigation "Footer navigation" [ref=e145]:
          - heading "Links" [level=3] [ref=e146]
          - list [ref=e147]:
            - listitem [ref=e148]:
              - link "Home" [ref=e149] [cursor=pointer]:
                - /url: /
            - listitem [ref=e150]:
              - link "Chat" [ref=e151] [cursor=pointer]:
                - /url: /chat
            - listitem [ref=e152]:
              - link "Timeline" [ref=e153] [cursor=pointer]:
                - /url: /timeline
            - listitem [ref=e154]:
              - link "Steps" [ref=e155] [cursor=pointer]:
                - /url: /steps
            - listitem [ref=e156]:
              - link "Quiz" [ref=e157] [cursor=pointer]:
                - /url: /quiz
            - listitem [ref=e158]:
              - link "Glossary" [ref=e159] [cursor=pointer]:
                - /url: /glossary
        - generic [ref=e160]:
          - paragraph [ref=e161]: ElectEd is a non-partisan educational platform. We do not support any political party or candidate.
          - paragraph [ref=e162]: "Data source: Election Commission of India"
      - generic [ref=e163]:
        - paragraph [ref=e164]: © 2026 ElectEd. All rights reserved.
        - paragraph [ref=e165]: Built for civic education
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
     |             ^ Error: WCAG violations on Home:
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