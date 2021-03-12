/* eslint-disable react/style-prop-object */
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, KeyboardAvoidingView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as S from './styles';
import { Input, Button } from '../../components';
import { useAuth } from '../../hooks/useAuth';

const Account = (): JSX.Element => {
  const { user, signOut } = useAuth();
  const { control } = useForm();

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
            contentContainerStyle={{ flex: 1 }}
            keyboardShouldPersistTaps="handled"
          >
            <S.User name={user?.full_name} />
            <S.Divider />
            <S.Title>Informações Pessoais</S.Title>
            <Controller
              name="name"
              control={control}
              defaultValue={user?.full_name}
              render={({ onChange, value }) => (
                <Input
                  type="default"
                  placeholder="Nome completo"
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
                  disabled
                />
              )}
            />
            {false && (
              <>
                <S.Divider />
                <S.Title>Credenciais</S.Title>
                <S.Touch activeOpacity={0.7}>
                  <S.TouchText>Alterar senha</S.TouchText>
                </S.Touch>
              </>
            )}
          </S.Page>
        </KeyboardAvoidingView>
        <S.ButtonWrapper style={{ paddingBottom: 10 }}>
          <Button onPress={() => {}}>
            Salvar alterações
          </Button>
        </S.ButtonWrapper>
        <S.ButtonWrapper>
          <Button disabled={false} variant="primary-light" onPress={signOut}>
            Sair
          </Button>
        </S.ButtonWrapper>
      </S.Wrapper>
    </>
  );
};

export default Account;
