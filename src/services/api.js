import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://reqres.in',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
});

export default apiClient;
