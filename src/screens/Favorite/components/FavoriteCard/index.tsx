import React from 'react';
import { Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Card } from '../../../../components';
import * as S from './styles';
import Colors from '../../../../utils/colors';

interface RequestCardProps {
  title: string
  onPress: () => void
}

const RequestCard = ({ title, onPress }: RequestCardProps): JSX.Element => (
  <S.CardWrapper>
    <Card>
      <S.CardContainer>
        <S.CardImage>
          <Image
            source={{
              uri: 'https://fakeimg.pl/110x83/',
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

export default RequestCard;
