/* eslint-disable camelcase */
/* eslint-disable react/style-prop-object */
import React, { useEffect, useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as S from './styles';
import {
  Input,
  InputNumber,
  Button,
  Modal,
} from '../../components';
import { useCart } from '../../hooks/useCart';
import { createOrder } from '../../services/orders';

interface CartFormProps {
  comment: string
}

const Cart = (): JSX.Element => {
  const navigation = useNavigation();
  const {
    items,
    total,
    updateCart,
    removeCart,
    resetCart,
  } = useCart();
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    if (selectedItem !== null) setShowModal(true);
  }, [selectedItem]);

  const [loading, setLoading] = useState<boolean>(false);
  const { control, handleSubmit } = useForm();

  const handleCart = useCallback(
    async ({ comment }: CartFormProps) => {
      try {
        setLoading(true);
        await createOrder({
          comment,
          services: items.map((item) => ({ service_id: item.id, quantity: item.quantity })),
        });
        setLoading(false);
        resetCart();
        navigation.navigate('RequestsFeedback', { feedback: 'success' });
      } catch (err) {
        setLoading(false);
        navigation.navigate('RequestsFeedback', { feedback: 'error' });
      }
    }, [],
  );

  return (
    <>
      <StatusBar style="light" />
      <S.Wrapper>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          enabled
        >
          <S.Page showsVerticalScrollIndicator={false}>
            <S.CartWrapper>
              <S.Items
                data={items}
                onEdit={(item) => setSelectedItem(item)}
              />
              {items.length !== 0 && (
                <>
                  <S.Total amount={total} />
                  <S.Label>Observações</S.Label>
                  <Controller
                    name="comment"
                    control={control}
                    defaultValue=""
                    render={({ onChange, value }) => (
                      <Input
                        type="default"
                        multiline
                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType="default"
                        onChangeText={onChange}
                        value={value}
                      />
                    )}
                  />
                </>
              )}
            </S.CartWrapper>
            <Modal
              title={selectedItem ? selectedItem.title : ''}
              animationType="slide"
              visible={showModal}
              onClose={() => {
                setShowModal(false);
                setSelectedItem(null);
              }}
            >
              <S.ModalContent>
                <TouchableOpacity
                  onPress={() => {}}
                  activeOpacity={0.7}
                >
                  <S.Details>Ver detalhes do serviço</S.Details>
                </TouchableOpacity>
                <S.ModalActions>
                  <S.InputWrapper>
                    <InputNumber
                      value={selectedItem ? selectedItem.quantity : 1}
                      onChange={(value: number) => updateCart(selectedItem.id, { ...selectedItem, quantity: value })}
                    />
                  </S.InputWrapper>
                  <View style={{ flex: 1 }}>
                    <Button
                      variant="danger"
                      onPress={() => {
                        removeCart(selectedItem.id);
                        setShowModal(false);
                      }}
                      icon="trash"
                    >
                      Excluir
                    </Button>
                  </View>
                </S.ModalActions>
              </S.ModalContent>
            </Modal>
          </S.Page>
        </KeyboardAvoidingView>
        {items.length !== 0 && (
          <S.ButtonWrapper>
            <Button
              disabled={loading}
              variant="primary"
              onPress={handleSubmit(handleCart)}
            >
              Finalizar pedido
            </Button>
          </S.ButtonWrapper>
        )}
      </S.Wrapper>
    </>
  );
};

export default Cart;
