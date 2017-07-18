/**
 * Created by 001758 on 2017/7/18.
 */
import request from '../utils/request';

export async function getUser() {
  return request('/api/users');
}

export async function editUser(id, values) {
  return request(`/api/users/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(values),
  });
}
