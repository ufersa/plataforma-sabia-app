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
  fullname: string;
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
  fullname, email, password, disclaimers,
}: RegisterProps): Promise<any> {
  return api.post('auth/register', {
    full_name: fullname,
    email,
    password,
    disclaimers,
  });
}

// /**
//  * Calls the resend confirmation email endpoint.
//  *
//  * @param {string} email User email.
//  */
// export async function emailConfirmation(email) {
//   return apiPost('auth/resend-confirmation-email', {
//     scope: 'web',
//     email,
//   }).then((response) => response.data);
// }

// /**
//  * Will drop user's authentication cookies if present.
//  */
// export function logout() {
//   setCookie('token', '');
// }

// /**
//  * Handle password resets.
//  *
//  * @param {string} email The email in the system.
//  *
//  * @returns {boolean} The response status.
//  */
// export async function requestPasswordReset(email) {
//   return apiGet('auth/forgot-password', {
//     email,
//     scope: 'web',
//   })
//     .then((response) => response.data)
//     .catch(() => false);
// }

// /**
//  * Calls the reset password endpoint.
//  *
//  * @param {string} token The reset password token.
//  * @param {string} password New user password.
//  */
// export async function resetPassword(token, password) {
//   return apiPost('auth/reset-password', {
//     token,
//     password,
//   })
//     .then((response) => response.data)
//     .catch(() => false);
// }
