import axios from 'axios';

export default () => axios.create({
  baseURL: 'http://my-json-server.typicode.com/fly365com/code-challenge',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
