import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('home page loads with correct h1', async ({ page }) => {
    await expect(page.locator('h1').first()).toBeVisible();
  });

  test('navigates to AI Chat page', async ({ page }) => {
    await page.getByRole('link', { name: /ai chat/i }).first().click();
    await expect(page).toHaveURL(/\/chat/);
    await expect(page.locator('h1')).toContainText(/AI Election Assistant/i);
  });

  test('navigates to Timeline page', async ({ page }) => {
    await page.getByRole('link', { name: /timeline/i }).first().click();
    await expect(page).toHaveURL(/\/timeline/);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('navigates to Steps page', async ({ page }) => {
    await page.getByRole('link', { name: /steps/i }).first().click();
    await expect(page).toHaveURL(/\/steps/);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('navigates to Quiz page', async ({ page }) => {
    await page.getByRole('link', { name: /quiz/i }).first().click();
    await expect(page).toHaveURL(/\/quiz/);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('navigates to Glossary page', async ({ page }) => {
    await page.getByRole('link', { name: /glossary/i }).first().click();
    await expect(page).toHaveURL(/\/glossary/);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('navigates to Compare page', async ({ page }) => {
    await page.getByRole('link', { name: /compare/i }).first().click();
    await expect(page).toHaveURL(/\/compare/);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('home page hero CTA — Ask AI Assistant navigates to chat', async ({ page }) => {
    await page.getByRole('link', { name: /ask ai assistant/i }).click();
    await expect(page).toHaveURL(/\/chat/);
  });

  test('home page hero CTA — Start Learning navigates to steps', async ({ page }) => {
    await page.getByRole('link', { name: /start learning/i }).click();
    await expect(page).toHaveURL(/\/steps/);
  });

  test('mobile hamburger menu opens and shows nav links', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    const menuButton = page.getByRole('button', { name: /open navigation/i });
    await menuButton.click();
    await expect(page.getByRole('navigation', { name: /mobile navigation/i })).toBeVisible();
  });
});
