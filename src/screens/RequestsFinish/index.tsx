/* eslint-disable react/style-prop-object */
import React, { useEffect, useState, useCallback } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavigatorScreenParams } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Platform, KeyboardAvoidingView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import {
  Button,
  Input,
  Select,
} from '../../components';
import Card from './components/Card';
import * as S from './styles';
import { buyTechnology, BuyTechnologyProps } from '../../services/technology';
import { UseStatus, FundingStatus } from '../../utils/requests';

interface RequestsFinishProps {
  navigation: StackNavigationProp<any, any>
  route: NavigatorScreenParams<any, any>
}

const RequestsFinish = ({ route: { params }, navigation }: RequestsFinishProps): JSX.Element => {
  const { data } = params;
  const {
    control,
    handleSubmit,
    register,
    setValue,
    watch,
  } = useForm();
  const field = watch();

  const [loading, setLoading] = useState<boolean>(false);
  const fundingOptions = Object.keys(FundingStatus).map((item) => ({
    label: FundingStatus[item],
    value: item,
  }));
  const useOptions = Object.keys(UseStatus).map((item) => ({
    label: UseStatus[item],
    value: item,
  }));

  const handleOrder = useCallback(
    async ({
      quantity,
      use,
      funding,
      comment,
    }: BuyTechnologyProps) => {
      try {
        setLoading(true);
        await buyTechnology(data.id, {
          quantity,
          use,
          funding,
          comment,
          type: 'technology',
        });
        setLoading(false);
        navigation.navigate('RequestsFeedback', { feedback: 'success' });
      } catch (err) {
        setLoading(false);
        navigation.navigate('RequestsFeedback', { feedback: 'error' });
      }
    }, [],
  );

  useEffect(() => {
    register({ name: 'use' });
    register({ name: 'funding' });
    register({ name: 'quantity' });
  }, []);

  return (
    <S.Wrapper>
      <StatusBar style="light" />
      <S.Container>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'position' : 'height'}
        >
          <S.Page showsVerticalScrollIndicator={false}>
            <Card
              data={data}
              onChange={(value: number) => setValue('quantity', value)}
            />
            <S.Title>Uso da tecnologia</S.Title>
            <Select
              placeholder="Uso da tecnologia"
              value={field.use ?? 'private'}
              options={useOptions}
              onSelect={(value: string | number) => setValue('use', value)}
            />
            <S.Title>Deseja financiamento?</S.Title>
            <Select
              placeholder="Deseja financiamento?"
              value={field.funding ?? 'has_funding'}
              options={fundingOptions}
              onSelect={(value: string | number) => setValue('funding', value)}
            />
            <S.Title>Observações</S.Title>
            <Controller
              name="comment"
              control={control}
              defaultValue=""
              render={({ onChange, value }) => (
                <Input
                  type="default"
                  multiline
                  autoCorrect={false}
                  placeholder="Gostaria de auxílio na instalação"
                  autoCapitalize="none"
                  keyboardType="default"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
          </S.Page>
        </KeyboardAvoidingView>
        <Button
          disabled={loading}
          onPress={handleSubmit(handleOrder)}
        >
          {`${loading ? 'Aguarde...' : 'Finalizar pedido'}`}
        </Button>
      </S.Container>
    </S.Wrapper>
  );
};

export default RequestsFinish;
