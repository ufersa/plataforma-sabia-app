/* eslint-disable camelcase */
/* eslint-disable react/style-prop-object */
import React from 'react';
import { NavigatorScreenParams } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';
import moment from 'moment';
import * as S from './styles';
import { Card, Badge } from '../../components';
import { formatMoney } from '../../utils/helper';

interface RequestsDetailsProps {
  route: NavigatorScreenParams<any, any>
}

const RequestsDetails = ({ route: { params } }: RequestsDetailsProps): JSX.Element => {
  const { data } = params;

  return (
    <>
      <StatusBar style="light" />
      <S.Wrapper>
        <S.Page showsVerticalScrollIndicator={false}>
          <Card>
            <S.CardContainer>
              <S.CardImage>
                <Image
                  source={{ uri: data.service.thumbnail?.url }}
                  style={{
                    width: 110,
                    height: 83,
                    borderRadius: 8,
                  }}
                />
              </S.CardImage>
              <S.CardInfo>
                <S.Title numberOfLines={1}>{data.service.name}</S.Title>
                <S.CardPrice>
                  <S.DetailTitle>Subtotal</S.DetailTitle>
                  <S.DetailTitle>{formatMoney(data.service.price)}</S.DetailTitle>
                </S.CardPrice>
                <S.CardPrice style={{ marginTop: 9 }}>
                  <S.Amount>Total</S.Amount>
                  <S.Amount>{formatMoney(data.service.price * data.quantity)}</S.Amount>
                </S.CardPrice>
              </S.CardInfo>
            </S.CardContainer>

            <S.CardStatus>
              <S.CardDate>{moment(data.created_at).format('[Realizado às] HH:mm [-] DD/MM/YYYY')}</S.CardDate>
              <Badge status={data.status} />
            </S.CardStatus>
            <S.CardDetails>
              <S.Detail>
                <S.DetailTitle>Tipo</S.DetailTitle>
                <S.DetailDescription>
                  {data.type === 'technology' ? 'Tecnologia' : 'Serviço'}
                </S.DetailDescription>
              </S.Detail>
              <S.Detail>
                <S.DetailTitle>Quantidade</S.DetailTitle>
                <S.DetailDescription>
                  {data.quantity}
                </S.DetailDescription>
              </S.Detail>
              {data.type === 'technology' && (
                <>
                  <S.Detail>
                    <S.DetailTitle>Uso da tecnologia</S.DetailTitle>
                    <S.DetailDescription>–</S.DetailDescription>
                  </S.Detail>
                  <S.Detail>
                    <S.DetailTitle>Deseja financiamento?</S.DetailTitle>
                    <S.DetailDescription>–</S.DetailDescription>
                  </S.Detail>
                </>
              )}
              <S.Detail>
                <S.DetailTitle>Observações</S.DetailTitle>
                <S.DetailDescription>{data.comment ?? '–'}</S.DetailDescription>
              </S.Detail>
            </S.CardDetails>
          </Card>
        </S.Page>
      </S.Wrapper>
    </>
  );
};

export default RequestsDetails;
