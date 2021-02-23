/* eslint-disable react/style-prop-object */
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  View,
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import * as S from './styles';
import {
  Input,
  InputNumber,
  Button,
  Modal,
} from '../../components';

const Cart = (): JSX.Element => {
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    if (selectedItem !== null) setShowModal(true);
  }, [selectedItem]);

  return (
    <>
      <StatusBar style="light" />
      <S.Wrapper>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          enabled
        >
          <S.Page>
            <S.CartWrapper>
              <S.Items
                data={[
                  { title: 'Service name' },
                ]}
                onEdit={(item) => setSelectedItem(item)}
              />
              <S.Total amount={48} />
              <S.Label>Observações</S.Label>
              <Input
                type="default"
                multiline
              />
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
                    <InputNumber onChange={() => {}} />
                  </S.InputWrapper>
                  <View style={{ flex: 1 }}>
                    <Button
                      variant="danger"
                      onPress={() => {}}
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
        <S.ButtonWrapper>
          <Button onPress={() => {}}>
            Finalizar pedido
          </Button>
        </S.ButtonWrapper>
      </S.Wrapper>
    </>
  );
};

export default Cart;
