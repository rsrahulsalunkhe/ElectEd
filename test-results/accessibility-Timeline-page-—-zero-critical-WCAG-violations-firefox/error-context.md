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
        - generic [ref=e14]: ElectEd
      - navigation "Main navigation" [ref=e15]:
        - link "Chat with our AI election guide" [ref=e16] [cursor=pointer]:
          - /url: /chat
          - text: AI Assistant
        - link "Election timeline visualizer" [ref=e17] [cursor=pointer]:
          - /url: /timeline
          - text: Timeline
        - link "Step-by-step voting guide" [ref=e19] [cursor=pointer]:
          - /url: /steps
          - text: Voting Steps
        - link "Test your election knowledge" [ref=e20] [cursor=pointer]:
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
        - heading "Election Timeline" [level=1] [ref=e40]
        - paragraph [ref=e41]: Interactive election timeline visualizer with country-specific phases, action filters, active-phase simulation, and key date calculations.
      - generic [ref=e42]:
        - generic [ref=e43]:
          - generic [ref=e44]:
            - generic [ref=e45]:
              - text: Country
              - combobox "Select country timeline" [ref=e46]:
                - option "India" [selected]
                - option "USA"
                - option "UK"
                - option "Australia"
            - generic [ref=e47]:
              - paragraph [ref=e48]: Filter Actions
              - generic [ref=e49]:
                - button "All" [ref=e50]
                - button "Voter Actions Only" [ref=e51]
                - button "Official Actions Only" [ref=e52]
            - generic [ref=e53]:
              - text: Active Phase Simulation
              - combobox "Set active timeline phase" [ref=e54]:
                - 'option "Phase 1: Announcement" [selected]'
                - 'option "Phase 2: Nomination"'
                - 'option "Phase 3: Campaign"'
                - 'option "Phase 4: Voting Day"'
                - 'option "Phase 5: Counting"'
                - 'option "Phase 6: Results & Government"'
          - generic [ref=e55]:
            - generic [ref=e56]:
              - generic [ref=e57]: Timeline Progress
              - generic [ref=e58]: 17%
            - progressbar [ref=e59]
        - generic [ref=e61]:
          - heading "Timeline Overview" [level=2] [ref=e62]
          - generic "Horizontal election timeline" [ref=e63]:
            - list "Election timeline phases" [ref=e64]:
              - listitem [ref=e65]:
                - button "Phase 1 Announcement Day 0 Active Election schedule is formally released by Election Commission of India (ECI)." [expanded] [ref=e66]:
                  - generic [ref=e67]:
                    - generic [ref=e68]:
                      - paragraph [ref=e69]: Phase 1
                      - heading "Announcement" [level=3] [ref=e70]:
                        - generic [ref=e71]: 📢
                        - text: Announcement
                      - paragraph [ref=e72]: Day 0
                    - generic [ref=e73]: Active
                  - paragraph [ref=e74]: Election schedule is formally released by Election Commission of India (ECI).
                - generic [ref=e75]:
                  - generic [ref=e76]:
                    - paragraph [ref=e77]: Key Activities
                    - list [ref=e78]:
                      - listitem [ref=e79]: Election date announced by Election Commission of India (ECI)
                      - listitem [ref=e81]: Model Code of Conduct comes into effect
                      - listitem [ref=e83]: Official election schedule is published
                  - generic [ref=e85]:
                    - paragraph [ref=e86]: Who Is Involved
                    - paragraph [ref=e87]: Election Commission of India (ECI), Political parties, Media
                  - generic [ref=e88]:
                    - paragraph [ref=e89]: Rules And Regulations
                    - list [ref=e90]:
                      - listitem [ref=e91]: "- Code of Conduct enforcement starts"
                      - listitem [ref=e92]: "- Campaign communication restrictions begin"
                  - button "Learn More In AI Chat" [ref=e93]
              - listitem [ref=e94]:
                - button "Phase 2 Nomination Day 1-14 Candidates enter the race and eligibility is validated." [ref=e95]:
                  - generic [ref=e97]:
                    - paragraph [ref=e98]: Phase 2
                    - heading "Nomination" [level=3] [ref=e99]:
                      - generic [ref=e100]: 📝
                      - text: Nomination
                    - paragraph [ref=e101]: Day 1-14
                  - paragraph [ref=e102]: Candidates enter the race and eligibility is validated.
              - listitem [ref=e103]:
                - button "Phase 3 Campaign Day 7-28 Public communication and voter outreach are at peak activity." [ref=e104]:
                  - generic [ref=e106]:
                    - paragraph [ref=e107]: Phase 3
                    - heading "Campaign" [level=3] [ref=e108]:
                      - generic [ref=e109]: 🗣️
                      - text: Campaign
                    - paragraph [ref=e110]: Day 7-28
                  - paragraph [ref=e111]: Public communication and voter outreach are at peak activity.
              - listitem [ref=e112]:
                - button "Phase 4 Voting Day Day 30 Polling takes place and ballots are securely captured using EVM with VVPAT." [ref=e113]:
                  - generic [ref=e115]:
                    - paragraph [ref=e116]: Phase 4
                    - heading "Voting Day" [level=3] [ref=e117]:
                      - generic [ref=e118]: 🗳️
                      - text: Voting Day
                    - paragraph [ref=e119]: Day 30
                  - paragraph [ref=e120]: Polling takes place and ballots are securely captured using EVM with VVPAT.
              - listitem [ref=e121]:
                - button "Phase 5 Counting Day 33-35 Ballots are counted under supervision and results are progressively published." [ref=e122]:
                  - generic [ref=e124]:
                    - paragraph [ref=e125]: Phase 5
                    - heading "Counting" [level=3] [ref=e126]:
                      - generic [ref=e127]: 🔢
                      - text: Counting
                    - paragraph [ref=e128]: Day 33-35
                  - paragraph [ref=e129]: Ballots are counted under supervision and results are progressively published.
              - listitem [ref=e130]:
                - button "Phase 6 Results & Government Day 35-45 Official notifications are issued and government formation follows constitutional rules." [ref=e131]:
                  - generic [ref=e133]:
                    - paragraph [ref=e134]: Phase 6
                    - heading "Results & Government" [level=3] [ref=e135]:
                      - generic [ref=e136]: 🏛️
                      - text: Results & Government
                    - paragraph [ref=e137]: Day 35-45
                  - paragraph [ref=e138]: Official notifications are issued and government formation follows constitutional rules.
        - generic [ref=e139]:
          - heading "Key Dates Calculator" [level=2] [ref=e140]
          - paragraph [ref=e141]: Enter the election day date and the app will calculate each timeline phase window.
          - generic [ref=e142]:
            - generic [ref=e143]:
              - text: Election Date
              - textbox "Election Date" [ref=e144]
            - button "Print Checklist" [ref=e145]
          - paragraph [ref=e147]: Select an election date to generate the checklist.
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