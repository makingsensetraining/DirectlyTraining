import axios from 'axios';

export function fetchUsers () {
  return axios.get('http://localhost:3030/service/users?page=1&limit=100');
}
