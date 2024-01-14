import { useContext } from 'react';
import { CurrencyContext } from '../../providers';

export const useExchange = () => {
  return useContext(CurrencyContext)
}