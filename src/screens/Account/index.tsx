/* eslint-disable react/style-prop-object */
import React, { useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Platform,
  KeyboardAvoidingView,
  View,
  Alert,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Feather } from '@expo/vector-icons';
import * as S from './styles';
import { Input, Button } from '../../components';
import Address from './components/Address';
import { useAuth } from '../../hooks/useAuth';
import { unMask } from '../../utils/unMask';
import { updateUser as updateUserService } from '../../services/user';
import Colors from '../../utils/colors';

const Account = (): JSX.Element => {
  const { user, signOut, updateUser } = useAuth();
  const { control, handleSubmit } = useForm();
  const [loading, setLoading] = useState<boolean>(false);

  const handleUpdate = useCallback(
    async (data) => {
      try {
        setLoading(true);
        const response = await updateUserService(user.id, {
          ...data,
          zipcode: unMask(data.zipcode),
          cpf: unMask(data.cpf),
        });
        setLoading(false);
        updateUser(response);
        Alert.alert('🎉', 'Dados alterados com sucesso');
      } catch (err) {
        setLoading(false);
        Alert.alert(
          'Ops!',
          'Erro ao alterar dados',
        );
      }
    }, [],
  );

  return (
    <>
      <StatusBar style="dark" />
      <S.Wrapper>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          enabled
        >
          <S.Page
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <S.Container>
              <S.User name={user?.full_name} />
              <S.Divider />
              <S.Title>Informações Pessoais</S.Title>
              <Controller
                name="full_name"
                control={control}
                defaultValue={user?.full_name}
                render={({ onChange, value }) => (
                  <Input
                    type="default"
                    placeholder="Nome completo"
                    returnKeyType="next"
                    autoCorrect={false}
                    autoCapitalize="none"
                    value={value}
                    onChangeText={onChange}
                    style={{ marginBottom: 16 }}
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                defaultValue={user?.email}
                render={({ onChange, value }) => (
                  <Input
                    type="email-address"
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="E-mail"
                    returnKeyType="next"
                    onChangeText={onChange}
                    value={value}
                    style={{ marginBottom: 16 }}
                    disabled
                  />
                )}
              />
              <View style={{ flexDirection: 'row', marginHorizontal: -8 }}>
                <View style={{ flex: 1, marginHorizontal: 8 }}>
                  <Controller
                    name="birth_date"
                    control={control}
                    defaultValue={user?.birth_date}
                    render={({ onChange, value }) => (
                      <Input
                        type="phone-pad"
                        placeholder="Data de Nascimento"
                        returnKeyLabel="Próximo"
                        returnKeyType="next"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={value}
                        onChangeText={onChange}
                        style={{ marginBottom: 16 }}
                        mask="99/99/9999"
                      />
                    )}
                  />
                </View>
                <View style={{ flex: 1, marginHorizontal: 8 }}>
                  <Controller
                    name="cpf"
                    control={control}
                    defaultValue={user?.cpf}
                    render={({ onChange, value }) => (
                      <Input
                        type="phone-pad"
                        placeholder="CPF"
                        returnKeyType="next"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={value}
                        onChangeText={onChange}
                        style={{ marginBottom: 16 }}
                        mask="999.999.999-99"
                      />
                    )}
                  />
                </View>
              </View>
              <Controller
                name="phone_number"
                control={control}
                defaultValue={user?.phone_number}
                render={({ onChange, value }) => (
                  <Input
                    type="phone-pad"
                    placeholder="Telefone"
                    returnKeyType="next"
                    autoCorrect={false}
                    autoCapitalize="none"
                    value={value}
                    onChangeText={onChange}
                    style={{ marginBottom: 16 }}
                    mask="(99) 99999-9999"
                  />
                )}
              />
              <Address form={control} />
              {false && (
                <>
                  <S.Divider />
                  <S.Title>Credenciais</S.Title>
                  <S.Touch activeOpacity={0.7}>
                    <S.TouchText>Alterar senha</S.TouchText>
                  </S.Touch>
                </>
              )}
              <S.Touch
                activeOpacity={0.7}
                onPress={signOut}
              >
                <Feather
                  name="log-out"
                  size={24}
                  color={Colors.danger}
                  style={{ marginRight: 16 }}
                />
                <S.TouchText color="danger">Sair do aplicativo</S.TouchText>
              </S.Touch>
            </S.Container>
          </S.Page>
        </KeyboardAvoidingView>
        <S.ButtonWrapper style={{ paddingBottom: 10 }}>
          <Button
            disabled={loading}
            onPress={handleSubmit(handleUpdate)}
          >
            {loading ? 'Salvando...' : 'Salvar alterações'}
          </Button>
        </S.ButtonWrapper>
      </S.Wrapper>
    </>
  );
};

export default Account;
