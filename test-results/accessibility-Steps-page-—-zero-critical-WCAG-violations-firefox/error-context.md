# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.ts >> Steps page — zero critical WCAG violations
- Location: tests\e2e\accessibility.spec.ts:15:3

# Error details

```
Error: WCAG violations on Steps:
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
        - heading "Your Complete Guide to Voting" [level=1] [ref=e40]
        - paragraph [ref=e41]: From registration to casting your vote — we'll walk you through every step
      - generic [ref=e42]:
        - generic [ref=e43]:
          - generic [ref=e44]:
            - paragraph [ref=e45]: Progress
            - paragraph [ref=e46]: 0/8 steps complete
          - progressbar "Progress" [ref=e47]
          - paragraph [ref=e48]: 0% completed
          - generic [ref=e49]:
            - button "1. ✅ Check Eligibility" [ref=e50]:
              - generic [ref=e51]:
                - generic [ref=e52]: "1."
                - generic [ref=e53]: ✅
              - paragraph [ref=e54]: Check Eligibility
            - button "2. 📋 Register" [ref=e55]:
              - generic [ref=e56]:
                - generic [ref=e57]: "2."
                - generic [ref=e58]: 📋
              - paragraph [ref=e59]: Register
            - button "3. 🪪 Get Voter ID" [ref=e60]:
              - generic [ref=e61]:
                - generic [ref=e62]: "3."
                - generic [ref=e63]: 🪪
              - paragraph [ref=e64]: Get Voter ID
            - button "4. 📍 Find Booth" [ref=e65]:
              - generic [ref=e66]:
                - generic [ref=e67]: "4."
                - generic [ref=e68]: 📍
              - paragraph [ref=e69]: Find Booth
            - button "5. 📅 Prepare" [ref=e70]:
              - generic [ref=e71]:
                - generic [ref=e72]: "5."
                - generic [ref=e73]: 📅
              - paragraph [ref=e74]: Prepare
            - button "6. 🏛️ At Booth" [ref=e75]:
              - generic [ref=e76]:
                - generic [ref=e77]: "6."
                - generic [ref=e78]: 🏛️
              - paragraph [ref=e79]: At Booth
            - button "7. 🗳️ Cast Vote" [ref=e80]:
              - generic [ref=e81]:
                - generic [ref=e82]: "7."
                - generic [ref=e83]: 🗳️
              - paragraph [ref=e84]: Cast Vote
            - button "8. ✊ After Voting" [ref=e85]:
              - generic [ref=e86]:
                - generic [ref=e87]: "8."
                - generic [ref=e88]: ✊
              - paragraph [ref=e89]: After Voting
        - generic [ref=e90]:
          - generic [ref=e91]:
            - generic [ref=e92]: Step 1
            - heading "Am I Eligible to Vote?" [level=2] [ref=e93]:
              - generic [ref=e94]: ✅
              - text: Am I Eligible to Vote?
          - generic [ref=e95]:
            - generic [ref=e97]:
              - list [ref=e98]:
                - listitem [ref=e99]: "- Age requirement (18+ in India)"
                - listitem [ref=e100]: "- Citizenship requirement"
                - listitem [ref=e101]: "- Mental fitness requirement"
                - listitem [ref=e102]: "- Not serving criminal sentence"
              - generic [ref=e103]:
                - paragraph [ref=e104]: Eligibility Checker
                - generic [ref=e105]:
                  - generic [ref=e106]:
                    - text: Age
                    - spinbutton "Age" [ref=e107]
                  - generic [ref=e108]:
                    - text: Indian citizen?
                    - combobox "Indian citizen?" [ref=e109]:
                      - option "Yes" [selected]
                      - option "No"
                - generic [ref=e110]:
                  - checkbox "Mentally fit to vote" [checked] [ref=e111]
                  - text: Mentally fit to vote
                - generic [ref=e112]:
                  - checkbox "Currently serving a criminal sentence" [ref=e113]
                  - text: Currently serving a criminal sentence
            - generic [ref=e114]:
              - generic [ref=e115]:
                - paragraph [ref=e116]: Illustration
                - generic [ref=e117]: ✅
                - paragraph [ref=e118]: "Visual aid for step 1: Check Eligibility"
              - button "Mark Step Completed" [ref=e119]
          - generic [ref=e120]:
            - button "Previous" [disabled] [ref=e121]
            - button "Next" [ref=e122]
            - button "Ask AI About This Step" [ref=e123]
  - contentinfo [ref=e124]:
    - generic [ref=e125]:
      - generic [ref=e126]:
        - generic [ref=e127]:
          - heading "ElectEd" [level=2] [ref=e128]
          - paragraph [ref=e129]: Election learning made simple, interactive, and non-partisan.
        - navigation "Footer navigation" [ref=e130]:
          - heading "Links" [level=3] [ref=e131]
          - list [ref=e132]:
            - listitem [ref=e133]:
              - link "Home" [ref=e134] [cursor=pointer]:
                - /url: /
            - listitem [ref=e135]:
              - link "Chat" [ref=e136] [cursor=pointer]:
                - /url: /chat
            - listitem [ref=e137]:
              - link "Timeline" [ref=e138] [cursor=pointer]:
                - /url: /timeline
            - listitem [ref=e139]:
              - link "Steps" [ref=e140] [cursor=pointer]:
                - /url: /steps
            - listitem [ref=e141]:
              - link "Quiz" [ref=e142] [cursor=pointer]:
                - /url: /quiz
            - listitem [ref=e143]:
              - link "Glossary" [ref=e144] [cursor=pointer]:
                - /url: /glossary
        - generic [ref=e145]:
          - paragraph [ref=e146]: ElectEd is a non-partisan educational platform. We do not support any political party or candidate.
          - paragraph [ref=e147]: "Data source: Election Commission of India"
      - generic [ref=e148]:
        - paragraph [ref=e149]: © 2026 ElectEd. All rights reserved.
        - paragraph [ref=e150]: Built for civic education
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
     |             ^ Error: WCAG violations on Steps:
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