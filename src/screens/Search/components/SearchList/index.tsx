import React, { useEffect, useState } from 'react';
import { Index, connectRefinementList } from 'react-instantsearch-native';
import { List } from './styles';

interface SearchListProps {
  index: string
  type: string
  filters?: {
    refinementList?: {
      [key: string]: any
    }
  }
}

interface FilterStates {
  [key: string]: any
}

const Refinement = connectRefinementList(() => null);

export default ({ index, type, filters }: SearchListProps): JSX.Element => {
  const { refinementList } = filters;

  const [filtersState, setFiltersState] = useState<FilterStates>({});

  useEffect(() => {
    if (refinementList) setFiltersState(refinementList);
  }, [refinementList]);

  return (
    <Index indexName={index}>
      <List type={type} />
      <Refinement
        attribute="type"
        defaultRefinement={
          filtersState?.type ? filtersState.type : []
        }
      />
      <Refinement
        attribute="classification"
        defaultRefinement={
          filtersState?.classification ? filtersState.classification : []
        }
      />
      <Refinement
        attribute="dimension"
        defaultRefinement={
          filtersState?.dimension ? filtersState.dimension : []
        }
      />
      <Refinement
        attribute="institution"
        defaultRefinement={
          filtersState?.institution ? filtersState.institution : []
        }
      />
      <Refinement
        attribute="keywords"
        defaultRefinement={
          filtersState?.keywords ? filtersState.keywords : []
        }
      />
    </Index>
  );
};
