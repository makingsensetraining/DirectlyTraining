import axios from 'axios';
import { DEFAULT_API_BASE_URL } from '../constants';

export function fetchUsers(params = {}) {
  return axios.get(`${DEFAULT_API_BASE_URL}/users`, { params });
}

export function createUsers(body) {
  return axios.post(`${DEFAULT_API_BASE_URL}/users`, { body });
}

export function deleteUsers(userId) {
  return axios.delete(`${DEFAULT_API_BASE_URL}/users${userId}`);
}
