/* eslint-disable camelcase */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/style-prop-object */
import React, { Dispatch, SetStateAction, useState } from 'react';
import {
  Platform,
  StatusBar as StatusBarHelper,
  SafeAreaView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import { format } from 'date-fns';
import {
  ALGOLIA_APP_ID,
  ALGOLIA_ADMIN_KEY,
} from '@env';
import algoliasearch from 'algoliasearch/lite';
import {
  connectInfiniteHits, connectSearchBox, Index, InstantSearch,
} from 'react-instantsearch-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as S from './styles';
import { Card, Modal } from '../../../components';
import { algoliaIndexes } from '../../../utils/algolia';
import Empty from '../components/Empty';

const searchClient = algoliasearch(
  ALGOLIA_APP_ID,
  ALGOLIA_ADMIN_KEY,
);

export interface CardProps {
  data: {
    id: number
    title: string
    description: string
    created_at: string
    updated_at: string
    keywords: string[],
    user: {
      id: number
      full_name: string
    },
    objectID: string
  }
  showModal: Dispatch<SetStateAction<boolean>>
  selectItem: Dispatch<any>
}

const IdeaCard = ({ data, showModal, selectItem }: CardProps): JSX.Element => (
  <S.CardWrapper>
    <Card>
      <S.CardContainer>
        <S.CardTitle>
          {data.title.trim()}
        </S.CardTitle>
        <S.Description>
          {data.description}
        </S.Description>
        <S.HWrapper>
          {data.keywords.map((item, idx) => (
            <S.CardTag key={`${data.objectID}-${idx}`}><S.CardTagText>{item}</S.CardTagText></S.CardTag>
          ))}
        </S.HWrapper>
        <S.HWrapper>
          <S.DateText>
            <Feather name="calendar" size={16} color="#a5a5a5" />
            {' '}
            {format(new Date(data.created_at.substr(0, 10)), 'dd LLL y')}
          </S.DateText>
          <S.UserText>
            <Feather name="user" size={16} color="#a5a5a5" />
            {' '}
            {data.user.full_name}
          </S.UserText>
        </S.HWrapper>
      </S.CardContainer>
      <S.CardAction>
        <S.CardButton
          onPress={() => {
            selectItem(data);
            showModal(true);
          }}
        >
          <S.CardText>Ver detalhes</S.CardText>
        </S.CardButton>
      </S.CardAction>
    </Card>
  </S.CardWrapper>
);

const SearchBox = connectSearchBox((props: any): JSX.Element => {
  const { refine, currentRefinement } = props;

  return (
    <S.InputText
      type="default"
      placeholder="Buscar soluções"
      icon={<Feather name="search" size={24} color="#a5a5a5" />}
      onChangeText={(text) => refine(text)}
      value={currentRefinement}
    />
  );
});

interface SearchListProps {
  hits: any
  refine?: () => void
  hasMore: boolean
  renderOn?: () => JSX.Element
}

export const SearchList = connectInfiniteHits(({
  hits,
}: SearchListProps): JSX.Element => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const [showItem, setShowItem] = useState(null);

  return (
    hits.length === 0
      ? <Empty type="editais" />
      : (
        <>
          <S.ItemCards>
            {hits.map((item: any) => (
              <IdeaCard key={item.objectID} data={item} showModal={setShowModal} selectItem={setShowItem} />
            ))}
          </S.ItemCards>

          {showItem !== null && (
            <Modal
              title=""
              height="60%"
              animationType="slide"
              visible={showModal}
              onClose={() => {
                setShowModal(false);
              }}
            >
              <S.ModalContent>
                <ScrollView style={{ marginBottom: 36 }}>
                  <S.CardContainer>
                    <S.CardTitle>
                      {showItem.title ?? 'Oi'}
                    </S.CardTitle>
                    <S.Description>
                      {showItem.description}
                    </S.Description>
                    <S.HWrapper>
                      {showItem.keywords.map((item: any, idx: number) => (
                        <S.CardTag key={`${showItem.objectID}-${idx}`}><S.CardTagText>{item}</S.CardTagText></S.CardTag>
                      ))}
                    </S.HWrapper>
                    <S.HWrapper>
                      <S.DateText>
                        <Feather name="calendar" size={16} color="#a5a5a5" />
                        {' '}
                        {format(new Date(showItem.created_at.substr(0, 10)), 'dd LLL y')}
                      </S.DateText>
                      <S.UserText>
                        <Feather name="user" size={16} color="#a5a5a5" />
                        {' '}
                        {showItem.user.full_name}
                      </S.UserText>
                    </S.HWrapper>
                    <S.CardButton
                      onPress={() => {
                        setShowModal(false);
                      }}
                    >
                      <S.CardText>Voltar para Ideias</S.CardText>
                    </S.CardButton>
                  </S.CardContainer>
                </ScrollView>
              </S.ModalContent>
            </Modal>
          )}
        </>
      )
  );
});

const IdeasBank = (): JSX.Element => {
  const indexSearch = algoliaIndexes.ideas;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBarHelper.currentHeight : 0,
      }}
    >
      <S.Wrapper>
        <StatusBar style="auto" />
        <InstantSearch
          searchClient={searchClient}
          indexName={indexSearch}
        >
          <S.Container>
            <S.Title>Banco de</S.Title>
            <S.BoldTitle>Ideias</S.BoldTitle>
            <S.InputContainer>
              <SearchBox />
              <S.ButtonWrapper
                onPress={() => {}}
              />
            </S.InputContainer>

            <Index indexName={indexSearch}>
              <SearchList />
            </Index>

          </S.Container>
        </InstantSearch>
      </S.Wrapper>

    </SafeAreaView>
  );
};

export default IdeasBank;
