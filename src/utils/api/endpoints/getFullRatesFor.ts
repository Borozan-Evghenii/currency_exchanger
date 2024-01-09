import { queryConstants } from '../../constants';
import axiosInstance from '../axiosInstance.ts';

export const getFullRatesFor = async (currency : string) => {
  return axiosInstance.get(`/latest?apikey=${queryConstants.apiKey}&base_currency=${currency}`).then(data => data.data)
}
