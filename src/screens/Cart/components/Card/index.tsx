import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import * as S from './styles';

export default ({ title, onPress }: any): JSX.Element => (
  <S.CardWrapper>
    <S.ImageWrapper>
      <S.CardBadge>
        <S.CardBadgeText>1</S.CardBadgeText>
      </S.CardBadge>
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
    </S.ImageWrapper>
    <S.CardDetails>
      <S.Title numberOfLines={1}>{title}</S.Title>
      <S.Value>R$ 48/h</S.Value>
      <S.Author>UFERSA</S.Author>
      <TouchableOpacity
        onPress={() => onPress({ title })}
        activeOpacity={0.7}
      >
        <S.Edit>Editar item</S.Edit>
      </TouchableOpacity>
    </S.CardDetails>
  </S.CardWrapper>
);
