import React from 'react';
import { Image } from 'react-native';
import { Card, InputNumber } from '../../../../components';
import * as S from './styles';
import { formatMoney } from '../../../../utils/helper';

interface CardProps {
  data: {
    title: string
    image: string
    price: number
    isSeller: boolean
  }
}

export default ({ data }: CardProps) => (
  <S.CardWrapper>
    <Card>
      <S.CardContainer>
        <S.CardImage>
          <Image
            source={{ uri: data.image }}
            style={{
              width: 110,
              height: 83,
              borderRadius: 8,
            }}
          />
        </S.CardImage>
        <S.CardDetails>
          <S.Title numberOfLines={1}>
            {data.title}
          </S.Title>
          <S.CardInfo>
            {data.isSeller && (
              <S.CardInput>
                <InputNumber onChange={() => {}} />
              </S.CardInput>
            )}
            <S.Amount>
              {data.isSeller && formatMoney(data.price)}
            </S.Amount>
          </S.CardInfo>
        </S.CardDetails>
      </S.CardContainer>
    </Card>
  </S.CardWrapper>
);
