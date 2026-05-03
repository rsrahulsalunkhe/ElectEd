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
        - heading "How Different Countries Vote" [level=1] [ref=e40]
        - paragraph [ref=e41]: Explore and compare election systems worldwide
      - generic [ref=e42]:
        - generic [ref=e43]:
          - article [ref=e44]:
            - generic [ref=e45]:
              - heading "INDIA" [level=2] [ref=e46]:
                - generic [ref=e47]: 🇮🇳
                - text: INDIA
              - button "Compare" [ref=e48]
            - generic [ref=e49]:
              - paragraph [ref=e50]:
                - strong [ref=e51]: "System:"
                - text: First Past The Post (FPTP)
              - paragraph [ref=e52]:
                - strong [ref=e53]: "Legislature:"
                - text: Bicameral (Lok Sabha + Rajya Sabha)
              - paragraph [ref=e54]:
                - strong [ref=e55]: "Voting Age:"
                - text: "18"
              - paragraph [ref=e56]:
                - strong [ref=e57]: "Frequency:"
                - text: Every 5 years
              - paragraph [ref=e58]:
                - strong [ref=e59]: "Unique Feature:"
                - text: World's largest democracy, Electronic Voting Machines (EVM)
              - paragraph [ref=e60]:
                - strong [ref=e61]: "Voter Turnout:"
                - text: ~67%
              - paragraph [ref=e62]:
                - strong [ref=e63]: "Total Constituencies:"
                - text: 543 (Lok Sabha)
          - article [ref=e64]:
            - generic [ref=e65]:
              - heading "USA" [level=2] [ref=e66]:
                - generic [ref=e67]: 🇺🇸
                - text: USA
              - button "Compare" [ref=e68]
            - generic [ref=e69]:
              - paragraph [ref=e70]:
                - strong [ref=e71]: "System:"
                - text: Electoral College + FPTP
              - paragraph [ref=e72]:
                - strong [ref=e73]: "Legislature:"
                - text: Bicameral (Senate + House)
              - paragraph [ref=e74]:
                - strong [ref=e75]: "Voting Age:"
                - text: "18"
              - paragraph [ref=e76]:
                - strong [ref=e77]: "Frequency:"
                - text: Every 4 years (Presidential)
              - paragraph [ref=e78]:
                - strong [ref=e79]: "Unique Feature:"
                - text: Electoral College system, Primaries before general election
              - paragraph [ref=e80]:
                - strong [ref=e81]: "Voter Turnout:"
                - text: ~60%
          - article [ref=e82]:
            - generic [ref=e83]:
              - heading "UK" [level=2] [ref=e84]:
                - generic [ref=e85]: 🇬🇧
                - text: UK
              - button "Compare" [ref=e86]
            - generic [ref=e87]:
              - paragraph [ref=e88]:
                - strong [ref=e89]: "System:"
                - text: First Past The Post
              - paragraph [ref=e90]:
                - strong [ref=e91]: "Legislature:"
                - text: Bicameral (Lords + Commons)
              - paragraph [ref=e92]:
                - strong [ref=e93]: "Voting Age:"
                - text: "18"
              - paragraph [ref=e94]:
                - strong [ref=e95]: "Frequency:"
                - text: Every 5 years (max)
              - paragraph [ref=e96]:
                - strong [ref=e97]: "Unique Feature:"
                - text: Monarchy as head of state, PM is leader of majority party
              - paragraph [ref=e98]:
                - strong [ref=e99]: "Voter Turnout:"
                - text: ~67%
          - article [ref=e100]:
            - generic [ref=e101]:
              - heading "GERMANY" [level=2] [ref=e102]:
                - generic [ref=e103]: 🇩🇪
                - text: GERMANY
              - button "Compare" [ref=e104]
            - generic [ref=e105]:
              - paragraph [ref=e106]:
                - strong [ref=e107]: "System:"
                - text: Mixed Member Proportional
              - paragraph [ref=e108]:
                - strong [ref=e109]: "Legislature:"
                - text: Bicameral (Bundesrat + Bundestag)
              - paragraph [ref=e110]:
                - strong [ref=e111]: "Voting Age:"
                - text: "18"
              - paragraph [ref=e112]:
                - strong [ref=e113]: "Frequency:"
                - text: Every 4 years
              - paragraph [ref=e114]:
                - strong [ref=e115]: "Unique Feature:"
                - text: Two votes per voter — one for candidate, one for party
              - paragraph [ref=e116]:
                - strong [ref=e117]: "Voter Turnout:"
                - text: ~76%
          - article [ref=e118]:
            - generic [ref=e119]:
              - heading "AUSTRALIA" [level=2] [ref=e120]:
                - generic [ref=e121]: 🇦🇺
                - text: AUSTRALIA
              - button "Compare" [ref=e122]
            - generic [ref=e123]:
              - paragraph [ref=e124]:
                - strong [ref=e125]: "System:"
                - text: Preferential Voting (Instant Runoff)
              - paragraph [ref=e126]:
                - strong [ref=e127]: "Legislature:"
                - text: Bicameral
              - paragraph [ref=e128]:
                - strong [ref=e129]: "Voting Age:"
                - text: "18"
              - paragraph [ref=e130]:
                - strong [ref=e131]: "Frequency:"
                - text: Every 3 years
              - paragraph [ref=e132]:
                - strong [ref=e133]: "Unique Feature:"
                - text: Compulsory voting — fined if you don't vote!
              - paragraph [ref=e134]:
                - strong [ref=e135]: "Voter Turnout:"
                - text: ~90%
          - article [ref=e136]:
            - generic [ref=e137]:
              - heading "SOUTH AFRICA" [level=2] [ref=e138]:
                - generic [ref=e139]: 🇿🇦
                - text: SOUTH AFRICA
              - button "Compare" [ref=e140]
            - generic [ref=e141]:
              - paragraph [ref=e142]:
                - strong [ref=e143]: "System:"
                - text: Proportional Representation
              - paragraph [ref=e144]:
                - strong [ref=e145]: "Legislature:"
                - text: Bicameral
              - paragraph [ref=e146]:
                - strong [ref=e147]: "Voting Age:"
                - text: "18"
              - paragraph [ref=e148]:
                - strong [ref=e149]: "Frequency:"
                - text: Every 5 years
              - paragraph [ref=e150]:
                - strong [ref=e151]: "Unique Feature:"
                - text: Voters vote for party not candidate, parties allocate seats proportionally
              - paragraph [ref=e152]:
                - strong [ref=e153]: "Voter Turnout:"
                - text: ~66%
        - generic [ref=e154]:
          - heading "Comparison Table" [level=3] [ref=e155]
          - paragraph [ref=e156]: Select 2-3 countries above to compare side by side.
          - paragraph [ref=e157]: Choose at least two countries to enable comparison.
        - generic [ref=e158]:
          - heading "Pros & Cons" [level=3] [ref=e159]
          - generic [ref=e160]:
            - generic [ref=e161]:
              - heading "FPTP" [level=4] [ref=e162]
              - paragraph [ref=e163]:
                - strong [ref=e164]: "Pros:"
                - text: Simple, strong majority governments
              - paragraph [ref=e165]:
                - strong [ref=e166]: "Cons:"
                - text: Votes can be wasted, minority parties underrepresented
            - generic [ref=e167]:
              - heading "Proportional Representation" [level=4] [ref=e168]
              - paragraph [ref=e169]:
                - strong [ref=e170]: "Pros:"
                - text: Fair representation, fewer wasted votes
              - paragraph [ref=e171]:
                - strong [ref=e172]: "Cons:"
                - text: Coalition governments, complex calculation
            - generic [ref=e173]:
              - heading "Mixed System" [level=4] [ref=e174]
              - paragraph [ref=e175]:
                - strong [ref=e176]: "Pros:"
                - text: Balance of both systems
              - paragraph [ref=e177]:
                - strong [ref=e178]: "Cons:"
                - text: Complex to understand
        - button "Ask AI" [ref=e180]
  - contentinfo [ref=e181]:
    - generic [ref=e182]:
      - generic [ref=e183]:
        - generic [ref=e184]:
          - heading "ElectEd" [level=2] [ref=e185]
          - paragraph [ref=e186]: Election learning made simple, interactive, and non-partisan.
        - navigation "Footer navigation" [ref=e187]:
          - heading "Links" [level=3] [ref=e188]
          - list [ref=e189]:
            - listitem [ref=e190]:
              - link "Home" [ref=e191] [cursor=pointer]:
                - /url: /
            - listitem [ref=e192]:
              - link "Chat" [ref=e193] [cursor=pointer]:
                - /url: /chat
            - listitem [ref=e194]:
              - link "Timeline" [ref=e195] [cursor=pointer]:
                - /url: /timeline
            - listitem [ref=e196]:
              - link "Steps" [ref=e197] [cursor=pointer]:
                - /url: /steps
            - listitem [ref=e198]:
              - link "Quiz" [ref=e199] [cursor=pointer]:
                - /url: /quiz
            - listitem [ref=e200]:
              - link "Glossary" [ref=e201] [cursor=pointer]:
                - /url: /glossary
        - generic [ref=e202]:
          - paragraph [ref=e203]: ElectEd is a non-partisan educational platform. We do not support any political party or candidate.
          - paragraph [ref=e204]: "Data source: Election Commission of India"
      - generic [ref=e205]:
        - paragraph [ref=e206]: © 2026 ElectEd. All rights reserved.
        - paragraph [ref=e207]: Built for civic education
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