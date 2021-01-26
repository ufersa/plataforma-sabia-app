import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import { DefaultText } from '../../../../components';
import RequestCard from '../RequestCard';
import * as S from './styles';

interface ListItemProps {
  title: string
  amount: number
  status: string
}

interface ListProps {
  data: ListItemProps[]
}

const List = ({ data }: ListProps): JSX.Element => (
  <S.ListWrapper>
    {data && data.length > 0 ? (
      <S.ListContainer
        data={data}
        renderItem={({ item }: ListRenderItemInfo<any>) => (
          <RequestCard {...item} />
        )}
        keyExtractor={(_, idx) => idx.toString()}
      />
    ) : (
      <S.Empty>
        <DefaultText>Nenhum pedido</DefaultText>
      </S.Empty>
    )}
  </S.ListWrapper>
);

export default List;
