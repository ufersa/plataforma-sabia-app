/* eslint-disable camelcase */
import React, { useCallback, useEffect, useState } from 'react';
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
    price: number
  }[]
  category?: {
    name: string
  }
  created_at: string
}

const Technologies = ({ navigation }: TechnologiesProps): JSX.Element => {
  const [bookmarks, setBookmarks] = useState();

  const { user } = useAuth();

  const loadBookmarks = useCallback(
    async () => {
      const bookmarksResponse = await getBookmarks(parseInt(user.id, 10));
      setBookmarks(bookmarksResponse.data);
    },
    [user],
  );

  useEffect(() => {
    loadBookmarks();
  }, []);

  user.bookmarks = bookmarks;

  const { loading, technologies } = useFind('technologies', {
    embed: '',
    perPage: 10,
    orderBy: 'created_at',
    order: 'DESC',
    status: 'published',
    taxonomy: 'category',
  });

  if (loading) {
    return <></>;
  }

  return (
    <>
      <S.Title>Tecnologias em destaque</S.Title>
      <S.TechnologiesWrapper
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={4}
        decelerationRate={0}
        snapToInterval={248 - (16 + 10)}
        snapToAlignment="start"
        contentContainerStyle={{
          alignItems: 'flex-start',
        }}
      >
        {technologies && technologies.map((technology: TechnologiesItemProps, idx: number) => (
          <TechnologyCard
            key={`technology_${idx}`}
            data={{
              id: technology.id,
              title: technology.title,
              image: technology.thumbnail?.url,
              description: technology.description,
              price: technology.costs[0].price,
              createdAt: technology.created_at,
              // isSeller: technology.
            }}
            navigation={navigation}
            loading={false}
            style={{
              marginRight: (idx + 1) === technologies.length ? 36 : 20,
            }}
          />
        ))}
      </S.TechnologiesWrapper>
    </>
  );
};

export default Technologies;
