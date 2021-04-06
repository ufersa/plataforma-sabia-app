/* eslint-disable import/no-unresolved */
import axios from 'axios';
import { API_URL } from '@env';
import { redirect, getNavigator } from '../utils/navigator';

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401 && getNavigator().state.routeName !== 'SignIn') {
      redirect('Logout');
    }
    return Promise.reject(error);
  },
);

export default api;
