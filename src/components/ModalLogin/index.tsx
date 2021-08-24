import React, { useState, useCallback } from 'react';
import * as Analytics from 'expo-firebase-analytics';
import { View, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useAuth } from '@hooks/useAuth';
import { useModal } from '@hooks/useModal';
import { redirect } from '@utils/navigator';
import { Input, Button } from '..';

interface ModalLoginProps {
  onSuccess: () => void
}

interface SignInFormData {
  email: string;
  password: string;
}

const ModalLogin = ({ onSuccess }: ModalLoginProps): JSX.Element => {
  const { signIn } = useAuth();
  const { closeModal } = useModal();
  const { control, handleSubmit, errors } = useForm();
  const [loading, setLoading] = useState<boolean>(false);

  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      try {
        setLoading(true);
        await signIn({
          email: data.email,
          password: data.password,
        });
        await Analytics.logEvent('login', { email: data.email });
        onSuccess();
      } catch (err) {
        setLoading(false);
        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer login, cheque as credenciais.',
        );
      }
    }, [],
  );

  return (
    <View style={{ paddingHorizontal: 20 }}>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        rules={{ required: true }}
        render={({ onChange, value }) => (
          <>
            <Input
              type="default"
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              placeholder="E-mail"
              returnKeyType="next"
              onChangeText={onChange}
              value={value}
              style={{ marginBottom: 24 }}
              onSubmitEditing={() => setFocusedInput('password')}
              onBlur={() => setFocusedInput(null)}
              error={errors.email}
            />
          </>
        )}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        rules={{ required: true }}
        render={({
          onChange, value,
        }) => (
          <>
            <Input
              type="default"
              autoCorrect={false}
              autoCapitalize="none"
              secureTextEntry
              placeholder="Senha"
              returnKeyType="go"
              onChangeText={onChange}
              value={value}
              style={{ marginBottom: 24 }}
              focus={focusedInput === 'password'}
              onSubmitEditing={handleSubmit(handleSignIn)}
              onBlur={() => setFocusedInput(null)}
              error={errors.password}
            />
          </>
        )}
      />
      <Button
        disabled={loading}
        onPress={handleSubmit(handleSignIn)}
      >
        {loading ? 'Aguarde...' : 'Continuar'}
      </Button>
      <Button
        variant="white"
        onPress={() => {
          closeModal();
          redirect('SignUp');
        }}
      >
        Criar conta
      </Button>
    </View>
  );
};

export default ModalLogin;
