import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { connectInfiniteHits } from 'react-instantsearch-native';
import Card from '../Card';
import Empty from '../Empty';

interface ListProps {
  hits: any
  refine: () => void
  hasMore: boolean
  type: string
}

const ListWrapper = styled.FlatList`
  padding-top: 16px;
  padding-horizontal: 16px;
  height: 100%;
`;

export const List = connectInfiniteHits(({
  hits,
  hasMore,
  refine,
  type,
}: ListProps): JSX.Element => {
  const navigation = useNavigation();

  return (
    hits.length === 0
      ? <Empty />
      : (
        <ListWrapper
          data={hits}
          keyExtractor={(item: any) => item.objectID}
          onEndReached={() => hasMore && refine()}
          renderItem={({ item }): JSX.Element => (
            <Card
              {...item}
              onPress={() => navigation.navigate('Technology', {
                data: {
                  ...item,
                  image: item.thumbnail?.url,
                },
                type,
              })}
            />
          )}
          contentContainerStyle={{
            paddingBottom: 266,
          }}
        />
      )
  );
});
