/* eslint-disable import/no-unresolved */
import {
  NODE_ENV,
  ALGOLIA_PREFIX,
  ALGOLIA_INDEX_NAME_TECHNOLOGY,
  ALGOLIA_INDEX_NAME_SERVICE,
} from '@env';

export const algoliaIndexes = {
  technology: `${ALGOLIA_PREFIX}_${ALGOLIA_INDEX_NAME_TECHNOLOGY}_${NODE_ENV}`,
  service: `${ALGOLIA_PREFIX}_${ALGOLIA_INDEX_NAME_SERVICE}_${NODE_ENV}`,
};
