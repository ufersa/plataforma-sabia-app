/* eslint-disable react/style-prop-object */
import React, { useRef } from 'react';
import {
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Controller, useForm } from 'react-hook-form';
import { Input, Button } from '../../components';
import * as S from './styles';

const SignUp = (): JSX.Element => {
  const { control } = useForm();

  const emailRef = useRef<TextInput | null>(null);
  const passwordRef = useRef<TextInput | null>(null);
  const repeatPasswordRef = useRef<TextInput | null>(null);

  return (
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
              <S.Title>Informações Pessoais</S.Title>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({ onChange, onBlur, value }) => (
                  <Input
                    type="default"
                    placeholder="Nome completo"
                    returnKeyType="next"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    style={{ marginBottom: 24 }}
                    onSubmitEditing={() => {
                      emailRef.current?.focus();
                    }}
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ onChange, onBlur, value }) => (
                  <Input
                    type="email-address"
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="E-mail"
                    returnKeyType="next"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    style={{ marginBottom: 24 }}
                    onSubmitEditing={() => {
                      passwordRef.current?.focus();
                    }}
                    refs={emailRef}
                  />
                )}
              />

              <S.Title>Credenciais</S.Title>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ onChange, onBlur, value }) => (
                  <Input
                    type="default"
                    secureTextEntry
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="Senha"
                    returnKeyType="next"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    style={{ marginBottom: 24 }}
                    onSubmitEditing={() => {
                      repeatPasswordRef.current?.focus();
                    }}
                    refs={passwordRef}
                  />
                )}
              />
              <Controller
                name="repeatPassword"
                control={control}
                defaultValue=""
                render={({ onChange, onBlur, value }) => (
                  <Input
                    type="default"
                    secureTextEntry
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="Repetir senha"
                    returnKeyType="done"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    style={{ marginBottom: 24 }}
                    refs={repeatPasswordRef}
                  />
                )}
              />
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
};

export default SignUp;
