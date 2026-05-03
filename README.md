# ElectEd

ElectEd is a comprehensive, interactive educational platform designed to educate citizens about the Indian electoral process. By combining engaging quizzes, an AI-powered chat assistant, timelines, and a detailed glossary, ElectEd makes learning about elections fun, accessible, and informative.

## Features

- **AI Chat Assistant**: Ask questions about the electoral process, voting rights, and political systems, and get instant, accurate answers.
- **Interactive Quizzes**: Test your knowledge with categorised quizzes (Beginner, Intermediate, Advanced) and learn through detailed explanations for each answer.
- **Election Timeline**: Explore the rich history of Indian elections through an interactive, visual timeline.
- **Voter Registration Steps**: Follow a simple, step-by-step guide to registering to vote, ensuring you're ready for election day.
- **Glossary**: Access a comprehensive dictionary of election-related terminology.
- **Compare Candidates/Parties**: Evaluate different political entities side-by-side to make informed voting decisions.
- **Multi-language Support (i18n)**: Accessible in multiple Indian languages (English, Hindi, Marathi, Gujarati, Bengali, Tamil, Telugu).
- **Progressive Web App (PWA)**: Install the application on your device for offline access and a native app-like experience.

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS, Radix UI components
- **State Management**: Zustand
- **Backend/Services**: Firebase (Auth, Firestore)
- **Testing**: Vitest, React Testing Library, Playwright (E2E)
- **Code Quality**: ESLint, Prettier, TypeScript

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Copy `.env.example` to `.env.local` and fill in your Firebase credentials.

### Running Locally

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## Testing

Run unit and integration tests:

```bash
npm run test
```

Run end-to-end tests:

```bash
npm run test:e2e
```

## Contributing

We welcome contributions! Please follow our coding standards and ensure all tests pass before submitting a pull request.

## License

This project is licensed under the MIT License.
