/* eslint-disable camelcase */
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import { Card, Badge } from '../../../../components';
import * as S from './styles';
import { formatMoney } from '../../../../utils/helper';

interface RequestCardProps {
  service: {
    name: string
    price: number
  }
  thumbnail: {
    url: string
  },
  quantity: number
  status: string
  type: string
}

const RequestCard = (props: RequestCardProps): JSX.Element => {
  const navigation = useNavigation();
  const {
    service,
    quantity,
    status,
    type,
    thumbnail,
  } = props;

  return (
    <S.CardWrapper
      activeOpacity={0.7}
      onPress={() => navigation.navigate('RequestsDetails', { data: props })}
    >
      <Card>
        <S.CardContainer>
          <S.CardImage>
            <S.CardBadge>
              <S.Type
                variant={type === 'technology' ? 'info' : 'primary'}
                text={type === 'technology' ? 'Tecnologia' : 'Serviço'}
              />
            </S.CardBadge>
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
};

export default RequestCard;
