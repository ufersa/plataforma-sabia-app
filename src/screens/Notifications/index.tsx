/* eslint-disable no-nested-ternary */
/* eslint-disable react/style-prop-object */
import React, { useEffect, useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/core';
import {
  Platform,
  StatusBar as StatusBarHelper,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import _ from 'lodash';
import { getMessages } from '@services/notifications';
import { formatDateHelper } from '@utils/formats';
import { Unauthenticated } from '@components/.';
import { useAuth } from '@hooks/useAuth';
import { useModal } from '@hooks/useModal';
import { NotificationsProps } from './components/NotificationCard';
import * as S from './styles';
import List from './components/List';

interface NotificationsListProps {
  date: string
  notifications: NotificationsProps[]
}

const Notifications = (): JSX.Element => {
  const navigation = useNavigation();
  const { user } = useAuth();
  const { openModal } = useModal();
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
          .groupBy((date: any) => formatDateHelper(date.created_at, 'MMMM'))
          .map((groupedNotifications, date: string) => ({
            date,
            notifications: groupedNotifications.map((notification: any) => ({
              id: notification.id,
              date: notification.created_at,
              title: notification.subject,
              body: notification.content,
              status: notification.status,
            })),
          }))
          .value(),
      );

      setLoading(false);
    },
    [],
  );

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getNotifications();
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    if (user) getNotifications();
  }, [user]);

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
          {user ? (
            !loading ? (
              <List
                loading={loading}
                onRefresh={getNotifications}
                data={notifications}
              />
            ) : (
              <ActivityIndicator />
            )
          ) : <Unauthenticated title="Deseja ver suas notificações?" onPress={() => openModal()} />}
        </S.Container>
      </S.Wrapper>
    </SafeAreaView>
  );
};

export default Notifications;
