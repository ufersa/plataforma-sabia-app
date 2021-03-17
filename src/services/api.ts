import axios from 'axios';
// eslint-disable-next-line import/no-unresolved
import { API_URL } from '@env';
import { redirect } from '../utils/navigator';

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      redirect('Logout');
    }
    return Promise.reject(error);
  },
);

export default api;
