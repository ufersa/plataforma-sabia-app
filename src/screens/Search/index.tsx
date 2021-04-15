/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  connectSearchBox,
  connectRefinementList,
} from 'react-instantsearch-native';
import { Feather } from '@expo/vector-icons';
import {
  ALGOLIA_APP_ID,
  ALGOLIA_ADMIN_KEY,
} from '@env';
import * as S from './styles';
import { Input, Tabs, Modal } from '../../components';
import SearchList from './components/SearchList';
import { algoliaIndexes } from '../../utils/algolia';

const searchClient = algoliasearch(
  ALGOLIA_APP_ID,
  ALGOLIA_ADMIN_KEY,
);

interface SearchBoxProps {
  refine: (...args: any[]) => any;
  currentRefinement: string
  isSearchStalled: boolean
  toggleFilters: () => void
}

const SearchBox = connectSearchBox(({
  refine,
  currentRefinement,
  toggleFilters,
}: SearchBoxProps): JSX.Element => (
  <S.InputSearchWrapper>
    <Input
      type="default"
      placeholder="Buscar soluções"
      icon={<Feather name="search" size={24} color="#a5a5a5" />}
      onChangeText={(text) => refine(text)}
      value={currentRefinement}
      style={{ flex: 1 }}
    />
    <S.SearchFilters onPress={toggleFilters} />
  </S.InputSearchWrapper>
));

interface RefinementListProps {
  refine: (value: string[]) => any
  items: any
  filters: {
    [key: string]: any
  }
}

const RefinementList = connectRefinementList(({
  refine,
  items,
  filters = [],
}: RefinementListProps) => {
  const [filteredItems, setFilteredItems] = useState<any>([]);

  useEffect(() => {
    if (filters.length) setFilteredItems(filters);
  }, [filters]);

  return (
    items.map((item: any) => (
      <S.OptionFilter
        key={item.value}
        onPress={() => refine(item.value)}
        active={filteredItems.some((filter: string) => filter === item.label)}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <S.OptionFilterCount active={filteredItems.some((filter: string) => filter === item.label)}>
            <S.OptionFilterLabel
              active={filteredItems.some((filter: string) => filter === item.label)}
              style={{ fontSize: 12, lineHeight: 20 }}
            >
              {item.count}
            </S.OptionFilterLabel>
          </S.OptionFilterCount>
          <S.OptionFilterLabel>{item.label}</S.OptionFilterLabel>
        </View>
      </S.OptionFilter>
    ))
  );
});

const Search = (): JSX.Element => {
  const [tab, setTab] = useState<number>(1);
  const indexSearch = [algoliaIndexes.technology, algoliaIndexes.service];

  const [searchState, setSearchState] = useState<any>({});
  const [showModalFilters, setShowModalFilters] = useState<boolean>(false);

  const onChange = (idx: number) => setTab(idx);

  return (
    <S.Wrapper>
      <StatusBar style="dark" />
      <InstantSearch
        searchClient={searchClient}
        indexName={indexSearch[tab]}
        searchState={searchState}
        onSearchStateChange={setSearchState}
      >
        <S.Container>
          <S.SearchWrapper>
            <SearchBox toggleFilters={() => setShowModalFilters(true)} />
          </S.SearchWrapper>
          <Tabs
            onSelect={onChange}
            tabs={[
              {
                title: 'Tecnologias',
                content: (
                  <SearchList
                    index={algoliaIndexes.technology}
                    type="technology"
                    filters={searchState}
                  />
                ),
              },
              {
                title: 'Serviços',
                content: (
                  <SearchList
                    index={algoliaIndexes.service}
                    type="service"
                    filters={searchState}
                  />
                ),
              },
            ]}
          />
        </S.Container>
        <Modal
          title="Filtros"
          animationType="slide"
          visible={showModalFilters}
          onClose={() => setShowModalFilters(false)}
          height="80%"
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 24,
            }}
          >
            <S.FiltersTitle>Tipo</S.FiltersTitle>
            <S.FiltersWrapper>
              <RefinementList
                searchable
                filters={searchState?.refinementList?.type}
                defaultRefinement={searchState?.refinementList?.type ?? []}
                attribute="type"
              />
            </S.FiltersWrapper>
            <S.FiltersTitle>Classificação</S.FiltersTitle>
            <S.FiltersWrapper>
              <RefinementList
                searchable
                filters={searchState?.refinementList?.classification}
                attribute="classification"
              />
            </S.FiltersWrapper>
            <S.FiltersTitle>Dimensão</S.FiltersTitle>
            <S.FiltersWrapper>
              <RefinementList
                searchable
                filters={searchState?.refinementList?.dimension}
                attribute="dimension"
              />
            </S.FiltersWrapper>
            <S.FiltersTitle>Instituição</S.FiltersTitle>
            <S.FiltersWrapper>
              <RefinementList
                searchable
                filters={searchState?.refinementList?.institution}
                attribute="institution"
              />
            </S.FiltersWrapper>
            <S.FiltersTitle>Palavras-chave</S.FiltersTitle>
            <S.FiltersWrapper>
              <RefinementList
                searchable
                filters={searchState?.refinementList?.keywords}
                attribute="keywords"
              />
            </S.FiltersWrapper>
          </ScrollView>
        </Modal>
      </InstantSearch>
    </S.Wrapper>
  );
};

export default Search;
