/* eslint-disable react/style-prop-object */
import React, { useState, useCallback } from 'react';
import {
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Controller, useForm } from 'react-hook-form';
import { StackNavigationProp } from '@react-navigation/stack';
import { Input, Button } from '../../components';
import * as S from './styles';

import { register } from '../../services/auth';

interface SignUpFormData {
  name: string
  email: string;
  password: string;
  repeatPassword: string;
}

interface SignUpProps {
  navigation: StackNavigationProp<any, any>
}

const SignUp = ({ navigation }: SignUpProps): JSX.Element => {
  const { control, handleSubmit } = useForm();
  const [focusedInput, setFocusedInput] = React.useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSignUp = useCallback(
    async (data: SignUpFormData) => {
      if (data.password !== data.repeatPassword) {
        Alert.alert(
          'Erro no cadastro',
          'As senhas não coincidem',
        );
      } else {
        setLoading(true);
        await register({
          full_name: data.name,
          email: data.email,
          password: data.password,
          disclaimers: [1, 2, 3, 4, 5, 6, 7],
        }).then(() => {
          setLoading(false);
          Alert.alert('Plataforma Sabia', '🎉 Cadastro realizado com sucesso! Verifique seu e-mail.');
          navigation.goBack();
        }).catch((error) => {
          const message = error.response.data.error.message.reduce((append: any, err: any) => `${append}.\n\n ${err.message}`, '');
          setLoading(false);
          Alert.alert(
            'Erro no cadastro!',
            `${message}`,
          );
        });
      }
    }, [],
  );

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
                    style={{ marginBottom: 16 }}
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
          <Button
            disabled={loading}
            variant="secondary"
            onPress={handleSubmit(handleSignUp)}
          >
            {loading ? 'Aguarde...' : 'Cadastrar'}
          </Button>
        </S.ButtonWrapper>
      </SafeAreaView>
    </>
  );
};

export default SignUp;
