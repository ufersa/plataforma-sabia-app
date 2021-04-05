import api from './api';

export interface SendContactProps {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

/**
 * Sends an e-mail message to the platform admin
 *
 * @param {object} payload The fields value to send to API
 * @returns {void}
 */
export const sendContact = async (payload: SendContactProps) => {
  const response = await api.post('contact', payload);

  if (response.status !== 204) return true;

  return true;
};
