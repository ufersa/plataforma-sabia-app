/* eslint-disable react/style-prop-object */
import React, { useEffect, useState, useCallback } from 'react';
import {
  Platform,
  StatusBar as StatusBarHelper,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import _ from 'lodash';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import List from './components/List';
import * as S from './styles';
import { getMessages } from '../../services/notifications';
import { NotificationsProps } from './components/NotificationCard';

interface NotificationsListProps {
  date: string
  notifications: NotificationsProps[]
}

const Notifications = (): JSX.Element => {
  const [loading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState<NotificationsListProps[]>([]);

  const getNotifications = useCallback(
    async () => {
      setLoading(true);
      const data = await getMessages({
        perPage: 20,
        orderBy: 'created_at',
        order: 'DESC',
      });
      setNotifications(
        _(data)
          .groupBy((date: any) => (format(parseISO(date.created_at.replace(' ', 'T')), 'MMMM', { locale: ptBR })))
          .map((group: any, date: any) => ({
            date,
            notifications: group.map((g: any) => ({
              id: g.id,
              date: g.created_at,
              title: g.subject,
              body: g.content,
            })),
          }))
          .value(),
      );
      setLoading(false);
    },
    [],
  );

  useEffect(() => {
    getNotifications();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBarHelper.currentHeight : 0,
      }}
    >
      <S.Wrapper>
        <StatusBar style="auto" />
        <S.Container>
          <S.Title>Notificações</S.Title>
          {!loading ? (
            <List
              loading={loading}
              onRefresh={getNotifications}
              data={notifications}
            />
          ) : (
            <ActivityIndicator />
          )}
        </S.Container>
      </S.Wrapper>
    </SafeAreaView>
  );
};

export default Notifications;
