/* eslint-disable import/prefer-default-export */
import api from './api';

interface BookmarkRequestProps {
  active: boolean
  technologyId: string
  userId: string
}

/**
 * Normalize handleBookmark request
 *
 * @typedef {object} HandleBookmarkRequest
 * @property {boolean} [params.active=true] Current bookmark state
 * @property {number} params.technologyId The technology id
 * @property {number} params.userId The user id
 *
 * @param {HandleBookmarkRequest} params Bookmark params
 * @returns {object} The newly bookmark.
 */
const parseHandleBookmarkRequest = ({ active, technologyId, userId }: BookmarkRequestProps) => {
  let method;
  let endpoint;

  if (active) {
    method = api.delete;
    endpoint = `user/${userId}/bookmarks`;
  } else {
    method = api.post;
    endpoint = 'bookmarks';
  }
  return {
    method,
    endpoint,
    technologyIds: [technologyId],
  };
};

/**
 * Create or delete an user bookmark.
 *
 * @param {HandleBookmarkRequest} params Bookmark params
 * @returns {object} The newly bookmark
 */
export const handleBookmark = async (params: BookmarkRequestProps): Promise<any> => {
  const { method, endpoint, technologyIds } = parseHandleBookmarkRequest(params);

  const response = method(endpoint, {
    technologyIds,
  });

  return response;
};

export const getBookmarks = async (userId: number) => {
  const bookmarks = await api.get(`user/${userId}/bookmarks`, { embed: true });

  return bookmarks;
};
