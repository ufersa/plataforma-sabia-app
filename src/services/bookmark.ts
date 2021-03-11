/* eslint-disable import/prefer-default-export */
import api from './api';

interface BookmarkRequestProps {
  active: boolean
  technologyId?: number
  serviceId?: number
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
const parseHandleBookmarkRequest = ({
  active = true, technologyId, serviceId, userId,
}: BookmarkRequestProps) => {
  let method;
  let endpoint;
  let data;

  if (active) {
    method = api.delete;
    endpoint = `user/${userId}/bookmarks`;
    data = {
      params: {
        technologyIds: [technologyId].filter(Boolean),
        serviceIds: [serviceId].filter(Boolean),
      },
    };
  } else {
    method = api.post;
    endpoint = 'bookmarks';
    data = {
      technologyIds: [technologyId].filter(Boolean),
      serviceIds: [serviceId].filter(Boolean),
    };
  }
  return {
    method,
    endpoint,
    data,
  };
};

/**
 * Create or delete an user bookmark.
 *
 * @param {HandleBookmarkRequest} params Bookmark params
 * @returns {object} The newly bookmark
 */
export const handleBookmark = async (params: BookmarkRequestProps): Promise<any> => {
  const {
    method, endpoint, data,
  } = parseHandleBookmarkRequest(params);

  const response = await method(endpoint, data);
  return response;
};

export const getBookmarks = async () => {
  const bookmarksResponse = await api.get('user/me', { params: { bookmarks: true } });
  const bookmarks = bookmarksResponse.data.technologyBookmarks;
  return bookmarks;
};
