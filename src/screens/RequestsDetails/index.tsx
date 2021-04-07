/* eslint-disable camelcase */
/* eslint-disable react/style-prop-object */
import React, { useState, useCallback } from 'react';
import { useNavigation, NavigatorScreenParams } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Alert, Image } from 'react-native';
import { format, parseISO } from 'date-fns';
import * as S from './styles';
import { Card, Badge, Button } from '../../components';
import { formatMoney } from '../../utils/helper';
import { UseStatus, FundingStatus } from '../../utils/requests';
import { cancelOrder } from '../../services/orders';

interface RequestsDetailsProps {
  route: NavigatorScreenParams<any, any>
}

const RequestsDetails = ({ route: { params } }: RequestsDetailsProps): JSX.Element => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState<boolean>(false);

  const {
    data: {
      id,
      type,
      quantity,
      status,
      service,
      technology,
      created_at,
      comment,
      funding,
      use,
    },
  } = params;
  const technologyPrice = type === 'technology' && technology.costs ? technology.costs[0].price : 0;

  const onCancelOrder = useCallback(
    async () => {
      try {
        setLoading(true);
        await cancelOrder(id);
        setLoading(false);
        navigation.goBack();
      } catch (err) {
        setLoading(false);
        Alert.alert(
          'Erro ao cancelar pedido',
          'Tente novamente mais tarde.',
        );
      }
    }, [id],
  );

  return (
    <>
      <StatusBar style="light" />
      <S.Wrapper>
        <S.Page showsVerticalScrollIndicator={false}>
          <Card>
            <S.CardContainer>
              <S.CardImage>
                <Image
                  source={{
                    uri: type === 'technology' ? technology.thumbnail?.url : service.thumbnail?.url,
                  }}
                  style={{
                    width: 110,
                    height: 83,
                    borderRadius: 8,
                  }}
                />
              </S.CardImage>
              <S.CardInfo>
                <S.Title numberOfLines={1}>
                  {type === 'technology' ? technology.title : service.name}
                </S.Title>
                {type === 'service' && (
                  <S.CardPrice>
                    <S.DetailTitle>Subtotal</S.DetailTitle>
                    <S.DetailTitle>
                      {formatMoney(service.price)}
                    </S.DetailTitle>
                  </S.CardPrice>
                )}
                <S.CardPrice style={{ marginTop: 9 }}>
                  <S.Amount>Total</S.Amount>
                  <S.Amount>
                    {formatMoney(type === 'technology' ? technologyPrice : service.price * quantity)}
                  </S.Amount>
                </S.CardPrice>
              </S.CardInfo>
            </S.CardContainer>

            <S.CardStatus>
              <S.CardDate>
                {`Realizado às ${format(parseISO(created_at), 'HH:mm - dd/MM/yyyy')}`}
              </S.CardDate>
              <Badge status={status} />
            </S.CardStatus>
            <S.CardDetails>
              <S.Detail>
                <S.DetailTitle>Tipo</S.DetailTitle>
                <S.DetailDescription>
                  {type === 'technology' ? 'Tecnologia' : 'Serviço'}
                </S.DetailDescription>
              </S.Detail>
              <S.Detail>
                <S.DetailTitle>Quantidade</S.DetailTitle>
                <S.DetailDescription>
                  {quantity}
                </S.DetailDescription>
              </S.Detail>
              {type === 'technology' && (
                <>
                  <S.Detail>
                    <S.DetailTitle>Uso da tecnologia</S.DetailTitle>
                    <S.DetailDescription>{UseStatus[use]}</S.DetailDescription>
                  </S.Detail>
                  <S.Detail>
                    <S.DetailTitle>Deseja financiamento?</S.DetailTitle>
                    <S.DetailDescription>{FundingStatus[funding]}</S.DetailDescription>
                  </S.Detail>
                </>
              )}
              <S.Detail>
                <S.DetailTitle>Observações</S.DetailTitle>
                <S.DetailDescription>{comment ?? '–'}</S.DetailDescription>
              </S.Detail>
            </S.CardDetails>
            {status === 'open' && (
              <S.ButtonWrapper>
                <Button
                  disabled={loading}
                  variant="danger"
                  onPress={() => {
                    Alert.alert(
                      'Deseja realmente cancelar este pedido?',
                      null,
                      [
                        {
                          text: 'Cancelar',
                          onPress: () => {},
                          style: 'destructive',
                        },
                        {
                          text: 'Confirmar',
                          onPress: () => onCancelOrder(),
                        },
                      ],
                    );
                  }}
                >
                  {loading ? 'Aguarde...' : 'Cancelar pedido'}
                </Button>
              </S.ButtonWrapper>
            )}
          </Card>
        </S.Page>
      </S.Wrapper>
    </>
  );
};

export default RequestsDetails;
