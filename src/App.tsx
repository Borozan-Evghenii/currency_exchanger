import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Homepage from './pages/Homepage.tsx';
import * as React from 'react';
import CurrencyProvider from './utils/providers/currencyProvider/CurrencyProvider.tsx';

const App: React.FC = () => {
  const queryClient = new QueryClient()

  return (
    <CurrencyProvider>
      <QueryClientProvider client={queryClient}>
        <Homepage />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </CurrencyProvider>

  );
};
export default App;
