# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.ts >> Timeline page — zero critical WCAG violations
- Location: tests\e2e\accessibility.spec.ts:15:3

# Error details

```
Error: WCAG violations on Timeline:
[serious] aria-progressbar-name: Ensure every ARIA progressbar node has an accessible name
  → https://dequeuniversity.com/rules/axe/4.11/aria-progressbar-name?application=playwright
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
          - generic [ref=e28]: English
        - button "Sign in with Google to save progress" [ref=e29]:
          - img [ref=e30]
          - generic [ref=e33]: Sign in
  - main [ref=e34]:
    - generic [ref=e35]:
      - generic [ref=e36]:
        - heading "Election Timeline" [level=1] [ref=e37]
        - paragraph [ref=e38]: Interactive election timeline visualizer with country-specific phases, action filters, active-phase simulation, and key date calculations.
      - generic [ref=e39]:
        - generic [ref=e40]:
          - generic [ref=e41]:
            - generic [ref=e42]:
              - text: Country
              - combobox "Select country timeline" [ref=e43]:
                - option "India" [selected]
                - option "USA"
                - option "UK"
                - option "Australia"
            - generic [ref=e44]:
              - paragraph [ref=e45]: Filter Actions
              - generic [ref=e46]:
                - button "All" [ref=e47]
                - button "Voter Actions Only" [ref=e48]
                - button "Official Actions Only" [ref=e49]
            - generic [ref=e50]:
              - text: Active Phase Simulation
              - combobox "Set active timeline phase" [ref=e51]:
                - 'option "Phase 1: Announcement" [selected]'
                - 'option "Phase 2: Nomination"'
                - 'option "Phase 3: Campaign"'
                - 'option "Phase 4: Voting Day"'
                - 'option "Phase 5: Counting"'
                - 'option "Phase 6: Results & Government"'
          - generic [ref=e52]:
            - generic [ref=e53]:
              - generic [ref=e54]: Timeline Progress
              - generic [ref=e55]: 17%
            - progressbar [ref=e56]
        - generic [ref=e58]:
          - heading "Timeline Overview" [level=2] [ref=e59]
          - generic "Horizontal election timeline" [ref=e60]:
            - list "Election timeline phases" [ref=e61]:
              - listitem [ref=e62]:
                - button "Phase 1 Announcement Day 0 Active Election schedule is formally released by Election Commission of India (ECI)." [expanded] [ref=e63]:
                  - generic [ref=e64]:
                    - generic [ref=e65]:
                      - paragraph [ref=e66]: Phase 1
                      - heading "Announcement" [level=3] [ref=e67]:
                        - generic [ref=e68]: 📢
                        - text: Announcement
                      - paragraph [ref=e69]: Day 0
                    - generic [ref=e70]: Active
                  - paragraph [ref=e71]: Election schedule is formally released by Election Commission of India (ECI).
                - generic [ref=e72]:
                  - generic [ref=e73]:
                    - paragraph [ref=e74]: Key Activities
                    - list [ref=e75]:
                      - listitem [ref=e76]: Election date announced by Election Commission of India (ECI)
                      - listitem [ref=e78]: Model Code of Conduct comes into effect
                      - listitem [ref=e80]: Official election schedule is published
                  - generic [ref=e82]:
                    - paragraph [ref=e83]: Who Is Involved
                    - paragraph [ref=e84]: Election Commission of India (ECI), Political parties, Media
                  - generic [ref=e85]:
                    - paragraph [ref=e86]: Rules And Regulations
                    - list [ref=e87]:
                      - listitem [ref=e88]: "- Code of Conduct enforcement starts"
                      - listitem [ref=e89]: "- Campaign communication restrictions begin"
                  - button "Learn More In AI Chat" [ref=e90]
              - listitem [ref=e91]:
                - button "Phase 2 Nomination Day 1-14 Candidates enter the race and eligibility is validated." [ref=e92]:
                  - generic [ref=e94]:
                    - paragraph [ref=e95]: Phase 2
                    - heading "Nomination" [level=3] [ref=e96]:
                      - generic [ref=e97]: 📝
                      - text: Nomination
                    - paragraph [ref=e98]: Day 1-14
                  - paragraph [ref=e99]: Candidates enter the race and eligibility is validated.
              - listitem [ref=e100]:
                - button "Phase 3 Campaign Day 7-28 Public communication and voter outreach are at peak activity." [ref=e101]:
                  - generic [ref=e103]:
                    - paragraph [ref=e104]: Phase 3
                    - heading "Campaign" [level=3] [ref=e105]:
                      - generic [ref=e106]: 🗣️
                      - text: Campaign
                    - paragraph [ref=e107]: Day 7-28
                  - paragraph [ref=e108]: Public communication and voter outreach are at peak activity.
              - listitem [ref=e109]:
                - button "Phase 4 Voting Day Day 30 Polling takes place and ballots are securely captured using EVM with VVPAT." [ref=e110]:
                  - generic [ref=e112]:
                    - paragraph [ref=e113]: Phase 4
                    - heading "Voting Day" [level=3] [ref=e114]:
                      - generic [ref=e115]: 🗳️
                      - text: Voting Day
                    - paragraph [ref=e116]: Day 30
                  - paragraph [ref=e117]: Polling takes place and ballots are securely captured using EVM with VVPAT.
              - listitem [ref=e118]:
                - button "Phase 5 Counting Day 33-35 Ballots are counted under supervision and results are progressively published." [ref=e119]:
                  - generic [ref=e121]:
                    - paragraph [ref=e122]: Phase 5
                    - heading "Counting" [level=3] [ref=e123]:
                      - generic [ref=e124]: 🔢
                      - text: Counting
                    - paragraph [ref=e125]: Day 33-35
                  - paragraph [ref=e126]: Ballots are counted under supervision and results are progressively published.
              - listitem [ref=e127]:
                - button "Phase 6 Results & Government Day 35-45 Official notifications are issued and government formation follows constitutional rules." [ref=e128]:
                  - generic [ref=e130]:
                    - paragraph [ref=e131]: Phase 6
                    - heading "Results & Government" [level=3] [ref=e132]:
                      - generic [ref=e133]: 🏛️
                      - text: Results & Government
                    - paragraph [ref=e134]: Day 35-45
                  - paragraph [ref=e135]: Official notifications are issued and government formation follows constitutional rules.
        - generic [ref=e136]:
          - heading "Key Dates Calculator" [level=2] [ref=e137]
          - paragraph [ref=e138]: Enter the election day date and the app will calculate each timeline phase window.
          - generic [ref=e139]:
            - generic [ref=e140]:
              - text: Election Date
              - textbox "Election Date" [ref=e141]
            - button "Print Checklist" [ref=e142]
          - paragraph [ref=e144]: Select an election date to generate the checklist.
  - contentinfo [ref=e145]:
    - generic [ref=e146]:
      - generic [ref=e147]:
        - generic [ref=e148]:
          - heading "ElectEd" [level=2] [ref=e149]
          - paragraph [ref=e150]: Election learning made simple, interactive, and non-partisan.
        - navigation "Footer navigation" [ref=e151]:
          - heading "Links" [level=3] [ref=e152]
          - list [ref=e153]:
            - listitem [ref=e154]:
              - link "Home" [ref=e155] [cursor=pointer]:
                - /url: /
            - listitem [ref=e156]:
              - link "Chat" [ref=e157] [cursor=pointer]:
                - /url: /chat
            - listitem [ref=e158]:
              - link "Timeline" [ref=e159] [cursor=pointer]:
                - /url: /timeline
            - listitem [ref=e160]:
              - link "Steps" [ref=e161] [cursor=pointer]:
                - /url: /steps
            - listitem [ref=e162]:
              - link "Quiz" [ref=e163] [cursor=pointer]:
                - /url: /quiz
            - listitem [ref=e164]:
              - link "Glossary" [ref=e165] [cursor=pointer]:
                - /url: /glossary
        - generic [ref=e166]:
          - paragraph [ref=e167]: ElectEd is a non-partisan educational platform. We do not support any political party or candidate.
          - paragraph [ref=e168]: "Data source: Election Commission of India"
      - generic [ref=e169]:
        - paragraph [ref=e170]: © 2026 ElectEd. All rights reserved.
        - paragraph [ref=e171]: Built for civic education
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
     |             ^ Error: WCAG violations on Timeline:
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