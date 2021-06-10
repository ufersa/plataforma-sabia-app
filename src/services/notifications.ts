import api from './api';

interface GetMessagesProps {
  perPage?: number,
  orderBy?: string,
  order?: string,
}

/**
 * Fetches user messages
 *
 * @param {object} options Optional params
 * @returns {Array} User messages
 */
export const getMessages = async (params?: GetMessagesProps) => {
  const response = await api.get('messages', {
    params: {
      ...params,
      embed: true,
    },
  });

  if (response.status !== 200) return {};

  const { data } = response;

  return data;
};

interface MarkAsReadProps {
  messages: number[],
}

/**
 * Message mark as read status
 *
 * @param {array} messages The message ID's
 */
export const markAsRead = async (params?: MarkAsReadProps) => {
  const response = await api.put('messages/mark-as-read', {
    ...params,
  });

  if (response.status !== 200) return false;

  const { data } = response;

  return data;
};
