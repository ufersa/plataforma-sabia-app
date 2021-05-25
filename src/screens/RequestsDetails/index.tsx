/* eslint-disable camelcase */
/* eslint-disable react/style-prop-object */
import React, { useState, useCallback, useEffect } from 'react';
import { useNavigation, NavigatorScreenParams } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Alert, Image } from 'react-native';
import { format, parseISO } from 'date-fns';
import { MaterialIcons } from '@expo/vector-icons';
import {
  Card, Badge, Button, Modal, Input,
} from '@components/.';
import { formatMoney } from '@utils/helper';
import { UseStatus, FundingStatus } from '@utils/requests';
import { cancelOrder } from '@services/orders';
import { Controller, useForm } from 'react-hook-form';
import colors from '@utils/colors';
import * as S from './styles';

interface RequestsDetailsProps {
  route: NavigatorScreenParams<any, any>
}

const RequestsDetails = ({ route: { params } }: RequestsDetailsProps): JSX.Element => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState<boolean>(false);

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

              <S.Detail>
                <S.OpenChat activeOpacity={0.7} onPress={() => { openChat(); }}>
                  <MaterialIcons name="chat-bubble-outline" size={24} color="#3498DB" />
                  <S.OpenChatText>
                    Chat com o responsável
                  </S.OpenChatText>
                </S.OpenChat>
              </S.Detail>
            </S.CardDetails>
            {(status === 'open' || status === 'requested') && (
              <S.ButtonWrapper>
                <Button
                  variant="danger"
                  onPress={() => {
                    setShowModal(true);
                  }}
                >
                  Cancelar pedido
                </Button>
              </S.ButtonWrapper>
            )}
          </Card>
          <Modal
            title="Deseja cancelar este pedido?"
            titleStyle={{
              fontSize: 24,
              lineHeight: 32,
              color: colors.danger,
            }}
            height={450}
            animationType="slide"
            visible={showModal}
            onClose={() => { setShowModal(false); }}
          >
            <S.ModalContent>
              <CancelForm order={params.data} />
            </S.ModalContent>
          </Modal>
        </S.Page>
      </S.Wrapper>
    </>
  );
};

interface CancelFormProps {
  order: any
}

const CancelForm = ({ order } : CancelFormProps): JSX.Element => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState<boolean>(false);

  const { id, type } = order;

  const {
    control,
    errors,
  } = useForm();
  const { reason } = control.getValues();

  const handleCancel = useCallback(
    async () => {
      if (!control.getValues().reason) return;

      try {
        setLoading(true);
        await cancelOrder(id, type, reason);
        navigation.navigate('Requests');
        setLoading(false);
      } catch (err) {
        setLoading(false);
        Alert.alert(
          'Erro ao cancelar pedido',
          'Tente novamente mais tarde.',
        );
      }
    }, [id, type, reason, control],
  );

  useEffect(() => {
  }, []);

  return (
    <>
      <S.ReviewForm>
        <S.ModalWrapper showsVerticalScrollIndicator={false}>
          <S.ReasonLabel>
            Antes de cancelar, nos conte o que aconteceu, qual o motivo pelo qual está cancelando o pedido?
          </S.ReasonLabel>
          <Controller
            name="reason"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ onChange, value }) => (
              <Input
                type="default"
                autoCorrect={false}
                keyboardType="default"
                onChangeText={onChange}
                placeholder="Digite sua mensagem..."
                value={value}
                multiline
                error={errors.reason}
              />
            )}
          />

        </S.ModalWrapper>
      </S.ReviewForm>
      <S.ButtonWrapper>
        <Button variant="danger" disabled={loading} onPress={handleCancel}>
          {`${loading ? 'Enviando...' : 'Confirmar cancelamento'}`}
        </Button>
      </S.ButtonWrapper>
    </>
  );
};

export default RequestsDetails;
