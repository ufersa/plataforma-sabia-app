/* eslint-disable camelcase */
import api from './api';

interface ChatInstanceProps {
  object_type?: string
  object_id?: string | number
  target_user?: string | number
}

/**
 * Gets chat instance.
 *
 * @param {object} options Optional parameters
 * @param {string} [options.object_type] The object entity to start chatting
 * @param {string|number} [options.object_id] The object id
 * @param {string|number} [options.target_user] The user id to start chatting
 * @returns {object} The chat instance
 */
export const getChatInstance = async (options: ChatInstanceProps = {}) => {
  if (!options.object_type || !options.object_id || !options.target_user) return false;

  const response = await api.get('chat', {
    params: {
      ...options,
    },
  });

  if (response.status !== 200) return false;

  return response.data;
};

/**
 * Gets chat messages
 *
 * @param {string|number} chatId The chat instance ID
 * @param {object} options Optional parameters
 * @param {string|number} [options.offset] Offset to skip messages
 * @returns {Array} Paginated chat messages
 */
export const getChatMessages = async (chatId: string | number, options: any) => {
  if (!chatId) return false;

  const response = await api.get(`chat/${chatId}/messages`, {
    params: {
      ...options,
    },
  });

  if (response.status !== 200) return false;

  return response.data;
};

/**
 * Sends a new chat message
 *
 * @param {string|number} chatId The chat instance ID
 * @param {string} text The message content
 * @returns {object} The chat message object
 */
export const sendChatMessage = async (chatId: string | number, text: string) => {
  if (!chatId || !text) return false;

  const response = await api.post(`chat/${chatId}/messages`, { content: { text } });

  if (response.status !== 200) return false;

  return response.data;
};
