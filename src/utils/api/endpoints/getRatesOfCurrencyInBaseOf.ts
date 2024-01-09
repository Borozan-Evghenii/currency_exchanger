import { queryConstants } from '../../constants';
import axiosInstance from '../axiosInstance.ts';

export const getRatesOfCurrencyInBaseOf  = async (BaseCurrency: string , currencyList: []) => {
  const currency = currencyList.join('%2')
  return axiosInstance.get(`/latest?apikey=${queryConstants.apiKey}&currency=${currency}&base_currency=${BaseCurrency}`).then(data => data.data)
}
