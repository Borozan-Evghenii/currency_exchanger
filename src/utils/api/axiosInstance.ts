import axios from 'axios';

import { queryConstants } from '../constants';


const axiosInstance = axios.create({
  baseURL: queryConstants.baseUrl,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});


export default axiosInstance