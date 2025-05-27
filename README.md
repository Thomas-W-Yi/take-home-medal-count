## Getting Started

First, make sure node version is 20 then install all the packages, run the development server (nvm use 20):

```bash
npm i
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

You can run the following scripts using npm:

- `npm run build` - Build the application for production
- `npm run start` - Sgtart the production server
- `npm run lint` - Lint and auto-fix code
- `npm run test` - Run unit tests with Jest
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

First, run the development server (nvm use 20):

## Project Limitations & Next Steps

- **State Management:**  
  This project does not use Context or Redux for state management, as global state is minimal and such solutions would be overkill for the current requirements.

- **Hardcoded Values:**  
  Some values in the codebase are hardcoded and should be replaced with dynamic logic as requirements become clearer.

- **API Calls:**  
  API calls are currently mocked using `medals.json`. Replace these mocks with real API endpoints when backend integration is ready.

- **Component Design:**  
  Most components are basic placeholders. They require improved design and clearer requirements to be fully implemented.

- **Styling Approach:**  
  Tailwind CSS is used for styling, but it can become verbose and less flexible for dynamic style variations. Consider migrating to a more scalable solution like [styled-components](https://styled-components.com/) or another CSS-in-JS library.

- **Page Structure:**  
  The project lacks a complete page structure. Add a header and footer to provide a consistent layout across all pages.

- **E2E test with Cypress:**  
  The project lacks E2E test since it's only a FE only at the moment. Need setup proper E2E test with Cypress.

---
