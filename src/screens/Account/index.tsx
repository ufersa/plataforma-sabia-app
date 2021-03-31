/* eslint-disable camelcase */
/* eslint-disable react/style-prop-object */
import React, { useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Platform,
  KeyboardAvoidingView,
  View,
  Alert,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Feather } from '@expo/vector-icons';
import * as S from './styles';
import { Input, Button } from '../../components';
import Address from './components/Address';
import { useAuth } from '../../hooks/useAuth';
import { convertDate, formatDate } from '../../utils/formats';
import { unMask } from '../../utils/unMask';
import { updateUser as updateUserService } from '../../services/user';
import Colors from '../../utils/colors';

const Account = (): JSX.Element => {
  const { user, signOut, updateUser } = useAuth();
  const { control, handleSubmit, errors } = useForm();
  const [loading, setLoading] = useState<boolean>(false);

  const handleUpdate = useCallback(
    async (data) => {
      try {
        setLoading(true);

        const zipcode = data.zipcode ? unMask(data.zipcode) : null;
        const cpf = data.cpf ? unMask(data.cpf) : null;
        const birth_date = data.birth_date ? formatDate(data.birth_date, 'en-US') : '';

        const response = await updateUserService(user.id, {
          ...data,
          birth_date,
          zipcode,
          cpf,
        });

        setLoading(false);
        updateUser(response);
        Alert.alert('🎉', 'Dados alterados com sucesso');
      } catch (err) {
        console.log(err);

        setLoading(false);
        Alert.alert(
          'Ops!',
          'Erro ao alterar dados',
        );
      }
    }, [],
  );

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
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <S.Container>
              <S.User name={user?.full_name} />
              <S.Divider />
              <S.Title>Informações Pessoais</S.Title>
              <Controller
                name="full_name"
                control={control}
                defaultValue={user?.full_name}
                rules={{ required: true }}
                render={({ onChange, value }) => (
                  <>
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
                    {errors.full_name ? <S.Error>Obrigatório.</S.Error> : null}
                  </>
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
              <View style={{ flexDirection: 'row', marginHorizontal: -8 }}>
                <View style={{ flex: 1, marginHorizontal: 8 }}>
                  <Controller
                    name="birth_date"
                    control={control}
                    defaultValue={convertDate(user?.birth_date)}
                    rules={{ required: true }}
                    render={({ onChange, value }) => (
                      <>
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
                        {errors.birth_date ? <S.Error>Obrigatório.</S.Error> : null}
                      </>
                    )}
                  />
                </View>
                <View style={{ flex: 1, marginHorizontal: 8 }}>
                  <Controller
                    name="cpf"
                    control={control}
                    defaultValue={user?.cpf}
                    rules={{ required: true }}
                    render={({ onChange, value }) => (
                      <>
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
                        {errors.cpf ? <S.Error>Obrigatório.</S.Error> : null}
                      </>
                    )}
                  />
                </View>
              </View>
              <Controller
                name="phone_number"
                control={control}
                defaultValue={user?.phone_number}
                rules={{ required: true }}
                render={({ onChange, value }) => (
                  <>
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
                    {errors.phone_number ? <S.Error>Obrigatório.</S.Error> : null}
                  </>
                )}
              />
              <Address form={control} errors={errors} />
              {false && (
                <>
                  <S.Divider />
                  <S.Title>Credenciais</S.Title>
                  <S.Touch activeOpacity={0.7}>
                    <S.TouchText>Alterar senha</S.TouchText>
                  </S.Touch>
                </>
              )}
              <S.Touch
                activeOpacity={0.7}
                onPress={signOut}
              >
                <Feather
                  name="log-out"
                  size={24}
                  color={Colors.danger}
                  style={{ marginRight: 16 }}
                />
                <S.TouchText color="danger">Sair do aplicativo</S.TouchText>
              </S.Touch>
            </S.Container>
          </S.Page>
        </KeyboardAvoidingView>
        <S.ButtonWrapper style={{ paddingBottom: 10 }}>
          <Button
            disabled={loading}
            onPress={handleSubmit(handleUpdate)}
          >
            {loading ? 'Salvando...' : 'Salvar alterações'}
          </Button>
        </S.ButtonWrapper>
      </S.Wrapper>
    </>
  );
};

export default Account;
