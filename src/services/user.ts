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

  const { data } = response;
  return data;
};
