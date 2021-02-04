import React, { useCallback } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Image,
} from 'react-native';

import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';

import { useAuth } from '../../hooks/useAuth';

import Input from '../../components/Input';

import * as S from './styles';

import logoImg from '../../../assets/logo/Logo-color.png';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn = (): JSX.Element => {
  const navigation = useNavigation();
  const { signIn, signOut } = useAuth();
  const { control, handleSubmit, errors } = useForm();

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
            <Image source={logoImg} />

            <View>
              <S.Title>Oxe, ta esperando o que?</S.Title>
            </View>

            <View>

              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ onChange, onBlur, value }) => (
                  <Input
                    type="default"
                    icon={<Entypo name="email" size={18} color="#a5a5a5" />}
                    autoCorrect={false}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    placeholder="E-mail"
                    returnKeyType="next"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
              />

              <View
                style={{
                  marginTop: 15,
                }}
              />

              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ onChange, onBlur, value }) => (
                  <Input
                    type="default"
                    icon={<MaterialCommunityIcons name="onepassword" size={18} color="#a5a5a5" />}
                    autoCorrect={false}
                    autoCapitalize="none"
                    secureTextEntry
                    placeholder="Senha"
                    returnKeyType="send"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
              />

              <View
                style={{
                  marginTop: 15,
                }}
              />

              <S.SignInButton
                onPress={handleSubmit(handleSignIn)}
              >
                Fazer Login
              </S.SignInButton>
            </View>
            <S.ForgotPassword>
              <S.ForgotPasswordText>Esqueci minha senha</S.ForgotPasswordText>
            </S.ForgotPassword>
          </S.Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <S.CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
        {/* <Icon name="log-in" size={20} color="#FF9000" /> */}
        Criar uma conta
      </S.CreateAccountButton>
    </>
  );
};

export default SignIn;
