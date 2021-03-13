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
  thumbnail?: any
  price?: number
  implementationCost: number
  category: string
  institution?: string
}

export default ({
  onPress,
  title,
  name,
  thumbnail,
  implementationCost,
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
            source={{ uri: thumbnail?.url }}
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
            <S.Amount>
              {`${implementationCost === 0 || price === 0 || isNaN(implementationCost ?? price) ? 'Gratuita' : formatMoney(implementationCost ?? price)}`}
            </S.Amount>
            <S.BadgeWrapper>
              <S.BadgeWrapperContent>
                <Badge variant="primary" text={category ?? institution} />
              </S.BadgeWrapperContent>
            </S.BadgeWrapper>
          </S.CardInfo>
        </S.CardDetails>
      </S.CardContainer>
    </Card>
  </S.CardWrapper>
);
