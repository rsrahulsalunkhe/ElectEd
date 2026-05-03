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
        - generic [ref=e14]: ElectEd
      - navigation "Main navigation" [ref=e15]:
        - link "Chat with our AI election guide" [ref=e16] [cursor=pointer]:
          - /url: /chat
          - text: AI Assistant
        - link "Election timeline visualizer" [ref=e18] [cursor=pointer]:
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
    - region "AI Election Assistant chat interface" [ref=e38]:
      - generic [ref=e40]:
        - complementary [ref=e41]:
          - generic [ref=e42]:
            - heading "Suggested Questions" [level=2] [ref=e43]
            - paragraph [ref=e44]: Pick any question to send instantly.
          - generic [ref=e45]:
            - generic [ref=e46]:
              - button "Basics" [expanded] [ref=e47]:
                - generic [ref=e48]:
                  - generic [ref=e49]: 📋
                  - text: Basics
                - img [ref=e50]
              - list [ref=e52]:
                - listitem [ref=e53]:
                  - 'button "Send suggested question: What is an election?" [ref=e54]': What is an election?
                - listitem [ref=e55]:
                  - 'button "Send suggested question: Who can vote?" [ref=e56]': Who can vote?
                - listitem [ref=e57]:
                  - 'button "Send suggested question: What is voter registration?" [ref=e58]': What is voter registration?
                - listitem [ref=e59]:
                  - 'button "Send suggested question: What is a constituency?" [ref=e60]': What is a constituency?
            - generic [ref=e61]:
              - button "Timeline & Process" [expanded] [ref=e62]:
                - generic [ref=e63]:
                  - generic [ref=e64]: 🗓️
                  - text: Timeline & Process
                - img [ref=e65]
              - list [ref=e67]:
                - listitem [ref=e68]:
                  - 'button "Send suggested question: When are elections announced?" [ref=e69]': When are elections announced?
                - listitem [ref=e70]:
                  - 'button "Send suggested question: What is the election campaign period?" [ref=e71]': What is the election campaign period?
                - listitem [ref=e72]:
                  - 'button "Send suggested question: What happens on voting day?" [ref=e73]': What happens on voting day?
                - listitem [ref=e74]:
                  - 'button "Send suggested question: How are votes counted?" [ref=e75]': How are votes counted?
            - generic [ref=e76]:
              - button "Voting" [expanded] [ref=e77]:
                - generic [ref=e78]:
                  - generic [ref=e79]: 🗳️
                  - text: Voting
                - img [ref=e80]
              - list [ref=e82]:
                - listitem [ref=e83]:
                  - 'button "Send suggested question: How do I register to vote?" [ref=e84]': How do I register to vote?
                - listitem [ref=e85]:
                  - 'button "Send suggested question: What ID do I need to vote?" [ref=e86]': What ID do I need to vote?
                - listitem [ref=e87]:
                  - 'button "Send suggested question: What is a ballot paper?" [ref=e88]': What is a ballot paper?
                - listitem [ref=e89]:
                  - 'button "Send suggested question: What is EVM (Electronic Voting Machine)?" [ref=e90]': What is EVM (Electronic Voting Machine)?
            - generic [ref=e91]:
              - button "Systems & Types" [expanded] [ref=e92]:
                - generic [ref=e93]:
                  - generic [ref=e94]: 🌍
                  - text: Systems & Types
                - img [ref=e95]
              - list [ref=e97]:
                - listitem [ref=e98]:
                  - 'button "Send suggested question: What is FPTP vs Proportional Representation?" [ref=e99]': What is FPTP vs Proportional Representation?
                - listitem [ref=e100]:
                  - 'button "Send suggested question: What is a by-election?" [ref=e101]': What is a by-election?
                - listitem [ref=e102]:
                  - 'button "Send suggested question: What is a referendum?" [ref=e103]': What is a referendum?
                - listitem [ref=e104]:
                  - 'button "Send suggested question: How do different countries vote?" [ref=e105]': How do different countries vote?
            - generic [ref=e106]:
              - button "Results & After" [expanded] [ref=e107]:
                - generic [ref=e108]:
                  - generic [ref=e109]: 📊
                  - text: Results & After
                - img [ref=e110]
              - list [ref=e112]:
                - listitem [ref=e113]:
                  - 'button "Send suggested question: How are election results declared?" [ref=e114]': How are election results declared?
                - listitem [ref=e115]:
                  - 'button "Send suggested question: What is an exit poll?" [ref=e116]': What is an exit poll?
                - listitem [ref=e117]:
                  - 'button "Send suggested question: What happens after a party wins?" [ref=e118]': What happens after a party wins?
                - listitem [ref=e119]:
                  - 'button "Send suggested question: What is a hung parliament/assembly?" [ref=e120]': What is a hung parliament/assembly?
        - generic [ref=e121]:
          - generic [ref=e122]:
            - heading "AI Election Assistant" [level=1] [ref=e123]
            - paragraph [ref=e124]: Neutral, educational, and easy to understand election guidance.
          - log "Election assistant message thread" [ref=e125]:
            - article "ElectEd assistant message at 07:10 PM" [ref=e126]:
              - img [ref=e128]
              - generic [ref=e135]:
                - generic [ref=e136]: Hello. I am ElectEd, your non-partisan election education assistant. Ask me about voting, election timelines, registration, systems, and results. What would you like to learn first?
                - generic [ref=e137]:
                  - time [ref=e138]: 07:10 PM
                  - button "Copy assistant message" [ref=e139]:
                    - img [ref=e140]
                    - text: Copy
          - generic [ref=e144]:
            - generic [ref=e145]:
              - generic [ref=e146]: Type your election question
              - textbox "Message input" [ref=e147]:
                - /placeholder: Type your election question...
            - button "Send message" [disabled] [ref=e148]:
              - img [ref=e149]
              - text: Send
  - contentinfo [ref=e152]:
    - generic [ref=e153]:
      - generic [ref=e154]:
        - generic [ref=e155]:
          - heading "ElectEd" [level=2] [ref=e156]
          - paragraph [ref=e157]: Election learning made simple, interactive, and non-partisan.
        - navigation "Footer navigation" [ref=e158]:
          - heading "Links" [level=3] [ref=e159]
          - list [ref=e160]:
            - listitem [ref=e161]:
              - link "Home" [ref=e162] [cursor=pointer]:
                - /url: /
            - listitem [ref=e163]:
              - link "Chat" [ref=e164] [cursor=pointer]:
                - /url: /chat
            - listitem [ref=e165]:
              - link "Timeline" [ref=e166] [cursor=pointer]:
                - /url: /timeline
            - listitem [ref=e167]:
              - link "Steps" [ref=e168] [cursor=pointer]:
                - /url: /steps
            - listitem [ref=e169]:
              - link "Quiz" [ref=e170] [cursor=pointer]:
                - /url: /quiz
            - listitem [ref=e171]:
              - link "Glossary" [ref=e172] [cursor=pointer]:
                - /url: /glossary
        - generic [ref=e173]:
          - paragraph [ref=e174]: ElectEd is a non-partisan educational platform. We do not support any political party or candidate.
          - paragraph [ref=e175]: "Data source: Election Commission of India"
      - generic [ref=e176]:
        - paragraph [ref=e177]: © 2026 ElectEd. All rights reserved.
        - paragraph [ref=e178]: Built for civic education
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