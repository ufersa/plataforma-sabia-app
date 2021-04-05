/* eslint-disable react/style-prop-object */
import React, { useEffect, useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import {
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import {
  Button,
  Input,
  Select,
  Modal,
} from '../../components';
import * as S from './styles';
import { sendContact, SendContactProps } from '../../services/contact';
import Colors from '../../utils/colors';
import { useAuth } from '../../hooks/useAuth';

const Contact = (): JSX.Element => {
  const navigation = useNavigation();
  const { user } = useAuth();

  const {
    control,
    handleSubmit,
    register,
    setValue,
    watch,
    reset,
  } = useForm();

  const field = watch();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const contactOptions = [
    { label: 'Sugestão de melhoria', value: 'improvement-suggestion' },
    { label: 'Reportar erro', value: 'report-error' },
    { label: 'Reportar abuso', value: 'report-abuse' },
    { label: 'Crítica', value: 'criticism' },
  ];

  const handleContact = useCallback(
    async (data: SendContactProps) => {
      try {
        setLoading(true);
        await sendContact(data);
        setShowModal((state: boolean) => !state);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        Alert.alert(
          'Erro ao enviar sua mensagem',
          'Tente novamente mais tarde.',
        );
      }
    }, [],
  );

  useEffect(() => {
    register({ name: 'subject' });
  }, []);

  return (
    <S.Wrapper>
      <StatusBar style="dark" />
      <S.Container>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'position' : 'height'}
        >
          <S.Page showsVerticalScrollIndicator={false}>
            <S.Title>Dados pessoais</S.Title>
            <Controller
              name="name"
              control={control}
              defaultValue={user.full_name}
              render={({ onChange, value }) => (
                <Input
                  type="default"
                  autoCorrect={false}
                  autoCapitalize="none"
                  placeholder="Qual o seu nome?"
                  keyboardType="default"
                  onChangeText={onChange}
                  value={value}
                  style={{ marginBottom: 16 }}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              defaultValue={user.email}
              render={({ onChange, value }) => (
                <Input
                  type="email-address"
                  autoCorrect={false}
                  autoCapitalize="none"
                  placeholder="Seu melhor email"
                  keyboardType="default"
                  onChangeText={onChange}
                  value={value}
                  style={{ marginBottom: 16 }}
                />
              )}
            />
            <Controller
              name="phone"
              control={control}
              defaultValue={user.phone_number}
              render={({ onChange, value }) => (
                <Input
                  type="phone-pad"
                  autoCorrect={false}
                  autoCapitalize="none"
                  placeholder="Telefone"
                  keyboardType="default"
                  onChangeText={onChange}
                  value={value}
                  mask="(99) 99999-9999"
                />
              )}
            />
            <S.Divider />
            <S.Title>Qual o motivo do contato?</S.Title>
            <Select
              placeholder="Escolha um assunto"
              value={field.subject ?? ''}
              options={contactOptions}
              onSelect={(value: string | number) => setValue('subject', value)}
            />
            <S.Divider />
            <S.Title>Sua mensagem</S.Title>
            <Controller
              name="message"
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
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => reset()}
              style={{ marginTop: 32, marginBottom: 64 }}
            >
              <S.ResetFields>Limpar campos</S.ResetFields>
            </TouchableOpacity>
            <Modal
              title="Recebemos sua mensagem 🎉"
              titleStyle={{
                width: 200,
                fontSize: 20,
                lineHeight: 26,
                color: Colors.primary,
              }}
              animationType="slide"
              visible={showModal}
              onClose={() => setShowModal(false)}
            >
              <S.ModalContent>
                <S.ModalMessage>
                  {'Obrigado pelo seu contato. \nRetornaremos o em breve.'}
                </S.ModalMessage>
                <Button
                  onPress={() => {
                    setShowModal(false);
                    navigation.navigate('Account');
                  }}
                >
                  Voltar para o perfil
                </Button>
              </S.ModalContent>
            </Modal>
          </S.Page>
        </KeyboardAvoidingView>
        <Button
          disabled={loading}
          onPress={handleSubmit(handleContact)}
        >
          {`${loading ? 'Enviando...' : 'Enviar mensagem'}`}
        </Button>
      </S.Container>
    </S.Wrapper>
  );
};

export default Contact;
