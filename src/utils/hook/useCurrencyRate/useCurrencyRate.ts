import { useQuery } from '@tanstack/react-query';
import { getFullRatesFor } from '../../api/endpoints/getFullRatesFor.ts';
import { CurrencyRate } from '../../../../@types';

export const useCurrencyRate = (baseCurrency: string) => {
  const {
    data: Rates,
    isLoading,
    isError,
    error
  } = useQuery({
    queryKey: ['rate', baseCurrency],
    queryFn: () => getFullRatesFor(baseCurrency),
    select: data => {
      const { quotes, source } = data.data;
      const newObject: CurrencyRate = {};
      Object.entries(quotes).forEach(([key, value]) => {
        const newKey: string = key.replace(new RegExp(source), '');
        newObject[newKey] = value
      });
      return newObject
    }
  });

  return { Rates, isLoading, isError, error };
};