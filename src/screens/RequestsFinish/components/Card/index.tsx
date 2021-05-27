/* eslint-disable no-unused-vars */
import React from 'react';
import { Image } from 'react-native';
import { Card, InputNumber } from '@components/.';
import { formatMoney } from '@utils/helper';
import * as S from './styles';

interface CardProps {
  data: {
    title: string
    image: string
    price: number
    isSeller: boolean
  }
  onChange: (value: number) => void
}

export default ({ data, onChange }: CardProps) => (
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
                <InputNumber
                  value={1}
                  onChange={(value: number) => onChange(value)}
                />
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
