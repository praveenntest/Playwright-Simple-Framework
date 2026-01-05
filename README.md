# Playwright Simple Framework

A simple and clean Playwright test automation framework built with TypeScript, following the Page Object Model (POM) pattern.

## Overview

This framework provides a structured approach to writing end-to-end tests using Playwright. It includes:
- Page Object Model pattern for maintainable test code
- TypeScript for type safety
- Helper utilities for test data management
- HTML test reports with screenshots and videos on failure

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd playwright-simple-framework
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## Project Structure

```
playwright-simple-framework/
├── tests/              # Test specifications
│   └── login.spec.ts
├── pages/              # Page Object Model classes
│   └── login.page.ts
├── helpers/            # Helper utilities and test data
│   └── testdata.ts
├── playwright.config.ts # Playwright configuration
└── package.json        # Project dependencies
```

## Running Tests

### Run all tests
```bash
npm test
```

### Run tests in headed mode
Update `headless: false` in `playwright.config.ts` or run:
```bash
npx playwright test --headed
```

### Run specific test file
```bash
npx playwright test tests/login.spec.ts
```

### Run tests in debug mode
```bash
npx playwright test --debug
```

## Viewing Test Reports

After running tests, view the HTML report:
```bash
npm run report
```

The report includes:
- Test execution results
- Screenshots (captured on failure)
- Videos (captured on failure)
- Test timeline and traces

## Configuration

The framework is configured in `playwright.config.ts`:
- **Test Directory**: `./tests`
- **Timeout**: 30 seconds per test
- **Retries**: 0 (disabled)
- **Headless Mode**: Enabled by default
- **Screenshots**: Captured only on failure
- **Videos**: Retained only on failure
- **Reporter**: HTML reporter

## Writing Tests

### Page Object Model

The framework uses the Page Object Model pattern. Each page has its own class:

```typescript
import { LoginPage } from '../pages/login.page';

test('example test', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();
    await login.login('username', 'password');
});
```

### Adding New Pages

1. Create a new page class in `pages/` directory
2. Export the class with methods for page interactions
3. Import and use in your test files

### Adding Test Data

Store test data in `helpers/testdata.ts`:

```typescript
export const testData = {
    validUser: {
        username: 'standard_user',
        password: 'secret_sauce'
    }
};
```

## Best Practices

- Use Page Object Model for better maintainability
- Keep test data separate from test logic
- Use descriptive test names
- Follow the AAA pattern (Arrange, Act, Assert)
- Keep tests independent and isolated

## Dependencies

- `@playwright/test`: ^1.57.0

## License

ISC

