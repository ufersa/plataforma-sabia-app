/* eslint-disable no-nested-ternary */
/* eslint-disable camelcase */
import React, { useCallback, useEffect } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import TechnologyCard from '../Card';
import * as S from './styles';
import useFind from '../../../../hooks/useFind';
import { useAuth } from '../../../../hooks/useAuth';
import { getBookmarks } from '../../../../services/bookmark';

interface TechnologiesProps {
  navigation: StackNavigationProp<any, any>
}

interface TechnologiesItemProps {
  id?: number
  title?: string
  description: string
  status?: string
  date?: string
  thumbnail: {
    url: string
  }
  image?: {
  }
  costs: {
    price: number,
    is_seller: number
  }[]
  category?: {
    name: string
  }
  created_at: string
}

const Technologies = ({ navigation }: TechnologiesProps): JSX.Element => {
  const { user, updateUser } = useAuth();

  const loadBookmarks = useCallback(
    async () => {
      const bookmarks = await getBookmarks();
      updateUser({ ...user, technologyBookmarks: bookmarks });
    },
    [user],
  );

  useEffect(() => {
    loadBookmarks();
  }, []);

  const { loading, technologies } = useFind('technologies', {
    embed: '',
    perPage: 10,
    orderBy: 'likes',
    order: 'DESC',
    status: 'published',
    taxonomy: 'category',
  });

  return (
    <>
      <S.Title>Tecnologias em destaque</S.Title>
      <S.TechnologiesWrapper
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={4}
        decelerationRate={0}
        snapToInterval={294 - (16 + 10)}
        snapToAlignment="start"
        contentContainerStyle={{
          alignItems: 'flex-start',
        }}
      >
        {loading ? (
          <>
            {[0, 1, 2].map((technology, idx: number) => (
              <TechnologyCard
                type="technology"
                key={`technology_${idx}`}
                loading
                style={{
                  marginRight: (idx + 1) === 3 ? 36 : 20,
                }}
              />
            ))}
          </>
        ) : (
          technologies.length > 0
            ? technologies.map((technology: TechnologiesItemProps, idx: number) => (
              <TechnologyCard
                type="technology"
                key={`technology_${idx}`}
                data={{
                  id: technology.id,
                  title: technology.title,
                  image: technology.thumbnail?.url,
                  description: technology.description,
                  price: technology.costs.length ? technology.costs[0].price : 0,
                  createdAt: technology.created_at,
                  isSeller: !!(technology.costs.length && technology.costs[0].is_seller === 1),
                  type: 'technology',
                }}
                navigation={navigation}
                loading={false}
                style={{
                  marginRight: (idx + 1) === technologies.length ? 36 : 20,
                }}
              />
            ))
            : <S.Empty>Nenhuma tecnologia</S.Empty>
        )}
      </S.TechnologiesWrapper>
    </>
  );
};

export default Technologies;
