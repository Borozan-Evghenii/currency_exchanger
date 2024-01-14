import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { Props } from '../../../../@types';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    },
  },
})
const  QueryProvider :React.FC<Props<'div'>> = ({children}) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}

export default QueryProvider;