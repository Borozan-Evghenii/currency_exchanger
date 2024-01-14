import axiosInstance from '../axiosInstance.ts';
import { CurrencyRate, ServerCurrenciesRate } from '../../../../@types';

export const getFullRatesFor = async (currency: string) => {
  return axiosInstance.get<ServerCurrenciesRate>(`/live`, {
    params: {
      source: currency
    }
  }).then(data => {
    const object = data.data.quotes;
    const newObject: CurrencyRate = {};

    Object.entries(object).forEach(([key, value]) => {
      const newKey: string = key.replace(new RegExp(data.data.source), '');
      newObject[newKey] = value
    });

    return newObject
  });
};
