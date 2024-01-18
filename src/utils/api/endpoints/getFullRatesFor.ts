import axiosInstance from '../axiosInstance.ts';
import { ServerCurrenciesRate } from '../../../../@types';

export const getFullRatesFor = async (currency: string) => {
  return axiosInstance.get<ServerCurrenciesRate>(`/live`, {
    params: {
      source: currency
    }
  })
};
