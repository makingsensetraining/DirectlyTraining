import axios from 'axios';
import { DEFAULT_API_BASE_URL } from '../constants';

export function fetchUsers(params = {}) {
  return axios.get(`${DEFAULT_API_BASE_URL}/users`, { params });
}
