/* eslint-disable camelcase */
import {
  normalizeAttachments,
  normalizeCosts, normalizeTaxonomies, normalizeTerms, normalizeTrl,
} from '../utils/technology';
import api from './api';

interface OptionsProp {
  normalizeTaxonomies?: boolean
  normalize?: boolean
  term?: any
  taxonomies?: any
  params?: {
    perPage?: number
    page?: number
  }
  embed?: boolean
}

/**
 * Fetches a technology.
 *
 * @param {number|string} id The id or slug of the technology to retrieve.
 * @param {object} options Optional params.
 * @param {boolean} [options.embed=true] Response with embed.
 * @param {string|number} [options.term] Filter term by id or slug.
 * @param {string|number} [options.taxonomy] Filter taxonomy by id or slug.
 */
export const getTechnology = async (id: number, options: OptionsProp) => {
  const response = await api.get(`technologies/${id}`, { params: { embed: true } });

  if (response.status !== 200) {
    return false;
  }

  if (options.normalizeTaxonomies && response?.data?.terms) {
    response.data.taxonomies = normalizeTaxonomies(response.data.terms);
  }

  if (options.normalize && response?.data?.terms) {
    response.data.terms = normalizeTerms(response.data.terms);
  }

  const { slug } = normalizeTrl(response.data.terms);
  response.data.currentLevel = Number(slug.split('-', 2)[1]) || 1;

  return response.data;
};

/**
 * Fetches favorite technologies of a given user.
 *
 * @param {number} userId The user id.
 * @param {object} options Optional params
 */
export const getUserBookmarks = async (id: string, options: OptionsProp = { embed: true }) => {
  const response = await api.get(`user/${id}/bookmarks`, { params: options });

  if (response.status !== 200) {
    return false;
  }

  return response.data;
};

/**
 * Fetches technologies.
 *
 * @param {number} id Technology id
 * @returns {Array} The terms.
 */
export const getTechnologyTerms = async (id: number) => {
  const response = await api.get(`technologies/${id}/terms?embed`);
  if (response.status !== 200) {
    return false;
  }

  return response.data;
};

/**
 * Fetches technologies.
 *
 * @param {number} id The id of the technology to retrieve costs from
 * @param {object} options Optional params.
 * @param {boolean} options.normalize Whether to normalize data to match the shape expected by the technology form.
 * @returns {Array} Technology costs.
 */
export const getTechnologyCosts = async (id: number, options: OptionsProp) => {
  const response = await api.get(`technologies/${id}/costs`);

  if (response.status !== 200) {
    return false;
  }

  if (!options.normalize) {
    return response.data;
  }

  const { costs } = response.data;

  return {
    ...response.data,
    costs: normalizeCosts(costs),
  };
};

export const getAttachments = async (id: number, options: OptionsProp = {}) => {
  if (!id) {
    return [];
  }

  const params = options.params || {};
  const perPage = params?.perPage || 100;
  const page = params?.page || 1;

  const response = await api.get('uploads', {
    params: {
      object: 'technologies',
      object_id: id,
      perPage,
      page,
      ...params,
    },
  });

  if (response.status !== 200) {
    return [];
  }

  if (options.normalize && response.data) {
    response.data = normalizeAttachments(response.data);
  }

  return response.data;
};

/**
 * Fetch technology questions.
 *
 * @param {number} id The technology id
 * @param {object} options Optional params
 * @param {boolean} [options.embed] Response with embed.
 * @param {boolean} [options.page] The page number for offset.
 *
 * @returns {Array} The current technology reviews
 */
export const getTechnologyQuestions = async (id: number, options: any = {}) => {
  const response = await api.get(`technologies/${id}/questions`, {
    params: {
      ...options,
      order: 'DESC',
      embed: true,
    },
  });

  if (response.status !== 200 || !id) return [];

  const { data } = response;

  return data;
};

/**
 * Creates a new technology question with the provided data.
 *
 * @param {object} data Technology data.
 * @param {number} data.technology Technology id.
 * @param {string} data.question Question text.
 * @returns {object} The newly created technology question.
 */
export const createTechnologyQuestion = async (data: any) => {
  const response = await api.post('questions', data);

  if (response.status !== 200) {
    return false;
  }

  return response.data;
};

export interface BuyTechnologyProps {
  quantity: number
  use: string
  funding: string
  comment?: string
  type: string
}

/**
 * Creates a technology order
 *
 * @param {string|number} id The technology ID
 * @returns {object} Order response
 */
export const buyTechnology = async (id: number, {
  quantity,
  use,
  funding,
  comment,
  type,
}: BuyTechnologyProps) => {
  const response = await api.post(`technologies/${id}/orders`, {
    quantity,
    use,
    funding,
    comment,
    type,
  });

  if (response.status !== 200) return false;

  return response.data;
};

/**
 * Fetch technology reviews.
 *
 * @param {string|number} id Technology id.
 * @param {object} params Optional params.
 * @param {('created_at'|'rating')} [params.orderBy='created_at'] Order items by a column.
 * @param {('ASC'|'DESC')} [params.order='ASC'] Order.
 *
 * @returns {Array} The current technology reviews
 */
export const getReviews = async (id: number, params = { orderBy: 'created_at', order: 'DESC' }) => {
  if (!id) {
    return [];
  }

  const response = await api.get(`technologies/${id}/reviews`, { params });

  if (response.status !== 200) {
    return [];
  }

  return response.data;
};

interface CreateReviewProps {
  technologyId: number
  content: string
  rating: number
  positive: string[]
  negative: string[]
}

/**
 * Creates a new technology review with the provided data.
 *
 * @param {object} data Technology data.
 * @param {number} data.technologyId Technology id.
 * @param {string} data.content Review content.
 * @param {number} data.rating Review rating.
 * @param {string[]} data.positive Review positive points.
 * @param {string[]} data.negative Review negative points.
 * @returns {object} The newly technology review.
 */
export const createTechnologyReview = async (data: CreateReviewProps) => {
  const response = await api.post('reviews', data);

  if (response.status !== 200) {
    return false;
  }

  return response.data;
};
