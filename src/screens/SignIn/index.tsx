/* eslint-disable react/style-prop-object */
import React, { useState, useCallback } from 'react';
import {
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Image,
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
  const [loading, setLoading] = useState<boolean>(false);

  const [focusedInput, setFocusedInput] = React.useState<string | null>(null);

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      try {
        setLoading(true);
        await signIn({
          email: data.email,
          password: data.password,
        });
        setLoading(false);
        Alert.alert('Plataforma Sabia', '🎉 Bem vindo ao app');
      } catch (err) {
        setLoading(false);
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
            showsVerticalScrollIndicator={false}
          >
            <S.Container>
              <Image source={Logo} />
              <S.TitleWrapper>
                <S.Title>Oxe, ta esperando o que?</S.Title>
              </S.TitleWrapper>
              <>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ onChange, value }) => (
                    <Input
                      type="default"
                      icon={<Feather name="user" size={18} color="#ffffff" />}
                      autoCorrect={false}
                      autoCapitalize="none"
                      keyboardType="email-address"
                      placeholder="E-mail"
                      returnKeyType="next"
                      onChangeText={onChange}
                      value={value}
                      variant="dark"
                      style={{ marginBottom: 24 }}
                      onSubmitEditing={() => setFocusedInput('password')}
                      onBlur={() => setFocusedInput(null)}
                    />
                  )}
                />
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  render={({
                    onChange, value,
                  }) => (
                    <Input
                      type="default"
                      icon={<Feather name="lock" size={18} color="#ffffff" />}
                      autoCorrect={false}
                      autoCapitalize="none"
                      secureTextEntry
                      placeholder="Senha"
                      returnKeyType="go"
                      onChangeText={onChange}
                      value={value}
                      variant="dark"
                      style={{ marginBottom: 24 }}
                      focus={focusedInput === 'password'}
                      onSubmitEditing={handleSubmit(handleSignIn)}
                      onBlur={() => setFocusedInput(null)}
                    />
                  )}
                />
                <Button
                  disabled={loading}
                  variant="white"
                  onPress={handleSubmit(handleSignIn)}
                >
                  {loading ? 'Aguarde...' : 'Fazer Login'}
                </Button>
              </>
              {false && (
                <S.ForgotPassword>
                  <S.ForgotPasswordText>Esqueci minha senha</S.ForgotPasswordText>
                </S.ForgotPassword>
              )}
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
