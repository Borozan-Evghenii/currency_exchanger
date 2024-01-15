import { useQuery } from '@tanstack/react-query';
import { getCurrencies } from '../../api';

export const useCurrencySymbol = () => {
  const {
    data: Symbols,
    isLoading,
    isError,
    error
  } = useQuery({ queryKey: ['symbols'], queryFn: getCurrencies });

  return { Symbols, isLoading, isError, error };
};