import { useQuery } from '@tanstack/react-query';
import { getCurrencies } from '../../api';

export const useCurrencySymbol = () => {
  const { data: Symbols } = useQuery({ queryKey: ['symbols'], queryFn: getCurrencies });

  return {Symbols}
}