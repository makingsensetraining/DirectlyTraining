import { get } from './helpers';

export function getUserId(user = {}) {
  let userId = get(user, '_id');

  if (!userId) {
    userId = get(user, 'id');
  }

  return userId;
}
