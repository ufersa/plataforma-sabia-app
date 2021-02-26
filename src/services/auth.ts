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

interface RegisterProps {
  full_name: string;
  email: string;
  password: string;
  disclaimers: number[]
}

/**
 * Calls the register endpoint.
 *
 * @param {string} fullname The full name of the user.
 * @param {string} email User email.
 * @param {string} password User password.
 */
export async function register({
  full_name, email, password, disclaimers,
}: RegisterProps): Promise<any> {
  return api.post('auth/register', {
    full_name,
    email,
    password,
    disclaimers,
  });
}
