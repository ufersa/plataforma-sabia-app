import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import * as S from './styles';

interface NotificationsProps {
  title: string
  body: string
  date: string
}

interface NotificationCardProps {
  date: string
  notifications: NotificationsProps[]
}

const NotificationCard = ({ date, notifications }: NotificationCardProps): JSX.Element => (
  <S.CardWrapper>
    <S.HeaderTitle>{format(parseISO(date), 'MMMM', { locale: ptBR })}</S.HeaderTitle>
    {notifications && notifications.length > 0 && (
      <S.ItemsWrapper>
        {notifications.map((notification: NotificationsProps, idx) => (
          <TouchableOpacity
            key={`notification_${idx}`}
            activeOpacity={0.7}
          >
            <S.NotificationWrapper>
              <S.NotificationTitle>
                <S.Title numberOfLines={1}>{notification.title}</S.Title>
                <S.Date>{format(parseISO(notification.date), 'dd/MM')}</S.Date>
              </S.NotificationTitle>
              <S.NotificationDescription numberOfLines={2}>
                {notification.body}
              </S.NotificationDescription>
            </S.NotificationWrapper>
          </TouchableOpacity>
        ))}
      </S.ItemsWrapper>
    )}
  </S.CardWrapper>
);

export default NotificationCard;
