
import  axiosInstance  from '../axiosInstance.ts';
import { ServerCurrenciesSymbols, CurrencySymbol } from '../../../../@types';
export const getCurrencies  = async ()  => {
  return axiosInstance.get<ServerCurrenciesSymbols>(`/list`)
      .then(data  => {
        return Object.entries(data?.data?.currencies).map(([symbol, value]: [string, any]): CurrencySymbol => ({ symbol: symbol, name: value}))
      })
}