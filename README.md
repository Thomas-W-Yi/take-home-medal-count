## Getting Started

1. Clone the repository:

```bash
git clone git@github.com:Thomas-W-Yi/take-home-medal-count.git
cd take-home-medal-count
```

2. Install dependencies:

```bash
nvm use 20
npm i
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Sortable Table: Users can sort countries by 'Gold', 'Silver', 'Bronze', or 'Total' medals.

- URL Parameter Sorting: The initial sort order can be controlled via a sort URL parameter (total, gold, silver, bronze). If no parameter is provided, the default sort is 'Gold'. (e.g. http://localhost:3000/?sort=total)

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
