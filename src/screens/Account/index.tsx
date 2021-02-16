/* eslint-disable react/style-prop-object */
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, KeyboardAvoidingView } from 'react-native';
import * as S from './styles';
import { Input, Button } from '../../components';

const Account = (): JSX.Element => (
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
          <S.User />
          <S.Divider />
          <S.Title>Informações Pessoais</S.Title>
          <Input
            type="default"
            placeholder="Nome completo"
            returnKeyType="next"
            style={{ marginBottom: 16 }}
          />
          <Input
            type="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="E-mail"
            returnKeyType="next"
          />
          <S.Divider />
          <S.Title>Credenciais</S.Title>
          <S.Touch activeOpacity={0.7}>
            <S.TouchText>Alterar senha</S.TouchText>
          </S.Touch>
        </S.Page>
      </KeyboardAvoidingView>
      <S.ButtonWrapper>
        <Button onPress={() => {}}>
          Salvar alterações
        </Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  </>
);

export default Account;
