import React from 'react';
import { View, FlatList, ListRenderItemInfo } from 'react-native';
import styled from 'styled-components';
import RequestCard from './RequestCard';

interface ListItemProps {
  title: string
  amount: number
  status: string
};

interface ListProps {
  data: ListItemProps[]
}

const ListWrapper = styled(View)`
  flex: 1;
  margin-top: 34px;
`;

const ListContainer = styled(FlatList)`
  padding: 16px;
`;

const List = ({ data }: ListProps): JSX.Element => {
  return (
    <ListWrapper>
      {data && data.length > 0 ? (
        <ListContainer
          data={data}
          renderItem={({ item }: ListRenderItemInfo<any>) => (
            <RequestCard {...item} />
          )}
          keyExtractor={(item, idx) => idx.toString()}
        />
      ) : (
        <View></View>
      )}
    </ListWrapper>
  );
};

export default List;
