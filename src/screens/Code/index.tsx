/* eslint-disable react/style-prop-object */
import React, { useEffect, useState, useCallback } from 'react';
import { NavigatorScreenParams } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Controller, useForm } from 'react-hook-form';
import { Input, Button } from '../../components';
import { useAuth } from '../../hooks/useAuth';
import { useModal } from '../../hooks/useModal';
import * as S from './styles';

import { accountConfirmation } from '../../services/auth';

interface CodeFormData {
  email: string;
  token: string;
}

interface CodeProps {
  navigation: StackNavigationProp<any, any>;
  route: NavigatorScreenParams<any, any>;
}

const Code = ({ navigation, route }: CodeProps): JSX.Element => {
  const { user } = useAuth();
  const { openModal } = useModal();
  const {
    control,
    handleSubmit,
    errors,
  } = useForm({
    defaultValues: {
      email: route?.params?.email ?? undefined,
      token: undefined,
    },
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleConfirm = useCallback(
    async (data: CodeFormData) => {
      setLoading(true);
      try {
        await accountConfirmation(data);
        setLoading(false);
        openModal();
      } catch (err) {
        Alert.alert(
          'Erro na confirmação',
          err.response.data?.error?.message ?? 'Tente novamente',
        );
        setLoading(false);
      }
    }, [],
  );

  useEffect(() => {
    if (user) navigation.navigate('Root');
  }, [user]);

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
            scrollEnabled={false}
          >
            <S.Container>
              <S.Title>Enviamos um código de confirmação para o seu e-mail.</S.Title>
              <S.InputWrapper>
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
                      placeholder="Confirme seu e-mail"
                      returnKeyType="next"
                      onChangeText={onChange}
                      value={value}
                      style={{ marginTop: 32, marginBottom: 24 }}
                      // focus={focusedInput === 'email'}
                      // onSubmitEditing={() => setFocusedInput('password')}
                      // onBlur={() => setFocusedInput(null)}
                      error={errors.email}
                      disabled={route?.params?.email}
                    />
                  )}
                />
              </S.InputWrapper>
              <S.InputWrapper>
                <Controller
                  name="token"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  render={({ onChange, value }) => (
                    <Input
                      type="phone-pad"
                      autoCorrect={false}
                      autoCapitalize="none"
                      placeholder="Código"
                      returnKeyType="next"
                      onChangeText={onChange}
                      value={value}
                      error={errors.token}
                      maxLength={6}
                    />
                  )}
                />
              </S.InputWrapper>
            </S.Container>
          </ScrollView>
        </KeyboardAvoidingView>
        <S.ButtonWrapper>
          <Button
            disabled={loading}
            onPress={handleSubmit(handleConfirm)}
          >
            {loading ? 'Aguarde...' : 'Confirmar'}
          </Button>
        </S.ButtonWrapper>
      </SafeAreaView>
    </>
  );
};

export default Code;
