# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.ts >> Compare page — zero critical WCAG violations
- Location: tests\e2e\accessibility.spec.ts:15:3

# Error details

```
Error: WCAG violations on Compare:
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
        - heading "How Different Countries Vote" [level=1] [ref=e37]
        - paragraph [ref=e38]: Explore and compare election systems worldwide
      - generic [ref=e39]:
        - generic [ref=e40]:
          - article [ref=e41]:
            - generic [ref=e42]:
              - heading "INDIA" [level=2] [ref=e43]:
                - generic [ref=e44]: 🇮🇳
                - text: INDIA
              - button "Compare" [ref=e45]
            - generic [ref=e46]:
              - paragraph [ref=e47]:
                - strong [ref=e48]: "System:"
                - text: First Past The Post (FPTP)
              - paragraph [ref=e49]:
                - strong [ref=e50]: "Legislature:"
                - text: Bicameral (Lok Sabha + Rajya Sabha)
              - paragraph [ref=e51]:
                - strong [ref=e52]: "Voting Age:"
                - text: "18"
              - paragraph [ref=e53]:
                - strong [ref=e54]: "Frequency:"
                - text: Every 5 years
              - paragraph [ref=e55]:
                - strong [ref=e56]: "Unique Feature:"
                - text: World's largest democracy, Electronic Voting Machines (EVM)
              - paragraph [ref=e57]:
                - strong [ref=e58]: "Voter Turnout:"
                - text: ~67%
              - paragraph [ref=e59]:
                - strong [ref=e60]: "Total Constituencies:"
                - text: 543 (Lok Sabha)
          - article [ref=e61]:
            - generic [ref=e62]:
              - heading "USA" [level=2] [ref=e63]:
                - generic [ref=e64]: 🇺🇸
                - text: USA
              - button "Compare" [ref=e65]
            - generic [ref=e66]:
              - paragraph [ref=e67]:
                - strong [ref=e68]: "System:"
                - text: Electoral College + FPTP
              - paragraph [ref=e69]:
                - strong [ref=e70]: "Legislature:"
                - text: Bicameral (Senate + House)
              - paragraph [ref=e71]:
                - strong [ref=e72]: "Voting Age:"
                - text: "18"
              - paragraph [ref=e73]:
                - strong [ref=e74]: "Frequency:"
                - text: Every 4 years (Presidential)
              - paragraph [ref=e75]:
                - strong [ref=e76]: "Unique Feature:"
                - text: Electoral College system, Primaries before general election
              - paragraph [ref=e77]:
                - strong [ref=e78]: "Voter Turnout:"
                - text: ~60%
          - article [ref=e79]:
            - generic [ref=e80]:
              - heading "UK" [level=2] [ref=e81]:
                - generic [ref=e82]: 🇬🇧
                - text: UK
              - button "Compare" [ref=e83]
            - generic [ref=e84]:
              - paragraph [ref=e85]:
                - strong [ref=e86]: "System:"
                - text: First Past The Post
              - paragraph [ref=e87]:
                - strong [ref=e88]: "Legislature:"
                - text: Bicameral (Lords + Commons)
              - paragraph [ref=e89]:
                - strong [ref=e90]: "Voting Age:"
                - text: "18"
              - paragraph [ref=e91]:
                - strong [ref=e92]: "Frequency:"
                - text: Every 5 years (max)
              - paragraph [ref=e93]:
                - strong [ref=e94]: "Unique Feature:"
                - text: Monarchy as head of state, PM is leader of majority party
              - paragraph [ref=e95]:
                - strong [ref=e96]: "Voter Turnout:"
                - text: ~67%
          - article [ref=e97]:
            - generic [ref=e98]:
              - heading "GERMANY" [level=2] [ref=e99]:
                - generic [ref=e100]: 🇩🇪
                - text: GERMANY
              - button "Compare" [ref=e101]
            - generic [ref=e102]:
              - paragraph [ref=e103]:
                - strong [ref=e104]: "System:"
                - text: Mixed Member Proportional
              - paragraph [ref=e105]:
                - strong [ref=e106]: "Legislature:"
                - text: Bicameral (Bundesrat + Bundestag)
              - paragraph [ref=e107]:
                - strong [ref=e108]: "Voting Age:"
                - text: "18"
              - paragraph [ref=e109]:
                - strong [ref=e110]: "Frequency:"
                - text: Every 4 years
              - paragraph [ref=e111]:
                - strong [ref=e112]: "Unique Feature:"
                - text: Two votes per voter — one for candidate, one for party
              - paragraph [ref=e113]:
                - strong [ref=e114]: "Voter Turnout:"
                - text: ~76%
          - article [ref=e115]:
            - generic [ref=e116]:
              - heading "AUSTRALIA" [level=2] [ref=e117]:
                - generic [ref=e118]: 🇦🇺
                - text: AUSTRALIA
              - button "Compare" [ref=e119]
            - generic [ref=e120]:
              - paragraph [ref=e121]:
                - strong [ref=e122]: "System:"
                - text: Preferential Voting (Instant Runoff)
              - paragraph [ref=e123]:
                - strong [ref=e124]: "Legislature:"
                - text: Bicameral
              - paragraph [ref=e125]:
                - strong [ref=e126]: "Voting Age:"
                - text: "18"
              - paragraph [ref=e127]:
                - strong [ref=e128]: "Frequency:"
                - text: Every 3 years
              - paragraph [ref=e129]:
                - strong [ref=e130]: "Unique Feature:"
                - text: Compulsory voting — fined if you don't vote!
              - paragraph [ref=e131]:
                - strong [ref=e132]: "Voter Turnout:"
                - text: ~90%
          - article [ref=e133]:
            - generic [ref=e134]:
              - heading "SOUTH AFRICA" [level=2] [ref=e135]:
                - generic [ref=e136]: 🇿🇦
                - text: SOUTH AFRICA
              - button "Compare" [ref=e137]
            - generic [ref=e138]:
              - paragraph [ref=e139]:
                - strong [ref=e140]: "System:"
                - text: Proportional Representation
              - paragraph [ref=e141]:
                - strong [ref=e142]: "Legislature:"
                - text: Bicameral
              - paragraph [ref=e143]:
                - strong [ref=e144]: "Voting Age:"
                - text: "18"
              - paragraph [ref=e145]:
                - strong [ref=e146]: "Frequency:"
                - text: Every 5 years
              - paragraph [ref=e147]:
                - strong [ref=e148]: "Unique Feature:"
                - text: Voters vote for party not candidate, parties allocate seats proportionally
              - paragraph [ref=e149]:
                - strong [ref=e150]: "Voter Turnout:"
                - text: ~66%
        - generic [ref=e151]:
          - heading "Comparison Table" [level=3] [ref=e152]
          - paragraph [ref=e153]: Select 2-3 countries above to compare side by side.
          - paragraph [ref=e154]: Choose at least two countries to enable comparison.
        - generic [ref=e155]:
          - heading "Pros & Cons" [level=3] [ref=e156]
          - generic [ref=e157]:
            - generic [ref=e158]:
              - heading "FPTP" [level=4] [ref=e159]
              - paragraph [ref=e160]:
                - strong [ref=e161]: "Pros:"
                - text: Simple, strong majority governments
              - paragraph [ref=e162]:
                - strong [ref=e163]: "Cons:"
                - text: Votes can be wasted, minority parties underrepresented
            - generic [ref=e164]:
              - heading "Proportional Representation" [level=4] [ref=e165]
              - paragraph [ref=e166]:
                - strong [ref=e167]: "Pros:"
                - text: Fair representation, fewer wasted votes
              - paragraph [ref=e168]:
                - strong [ref=e169]: "Cons:"
                - text: Coalition governments, complex calculation
            - generic [ref=e170]:
              - heading "Mixed System" [level=4] [ref=e171]
              - paragraph [ref=e172]:
                - strong [ref=e173]: "Pros:"
                - text: Balance of both systems
              - paragraph [ref=e174]:
                - strong [ref=e175]: "Cons:"
                - text: Complex to understand
        - button "Ask AI" [ref=e177]
  - contentinfo [ref=e178]:
    - generic [ref=e179]:
      - generic [ref=e180]:
        - generic [ref=e181]:
          - heading "ElectEd" [level=2] [ref=e182]
          - paragraph [ref=e183]: Election learning made simple, interactive, and non-partisan.
        - navigation "Footer navigation" [ref=e184]:
          - heading "Links" [level=3] [ref=e185]
          - list [ref=e186]:
            - listitem [ref=e187]:
              - link "Home" [ref=e188] [cursor=pointer]:
                - /url: /
            - listitem [ref=e189]:
              - link "Chat" [ref=e190] [cursor=pointer]:
                - /url: /chat
            - listitem [ref=e191]:
              - link "Timeline" [ref=e192] [cursor=pointer]:
                - /url: /timeline
            - listitem [ref=e193]:
              - link "Steps" [ref=e194] [cursor=pointer]:
                - /url: /steps
            - listitem [ref=e195]:
              - link "Quiz" [ref=e196] [cursor=pointer]:
                - /url: /quiz
            - listitem [ref=e197]:
              - link "Glossary" [ref=e198] [cursor=pointer]:
                - /url: /glossary
        - generic [ref=e199]:
          - paragraph [ref=e200]: ElectEd is a non-partisan educational platform. We do not support any political party or candidate.
          - paragraph [ref=e201]: "Data source: Election Commission of India"
      - generic [ref=e202]:
        - paragraph [ref=e203]: © 2026 ElectEd. All rights reserved.
        - paragraph [ref=e204]: Built for civic education
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
     |             ^ Error: WCAG violations on Compare:
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