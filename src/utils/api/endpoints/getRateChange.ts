
import  axiosInstance  from '../axiosInstance.ts';
import { ServerCurrencyChange } from '../../../../@types';

export const getRateChange = async (start_date:string, end_date: string, source?:string, currencies?:string)  => {
  return axiosInstance.get<ServerCurrencyChange>(`/change`,{
    params: {
      source: source || 'MDL',
      currencies: currencies,
      start_date : start_date,
      end_date: end_date,
    }
  })
}