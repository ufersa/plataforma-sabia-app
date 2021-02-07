/* eslint-disable react/style-prop-object */
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Input, Button } from '../../components';
import * as S from './styles';

const SignUp = (): JSX.Element => (
  <>
    <StatusBar style="dark" />
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <S.Container>
            <S.TitleWrapper>
              <S.Title>Informações Pessoais</S.Title>
            </S.TitleWrapper>
            <S.InputWrapper>
              <Input type="default" placeholder="Nome completo" />
            </S.InputWrapper>
            <S.InputWrapper>
              <Input type="email-address" placeholder="E-mail" />
            </S.InputWrapper>
            <S.TitleWrapper>
              <S.Title>Credenciais</S.Title>
            </S.TitleWrapper>
            <S.InputWrapper>
              <Input type="default" placeholder="Senha" />
            </S.InputWrapper>
            <S.InputWrapper>
              <Input type="default" placeholder="Repetir senha" />
            </S.InputWrapper>
          </S.Container>
          <S.ButtonWrapper>
            <Button variant="secondary" onPress={() => {}}>
              Cadastrar
            </Button>
          </S.ButtonWrapper>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  </>
);

export default SignUp;
