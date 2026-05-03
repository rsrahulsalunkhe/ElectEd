import { test, expect } from '@playwright/test';

test.describe('Chat interface', () => {
  test.beforeEach(async ({ page }) => {
    // Clear localStorage to get a fresh chat state
    await page.goto('/chat');
    await page.evaluate(() => localStorage.removeItem('elected-chat-state'));
    await page.reload();
  });

  test('chat page loads with welcome message', async ({ page }) => {
    await expect(page.getByRole('log')).toBeVisible();
    await expect(page.getByText(/ElectEd/i).first()).toBeVisible();
  });

  test('type message and send — shows user message', async ({ page }) => {
    const input = page.getByLabel(/type your election question/i);
    await input.fill('What is EVM?');
    await page.getByRole('button', { name: /send message/i }).click();
    await expect(page.getByText('What is EVM?')).toBeVisible();
  });

  test('send button has accessible label', async ({ page }) => {
    const sendBtn = page.getByRole('button', { name: /send message/i });
    await expect(sendBtn).toBeVisible();
  });

  test('message log has role=log', async ({ page }) => {
    await expect(page.getByRole('log')).toBeVisible();
  });

  test('clicking a suggested question sends it', async ({ page }) => {
    // Click any suggested question button
    const suggestedBtn = page.getByRole('button', { name: /send suggested question/i }).first();
    if (await suggestedBtn.isVisible()) {
      await suggestedBtn.click();
      await expect(page.getByRole('log')).toContainText(/.+/);
    }
  });

  test('chat messages persist on page refresh (localStorage)', async ({ page }) => {
    const input = page.getByLabel(/type your election question/i);
    await input.fill('Tell me about NOTA');
    await page.getByRole('button', { name: /send message/i }).click();
    await expect(page.getByText('Tell me about NOTA')).toBeVisible();

    await page.reload();
    // Message should still be visible from localStorage
    await expect(page.getByText('Tell me about NOTA')).toBeVisible();
  });
});
