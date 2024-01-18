
import  axiosInstance  from '../axiosInstance.ts';
import { ServerCurrenciesSymbols } from '../../../../@types';
export const getCurrencies  = async ()  => {
  return axiosInstance.get<ServerCurrenciesSymbols>(`/list`)
}