import { QueryClient } from '@tanstack/react-query';
import React from 'react';
import { Props } from '../../../../@types';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';



export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
      staleTime: Infinity
    },
  },
})

const localStoragePersister = createSyncStoragePersister({
  storage: window.localStorage
})


const  QueryProvider :React.FC<Props<'div'>> = ({children}) => {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{
        persister: localStoragePersister,
    }}
    >
      {children}
    </PersistQueryClientProvider>
  );
}

export default QueryProvider;