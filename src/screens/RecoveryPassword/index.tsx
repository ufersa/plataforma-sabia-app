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
import { Input, Button } from '@components/.';

import { forgotPassword } from '@services/auth';
import * as S from './styles';

interface RecoveryPasswordFormData {
  email: string;
}

interface RecoveryPasswordProps {
  navigation: StackNavigationProp<any, any>
}

const RecoveryPassword = ({ navigation }: RecoveryPasswordProps): JSX.Element => {
  const {
    control,
    handleSubmit,
    errors,
    reset,
  } = useForm();
  const [loading, setLoading] = useState<boolean>(false);

  const handleRecoveryPassword = useCallback(
    async ({ email }: RecoveryPasswordFormData) => {
      setLoading(true);
      await forgotPassword(email)
        .then(async () => {
          reset();
          navigation.navigate('Code', { email, recovery: true });
        })
        .catch((err) => {
          const { data } = err?.response;
          Alert.alert(
            'Erro ao solicitar',
            data.error.message,
          );
        })
        .finally(() => setLoading(false));
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
              <S.Title>Insira o e-mail cadastrado</S.Title>
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
                    returnKeyType="go"
                    onChangeText={onChange}
                    value={value}
                    style={{ marginBottom: 24 }}
                    onSubmitEditing={handleSubmit(handleRecoveryPassword)}
                    error={errors.email}
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
            onPress={handleSubmit(handleRecoveryPassword)}
          >
            {loading ? 'Aguarde...' : 'Solicitar'}
          </Button>
        </S.ButtonWrapper>
      </SafeAreaView>
    </>
  );
};

export default RecoveryPassword;
