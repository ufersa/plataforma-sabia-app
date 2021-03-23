import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { Controller } from 'react-hook-form';
import { Input } from '../../../components';
import { useAuth } from '../../../hooks/useAuth';
import * as S from '../styles';

const AddressWrapper = styled.View`
  margin-bottom: 24px;
`;

const Address = ({ form }: any): JSX.Element => {
  const { user } = useAuth();

  return (
    <AddressWrapper>
      <S.Divider />
      <S.Title>Endereço</S.Title>
      <Controller
        name="address"
        control={form}
        defaultValue={user?.address}
        render={({ onChange, value }) => (
          <Input
            type="default"
            placeholder="Endereço"
            returnKeyType="next"
            autoCorrect={false}
            autoCapitalize="none"
            value={value}
            onChangeText={onChange}
            style={{ marginBottom: 16 }}
          />
        )}
      />
      <View style={{ flexDirection: 'row', marginHorizontal: -8 }}>
        <View style={{ flex: 1, marginHorizontal: 8 }}>
          <Controller
            name="zipcode"
            control={form}
            defaultValue={user?.zipcode}
            render={({ onChange, value }) => (
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
              />
            )}
          />
        </View>
        <View style={{ flex: 1, marginHorizontal: 8 }}>
          <Controller
            name="district"
            control={form}
            defaultValue={user?.district}
            render={({ onChange, value }) => (
              <Input
                type="default"
                placeholder="Bairro"
                returnKeyType="next"
                autoCorrect={false}
                autoCapitalize="none"
                value={value}
                onChangeText={onChange}
                style={{ marginBottom: 16 }}
              />
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
            render={({ onChange, value }) => (
              <Input
                type="default"
                placeholder="Cidade"
                returnKeyType="next"
                autoCorrect={false}
                autoCapitalize="none"
                value={value}
                onChangeText={onChange}
                style={{ marginBottom: 16 }}
              />
            )}
          />
        </View>
        <View style={{ flex: 1, marginHorizontal: 8 }}>
          <Controller
            name="state"
            control={form}
            defaultValue={user?.state}
            render={({ onChange, value }) => (
              <Input
                type="default"
                placeholder="Estado"
                returnKeyType="next"
                autoCorrect={false}
                autoCapitalize="none"
                value={value}
                onChangeText={onChange}
                style={{ marginBottom: 16 }}
                disabled
              />
            )}
          />
        </View>
      </View>
      <Controller
        name="country"
        control={form}
        defaultValue={user?.country}
        render={({ onChange, value }) => (
          <Input
            type="default"
            placeholder="País"
            returnKeyType="next"
            autoCorrect={false}
            autoCapitalize="none"
            value={value}
            onChangeText={onChange}
            style={{ marginBottom: 16 }}
          />
        )}
      />
    </AddressWrapper>
  );
};

export default Address;
