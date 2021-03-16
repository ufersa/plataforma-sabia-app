/* eslint-disable camelcase */
import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import { DefaultText } from '../../../../components';
import RequestCard from '../RequestCard';
import * as S from './styles';

interface ListItemProps {
  comment: string
  service: {
    name: string
    price: number
  }
  quantity: number
  status: string
  created_at: string
}

interface ListProps {
  data: ListItemProps[]
  loading: boolean
  onRefresh: () => void
}

const List = ({ data, loading, onRefresh }: ListProps): JSX.Element => (
  <S.ListWrapper>
    {data && data.length > 0 ? (
      <S.ListContainer
        contentContainerStyle={{ paddingBottom: 40 }}
        data={data}
        renderItem={({ item }: ListRenderItemInfo<any>) => (
          <RequestCard {...item} />
        )}
        keyExtractor={(_, idx) => idx.toString()}
        showsVerticalScrollIndicator={false}
        onRefresh={onRefresh}
        refreshing={loading}
      />
    ) : (
      <S.Empty>
        <DefaultText>Nenhum pedido</DefaultText>
      </S.Empty>
    )}
  </S.ListWrapper>
);

export default List;
