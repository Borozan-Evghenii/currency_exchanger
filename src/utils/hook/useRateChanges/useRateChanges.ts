import { useQuery } from '@tanstack/react-query';
import { getRateChange } from '../../api/endpoints/getRateChange.ts';
import { ChangeCurrency } from '../../../../@types';

export const useRateChanges = (start_date: string, end_date: string, source?: string, currencies?: string) => {
  const {
    data: ChangesRate,
    isLoading,
    error
  } = useQuery({
    queryKey: ['changes', source = 'MDL', start_date, end_date],
    queryFn: () => getRateChange(
      start_date,
      end_date,
      currencies,
      source
    ),
    select: data => {
      const { quotes, source } = data.data;
      return Object.entries(quotes).map(([key, value]):ChangeCurrency => {
        const newKey: string = key.replace(new RegExp(source), '');
         return { symbol: newKey, ...value }
      });
    }
  });

  return { ChangesRate, isLoading, error };
};