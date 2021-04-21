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
import List from './components/List';
import * as S from './styles';
import { getUserBookmarks } from '../../services/technology';
import { handleBookmark } from '../../services/bookmark';
import { Authenticated } from '../../components';
import { useAuth } from '../../hooks/useAuth';
import { useModal } from '../../hooks/useModal';

export interface RemoveBookmarkProps {
  id: string,
  type: string
}

const Favorite = (): JSX.Element => {
  const { user } = useAuth();
  const { openModal } = useModal();
  const [loading, setLoading] = useState<boolean>(true);
  const [technologies, setTechnologies] = useState([]);

  const getTechnologies = useCallback(
    async () => {
      setLoading(true);
      const data = await getUserBookmarks(user.id);
      setTechnologies([
        ...data.technologies.map((item: any) => ({ ...item, type: 'technology' })),
        ...data.services.map((item: any) => ({ ...item, type: 'service' })),
      ]);
      setLoading(false);
    },
    [user],
  );

  const removeTechnologies = useCallback(
    async ({ id, type }: RemoveBookmarkProps) => {
      await handleBookmark({
        active: true,
        [type]: id,
        userId: user.id,
      });
      getTechnologies();
    },
    [],
  );

  useEffect(() => {
    if (user) getTechnologies();
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
          <S.Title>Favoritos</S.Title>
          {user ? (
            !loading ? (
              <List
                loading={loading}
                data={technologies}
                onRefresh={getTechnologies}
                onRemove={removeTechnologies}
              />
            ) : (
              <ActivityIndicator />
            )
          ) : <Authenticated title="Deseja ver seus favoritos?" onPress={() => openModal()} />}
        </S.Container>
      </S.Wrapper>
    </SafeAreaView>
  );
};

export default Favorite;
