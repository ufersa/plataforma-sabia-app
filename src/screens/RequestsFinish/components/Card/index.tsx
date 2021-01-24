import React from 'react';
import { Image } from 'react-native';
import { Card, InputNumber } from '../../../../components';
import * as S from './styles';

export default () => (
  <S.CardWrapper>
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
            <S.CardInput>
              <InputNumber onChange={() => {}} />
            </S.CardInput>
            <S.Amount>R$ 489,00</S.Amount>
          </S.CardInfo>
        </S.CardDetails>
      </S.CardContainer>
    </Card>
  </S.CardWrapper>
);
