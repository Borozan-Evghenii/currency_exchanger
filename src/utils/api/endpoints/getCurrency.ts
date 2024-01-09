import { queryConstants } from '../../constants';
import  axiosInstance  from '../axiosInstance.ts';

export const getCurrencies  = async ()  => {
  return axiosInstance.get(`/currencies?apikey=${queryConstants.apiKey}`).then(data => data?.data)
}