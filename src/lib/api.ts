import type { ChatMessage } from '@/types';

const ANTHROPIC_API_URL = 'https://api.anthropic.com/v1/messages';
const ANTHROPIC_MODEL = 'claude-sonnet-4-20250514';

const ELECTED_SYSTEM_PROMPT = `You are ElectEd, a friendly and non-partisan election education assistant. You help users understand:
- How elections work in different countries
- Voter registration processes and deadlines
- What happens on election day step by step
- How votes are counted and results declared
- The roles of election officials and observers
- Electoral systems (FPTP, Proportional, etc.)
- Election timeline from announcement to results
- Rights and responsibilities of voters
Always be factual, neutral, and educational.
Never express political opinions or favor any party/candidate.
Keep responses clear, simple and easy to understand.
Use bullet points and numbered lists for step-by-step info.
End responses with a relevant follow-up question to encourage learning.`;

const AI_API_KEY = import.meta.env.VITE_ANTHROPIC_API_KEY ?? import.meta.env.VITE_AI_API_KEY ?? '';

type AnthropicMessage = {
  role: 'user' | 'assistant';
  content: Array<{ type: 'text'; text: string }>;
};

type AnthropicResponse = {
  content?: Array<{ type: string; text?: string }>;
  error?: { message?: string };
};

function buildAnthropicHistory(history: ChatMessage[], userMessage: string): AnthropicMessage[] {
  const priorMessages: AnthropicMessage[] = history
    .filter((msg) => msg.content.trim().length > 0)
    .map((msg) => ({
      role: msg.role,
      content: [{ type: 'text', text: msg.content }],
    }));

  return [
    ...priorMessages,
    {
      role: 'user',
      content: [{ type: 'text', text: userMessage }],
    },
  ];
}

export async function sendChatMessage(
  userMessage: string,
  history: ChatMessage[]
): Promise<string> {
  if (!AI_API_KEY || AI_API_KEY === 'your_dev_api_key_here') {
    throw new Error('Missing Anthropic API key. Set VITE_ANTHROPIC_API_KEY in your environment.');
  }

  const response = await fetch(ANTHROPIC_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': AI_API_KEY,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify({
      model: ANTHROPIC_MODEL,
      max_tokens: 1000,
      system: ELECTED_SYSTEM_PROMPT,
      messages: buildAnthropicHistory(history, userMessage),
    }),
  });

  const payload = (await response.json()) as AnthropicResponse;

  if (!response.ok) {
    const reason = payload.error?.message ?? `HTTP ${response.status}`;
    throw new Error(`Anthropic API error: ${reason}`);
  }

  const text = payload.content
    ?.filter((block) => block.type === 'text' && typeof block.text === 'string')
    .map((block) => block.text?.trim() ?? '')
    .filter(Boolean)
    .join('\n\n');

  if (!text) {
    throw new Error('Anthropic returned an empty response.');
  }

  return text;
}

export async function explainWrongQuizAnswer(
  question: string,
  correctAnswer: string,
  wrongAnswer: string
): Promise<string> {
  if (!AI_API_KEY || AI_API_KEY === 'your_dev_api_key_here') {
    throw new Error('Missing Anthropic API key. Set VITE_ANTHROPIC_API_KEY in your environment.');
  }

  const prompt = `Explain in simple terms why ${correctAnswer} is the correct answer for: ${question}. The user chose ${wrongAnswer}. Keep it under 3 sentences, friendly tone.`;

  const response = await fetch(ANTHROPIC_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': AI_API_KEY,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify({
      model: ANTHROPIC_MODEL,
      max_tokens: 180,
      messages: [
        {
          role: 'user',
          content: [{ type: 'text', text: prompt }],
        },
      ],
    }),
  });

  const payload = (await response.json()) as AnthropicResponse;
  if (!response.ok) {
    const reason = payload.error?.message ?? `HTTP ${response.status}`;
    throw new Error(`Anthropic API error: ${reason}`);
  }

  const text = payload.content
    ?.filter((block) => block.type === 'text' && typeof block.text === 'string')
    .map((block) => block.text?.trim() ?? '')
    .filter(Boolean)
    .join('\n\n');

  if (!text) throw new Error('Anthropic returned an empty explanation.');
  return text;
}
