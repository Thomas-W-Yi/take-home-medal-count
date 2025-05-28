## Getting Started

First, make sure node version is 20 then install all the packages, run the development server (nvm use 20):

```bash
npm i
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Sortable Table: Users can sort countries by 'Gold', 'Silver', 'Bronze', or 'Total' medals.

- URL Parameter Sorting: The initial sort order can be controlled via a sort URL parameter (total, gold, silver, bronze). If no parameter is provided, the default sort is 'Gold'.

- Client-Side Sorting: Medal data is fetched once, and subsequent sorting operations are performed client-side without re-fetching data.

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS (styled component would be better)
- Git/GitHub
- axios (better handling of api call)
- react-query (better way to handle data fetch, cache etc.)

## Project Limitations & Next Steps

- **State Management:**  
  This project does not use Context or Redux for state management, as global state is minimal and such solutions would be overkill for the current requirements.

- **Logging:**  
  Logging tool (e.g. sentry) is missing due to time constraint.

- **Resilience:**  
  retries, fallback UI, and loading indicators are missing.

- **Component Design:**  
  Most components are basic placeholders. They require improved design and clearer requirements to be fully implemented.

- **Styling Approach:**  
  Tailwind CSS is used for styling, but it can become verbose and less flexible for dynamic style variations. Consider migrating to a more scalable solution like [styled-components](https://styled-components.com/) or another CSS-in-JS library.

- **Test Coverage:**  
  Need to improve test coverage.

- **CI/CD Readiness:**  
  Include pre-commit hooks, Github actions, etc. in real-world scenario.

---
