import React from 'react';
import { Dimensions, View } from 'react-native';
import styled from 'styled-components';
import { DefaultText } from '../../../../components';
import moment from 'moment';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface NotificationsProps {
  title: string
  body: string
  date: string
}

interface NotificationCardProps {
  date: string
  notifications: NotificationsProps[]
};

const CardWrapper = styled(View)``;

const HeaderTitle = styled(DefaultText)`
  margin-top: 24px;
  margin-bottom: 8px;
  text-transform: capitalize;
  fontFamily: Rubik_500Medium;
  fontWeight: 500;
  lineHeight: 21px;
  fontSize: 14px;
  color: #777777;
  padding-horizontal: 16px;
`;

const ItemsWrapper = styled(View)``;

const NotificationWrapper = styled(TouchableOpacity)`
  height: 92px;
  border-bottom-color: #e8e8e8;
  border-bottom-width: 1px;
  padding-horizontal: 16px;
  padding-vertical: 12px;
`;

const NotificationTitle = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled(DefaultText)`
  width: ${Dimensions.get('window').width - 100}px;
  font-family: Rubik_500Medium;
  font-weight: 500;
  line-height: 24px;
  font-size: 16px;
  color: #4a4a4a;
  margin-bottom: 8px;
`;

const Date = styled(DefaultText)`
  font-family: Montserrat_700Bold;
  font-weight: 700;
  line-height: 18px;
  font-size: 12px;
  color: #777777;
`;

const NotificationDescription = styled(DefaultText)`
  width: ${Dimensions.get('window').width - 100}px;
  font-family: Montserrat_400Regular;
  font-weight: 400;
  line-height: 18px;
  font-size: 12px;
  color: #4a4a4a;
`;

const NotificationCard = ({ date, notifications }: NotificationCardProps): JSX.Element => (
  <CardWrapper>
    <HeaderTitle>{moment(date).format('MMMM')}</HeaderTitle>
    {notifications && notifications.length > 0 && (
      <ItemsWrapper>
        {notifications.map((notification: NotificationsProps, idx) => (
          <TouchableOpacity
            key={`notification_${idx}`}
            activeOpacity={.7}
          >
            <NotificationWrapper>
              <NotificationTitle>
                <Title numberOfLines={1}>{notification.title}</Title>
                <Date>{moment(notification.date).format('DD/MM')}</Date>
              </NotificationTitle>
              <NotificationDescription numberOfLines={2}>{notification.body}</NotificationDescription>
            </NotificationWrapper>
          </TouchableOpacity>
        ))}
      </ItemsWrapper>
    )}
  </CardWrapper>
);

export default NotificationCard;
