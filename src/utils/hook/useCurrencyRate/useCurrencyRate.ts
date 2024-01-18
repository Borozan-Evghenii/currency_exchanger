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
      const object = data.data.quotes;
      const newObject: CurrencyRate = {};

      Object.entries(object).forEach(([key, value]) => {
        const newKey: string = key.replace(new RegExp(data.data.source), '');
        newObject[newKey] = value
      });
      return newObject
    }
  });

  return { Rates, isLoading, isError, error };
};