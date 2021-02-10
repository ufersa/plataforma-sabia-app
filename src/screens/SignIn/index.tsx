/* eslint-disable react/style-prop-object */
import React, { useCallback, useRef } from 'react';
import {
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Image,
  TextInput,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { useAuth } from '../../hooks/useAuth';
import { Input, Button } from '../../components';
import * as S from './styles';
import Logo from '../../../assets/logo/Logo-color.png';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn = (): JSX.Element => {
  const navigation = useNavigation();
  const { signIn, signOut } = useAuth();
  const { control, handleSubmit } = useForm();

  const passwordRef = useRef<TextInput | null>(null);

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      try {
        await signIn({
          email: data.email,
          password: data.password,
        });

        Alert.alert('Plataforma Sabia', '🎉 Bem vindo ao app');
      } catch (err) {
        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer login, cheque as credenciais.',
        );

        signOut();
      }
    }, [],
  );

  return (
    <>
      <StatusBar style="light" />
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
              <Image source={Logo} />
              <S.Title>Oxe, ta esperando o que?</S.Title>
              <>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ onChange, onBlur, value }) => (
                    <Input
                      type="default"
                      icon={<Feather name="user" size={18} color="#ffffff" />}
                      autoCorrect={false}
                      autoCapitalize="none"
                      keyboardType="email-address"
                      placeholder="E-mail"
                      returnKeyType="next"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      variant="dark"
                      style={{ marginBottom: 24 }}
                      onSubmitEditing={() => {
                        passwordRef.current?.focus();
                      }}
                    />
                  )}
                />
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  render={({
                    onChange, onBlur, value,
                  }) => (
                    <Input
                      type="default"
                      icon={<Feather name="lock" size={18} color="#ffffff" />}
                      autoCorrect={false}
                      autoCapitalize="none"
                      secureTextEntry
                      placeholder="Senha"
                      returnKeyType="go"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      variant="dark"
                      style={{ marginBottom: 24 }}
                      refs={passwordRef}
                      onSubmitEditing={handleSubmit(handleSignIn)}
                    />
                  )}
                />
                <Button disabled={false} variant="white" onPress={handleSubmit(handleSignIn)}>
                  Fazer Login
                </Button>
              </>
              <S.ForgotPassword>
                <S.ForgotPasswordText>Esqueci minha senha</S.ForgotPasswordText>
              </S.ForgotPassword>
            </S.Container>
          </ScrollView>
        </KeyboardAvoidingView>
        <S.ButtonWrapper>
          <Button variant="secondary" onPress={() => navigation.navigate('SignUp')}>
            Ainda não possui conta?
          </Button>
        </S.ButtonWrapper>
      </SafeAreaView>
    </>
  );
};

export default SignIn;
