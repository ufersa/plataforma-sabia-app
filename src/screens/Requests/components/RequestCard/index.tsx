import React from 'react';
import { Image } from 'react-native';
import { Card, Badge } from '../../../../components';
import * as S from './styles';

interface RequestCardProps {
  title: string
  status: string
}

const RequestCard = ({ title, status }: RequestCardProps): JSX.Element => (
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
          <S.Title numberOfLines={1}>{title}</S.Title>
          <S.Amount>R$ 489,00</S.Amount>
          <S.Status>
            <Badge status={status} />
          </S.Status>
        </S.CardDetails>
      </S.CardContainer>
    </Card>
  </S.CardWrapper>
);

export default RequestCard;
