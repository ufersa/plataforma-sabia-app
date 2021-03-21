/* eslint-disable react/style-prop-object */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, connectSearchBox } from 'react-instantsearch-native';
import { Feather } from '@expo/vector-icons';
import {
  ALGOLIA_APP_ID,
  ALGOLIA_ADMIN_KEY,
} from '@env';
import * as S from './styles';
import { Input, Tabs } from '../../components';
import SearchList from './components/SearchList';
import { algoliaIndexes } from '../../utils/algolia';

const searchClient = algoliasearch(
  ALGOLIA_APP_ID,
  ALGOLIA_ADMIN_KEY,
);

const SearchBox = connectSearchBox((props: any): JSX.Element => {
  const { refine, currentRefinement } = props;

  return (
    <Input
      type="default"
      placeholder="Buscar soluções"
      icon={<Feather name="search" size={24} color="#a5a5a5" />}
      onChangeText={(text) => refine(text)}
      value={currentRefinement}
    />
  );
});

const Search = (): JSX.Element => {
  const [tab, setTab] = useState<number>(1);
  const indexSearch = [algoliaIndexes.technology, algoliaIndexes.service];

  const onChange = (idx: number) => setTab(idx);

  return (
    <S.Wrapper>
      <StatusBar style="dark" />
      <InstantSearch
        searchClient={searchClient}
        indexName={indexSearch[tab]}
      >
        <S.Container>
          <S.SearchWrapper>
            <SearchBox />
          </S.SearchWrapper>
          <Tabs
            onSelect={onChange}
            tabs={[
              {
                title: 'Tecnologias',
                content: <SearchList index={algoliaIndexes.technology} type="technology" />,
              },
              {
                title: 'Serviços',
                content: <SearchList index={algoliaIndexes.service} type="service" />,
              },
            ]}
          />
        </S.Container>
      </InstantSearch>
    </S.Wrapper>
  );
};

export default Search;
