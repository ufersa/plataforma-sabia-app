/* eslint-disable no-restricted-globals */
import React from 'react';
import { Image } from 'react-native';
import { Card, Badge } from '../../../../components';
import { formatMoney } from '../../../../utils/formats';
import * as S from './styles';

interface CardProps {
  onPress?: () => void
  title: string
  thumbnail?: any
  implementationCost: number
  category: string
}

export default ({
  onPress,
  title,
  thumbnail,
  implementationCost,
  category,
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
            {title}
          </S.Title>
          <S.CardInfo>
            <S.Amount>
              {`${implementationCost === 0 || isNaN(implementationCost) ? 'Gratuita' : formatMoney(implementationCost)}`}
            </S.Amount>
            <S.BadgeWrapper>
              <S.BadgeWrapperContent>
                <Badge variant="primary" text={category} />
              </S.BadgeWrapperContent>
            </S.BadgeWrapper>
          </S.CardInfo>
        </S.CardDetails>
      </S.CardContainer>
    </Card>
  </S.CardWrapper>
);
