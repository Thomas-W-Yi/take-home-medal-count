'use client';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactNode, useState } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import './globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <ErrorBoundary
            fallback={<div>Oops! An unexpected error occurred.</div>}
          >
            {children}
          </ErrorBoundary>
        </QueryClientProvider>
      </body>
    </html>
  );
}
