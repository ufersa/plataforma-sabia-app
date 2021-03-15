/* eslint-disable camelcase */
import React from 'react';
import { Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Card } from '../../../../components';
import { formatMoney } from '../../../../utils/helper';
import * as S from './styles';
import Colors from '../../../../utils/colors';

interface RequestCardProps {
  title: string
  thumbnail: {
    url: string
  }
  technologyCosts: {
    price: number
    is_seller: number
  }[]
  onPress: () => void
}

const RequestCard = ({
  title,
  thumbnail,
  technologyCosts,
  onPress,
}: RequestCardProps): JSX.Element => {
  const price = technologyCosts.length ? technologyCosts[0].price : 0;
  const isSeller = !!(technologyCosts.length && technologyCosts[0].is_seller === 1);

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
            <S.Title numberOfLines={1}>{title}</S.Title>
            <S.Amount>
              {isSeller && formatMoney(price)}
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
