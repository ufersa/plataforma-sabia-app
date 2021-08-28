/* eslint-disable camelcase */
/* eslint-disable react/style-prop-object */
import React, { useEffect, useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Platform,
  KeyboardAvoidingView,
  View,
  Alert,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Feather } from '@expo/vector-icons';
import { Input, Button, Modal } from '@components/.';
import { useAuth } from '@hooks/useAuth';
import { formatDate } from '@utils/formats';
import { unMask } from '@utils/unMask';
import { updateUser as updateUserService, updateUserPassword } from '@services/user';
import { getStates, getCities } from '@services/localization';
import Address from './components/Address';
import * as S from './styles';

const Account = (): JSX.Element => {
  const { user, updateUser } = useAuth();
  const {
    control,
    register,
    handleSubmit,
    errors,
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      state: {
        id: 1,
        initials: 'MG',
        name: 'Minas Gerais',
      },
      city: {
        id: 1,
        name: 'Unaí',
      },
    },
  });
  const { control: controlPass, handleSubmit: handleSubmitPass, errors: errorsPass } = useForm();
  const [loading, setLoading] = useState<boolean>(false);

  const [passModal, setPassModal] = useState<boolean>(false);

  const [loadingState, setLoadingState] = useState<boolean>(false);
  const [states, setStates] = useState([]);

  const field = watch();

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
          city: {
            id: data.city_id,
            name: data.city,
          },
          state: {
            id: data.state_id,
            initials: data.state,
          },
        });

        setLoading(false);
        updateUser(response);
        Alert.alert('🎉', 'Dados alterados com sucesso');
      } catch (err) {
        setLoading(false);
        Alert.alert(
          'Ops!',
          'Erro ao alterar dados',
        );
      }
    }, [],
  );

  const handleChangePass = useCallback(
    async (data) => {
      try {
        setLoading(true);

        await updateUserPassword({
          currentPassword: data.currentPassword,
          newPassword: data.newPassword,
        });

        setLoading(false);
        setPassModal(false);
        Alert.alert('🎉', 'Senha alterada com sucesso!');
      } catch (err) {
        setLoading(false);
        Alert.alert(
          'Ops!',
          'Erro ao alterar a senha',
        );
      }
    }, [],
  );

  const getAllStates = useCallback(
    async () => {
      try {
        const { data } = await getStates();

        setStates(data);
        setValue('state_id', user.state_id);
        // setValue('state', data.find((state: any) => state.id === user.state_id));
      } catch (err) {
        Alert.alert(
          'Ops!',
          'Não possível buscar os estados',
        );
      }
    }, [user, setValue],
  );

  const getCity = useCallback(
    async () => {
      try {
        const { data } = await getCities({ stateId: user.state_id });

        setValue('city_id', user.city_id);
        // setValue('city', data.find((city: any) => city.id === user.city_id));
      } catch (err) {
        Alert.alert(
          'Ops!',
          'Não possível buscar as cidades',
        );
      }
    }, [user, setValue],
  );

  useEffect(() => {
    if (user.state_id) {
      getAllStates();

      if (user.city_id) {
        getCity();
      }
    }
  }, [user]);

  useEffect(() => {
    register({ name: 'state' });
    register({ name: 'city' });
  }, [user]);

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
                      error={errors.full_name}
                    />
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
                    defaultValue={user?.birth_date}
                    rules={{ required: true }}
                    render={({ onChange, value }) => (
                      <>
                        <Input
                          type="number-pad"
                          icon={<Feather name="calendar" size={18} color="#a5a5a5" />}
                          placeholder="Data de Nasc."
                          returnKeyLabel="Próximo"
                          returnKeyType="next"
                          autoCorrect={false}
                          autoCapitalize="none"
                          value={value}
                          onChangeText={onChange}
                          style={{ marginBottom: 16 }}
                          mask="99/99/9999"
                          error={errors.birth_date}
                        />
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
                          error={errors.cpf}
                        />
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
                      mask="(99) 9999-*9999"
                      error={errors.phone_number}
                    />
                  </>
                )}
              />
              <Address
                form={control}
                field={field}
                errors={errors}
                data={{ states }}
                loading={{ state: loadingState }}
              />
              <S.Divider />
              <S.Title>Credenciais</S.Title>
              <S.Touch activeOpacity={0.7} style={{ marginVertical: 12 }} onPress={() => setPassModal(true)}>
                <S.TouchText>Alterar senha</S.TouchText>
              </S.Touch>

              <Modal
                title="Alterar senha"
                height={390}
                animationType="slide"
                visible={passModal}
                onClose={() => {
                  setPassModal(false);
                }}
              >
                <S.ModalContent>
                  <KeyboardAvoidingView
                    behavior="position"
                    enabled
                  >
                    <>
                      <View style={{ marginHorizontal: 16 }}>
                        <Controller
                          name="currentPassword"
                          control={controlPass}
                          defaultValue={null}
                          rules={{ required: true }}
                          render={({ onChange, value }) => (
                            <>
                              <Input
                                type="default"
                                secureTextEntry
                                placeholder="Senha atual"
                                returnKeyType="next"
                                autoCorrect={false}
                                autoCapitalize="none"
                                value={value}
                                onChangeText={onChange}
                                style={{ marginBottom: 16 }}
                                error={errorsPass.currentPassword}
                              />
                            </>
                          )}
                        />
                        <Controller
                          name="newPassword"
                          control={controlPass}
                          defaultValue={null}
                          rules={{ required: true }}
                          render={({ onChange, value }) => (
                            <>
                              <Input
                                type="default"
                                secureTextEntry
                                autoCorrect={false}
                                autoCapitalize="none"
                                placeholder="Nova senha"
                                returnKeyType="next"
                                onChangeText={onChange}
                                value={value}
                                style={{ marginBottom: 16 }}
                                error={errorsPass.newPassword}
                              />
                            </>
                          )}
                        />
                      </View>
                      <S.ModalActions>
                        <View style={{ flex: 1 }}>
                          <Button
                            disabled={loading}
                            onPress={handleSubmitPass(handleChangePass)}
                            icon="edit"
                          >
                            {loading ? 'Salvando...' : 'Alterar senha'}
                          </Button>
                        </View>
                      </S.ModalActions>
                    </>
                  </KeyboardAvoidingView>
                </S.ModalContent>
              </Modal>
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
