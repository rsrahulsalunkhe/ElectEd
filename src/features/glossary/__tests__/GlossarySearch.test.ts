import { describe, it, expect } from 'vitest';

// ── Pure glossary filter logic for unit testing ───────────────────────────────

interface GlossaryEntry {
  term: string;
  definition: string;
}

const SAMPLE_ENTRIES: GlossaryEntry[] = [
  { term: 'Ballot', definition: 'The official document used to cast a vote.' },
  { term: 'Candidate', definition: 'A person who stands for election.' },
  { term: 'EVM', definition: 'Electronic Voting Machine used to record votes.' },
  { term: 'NOTA', definition: 'None Of The Above — option to reject all candidates.' },
  { term: 'Turnout', definition: 'Percentage of eligible voters who cast their vote.' },
];

function filterGlossary(
  entries: GlossaryEntry[],
  search: string,
  letter: string | 'ALL'
): GlossaryEntry[] {
  const q = search.trim().toLowerCase();
  return entries
    .filter((entry) => {
      if (letter !== 'ALL' && !entry.term.toUpperCase().startsWith(letter)) return false;
      if (!q) return true;
      return entry.term.toLowerCase().includes(q) || entry.definition.toLowerCase().includes(q);
    })
    .sort((a, b) => a.term.localeCompare(b.term));
}

// ── Tests ─────────────────────────────────────────────────────────────────────

describe('glossary search filter', () => {
  it('returns all entries when search is empty and letter is ALL', () => {
    const result = filterGlossary(SAMPLE_ENTRIES, '', 'ALL');
    expect(result).toHaveLength(SAMPLE_ENTRIES.length);
  });

  it('filters by term substring (case-insensitive)', () => {
    const result = filterGlossary(SAMPLE_ENTRIES, 'ballot', 'ALL');
    expect(result).toHaveLength(1);
    expect(result[0]!.term).toBe('Ballot');
  });

  it('filters by definition substring', () => {
    const result = filterGlossary(SAMPLE_ENTRIES, 'percentage', 'ALL');
    expect(result).toHaveLength(1);
    expect(result[0]!.term).toBe('Turnout');
  });

  it('search is case-insensitive', () => {
    const lower = filterGlossary(SAMPLE_ENTRIES, 'evm', 'ALL');
    const upper = filterGlossary(SAMPLE_ENTRIES, 'EVM', 'ALL');
    expect(lower).toEqual(upper);
    expect(lower).toHaveLength(1);
  });

  it('alphabet filter shows only terms starting with that letter', () => {
    const result = filterGlossary(SAMPLE_ENTRIES, '', 'C');
    expect(result.every((e) => e.term.startsWith('C'))).toBe(true);
  });

  it('alphabet filter combined with search', () => {
    const result = filterGlossary(SAMPLE_ENTRIES, 'vote', 'C');
    // Candidate definition mentions "election", not "vote"; filter should return []
    expect(result).toHaveLength(0);
  });

  it('returns empty array when no results match', () => {
    const result = filterGlossary(SAMPLE_ENTRIES, 'xyznotfound', 'ALL');
    expect(result).toHaveLength(0);
  });

  it('results are sorted alphabetically', () => {
    const result = filterGlossary(SAMPLE_ENTRIES, '', 'ALL');
    const terms = result.map((e) => e.term);
    expect(terms).toEqual([...terms].sort());
  });
});
