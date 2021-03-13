/* eslint-disable react/style-prop-object */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, connectSearchBox } from 'react-instantsearch-native';
import { Feather } from '@expo/vector-icons';
import {
  ALGOLIA_APP_ID,
  ALGOLIA_ADMIN_KEY,
  ALGOLIA_INDEX_NAME_TECHNOLOGY,
  ALGOLIA_INDEX_NAME_SERVICE,
} from '@env';
import * as S from './styles';
import { Input, Tabs } from '../../components';
import SearchList from './components/SearchList';

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
  const indexSearch = [ALGOLIA_INDEX_NAME_TECHNOLOGY, ALGOLIA_INDEX_NAME_SERVICE];

  const onChange = (idx: number) => setTab(idx);

  // useEffect(() => {}, [tab]);

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
                content: <SearchList index={ALGOLIA_INDEX_NAME_TECHNOLOGY} />,
              },
              {
                title: 'Serviços',
                content: <SearchList index={ALGOLIA_INDEX_NAME_SERVICE} />,
              },
            ]}
          />
        </S.Container>
      </InstantSearch>
    </S.Wrapper>
  );
};

export default Search;
