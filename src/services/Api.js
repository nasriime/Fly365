import axios from 'axios';

export default () => axios.create({
  baseUrl: 'http://my-json-server.typicode.com/fly365com/code-challenge',
});
