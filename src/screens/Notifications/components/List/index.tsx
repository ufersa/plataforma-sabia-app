import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import NotificationCard from '../NotificationCard';
import { DefaultText } from '../../../../components';
import * as S from './styles';

interface NotificationsProps {
  title: string
  body: string
  date: string
}

interface ListItemProps {
  date: string
  notifications: NotificationsProps[]
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
          <NotificationCard {...item} />
        )}
        keyExtractor={(item, idx) => idx.toString()}
      />
    ) : (
      <S.Empty>
        <DefaultText>Nenhuma notificação</DefaultText>
      </S.Empty>
    )}
  </S.ListWrapper>
);

export default List;
