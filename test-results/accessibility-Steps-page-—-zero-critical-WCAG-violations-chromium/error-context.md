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
        - heading "Your Complete Guide to Voting" [level=1] [ref=e37]
        - paragraph [ref=e38]: From registration to casting your vote — we'll walk you through every step
      - generic [ref=e39]:
        - generic [ref=e40]:
          - generic [ref=e41]:
            - paragraph [ref=e42]: Progress
            - paragraph [ref=e43]: 0/8 steps complete
          - progressbar "Progress" [ref=e44]
          - paragraph [ref=e45]: 0% completed
          - generic [ref=e46]:
            - button "1. ✅ Check Eligibility" [ref=e47]:
              - generic [ref=e48]:
                - generic [ref=e49]: "1."
                - generic [ref=e50]: ✅
              - paragraph [ref=e51]: Check Eligibility
            - button "2. 📋 Register" [ref=e52]:
              - generic [ref=e53]:
                - generic [ref=e54]: "2."
                - generic [ref=e55]: 📋
              - paragraph [ref=e56]: Register
            - button "3. 🪪 Get Voter ID" [ref=e57]:
              - generic [ref=e58]:
                - generic [ref=e59]: "3."
                - generic [ref=e60]: 🪪
              - paragraph [ref=e61]: Get Voter ID
            - button "4. 📍 Find Booth" [ref=e62]:
              - generic [ref=e63]:
                - generic [ref=e64]: "4."
                - generic [ref=e65]: 📍
              - paragraph [ref=e66]: Find Booth
            - button "5. 📅 Prepare" [ref=e67]:
              - generic [ref=e68]:
                - generic [ref=e69]: "5."
                - generic [ref=e70]: 📅
              - paragraph [ref=e71]: Prepare
            - button "6. 🏛️ At Booth" [ref=e72]:
              - generic [ref=e73]:
                - generic [ref=e74]: "6."
                - generic [ref=e75]: 🏛️
              - paragraph [ref=e76]: At Booth
            - button "7. 🗳️ Cast Vote" [ref=e77]:
              - generic [ref=e78]:
                - generic [ref=e79]: "7."
                - generic [ref=e80]: 🗳️
              - paragraph [ref=e81]: Cast Vote
            - button "8. ✊ After Voting" [ref=e82]:
              - generic [ref=e83]:
                - generic [ref=e84]: "8."
                - generic [ref=e85]: ✊
              - paragraph [ref=e86]: After Voting
        - generic [ref=e87]:
          - generic [ref=e88]:
            - generic [ref=e89]: Step 1
            - heading "Am I Eligible to Vote?" [level=2] [ref=e90]:
              - generic [ref=e91]: ✅
              - text: Am I Eligible to Vote?
          - generic [ref=e92]:
            - generic [ref=e94]:
              - list [ref=e95]:
                - listitem [ref=e96]: "- Age requirement (18+ in India)"
                - listitem [ref=e97]: "- Citizenship requirement"
                - listitem [ref=e98]: "- Mental fitness requirement"
                - listitem [ref=e99]: "- Not serving criminal sentence"
              - generic [ref=e100]:
                - paragraph [ref=e101]: Eligibility Checker
                - generic [ref=e102]:
                  - generic [ref=e103]:
                    - text: Age
                    - spinbutton "Age" [ref=e104]
                  - generic [ref=e105]:
                    - text: Indian citizen?
                    - combobox "Indian citizen?" [ref=e106]:
                      - option "Yes" [selected]
                      - option "No"
                - generic [ref=e107]:
                  - checkbox "Mentally fit to vote" [checked] [ref=e108]
                  - text: Mentally fit to vote
                - generic [ref=e109]:
                  - checkbox "Currently serving a criminal sentence" [ref=e110]
                  - text: Currently serving a criminal sentence
            - generic [ref=e111]:
              - generic [ref=e112]:
                - paragraph [ref=e113]: Illustration
                - generic [ref=e114]: ✅
                - paragraph [ref=e115]: "Visual aid for step 1: Check Eligibility"
              - button "Mark Step Completed" [ref=e116]
          - generic [ref=e117]:
            - button "Previous" [disabled] [ref=e118]
            - button "Next" [ref=e119]
            - button "Ask AI About This Step" [ref=e120]
  - contentinfo [ref=e121]:
    - generic [ref=e122]:
      - generic [ref=e123]:
        - generic [ref=e124]:
          - heading "ElectEd" [level=2] [ref=e125]
          - paragraph [ref=e126]: Election learning made simple, interactive, and non-partisan.
        - navigation "Footer navigation" [ref=e127]:
          - heading "Links" [level=3] [ref=e128]
          - list [ref=e129]:
            - listitem [ref=e130]:
              - link "Home" [ref=e131] [cursor=pointer]:
                - /url: /
            - listitem [ref=e132]:
              - link "Chat" [ref=e133] [cursor=pointer]:
                - /url: /chat
            - listitem [ref=e134]:
              - link "Timeline" [ref=e135] [cursor=pointer]:
                - /url: /timeline
            - listitem [ref=e136]:
              - link "Steps" [ref=e137] [cursor=pointer]:
                - /url: /steps
            - listitem [ref=e138]:
              - link "Quiz" [ref=e139] [cursor=pointer]:
                - /url: /quiz
            - listitem [ref=e140]:
              - link "Glossary" [ref=e141] [cursor=pointer]:
                - /url: /glossary
        - generic [ref=e142]:
          - paragraph [ref=e143]: ElectEd is a non-partisan educational platform. We do not support any political party or candidate.
          - paragraph [ref=e144]: "Data source: Election Commission of India"
      - generic [ref=e145]:
        - paragraph [ref=e146]: © 2026 ElectEd. All rights reserved.
        - paragraph [ref=e147]: Built for civic education
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