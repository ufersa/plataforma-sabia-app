import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { formatMoney } from '@utils/helper';
import { Units } from '@utils/units';
import * as S from './styles';

export default (props: any): JSX.Element => {
  const {
    id,
    title,
    image,
    price,
    institution,
    measureUnit,
    quantity,
    onPress,
  } = props;

  return (
    <S.CardWrapper>
      <S.ImageWrapper>
        <S.CardBadge>
          <S.CardBadgeText>
            {quantity}
          </S.CardBadgeText>
        </S.CardBadge>
        <Image
          source={{ uri: image }}
          style={{
            width: 110,
            height: 83,
            borderRadius: 8,
          }}
        />
      </S.ImageWrapper>
      <S.CardDetails>
        <S.Title numberOfLines={1}>{title}</S.Title>
        <S.Value>
          {`${formatMoney(price)} / ${Units[measureUnit]}`}
        </S.Value>
        <S.Author>
          {institution}
        </S.Author>
        <TouchableOpacity
          onPress={() => onPress({ id, title, quantity })}
          activeOpacity={0.7}
        >
          <S.Edit>Editar item</S.Edit>
        </TouchableOpacity>
      </S.CardDetails>
    </S.CardWrapper>
  );
};
