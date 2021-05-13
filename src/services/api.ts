/* eslint-disable import/no-unresolved */
import axios from 'axios';
import { API_URL } from '@env';

const api = axios.create({
  baseURL: API_URL,
});

export default api;
