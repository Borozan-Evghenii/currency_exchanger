import { useQuery } from '@tanstack/react-query';
import { getFullRatesFor } from '../../api/endpoints/getFullRatesFor.ts';

export const useCurrencyRate = (baseCurrency: string) => {
  const {
    data: Rates,
    isLoading,
    isError,
    error
  } = useQuery({ queryKey: ['rate', baseCurrency], queryFn: () => getFullRatesFor(baseCurrency) });

  return { Rates, isLoading, isError, error };
};