import { useQuery } from '@tanstack/react-query';
import { getCurrencies } from '../../api';
import { CurrencySymbol } from '../../../../@types';

export const useCurrencySymbol = () => {
  const {
    data: Symbols,
    isLoading,
    isError,
    error
  } = useQuery({ queryKey: ['symbols'], queryFn: getCurrencies , select: (data) => {
      return Object.entries(data?.data?.currencies).map(([symbol, value]: [string, any]): CurrencySymbol => ({ symbol: symbol, name: value}))
    }});

  return { Symbols, isLoading, isError, error };
};