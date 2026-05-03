import { test, expect } from '@playwright/test';

test.describe('Quiz flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/quiz');
  });

  test('quiz landing shows category cards', async ({ page }) => {
    await expect(page.getByRole('article').first()).toBeVisible();
  });

  test('select Beginner category — quiz starts and shows first question', async ({ page }) => {
    // Click the first "Start Quiz" button (Beginner category)
    await page.getByRole('button', { name: /start quiz/i }).first().click();
    // Should now show a question heading
    await expect(page.locator('h2').first()).toBeVisible();
    // At least the answer group should be present
    // At least the answer group should be present
    await expect(page.getByRole('group', { name: /answer options/i })).toBeVisible();
  });

  test('answering a question reveals explanation text', async ({ page }) => {
    await page.getByRole('button', { name: /start quiz/i }).first().click();
    // Click the first answer option
    const answerGroup = page.getByRole('group', { name: /answer options/i });
    const firstOption = answerGroup.getByRole('button').first();
    await firstOption.click();
    // Explanation should appear
    await expect(page.getByText(/explanation/i)).toBeVisible();
  });

  test('completing all questions shows results screen', async ({ page }) => {
    await page.getByRole('button', { name: /start quiz/i }).first().click();

    // Keep answering until "Quiz Results" appears (up to 15 questions)
    for (let i = 0; i < 15; i++) {
      const resultsHeading = page.getByRole('heading', { name: /quiz results/i });
      if (await resultsHeading.isVisible().catch(() => false)) break;

      const answerGroup = page.getByRole('group', { name: /answer options/i });
      if (await answerGroup.isVisible()) {
        await answerGroup.getByRole('button').first().click();
      }
      const nextBtn = page.getByRole('button', { name: /next question|see results/i });
      if (await nextBtn.isVisible()) await nextBtn.click();
    }

    await expect(page.getByRole('heading', { name: /quiz results/i })).toBeVisible();
  });

  test('retake button restarts the quiz', async ({ page }) => {
    await page.getByRole('button', { name: /start quiz/i }).first().click();

    // Answer all questions quickly
    for (let i = 0; i < 15; i++) {
      const resultsHeading = page.getByRole('heading', { name: /quiz results/i });
      if (await resultsHeading.isVisible().catch(() => false)) break;
      const answerGroup = page.getByRole('group', { name: /answer options/i });
      if (await answerGroup.isVisible()) {
        await answerGroup.getByRole('button').first().click();
      }
      const nextBtn = page.getByRole('button', { name: /next question|see results/i });
      if (await nextBtn.isVisible()) await nextBtn.click();
    }

    await page.getByRole('button', { name: /retake quiz/i }).click();
    await expect(page.getByRole('group', { name: /answer options/i })).toBeVisible();
  });
});
