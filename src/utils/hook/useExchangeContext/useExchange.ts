import { useContext } from 'react';
import { CurrencyContext } from '../../providers';

export const useExchangeContext = () => {
  return useContext(CurrencyContext)
}