import React, { useEffect, useState } from 'react';
import {
  Animated, Image, TouchableOpacity, Easing, StyleProp,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Card } from '../../../../components';
import * as S from './styles';

interface DataCardProps {
  id: number
  title: string
  image: string
  category: {
    name: string
  }
}
interface TechnologyCardProps {
  data: DataCardProps
  style: StyleProp<any>
  loading: boolean
  navigation: StackNavigationProp<any, any>
}

interface FavoriteProps {
  // eslint-disable-next-line react/require-default-props
  favorite?: boolean
}

const Label = (): JSX.Element => (
  <S.LabelWrapper>
    <S.LabelText>Semiárido</S.LabelText>
  </S.LabelWrapper>
);

const Favorite = ({ favorite }: FavoriteProps): JSX.Element => {
  const [state, setState] = useState(favorite);
  const animatePulse = new Animated.Value(1);
  const scale = animatePulse.interpolate({
    inputRange: [0, 1],
    outputRange: [1.1, 1],
  });

  useEffect(() => {
    Animated.timing(animatePulse, {
      toValue: state ? 0 : 1,
      duration: state ? 100 : 50,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [state]);

  return (
    <S.FavoriteButton onPress={() => setState((previousState) => !previousState)}>
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
                <Label />
                <Favorite />
              </S.Actions>
              <TouchableOpacity
                onPress={() => navigation.navigate('Technology', { id: data.id })}
                activeOpacity={0.7}
              >
                <Image
                  source={{
                    uri: 'https://fakeimg.pl/216x216/',
                    cache: 'only-if-cached',
                  }}
                  style={{
                    width: 216,
                    height: 216,
                    borderRadius: 8,
                  }}
                />
              </TouchableOpacity>
            </S.CardImage>
            <TouchableOpacity
              onPress={() => navigation.navigate('Technology')}
              activeOpacity={0.7}
            >
              <S.Title numberOfLines={2}>
                Test Very Long Title Technology
              </S.Title>
            </TouchableOpacity>
            <S.AmountWrapper>
              <S.Amount>R$</S.Amount>
              <S.Amount bold>489</S.Amount>
              <S.Amount>,00</S.Amount>
            </S.AmountWrapper>
          </>
        )}
      </S.CardContainer>
    </Card>
  </S.CardWrapper>
);