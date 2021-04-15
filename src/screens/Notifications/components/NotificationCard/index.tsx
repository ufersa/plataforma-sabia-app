/* eslint-disable no-unused-vars */
import React from 'react';
import { View } from 'react-native';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { htmlToText } from 'html-to-text';
import * as S from './styles';

export interface NotificationsProps {
  id: number
  title: string
  body: string
  date: string
}

interface NotificationCardProps {
  date: string
  notifications: NotificationsProps[]
}

const NotificationCard = ({ date: monthName, notifications }: NotificationCardProps): JSX.Element => (
  <S.CardWrapper>
    <S.HeaderTitle>{monthName}</S.HeaderTitle>
    {notifications && notifications.length > 0 && (
      <S.ItemsWrapper>
        {notifications.map((notification: NotificationsProps, idx: number) => (
          <View key={`notification_${idx}`}>
            <S.NotificationWrapper activeOpacity={1}>
              <S.NotificationTitle>
                <S.Title numberOfLines={1}>{notification.title}</S.Title>
                <S.Date>{format(parseISO(notification.date), 'dd/MM', { locale: ptBR })}</S.Date>
              </S.NotificationTitle>
              <S.NotificationDescription numberOfLines={2}>
                {htmlToText(notification.body, {
                  baseElement: 'div.content',
                })}
              </S.NotificationDescription>
            </S.NotificationWrapper>
          </View>
        ))}
      </S.ItemsWrapper>
    )}
  </S.CardWrapper>
);

export default NotificationCard;
