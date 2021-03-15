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
import { useAuth } from '../../hooks/useAuth';
import { getUserBookmarks } from '../../services/technology';
import { handleBookmark } from '../../services/bookmark';

const Favorite = (): JSX.Element => {
  const { user } = useAuth();
  const [loading, setLoading] = useState<boolean>(true);
  const [technologies, setTechnologies] = useState([]);

  const getTechnologies = useCallback(
    async () => {
      setLoading(true);
      const data = await getUserBookmarks(user.id);
      setTechnologies(data.technologies);
      setLoading(false);
    },
    [user],
  );

  const removeTechnologies = useCallback(
    async (technology) => {
      await handleBookmark({
        active: true,
        technologyId: technology.pivot.technology_id,
        userId: user.id,
      });
      getTechnologies();
    },
    [],
  );

  useEffect(() => {
    getTechnologies();
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
          <S.Title>Favoritos</S.Title>
          {!loading ? (
            <List
              loading={loading}
              onRefresh={getTechnologies}
              onRemove={removeTechnologies}
              data={technologies}
            />
          ) : (
            <ActivityIndicator />
          )}
        </S.Container>
      </S.Wrapper>
    </SafeAreaView>
  );
};

export default Favorite;
