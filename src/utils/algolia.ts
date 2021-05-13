/* eslint-disable import/no-unresolved */
import {
  NODE_ENV,
  ALGOLIA_PREFIX,
  ALGOLIA_INDEX_NAME_TECHNOLOGY,
  ALGOLIA_INDEX_NAME_SERVICE,
  ALGOLIA_INDEX_NAME_IDEAS,
  ALGOLIA_INDEX_NAME_ANNOUNCEMENTS,
} from '@env';

export const algoliaIndexes = {
  technology: `${ALGOLIA_PREFIX}_${ALGOLIA_INDEX_NAME_TECHNOLOGY}_${NODE_ENV}`,
  service: `${ALGOLIA_PREFIX}_${ALGOLIA_INDEX_NAME_SERVICE}_${NODE_ENV}`,
  ideas: `${ALGOLIA_PREFIX}_${ALGOLIA_INDEX_NAME_IDEAS}_${NODE_ENV}`,
  announcements: `${ALGOLIA_PREFIX}_${ALGOLIA_INDEX_NAME_ANNOUNCEMENTS}_${NODE_ENV}`,
};
