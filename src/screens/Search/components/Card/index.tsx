import React from 'react';
import { Image } from 'react-native';
import { Card } from '../../../../components';
import * as S from './styles';

export default () => (
  <S.CardWrapper activeOpacity={0.7}>
    <Card>
      <S.CardContainer>
        <S.CardImage>
          <Image
            source={{
              uri: 'https://fakeimg.pl/110x83/',
              cache: 'only-if-cached',
            }}
            style={{
              width: 110,
              height: 83,
              borderRadius: 8,
            }}
          />
        </S.CardImage>
        <S.CardDetails>
          <S.Title numberOfLines={1}>
            Test Very Long Title Technology
          </S.Title>
          <S.CardInfo>
            <S.Amount>R$ 489,00</S.Amount>
          </S.CardInfo>
        </S.CardDetails>
      </S.CardContainer>
    </Card>
  </S.CardWrapper>
);
