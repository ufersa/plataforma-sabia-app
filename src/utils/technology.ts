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

/**
 * Normalizes knowledge areas from API to fill technology form using react-hook-form fields array pattern
 *
 * @param {object} knowledgeArea Knowledge area object
 * @returns {object} Normalized areas for react-hook-form use
 */
export const normalizeKnowledgeAreas = (knowledgeArea) => {
  const fields = ['greatArea', 'area', 'subArea', 'speciality'];

  return fields.reduce((acc, field, index) => {
    if (knowledgeArea[field]) {
      acc[`knowledge_area_id[${index}]`] = knowledgeArea[field].knowledge_area_id;
    }

    return acc;
  }, {});
};

interface AttachmentsProps {
  url: string;
}

/**
 * Normalize attachments coming from the api.
 *
 * @param {object} attachments The raw attachments comming from the api.
 * @returns {{images: [], documents: []}} Normalized attachments.
 */
export const normalizeAttachments = (attachments: AttachmentsProps[]) => ({
  images: attachments.filter((file) => file.url.indexOf('.pdf') === -1),
  documents: attachments.filter((file) => file.url.indexOf('.pdf') !== -1),
});

// Measure Units used on technology costs
export const unitsOptions = [
  {
    value: 'und',
    label: 'Unidade',
  },
  {
    value: 'cx',
    label: 'Caixa',
  },
  {
    value: 'pc',
    label: 'Pacote',
  },
  {
    value: 'sc',
    label: 'Saco',
  },
  {
    value: 'mil',
    label: 'Milheiro',
  },
  {
    value: 'mm',
    label: 'Milímetro',
  },
  {
    value: 'cm',
    label: 'Centímetro',
  },
  {
    value: 'm',
    label: 'Metro',
  },
  {
    value: 'km',
    label: 'Quilômetro',
  },
  {
    value: 'pol',
    label: 'Polegada',
  },
  {
    value: 'mg',
    label: 'Miligrama',
  },
  {
    value: 'g',
    label: 'Grama',
  },
  {
    value: 'kg',
    label: 'Quilograma',
  },
  {
    value: 'ml',
    label: 'Mililitro',
  },
  {
    value: 'l',
    label: 'Litro',
  },
  {
    value: 'gl',
    label: 'Galão',
  },
  {
    value: 'lt',
    label: 'Latão',
  },
  {
    value: 'm2',
    label: 'Metro Quadrado',
  },
  {
    value: 'm3',
    label: 'Metro cúbico',
  },
  {
    value: 'km2',
    label: 'Quilômetro quadrado',
  },
  {
    value: 'km3',
    label: 'Quilômetro cúbico',
  },
  {
    value: 'ha',
    label: 'Hectare',
  },
  {
    value: 'month',
    label: 'Mês',
  },
  {
    value: 'day',
    label: 'Dia',
  },
  {
    value: 'h',
    label: 'Hora',
  },
  {
    value: 'min',
    label: 'Minuto',
  },
  {
    value: 'others',
    label: 'Outro',
  },
];

export const TYPES = [
  { label: 'Equipamento', value: 'equipment' },
  { label: 'Material', value: 'material' },
  { label: 'Metodologia', value: 'methodology' },
  { label: 'Modelo', value: 'model' },
  { label: 'Processo', value: 'process' },
  { label: 'Serviço', value: 'service' },
  { label: 'Software', value: 'software' },
  { label: 'Outro', value: 'other' },
];
