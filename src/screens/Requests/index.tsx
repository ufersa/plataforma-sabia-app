/* eslint-disable no-nested-ternary */
/* eslint-disable react/style-prop-object */
import React, { useEffect, useState, useCallback } from 'react';
import {
  Platform,
  StatusBar as StatusBarHelper,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { getOrders } from '@services/orders';
import { Unauthenticated } from '@components/.';
import { useAuth } from '@hooks/useAuth';
import { useModal } from '@hooks/useModal';
import * as S from './styles';
import List from './components/List';

const Requests = (): JSX.Element => {
  const { user } = useAuth();
  const { openModal } = useModal();
  const [loading, setLoading] = useState<boolean>(true);
  const [orders, setOrders] = useState([]);

  const getRequests = useCallback(
    async () => {
      setLoading(true);
      const data = await getOrders({
        perPage: 20,
        orderBy: 'createad_at',
        order: 'DESC',
      });
      setOrders(data);
      setLoading(false);
    },
    [],
  );

  useEffect(() => {
    if (user) getRequests();
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
          <S.Title>Meus pedidos</S.Title>
          {user ? (
            !loading ? (
              <List
                loading={loading}
                data={orders}
                onRefresh={getRequests}
              />
            ) : (
              <ActivityIndicator />
            )
          ) : <Unauthenticated title="Deseja ver seus pedidos?" onPress={() => openModal()} />}
        </S.Container>
      </S.Wrapper>
    </SafeAreaView>
  );
};

export default Requests;
