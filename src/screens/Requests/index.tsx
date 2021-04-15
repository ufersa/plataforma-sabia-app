/* eslint-disable react/style-prop-object */
import React, { useEffect, useState, useCallback } from 'react';
import {
  Platform,
  StatusBar as StatusBarHelper,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import List from './components/List';
import * as S from './styles';
import { getOrders } from '../../services/orders';

const Requests = (): JSX.Element => {
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
    getRequests();
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
          <S.Title>Meus pedidos</S.Title>
          {!loading ? (
            <List
              loading={loading}
              data={orders}
              onRefresh={getRequests}
            />
          ) : (
            <ActivityIndicator />
          )}
        </S.Container>
      </S.Wrapper>
    </SafeAreaView>
  );
};

export default Requests;
