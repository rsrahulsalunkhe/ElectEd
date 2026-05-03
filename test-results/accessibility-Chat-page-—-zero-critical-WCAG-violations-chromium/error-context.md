# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.ts >> Chat page — zero critical WCAG violations
- Location: tests\e2e\accessibility.spec.ts:15:3

# Error details

```
Error: WCAG violations on Chat:
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
          - generic [ref=e28]: English
        - button "Sign in with Google to save progress" [ref=e29]:
          - img [ref=e30]
          - generic [ref=e33]: Sign in
  - main [ref=e34]:
    - region "AI Election Assistant chat interface" [ref=e35]:
      - generic [ref=e37]:
        - complementary [ref=e38]:
          - generic [ref=e39]:
            - heading "Suggested Questions" [level=2] [ref=e40]
            - paragraph [ref=e41]: Pick any question to send instantly.
          - generic [ref=e42]:
            - generic [ref=e43]:
              - button "Basics" [expanded] [ref=e44]:
                - generic [ref=e45]:
                  - generic [ref=e46]: 📋
                  - text: Basics
                - img [ref=e47]
              - list [ref=e49]:
                - listitem [ref=e50]:
                  - 'button "Send suggested question: What is an election?" [ref=e51]': What is an election?
                - listitem [ref=e52]:
                  - 'button "Send suggested question: Who can vote?" [ref=e53]': Who can vote?
                - listitem [ref=e54]:
                  - 'button "Send suggested question: What is voter registration?" [ref=e55]': What is voter registration?
                - listitem [ref=e56]:
                  - 'button "Send suggested question: What is a constituency?" [ref=e57]': What is a constituency?
            - generic [ref=e58]:
              - button "Timeline & Process" [expanded] [ref=e59]:
                - generic [ref=e60]:
                  - generic [ref=e61]: 🗓️
                  - text: Timeline & Process
                - img [ref=e62]
              - list [ref=e64]:
                - listitem [ref=e65]:
                  - 'button "Send suggested question: When are elections announced?" [ref=e66]': When are elections announced?
                - listitem [ref=e67]:
                  - 'button "Send suggested question: What is the election campaign period?" [ref=e68]': What is the election campaign period?
                - listitem [ref=e69]:
                  - 'button "Send suggested question: What happens on voting day?" [ref=e70]': What happens on voting day?
                - listitem [ref=e71]:
                  - 'button "Send suggested question: How are votes counted?" [ref=e72]': How are votes counted?
            - generic [ref=e73]:
              - button "Voting" [expanded] [ref=e74]:
                - generic [ref=e75]:
                  - generic [ref=e76]: 🗳️
                  - text: Voting
                - img [ref=e77]
              - list [ref=e79]:
                - listitem [ref=e80]:
                  - 'button "Send suggested question: How do I register to vote?" [ref=e81]': How do I register to vote?
                - listitem [ref=e82]:
                  - 'button "Send suggested question: What ID do I need to vote?" [ref=e83]': What ID do I need to vote?
                - listitem [ref=e84]:
                  - 'button "Send suggested question: What is a ballot paper?" [ref=e85]': What is a ballot paper?
                - listitem [ref=e86]:
                  - 'button "Send suggested question: What is EVM (Electronic Voting Machine)?" [ref=e87]': What is EVM (Electronic Voting Machine)?
            - generic [ref=e88]:
              - button "Systems & Types" [expanded] [ref=e89]:
                - generic [ref=e90]:
                  - generic [ref=e91]: 🌍
                  - text: Systems & Types
                - img [ref=e92]
              - list [ref=e94]:
                - listitem [ref=e95]:
                  - 'button "Send suggested question: What is FPTP vs Proportional Representation?" [ref=e96]': What is FPTP vs Proportional Representation?
                - listitem [ref=e97]:
                  - 'button "Send suggested question: What is a by-election?" [ref=e98]': What is a by-election?
                - listitem [ref=e99]:
                  - 'button "Send suggested question: What is a referendum?" [ref=e100]': What is a referendum?
                - listitem [ref=e101]:
                  - 'button "Send suggested question: How do different countries vote?" [ref=e102]': How do different countries vote?
            - generic [ref=e103]:
              - button "Results & After" [expanded] [ref=e104]:
                - generic [ref=e105]:
                  - generic [ref=e106]: 📊
                  - text: Results & After
                - img [ref=e107]
              - list [ref=e109]:
                - listitem [ref=e110]:
                  - 'button "Send suggested question: How are election results declared?" [ref=e111]': How are election results declared?
                - listitem [ref=e112]:
                  - 'button "Send suggested question: What is an exit poll?" [ref=e113]': What is an exit poll?
                - listitem [ref=e114]:
                  - 'button "Send suggested question: What happens after a party wins?" [ref=e115]': What happens after a party wins?
                - listitem [ref=e116]:
                  - 'button "Send suggested question: What is a hung parliament/assembly?" [ref=e117]': What is a hung parliament/assembly?
        - generic [ref=e118]:
          - generic [ref=e119]:
            - heading "AI Election Assistant" [level=1] [ref=e120]
            - paragraph [ref=e121]: Neutral, educational, and easy to understand election guidance.
          - log "Election assistant message thread" [ref=e122]:
            - article "ElectEd assistant message at 07:09 PM" [ref=e123]:
              - img [ref=e125]
              - generic [ref=e128]:
                - generic [ref=e129]: Hello. I am ElectEd, your non-partisan election education assistant. Ask me about voting, election timelines, registration, systems, and results. What would you like to learn first?
                - generic [ref=e130]:
                  - time [ref=e131]: 07:09 PM
                  - button "Copy assistant message" [ref=e132]:
                    - img [ref=e133]
                    - text: Copy
          - generic [ref=e137]:
            - generic [ref=e138]:
              - generic [ref=e139]: Type your election question
              - textbox "Message input" [ref=e140]:
                - /placeholder: Type your election question...
            - button "Send message" [disabled] [ref=e141]:
              - img [ref=e142]
              - text: Send
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
     |             ^ Error: WCAG violations on Chat:
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