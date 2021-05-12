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

    const responseMe = await api.get('user/me', { params: { bookmarks: true } });
    const user = responseMe.data;

    return { token, user };
  }

  return false;
}

export async function getMe() {
  const responseMe = await api.get('user/me', { params: { bookmarks: true } });
  const user = responseMe.data;

  return user;
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

interface ConfirmAccountProps {
  email: string;
  token: string;
}

/**
 * Calls the confirmation account endpoint.
 *
 * @param {string} token The confirmation token.
 * @param {string} email User email.
 */
export async function accountConfirmation({ token, email }: ConfirmAccountProps) {
  return api.post('auth/confirm-account', { token, email });
}
