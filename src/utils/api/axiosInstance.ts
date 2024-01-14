import axios from 'axios';

import { QueryConstants } from '../constants';


const axiosInstance = axios.create({
  baseURL: QueryConstants.baseUrl,
  timeout: 5000,
  params: {
    access_key: QueryConstants.apiKey
  },
  headers: {
    'Content-Type': 'application/json',
  },
});


export default axiosInstance