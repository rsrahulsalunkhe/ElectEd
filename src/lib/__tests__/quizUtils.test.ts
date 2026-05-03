import { describe, it, expect } from 'vitest';

// ── Pure utility functions extracted for testing ──────────────────────────────

/** Count correct answers from a list of answer records */
function countCorrectAnswers(answers: { isCorrect: boolean }[]): number {
  return answers.filter((a) => a.isCorrect).length;
}

/** Calculate percentage score (0-100, rounded) */
function calcPercentage(correct: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((correct / total) * 100);
}

/** Map percentage to a performance message */
function getPerformanceMessage(pct: number): string {
  if (pct >= 90) return '🏆 Election Expert!';
  if (pct >= 70) return '⭐ Well Informed Voter!';
  if (pct >= 50) return '📚 Keep Learning!';
  return '💪 Great Start! Try Again';
}

// ── Tests ─────────────────────────────────────────────────────────────────────

describe('countCorrectAnswers', () => {
  it('counts all correct when all right', () => {
    const answers = [{ isCorrect: true }, { isCorrect: true }, { isCorrect: true }];
    expect(countCorrectAnswers(answers)).toBe(3);
  });

  it('counts zero when all wrong', () => {
    const answers = [{ isCorrect: false }, { isCorrect: false }];
    expect(countCorrectAnswers(answers)).toBe(0);
  });

  it('counts mixed correctly', () => {
    const answers = [
      { isCorrect: true },
      { isCorrect: false },
      { isCorrect: true },
      { isCorrect: false },
      { isCorrect: true },
    ];
    expect(countCorrectAnswers(answers)).toBe(3);
  });

  it('returns 0 for empty array', () => {
    expect(countCorrectAnswers([])).toBe(0);
  });
});

describe('calcPercentage', () => {
  it('returns 100 for perfect score', () => {
    expect(calcPercentage(10, 10)).toBe(100);
  });

  it('returns 0 for zero correct', () => {
    expect(calcPercentage(0, 10)).toBe(0);
  });

  it('returns 0 for zero total (guard)', () => {
    expect(calcPercentage(0, 0)).toBe(0);
  });

  it('rounds correctly — 2/3 ≈ 67%', () => {
    expect(calcPercentage(2, 3)).toBe(67);
  });

  it('rounds correctly — 1/3 ≈ 33%', () => {
    expect(calcPercentage(1, 3)).toBe(33);
  });
});

describe('getPerformanceMessage', () => {
  it('returns Expert for 90+', () => {
    expect(getPerformanceMessage(90)).toContain('Election Expert');
    expect(getPerformanceMessage(100)).toContain('Election Expert');
  });

  it('returns Well Informed for 70-89', () => {
    expect(getPerformanceMessage(70)).toContain('Well Informed Voter');
    expect(getPerformanceMessage(89)).toContain('Well Informed Voter');
  });

  it('returns Keep Learning for 50-69', () => {
    expect(getPerformanceMessage(50)).toContain('Keep Learning');
    expect(getPerformanceMessage(69)).toContain('Keep Learning');
  });

  it('returns Great Start for below 50', () => {
    expect(getPerformanceMessage(49)).toContain('Great Start');
    expect(getPerformanceMessage(0)).toContain('Great Start');
  });
});
