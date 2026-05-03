# Contributing to ElectEd

First off, thank you for considering contributing to ElectEd! It's people like you that make ElectEd such a great platform.

## Where do I go from here?

If you've noticed a bug or have a feature request, make sure to check our [Issues](../../issues) to see if someone else has already created a ticket. If not, go ahead and create one!

## Fork & create a branch

If this is something you think you can fix, then fork ElectEd and create a branch with a descriptive name.

## Get the test suite running

Make sure you're using Node.js version 18 or newer.

```bash
npm install
npm run dev
```

Ensure all tests pass before making your changes:

```bash
npm run test
npm run test:e2e
```

## Implement your fix or feature

At this point, you're ready to make your changes! Feel free to ask for help; everyone is a beginner at first.

## Code Quality

We use ESLint and Prettier to maintain code quality. Make sure your code is properly formatted and passes all linting rules:

```bash
npm run lint
npx prettier --write .
```

## Create a Pull Request

Once your changes are ready and all tests pass, submit a Pull Request! Please provide a clear description of the problem you're solving and your solution.
