import React from 'react';
import { Image } from 'react-native';
import { Card, Badge } from '../../../../components';
import * as S from './styles';
import { formatMoney } from '../../../../utils/helper';

interface RequestCardProps {
  service: {
    name: string
    price: number
  }
  quantity: number
  status: string
}

const RequestCard = ({ service, quantity, status }: RequestCardProps): JSX.Element => (
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
          <S.Title numberOfLines={1}>{service.name}</S.Title>
          <S.Amount>
            {formatMoney(service.price * quantity)}
          </S.Amount>
          <S.Status>
            <Badge status={status} />
          </S.Status>
        </S.CardDetails>
      </S.CardContainer>
    </Card>
  </S.CardWrapper>
);

export default RequestCard;
