import React from 'react';
import { View, FlatList, ListRenderItemInfo } from 'react-native';
import styled from 'styled-components';
import { DefaultText } from '../../../../components';
import RequestCard from './RequestCard';

interface ListItemProps {
  title: string
  amount: number
  status: string
}

interface ListProps {
  data: ListItemProps[]
}

const ListWrapper = styled(View)`
  margin-top: 18px;
`;

const ListContainer = styled(FlatList)`
  padding: 16px;
`;

const Empty = styled(View)`
  align-items: center;
`;

const List = ({ data }: ListProps): JSX.Element => (
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
      <Empty>
        <DefaultText>Nenhum pedido</DefaultText>
      </Empty>
    )}
  </ListWrapper>
);

export default List;
