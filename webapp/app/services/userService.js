import axios from 'axios';
import { DEFAULT_API_BASE_URL } from '../constants';

export function fetchUsers(params = {}) {
  return axios.get(`${DEFAULT_API_BASE_URL}/users`, { params });
}

export function createUsers(data = {}) {
  return axios.post(`${DEFAULT_API_BASE_URL}/users`, { ...data });
}

export function deleteUsers(userId) {
  return axios.delete(`${DEFAULT_API_BASE_URL}/users${userId}`);
}

export function updateUsers(userId, data = {}) {
  return axios.put(`${DEFAULT_API_BASE_URL}/users/${userId}`, { ...data });
}
