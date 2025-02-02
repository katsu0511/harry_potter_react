import { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ErrorBoundary } from 'react-error-boundary';
import HarryPotter from './HarryPotter';
import './App.css';

const cli = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ErrorBoundary fallback={<div>Error has happened.</div>}>
        <QueryClientProvider client={cli}>
          <HarryPotter />
        </QueryClientProvider>
      </ErrorBoundary>
    </Suspense>
  );
}

export default App;
