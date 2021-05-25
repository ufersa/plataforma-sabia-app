/* eslint-disable camelcase */
/* eslint-disable react/style-prop-object */
import React, { useState, useCallback } from 'react';
import { useNavigation, NavigatorScreenParams } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Alert, Image } from 'react-native';
import { format, parseISO } from 'date-fns';
import { MaterialIcons } from '@expo/vector-icons';
import { Card, Badge, Button } from '@components/.';
import { formatMoney } from '@utils/helper';
import { UseStatus, FundingStatus } from '@utils/requests';
import { cancelOrder } from '@services/orders';
import * as S from './styles';

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

  const openChat = useCallback(() => {
    navigation.navigate('OrderChat', { orderId: id });
  }, [id]);

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

  const navigate = () => (type === 'technology'
    ? navigation.navigate('Technology', {
      data: {
        id: technology.id,
        title: technology.title,
        slug: technology.slug,
        image: technology.thumbnail?.url,
        description: technology.description,
        price: technology.costs.length ? technology.costs[0].price : 0,
        createdAt: technology.created_at,
        isSeller: !!(technology.costs.length && technology.costs[0].is_seller === 1),
        type: 'technology',
        terms: technology.terms,
      },
      type,
    })
    : navigation.navigate('Technology', {
      data: {
        id: service.id,
        title: service.name,
        description: service.description,
        image: service.thumbnail?.url,
        price: service.price,
        createdAt: service.created_at,
        measureUnit: service.measure_unit,
        institution: service.user.institution.name,
        isSeller: true,
        type: 'service',
      },
      type,
    }));

  return (
    <>
      <StatusBar style="light" />
      <S.Wrapper>
        <S.Page showsVerticalScrollIndicator={false}>
          <Card>
            <S.CardContainer>
              <S.CardImage>
                <S.NavigateLink activeOpacity={0.7} onPress={navigate}>
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
                </S.NavigateLink>
              </S.CardImage>
              <S.CardInfo>
                <S.NavigateLink activeOpacity={0.7} onPress={navigate}>
                  <S.Title numberOfLines={1}>
                    {type === 'technology' ? technology.title : service.name}
                  </S.Title>
                </S.NavigateLink>
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

              <S.Detail>
                <S.OpenChat activeOpacity={0.7} onPress={() => { openChat(); }}>
                  <MaterialIcons name="chat-bubble-outline" size={24} color="#3498DB" />
                  <S.OpenChatText>
                    Chat com o responsável
                  </S.OpenChatText>
                </S.OpenChat>
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
