import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { Controller } from 'react-hook-form';
import { Input } from '@components/.';
import { useAuth } from '@hooks/useAuth';
import * as S from '../styles';

const AddressWrapper = styled.View`
  margin-bottom: 24px;
`;

export const Required = (): JSX.Element => (<S.Error>Obrigatório.</S.Error>);

const Address = ({ form, errors }: any): JSX.Element => {
  const { user } = useAuth();

  return (
    <AddressWrapper>
      <S.Divider />
      <S.Title>Endereço</S.Title>
      <Controller
        name="address"
        control={form}
        defaultValue={user?.address}
        rules={{ required: true }}
        render={({ onChange, value }) => (
          <>
            <Input
              type="default"
              placeholder="Logradouro"
              returnKeyType="next"
              autoCorrect={false}
              autoCapitalize="none"
              value={value}
              onChangeText={onChange}
              style={{ marginBottom: 16 }}
              error={errors.address}
            />
            {errors.address ? (<Required />) : null}
          </>
        )}
      />
      <View style={{ flexDirection: 'row', marginHorizontal: -8 }}>
        <View style={{ flex: 1, marginHorizontal: 8 }}>
          <Controller
            name="zipcode"
            control={form}
            defaultValue={user?.zipcode}
            rules={{ required: true }}
            render={({ onChange, value }) => (
              <>
                <Input
                  type="phone-pad"
                  placeholder="CEP"
                  returnKeyLabel="Próximo"
                  returnKeyType="next"
                  autoCorrect={false}
                  autoCapitalize="none"
                  value={value}
                  onChangeText={onChange}
                  style={{ marginBottom: 16 }}
                  mask="99999-999"
                  error={errors.zipcode}
                />
                {errors.zipcode ? (<Required />) : null}
              </>
            )}
          />
        </View>
        <View style={{ flex: 1, marginHorizontal: 8 }}>
          <Controller
            name="district"
            control={form}
            defaultValue={user?.district}
            rules={{ required: true }}
            render={({ onChange, value }) => (
              <>
                <Input
                  type="default"
                  placeholder="Bairro"
                  returnKeyType="next"
                  autoCorrect={false}
                  autoCapitalize="none"
                  value={value}
                  onChangeText={onChange}
                  style={{ marginBottom: 16 }}
                  error={errors.district}
                />
                {errors.district ? (<Required />) : null}
              </>
            )}
          />
        </View>
      </View>
      <View style={{ flexDirection: 'row', marginHorizontal: -8 }}>
        <View style={{ flex: 1, marginHorizontal: 8 }}>
          <Controller
            name="city"
            control={form}
            defaultValue={user?.city}
            rules={{ required: true }}
            render={({ onChange, value }) => (
              <>
                <Input
                  type="default"
                  placeholder="Cidade"
                  returnKeyType="next"
                  autoCorrect={false}
                  autoCapitalize="none"
                  value={value}
                  onChangeText={onChange}
                  style={{ marginBottom: 16 }}
                  error={errors.city}
                />
                {errors.city ? (<Required />) : null}
              </>
            )}
          />
        </View>
        <View style={{ flex: 1, marginHorizontal: 8 }}>
          <Controller
            name="state"
            control={form}
            defaultValue={user?.state}
            rules={{ required: true }}
            render={({ onChange, value }) => (
              <>
                <Input
                  type="default"
                  placeholder="Estado"
                  returnKeyType="next"
                  autoCorrect={false}
                  autoCapitalize="none"
                  value={value}
                  onChangeText={onChange}
                  style={{ marginBottom: 16 }}
                  mask="AA"
                  error={errors.state}
                />
                {errors.state ? (<Required />) : null}
              </>
            )}
          />
        </View>
      </View>
      <Controller
        name="country"
        control={form}
        defaultValue={user?.country}
        rules={{ required: true }}
        render={({ onChange, value }) => (
          <>
            <Input
              type="default"
              placeholder="País"
              returnKeyType="next"
              autoCorrect={false}
              autoCapitalize="none"
              value={value}
              onChangeText={onChange}
              style={{ marginBottom: 16 }}
              error={errors.country}
            />
            {errors.country ? (<Required />) : null}
          </>
        )}
      />
    </AddressWrapper>
  );
};

export default Address;
