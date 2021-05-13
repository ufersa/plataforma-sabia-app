/* eslint-disable react/style-prop-object */
import React, { useState, useCallback } from 'react';
import {
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Linking,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Controller, useForm } from 'react-hook-form';
import { StackNavigationProp } from '@react-navigation/stack';
import { Input, Button, Checkbox } from '../../components';
import * as S from './styles';

import { register } from '../../services/auth';
import Colors from '../../utils/colors';
import { useAuth } from '../../hooks/useAuth';

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
  const {
    control,
    handleSubmit,
    errors,
    watch,
  } = useForm();
  const { signIn } = useAuth();
  const [focusedInput, setFocusedInput] = React.useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [validSignUp, setValidSignUp] = useState<boolean>(false);

  const field = watch();

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
        }).then(async () => {
          // setLoading(false);
          // Alert.alert(
          //   'Plataforma Sabia',
          //   '🎉 Cadastro realizado com sucesso! Verifique seu e-mail para confirmá-lo.',
          // );
          // navigation.goBack();
          await signIn({
            email: data.email,
            password: data.password,
          });
          setLoading(false);
          navigation.navigate('Root');
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
                rules={{ required: true }}
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
                    error={errors.name}
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{ required: true }}
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
                    error={errors.email}
                  />
                )}
              />

              <S.Title>Credenciais</S.Title>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{ required: true }}
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
                    error={errors.password}
                  />
                )}
              />
              <Controller
                name="repeatPassword"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  validate: (value: string) => value === field.password,
                }}
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
                    error={errors.repeatPassword}
                  />
                )}
              />
              <S.ChexboxWrapper>
                <Checkbox onChange={(state: boolean) => setValidSignUp(state)} />
                <S.TextTerms
                  style={{
                    flex: 1,
                    marginLeft: 16,
                  }}
                >
                  Li e concordo com a
                  {' '}
                  <S.TextTerms
                    style={{
                      fontFamily: 'Rubik_500Medium',
                      color: Colors.primary,
                      fontWeight: '500',
                    }}
                    onPress={() => Linking.openURL('https://plataformasabia.com/privacy-policy')}
                  >
                    Política de Privacidade
                  </S.TextTerms>
                  {' '}
                  e os
                  {' '}
                  <S.TextTerms
                    style={{
                      fontFamily: 'Rubik_500Medium',
                      color: Colors.primary,
                      fontWeight: '500',
                    }}
                    onPress={() => Linking.openURL('https://plataformasabia.com/terms-of-use')}
                  >
                    Termos e Condições de Uso.
                  </S.TextTerms>
                </S.TextTerms>
              </S.ChexboxWrapper>
            </S.Container>
          </ScrollView>
        </KeyboardAvoidingView>
        <S.ButtonWrapper>
          <Button
            disabled={loading || !validSignUp}
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
