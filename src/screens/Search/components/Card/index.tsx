/* eslint-disable camelcase */
/* eslint-disable no-restricted-globals */
import React from 'react';
import { Image } from 'react-native';
import { Card, Badge } from '../../../../components';
import { formatMoney } from '../../../../utils/formats';
import * as S from './styles';

interface CardProps {
  onPress?: () => void
  title: string
  name: string
  image: string
  thumbnail?: {
    url: string
  }
  price?: number
  implementationCost: number
  category: string
  institution?: string
  forSale?: number
}

export default ({
  onPress,
  title,
  name,
  thumbnail,
  image,
  implementationCost,
  forSale,
  price,
  category,
  institution,
}: CardProps) => (
  <S.CardWrapper
    onPress={onPress}
    activeOpacity={0.7}
  >
    <Card>
      <S.CardContainer>
        <S.CardImage>
          <Image
            source={{ uri: image ?? thumbnail?.url }}
            style={{
              width: 110,
              height: 83,
              borderRadius: 8,
            }}
          />
        </S.CardImage>
        <S.CardDetails>
          <S.Title numberOfLines={1}>
            {name ?? title}
          </S.Title>
          <S.CardInfo>
            {forSale === 1 && (
              <S.Amount>
                {formatMoney(implementationCost ?? price)}
              </S.Amount>
            )}
            {(category || institution) && (
              <S.BadgeWrapper>
                <S.BadgeWrapperContent>
                  <Badge variant="primary" text={category ?? institution} />
                </S.BadgeWrapperContent>
              </S.BadgeWrapper>
            )}
          </S.CardInfo>
        </S.CardDetails>
      </S.CardContainer>
    </Card>
  </S.CardWrapper>
);
