/* eslint-disable camelcase */
import React from 'react';
import { Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Card } from '@components/.';
import { formatMoney } from '@utils/helper';
import Colors from '@utils/colors';
import * as S from './styles';

interface RequestCardProps {
  title: string
  name: string
  thumbnail: {
    url: string
  }
  price: number,
  technologyCosts: {
    price: number
    is_seller: number
  }[]
  onPress: () => void
}

const RequestCard = ({
  title,
  name,
  thumbnail,
  price,
  technologyCosts,
  onPress,
}: RequestCardProps): JSX.Element => {
  const amount = technologyCosts && technologyCosts.length ? technologyCosts[0].price : price;
  const isSeller = !!(technologyCosts && technologyCosts.length && technologyCosts[0].is_seller === 1);

  return (
    <S.CardWrapper>
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
            <S.Title numberOfLines={1}>{title ?? name}</S.Title>
            <S.Amount>
              {isSeller && formatMoney(amount)}
            </S.Amount>
          </S.CardDetails>
        </S.CardContainer>
        <S.CardAction>
          <S.CardButton onPress={onPress}>
            <FontAwesome5 solid name="heart" size={18} color={Colors.danger} />
            <S.CardText>Remover dos favoritos</S.CardText>
          </S.CardButton>
        </S.CardAction>
      </Card>
    </S.CardWrapper>
  );
};

export default RequestCard;
