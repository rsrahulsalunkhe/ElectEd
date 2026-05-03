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
        - link "Election terms dictionary" [ref=e20] [cursor=pointer]:
          - /url: /glossary
          - text: Glossary
        - link "Compare election systems worldwide" [ref=e21] [cursor=pointer]:
          - /url: /compare
          - text: Compare
      - generic [ref=e22]:
        - 'button "Language: English. Click to change." [ref=e24]':
          - img [ref=e25]
          - generic [ref=e29]: English
        - button "Sign in with Google to save progress" [ref=e30]:
          - img [ref=e31]
          - generic [ref=e35]: Sign in
  - main [ref=e36]:
    - generic [ref=e37]:
      - generic [ref=e39]:
        - generic [ref=e40]:
          - heading "Understand Your Vote. Shape Your Future." [level=1] [ref=e41]
          - paragraph [ref=e42]: ElectEd makes learning about elections simple, interactive and engaging for every citizen
          - generic [ref=e43]:
            - link "Ask AI Assistant" [ref=e44] [cursor=pointer]:
              - /url: /chat
              - button "Ask AI Assistant" [ref=e45]:
                - img [ref=e47]
                - text: Ask AI Assistant
            - link "Start Learning" [ref=e49] [cursor=pointer]:
              - /url: /steps
              - button "Start Learning" [ref=e50]
        - generic [ref=e53]:
          - paragraph [ref=e54]: 🧑‍💼🗳️
          - paragraph [ref=e55]: Indian voter with ballot
      - generic [ref=e57]:
        - generic [ref=e58]:
          - paragraph [ref=e59]: 🗳️ 970 Million+
          - paragraph [ref=e60]: Eligible Voters in India
        - generic [ref=e61]:
          - paragraph [ref=e62]: 🏛️ 543
          - paragraph [ref=e63]: Lok Sabha Constituencies
        - generic [ref=e64]:
          - paragraph [ref=e65]: 📅 5 years
          - paragraph [ref=e66]: Elections cycle
        - generic [ref=e67]:
          - paragraph [ref=e68]: ✅ 100%
          - paragraph [ref=e69]: Free & Non-partisan
      - generic [ref=e71]:
        - heading "Explore ElectEd Features" [level=2] [ref=e72]
        - generic [ref=e73]:
          - link "AI Chat Assistant Ask any election question and get instant, clear, non-partisan answers Explore" [ref=e74] [cursor=pointer]:
            - /url: /chat
            - generic [ref=e75]:
              - paragraph [ref=e76]: 🤖
              - heading "AI Chat Assistant" [level=3] [ref=e77]
              - paragraph [ref=e78]: Ask any election question and get instant, clear, non-partisan answers
              - paragraph [ref=e79]:
                - text: Explore
                - img [ref=e80]
          - link "Interactive Timeline Explore every phase of the election process from announcement to results Explore" [ref=e83] [cursor=pointer]:
            - /url: /timeline
            - generic [ref=e84]:
              - paragraph [ref=e85]: 🗓️
              - heading "Interactive Timeline" [level=3] [ref=e86]
              - paragraph [ref=e87]: Explore every phase of the election process from announcement to results
              - paragraph [ref=e88]:
                - text: Explore
                - img [ref=e89]
          - link "Step-by-Step Guide First time voter? We'll walk you through every step from registration to casting your vote Explore" [ref=e92] [cursor=pointer]:
            - /url: /steps
            - generic [ref=e93]:
              - paragraph [ref=e94]: 👣
              - heading "Step-by-Step Guide" [level=3] [ref=e95]
              - paragraph [ref=e96]: First time voter? We'll walk you through every step from registration to casting your vote
              - paragraph [ref=e97]:
                - text: Explore
                - img [ref=e98]
          - link "Knowledge Quiz Test your election knowledge with our interactive quizzes across multiple difficulty levels Explore" [ref=e101] [cursor=pointer]:
            - /url: /quiz
            - generic [ref=e102]:
              - paragraph [ref=e103]: 🧠
              - heading "Knowledge Quiz" [level=3] [ref=e104]
              - paragraph [ref=e105]: Test your election knowledge with our interactive quizzes across multiple difficulty levels
              - paragraph [ref=e106]:
                - text: Explore
                - img [ref=e107]
          - link "Election Glossary Look up any election term with simple, clear definitions and AI explanations Explore" [ref=e110] [cursor=pointer]:
            - /url: /glossary
            - generic [ref=e111]:
              - paragraph [ref=e112]: 📖
              - heading "Election Glossary" [level=3] [ref=e113]
              - paragraph [ref=e114]: Look up any election term with simple, clear definitions and AI explanations
              - paragraph [ref=e115]:
                - text: Explore
                - img [ref=e116]
          - link "Compare Systems Explore how different countries conduct their elections and compare systems Explore" [ref=e119] [cursor=pointer]:
            - /url: /compare
            - generic [ref=e120]:
              - paragraph [ref=e121]: 🌍
              - heading "Compare Systems" [level=3] [ref=e122]
              - paragraph [ref=e123]: Explore how different countries conduct their elections and compare systems
              - paragraph [ref=e124]:
                - text: Explore
                - img [ref=e125]
      - generic [ref=e129]:
        - heading "How It Works" [level=2] [ref=e130]
        - generic [ref=e131]:
          - generic [ref=e132]:
            - paragraph [ref=e133]: Step 1
            - paragraph [ref=e134]: Choose a topic you want to learn about
          - generic [ref=e135]:
            - paragraph [ref=e136]: Step 2
            - paragraph [ref=e137]: Explore interactive content and AI explanations
          - generic [ref=e138]:
            - paragraph [ref=e139]: Step 3
            - paragraph [ref=e140]: Test your knowledge with quizzes
      - generic [ref=e142]:
        - heading "What Learners Say" [level=2] [ref=e143]
        - generic [ref=e144]:
          - blockquote [ref=e145]: "\"Finally understood how EVM works!\" — First-time voter"
          - blockquote [ref=e146]: "\"The timeline feature is brilliant\" — College student"
          - blockquote [ref=e147]: "\"Great resource for teaching civics\" — Teacher"
  - contentinfo [ref=e148]:
    - generic [ref=e149]:
      - generic [ref=e150]:
        - generic [ref=e151]:
          - heading "ElectEd" [level=2] [ref=e152]
          - paragraph [ref=e153]: Election learning made simple, interactive, and non-partisan.
        - navigation "Footer navigation" [ref=e154]:
          - heading "Links" [level=3] [ref=e155]
          - list [ref=e156]:
            - listitem [ref=e157]:
              - link "Home" [ref=e158] [cursor=pointer]:
                - /url: /
            - listitem [ref=e159]:
              - link "Chat" [ref=e160] [cursor=pointer]:
                - /url: /chat
            - listitem [ref=e161]:
              - link "Timeline" [ref=e162] [cursor=pointer]:
                - /url: /timeline
            - listitem [ref=e163]:
              - link "Steps" [ref=e164] [cursor=pointer]:
                - /url: /steps
            - listitem [ref=e165]:
              - link "Quiz" [ref=e166] [cursor=pointer]:
                - /url: /quiz
            - listitem [ref=e167]:
              - link "Glossary" [ref=e168] [cursor=pointer]:
                - /url: /glossary
        - generic [ref=e169]:
          - paragraph [ref=e170]: ElectEd is a non-partisan educational platform. We do not support any political party or candidate.
          - paragraph [ref=e171]: "Data source: Election Commission of India"
      - generic [ref=e172]:
        - paragraph [ref=e173]: © 2026 ElectEd. All rights reserved.
        - paragraph [ref=e174]: Built for civic education
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