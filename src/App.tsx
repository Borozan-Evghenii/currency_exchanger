
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Homepage from './pages/Homepage.tsx';
import * as React from 'react';
import CurrencyProvider from './utils/providers/currencyProvider/CurrencyProvider.tsx';
import QueryProvider from './utils/providers/QueryProvider/QueryProvider.tsx';

const App: React.FC = () => {

  return (
      <QueryProvider>
        <CurrencyProvider >
          <Homepage />
          <ReactQueryDevtools initialIsOpen={false} />
        </CurrencyProvider>
      </QueryProvider>
  );
};
export default App;
