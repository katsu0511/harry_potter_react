import { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ErrorBoundary } from 'react-error-boundary';
import HarryPotter from './HarryPotter';
import Loading from './Loading';
import Error from './Error';

const cli = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

function App() {
  return (
    <main>
      <header>
        <h1>Harry Potter characters</h1>
      </header>
      <Suspense fallback={<Loading />}>
        <ErrorBoundary fallback={<Error />}>
          <QueryClientProvider client={cli}>
            <HarryPotter />
          </QueryClientProvider>
        </ErrorBoundary>
      </Suspense>
    </main>
  );
}

export default App;
