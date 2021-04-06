import api from './api';

interface UpdateUserParams {}

/**
 * Updates an existing user.
 *
 * @param {number} id The id of the user to update
 * @param {object} data The user data.
 *
 * @returns {object} The updated user.
 */
export const updateUser = async (id: string, params?: UpdateUserParams) => {
  const response = await api.put(`users/${id}`, params);

  if (response.status !== 200) {
    return false;
  }

  const responseMe = await api.get('user/me', { params: { bookmarks: true } });
  const user = responseMe.data;

  const { data } = response;
  return { ...data, ...user };
};

interface UpdateUserPasswordParams {
  currentPassword: string
  newPassword: string
}

/**
 * Updates the password of a logged in user.
 *
 * @param {object} data User data
 * @param {object} data.currentPassword The current password
 * @param {object} data.newPassword The new password
 *
 * @returns {object} The success message or an error object.
 */
export const updateUserPassword = async ({ currentPassword, newPassword }: UpdateUserPasswordParams) => {
  const response = await api.put('user/change-password', { currentPassword, newPassword });

  return response.data;
};
