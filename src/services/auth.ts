/* eslint-disable camelcase */
import api from './api';

/**
 * Attempts to authenticate the provided user within the API.
 *
 * @param {string} email The email in the system.
 * @param {string} password The password in the system.
 *
 * @returns {{ token, user }| boolean} Token and User information or false;
 */
export async function login(email: string, password: string) {
  const response = await api.post('auth/login', {
    email,
    password,
  });

  if (response.status === 200 && response.data.token) {
    const { token } = response.data;

    api.defaults.headers.authorization = `Bearer ${token}`;

    const responseMe = await api.get('user/me', {});
    const { id, full_name } = responseMe.data;

    const user = { id, name: full_name, email };

    return { token, user };
  }

  return false;
}
