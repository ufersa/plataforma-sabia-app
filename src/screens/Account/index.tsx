/* eslint-disable react/style-prop-object */
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, KeyboardAvoidingView, View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Feather } from '@expo/vector-icons';
import * as S from './styles';
import { Input, Button } from '../../components';
import { useAuth } from '../../hooks/useAuth';
import Colors from '../../utils/colors';

const Account = (): JSX.Element => {
  const { user, signOut } = useAuth();
  const { control } = useForm();

  return (
    <>
      <StatusBar style="dark" />
      <S.Wrapper>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          enabled
        >
          <S.Page
            contentContainerStyle={{ flex: 1 }}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <S.Container>
              <S.User name={user?.full_name} />
              <S.Divider />
              <S.Title>Informações Pessoais</S.Title>
              <Controller
                name="name"
                control={control}
                defaultValue={user?.full_name}
                render={({ onChange, value }) => (
                  <Input
                    type="default"
                    placeholder="Nome completo"
                    returnKeyType="next"
                    autoCorrect={false}
                    autoCapitalize="none"
                    value={value}
                    onChangeText={onChange}
                    style={{ marginBottom: 16 }}
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                defaultValue={user?.email}
                render={({ onChange, value }) => (
                  <Input
                    type="email-address"
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="E-mail"
                    returnKeyType="next"
                    onChangeText={onChange}
                    value={value}
                    style={{ marginBottom: 16 }}
                    disabled
                  />
                )}
              />
              <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                  <Controller
                    name="birth_date"
                    control={control}
                    defaultValue={user?.phone_number}
                    render={({ onChange, value }) => (
                      <Input
                        type="phone-pad"
                        placeholder="Data de Nascimento"
                        returnKeyLabel="Próximo"
                        returnKeyType="next"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={value}
                        onChangeText={onChange}
                        style={{ marginBottom: 16 }}
                        mask="99/99/9999"
                      />
                    )}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Controller
                    name="cpf"
                    control={control}
                    defaultValue={user?.phone_number}
                    render={({ onChange, value }) => (
                      <Input
                        type="phone-pad"
                        placeholder="CPF"
                        returnKeyType="next"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={value}
                        onChangeText={onChange}
                        style={{ marginBottom: 16 }}
                        mask="999.999.999-99"
                      />
                    )}
                  />
                </View>
              </View>
              <Controller
                name="phone_number"
                control={control}
                defaultValue={user?.phone_number}
                render={({ onChange, value }) => (
                  <Input
                    type="phone-pad"
                    placeholder="Telefone"
                    returnKeyType="next"
                    autoCorrect={false}
                    autoCapitalize="none"
                    value={value}
                    onChangeText={onChange}
                    style={{ marginBottom: 16 }}
                    mask="(99) 99999-9999"
                  />
                )}
              />
              <S.Divider />
              <S.Title>Credenciais</S.Title>
              <S.Touch activeOpacity={0.7}>
                <S.TouchText>Alterar senha</S.TouchText>
              </S.Touch>
            </S.Container>
          </S.Page>
        </KeyboardAvoidingView>
        <S.Touch activeOpacity={0.7} onPress={signOut}>
          <Feather
            name="log-out"
            size={24}
            color={Colors.danger}
            style={{ marginRight: 16 }}
          />
          <S.TouchText color="danger">Sair do aplicativo</S.TouchText>
        </S.Touch>
        <S.ButtonWrapper style={{ paddingBottom: 10 }}>
          <Button onPress={() => {}}>
            Salvar alterações
          </Button>
        </S.ButtonWrapper>
      </S.Wrapper>
    </>
  );
};

export default Account;
