export const normalizeTaxonomies = (terms: any) => {
  if (!terms?.length) {
    return null;
  }

  let normalizedTaxonomies = {};

  normalizedTaxonomies = terms?.map((term: any) => ({
    key: term?.taxonomy?.taxonomy,
    value: term?.term,
  }));

  normalizedTaxonomies = Object.values(
    normalizedTaxonomies.reduce((acc, { key, value }) => {
      acc[key] = acc[key] || { key, value: [] };
      acc[key].value.push(value);
      return acc;
    }, {}),
  ).reduce((arr, { key, value }) => ({ ...arr, [key.toLowerCase()]: [...value].join(', ') }), {});

  return normalizedTaxonomies;
};

export const normalizeTerms = (terms: any) => {
  const normalizedTerms = {};
  const normalizedTermsObject = {};

  // unique taxonomies
  let taxonomies = terms.map(({ taxonomy }) => taxonomy);
  taxonomies = Array.from(new Set(terms.map(({ taxonomy }) => taxonomy.id))).map((id) => taxonomies.find((taxonomy) => taxonomy.id === id));

  taxonomies.forEach((taxonomy) => {
    normalizedTerms[taxonomy.taxonomy.toLowerCase()] = [];
    normalizedTermsObject[taxonomy.taxonomy.toLowerCase()] = [];
  });

  terms.forEach((term) => {
    const taxonomy = term.taxonomy.taxonomy.toLowerCase();
    normalizedTerms[taxonomy].push(term.id);
    normalizedTermsObject[taxonomy].push(term);
  });

  if (normalizedTerms.category) {
    normalizedTerms.subcategory = normalizedTermsObject.category
      .filter((category) => category.parent_id > 0)
      .map((category) => category.id);

    normalizedTerms.category = normalizedTermsObject.category
      .filter((category) => !category.parent_id)
      .map((category) => category.id);
  }

  return normalizedTerms;
};

export const normalizeTrl = (terms = []) => {
  const { term = '', slug = '' } = terms.find((item) => item.taxonomy?.taxonomy === 'STAGE') || {};

  return { term, slug };
};

/**
 * Normalize costs coming from the api.
 *
 * @param {object} costs The raw costs comming from the api.
 *
 * @returns {object} Normalized costs.
 */
export const normalizeCosts = (costs) => {
  const normalizedCosts = {};

  costs.forEach((cost) => {
    const { cost_type, ...rest } = cost;

    if (!normalizedCosts[cost_type]) {
      normalizedCosts[cost_type] = [];
    }

    normalizedCosts[cost_type].push(rest);
  });

  return normalizedCosts;
};
