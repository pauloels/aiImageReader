import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.clarifai.com',
  headers: {
    Accept: 'application/json',
    Authorization: 'key 053411bdfbe2427db68366b4fdc86f22',
  },
});
