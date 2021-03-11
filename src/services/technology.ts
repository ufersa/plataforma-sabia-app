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
