import React, { useEffect, useState } from 'react';
import {
  Animated, Image, TouchableOpacity, Easing, StyleProp,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Card } from '../../../../components';
import * as S from './styles';
import { formatMoney } from '../../../../utils/helper';
import { useAuth } from '../../../../hooks/useAuth';
import { handleBookmark } from '../../../../services/bookmark';

import { Technology } from '../../../../hooks/useTechnology';

interface DataCardProps {
  id: number
  title: string
  image: string
  price: number
  description: string
  createdAt: string
}
interface TechnologyCardProps {
  data?: DataCardProps
  style?: StyleProp<any>
  loading: boolean
  navigation?: StackNavigationProp<any, any>
}
interface FavoriteProps {
  favorite?: boolean
  technologyId: number
}

const Favorite = ({ favorite, technologyId }: FavoriteProps): JSX.Element => {
  const [state, setState] = useState(favorite);
  const animatePulse = new Animated.Value(1);
  const scale = animatePulse.interpolate({
    inputRange: [0, 1],
    outputRange: [1.1, 1],
  });

  const { user } = useAuth();

  useEffect(() => {
    console.log(user.bookmarks);
    const isLiked: boolean = user.bookmarks && user.bookmarks?.some((bookmark: Technology) => bookmark.id === technologyId);
    setState(isLiked);

    Animated.timing(animatePulse, {
      toValue: state ? 0 : 1,
      duration: state ? 100 : 50,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [user, technologyId]);

  const handleFavoriteClick = async () => {
    setState(!state);
    await handleBookmark({
      active: state,
      technologyId,
      userId: user?.id,
    });
  };

  return (
    <S.FavoriteButton onPress={() => { handleFavoriteClick(); }}>
      <Animated.View
        style={{ transform: [{ scale }] }}
      >
        <S.FavoriteIcon
          name="heart"
          size={20}
          color="#ffffff"
          solid={state}
        />
      </Animated.View>
    </S.FavoriteButton>
  );
};

export default ({
  data, navigation, loading = false, style = {},
}: TechnologyCardProps): JSX.Element => (
  <S.CardWrapper style={style}>
    <Card>
      <S.CardContainer>
        {!loading && (
          <>
            <S.CardImage>
              <S.Actions>
                <Favorite technologyId={data.id} favorite={false} />
              </S.Actions>
              <TouchableOpacity
                onPress={() => navigation.navigate('Technology', { data })}
                activeOpacity={0.7}
              >
                <Image
                  source={{ uri: data.image }}
                  style={{
                    width: 216,
                    height: 216,
                    borderRadius: 8,
                  }}
                />
              </TouchableOpacity>
            </S.CardImage>
            <TouchableOpacity
              onPress={() => navigation.navigate('Technology', { data })}
              activeOpacity={0.7}
            >
              <S.Title numberOfLines={2}>
                {data.title}
              </S.Title>
            </TouchableOpacity>
            <S.AmountWrapper>
              <S.Amount bold>
                {Number.isNaN(data.price) ? formatMoney(data.price) : 'Gratuita'}
              </S.Amount>
            </S.AmountWrapper>
          </>
        )}
      </S.CardContainer>
    </Card>
  </S.CardWrapper>
);
