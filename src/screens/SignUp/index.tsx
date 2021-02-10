/* eslint-disable react/style-prop-object */
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Controller, useForm } from 'react-hook-form';
import { Input, Button } from '../../components';
import * as S from './styles';

const SignUp = (): JSX.Element => {
  const { control } = useForm();
  const [focusedInput, setFocusedInput] = React.useState<string | null>(null);

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
                render={({ onChange, value }) => (
                  <Input
                    type="default"
                    placeholder="Nome completo"
                    returnKeyType="next"
                    onChangeText={onChange}
                    value={value}
                    style={{ marginBottom: 24 }}
                    onBlur={() => setFocusedInput(null)}
                    onSubmitEditing={() => setFocusedInput('email')}
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ onChange, value }) => (
                  <Input
                    type="email-address"
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="E-mail"
                    returnKeyType="next"
                    onChangeText={onChange}
                    value={value}
                    style={{ marginBottom: 24 }}
                    focus={focusedInput === 'email'}
                    onSubmitEditing={() => setFocusedInput('password')}
                    onBlur={() => setFocusedInput(null)}
                  />
                )}
              />

              <S.Title>Credenciais</S.Title>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ onChange, value }) => (
                  <Input
                    type="default"
                    secureTextEntry
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="Senha"
                    returnKeyType="next"
                    onChangeText={onChange}
                    value={value}
                    style={{ marginBottom: 24 }}
                    focus={focusedInput === 'password'}
                    onBlur={() => setFocusedInput(null)}
                    onSubmitEditing={() => setFocusedInput('repeatPassword')}
                  />
                )}
              />
              <Controller
                name="repeatPassword"
                control={control}
                defaultValue=""
                render={({ onChange, value }) => (
                  <Input
                    type="default"
                    secureTextEntry
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="Repetir senha"
                    returnKeyType="done"
                    onChangeText={onChange}
                    value={value}
                    style={{ marginBottom: 24 }}
                    onBlur={() => setFocusedInput(null)}
                    focus={focusedInput === 'repeatPassword'}
                  />
                )}
              />
            </S.Container>
          </ScrollView>
        </KeyboardAvoidingView>
        <S.ButtonWrapper>
          <Button variant="secondary" onPress={() => { }}>
            Cadastrar
          </Button>
        </S.ButtonWrapper>
      </SafeAreaView>
    </>
  );
};

export default SignUp;
