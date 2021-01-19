import React from 'react';
import { View, FlatList, ListRenderItemInfo } from 'react-native';
import styled from 'styled-components';
import NotificationCard from './NotificationCard';

interface NotificationsProps {
  title: string
  body: string
  date: string
}

interface ListItemProps {
  date: string
  notifications: NotificationsProps[]
};

interface ListProps {
  data: ListItemProps[]
}

const ListWrapper = styled(View)`
  margin-top: 10px;
`;

const ListContainer = styled(FlatList)`
  padding-vertical: 16px;
`;

const List = ({ data }: ListProps): JSX.Element => {
  return (
    <ListWrapper>
      {data && data.length > 0 ? (
        <ListContainer
          data={data}
          renderItem={({ item }: ListRenderItemInfo<any>) => (
            <NotificationCard {...item} />
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
