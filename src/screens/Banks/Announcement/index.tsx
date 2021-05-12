/* eslint-disable import/no-unresolved */
/* eslint-disable react/style-prop-object */
import React, { Dispatch, SetStateAction, useState } from 'react';
import {
  Platform,
  StatusBar as StatusBarHelper,
  SafeAreaView,
  Linking,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
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
import { Button, Card, Modal } from '../../../components';
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
    keywords: string[],
    institution: {
      name: string
    },
    objectID: string
  }
  showModal: Dispatch<SetStateAction<boolean>>
  selectItem: Dispatch<any>
}

const AnnouncementCard = ({ data, showModal, selectItem }: CardProps): JSX.Element => (
  <S.CardWrapper>
    <Card>
      <S.CardContainer>
        <S.CardTitle>
          {data.title.trim()}
        </S.CardTitle>
        <S.Institution>
          {data.institution.name}
        </S.Institution>
        <S.Description>
          {data.description}
        </S.Description>
        <S.HWrapper>
          {data.keywords.map((item, idx) => (
            <S.CardTag key={`${data.objectID}-${idx}`}><S.CardTagText>{item}</S.CardTagText></S.CardTag>
          ))}
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
}

export const SearchList = connectInfiniteHits(({
  hits,
}: SearchListProps): JSX.Element => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const [showItem, setShowItem] = useState(null);

  return (
    hits.length === 0
      ? <Empty />
      : (
        <>
          <S.ItemCards showsVerticalScrollIndicator={false}>
            {hits.map((item: any) => (
              <AnnouncementCard key={item.objectID} data={item} showModal={setShowModal} selectItem={setShowItem} />
            ))}
          </S.ItemCards>

          {showItem !== null && (
            <Modal
              title=""
              height="70%"
              animationType="slide"
              visible={showModal}
              onClose={() => {
                setShowModal(false);
              }}
            >
              <S.ModalContent>
                <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 36 }}>
                  <S.CardContainer>
                    <S.CardTitle>
                      {showItem.title}
                    </S.CardTitle>
                    <S.Institution>
                      {showItem.institution.name}
                    </S.Institution>
                    <S.Description>
                      {showItem.description}
                    </S.Description>

                    <S.HWrapper>
                      <S.Label>Número do edital: </S.Label>
                      <S.Value>{showItem.announcement_number}</S.Value>
                    </S.HWrapper>

                    <S.HWrapper>
                      <S.Label>Inscrições: </S.Label>
                      <S.Value>
                        {showItem.start_date}
                        {' '}
                        à
                        {' '}
                        {showItem.end_date}
                      </S.Value>
                    </S.HWrapper>

                    <S.HWrapper>
                      <S.Label>Recursos Financeiros: </S.Label>
                      <S.Value>{showItem.financial_resources}</S.Value>
                    </S.HWrapper>

                    <S.HWrapper>
                      <S.Label>Público-alvo: </S.Label>
                      <S.Value>{showItem.targetAudiences.map((item: any, idx: number) => ((idx) ? `, ${item}` : `${item}`))}</S.Value>
                    </S.HWrapper>

                    <S.HWrapper>
                      <S.Label>Observações: </S.Label>
                      <S.Value>{showItem.comment}</S.Value>
                    </S.HWrapper>

                    <S.HWrapper>
                      {showItem.keywords.map((item: any, idx: number) => (
                        <S.CardTag key={`${showItem.objectID}-${idx}`}><S.CardTagText>{item}</S.CardTagText></S.CardTag>
                      ))}
                    </S.HWrapper>

                    <S.HWrapper style={{ marginTop: 36 }}>
                      <Button
                        variant="primary"
                        onPress={() => {
                          Linking.openURL(showItem.url);
                        }}
                      >
                        Ir para o site do edital
                      </Button>
                    </S.HWrapper>
                    <S.CardButton
                      onPress={() => {
                        setShowModal(false);
                      }}
                    >
                      <S.CardText>Voltar para Editais</S.CardText>
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

const AnnouncementsBank = (): JSX.Element => {
  const indexSearch = algoliaIndexes.announcements;

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
            <S.BoldTitle>Editais</S.BoldTitle>
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

export default AnnouncementsBank;
