/* eslint-disable no-unused-vars */
import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import { DefaultText } from '@components/.';
import NotificationCard, { NotificationsProps } from '../NotificationCard';
import * as S from './styles';

interface ListItemProps {
  date: string
  notifications: NotificationsProps[]
}

interface ListProps {
  data?: ListItemProps[]
  loading: boolean
  onRefresh: () => void
}

const List = ({
  data,
  loading,
  onRefresh,
}: ListProps): JSX.Element => (
  <S.ListWrapper>
    {data && data.length > 0 ? (
      <S.ListContainer
        data={data}
        contentContainerStyle={{ paddingBottom: 32 }}
        renderItem={({ item }: ListRenderItemInfo<any>) => (
          <NotificationCard {...item} />
        )}
        keyExtractor={(item, idx) => idx.toString()}
        refreshing={loading}
        onRefresh={onRefresh}
      />
    ) : (
      <S.Empty>
        <DefaultText>Nenhuma notificação</DefaultText>
      </S.Empty>
    )}
  </S.ListWrapper>
);

export default List;
