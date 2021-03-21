/* eslint-disable react/style-prop-object */
import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavigatorScreenParams } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Platform, KeyboardAvoidingView } from 'react-native';
import {
  Button,
  Input,
  Select,
} from '../../components';
import Card from './components/Card';
import * as S from './styles';

interface RequestsFinishProps {
  navigation: StackNavigationProp<any, any>
  route: NavigatorScreenParams<any, any>
}

const RequestsFinish = ({ route: { params }, navigation }: RequestsFinishProps): JSX.Element => {
  const { data } = params;
  return (
    <S.Wrapper>
      <StatusBar style="light" />
      <S.Container>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'position' : 'height'}
        >
          <S.Page showsVerticalScrollIndicator={false}>
            <Card data={data} />
            <S.Title>Uso da tecnologia</S.Title>
            <Select
              placeholder="Uso da tecnologia"
              value="Privado"
              options={[
                {
                  label: 'Privado',
                  value: 'Privado',
                },
                {
                  label: 'Municipal',
                  value: 'Municipal',
                },
                {
                  label: 'Empresas',
                  value: 'Empresas',
                },
                {
                  label: 'Estadual',
                  value: 'Estadual',
                },
                {
                  label: 'Federal',
                  value: 'Federal',
                },
                {
                  label: 'Outro',
                  value: 'Outro',
                },
              ]}
              onPress={() => {}}
            />
            <S.Title>Deseja financiamento?</S.Title>
            <Select
              placeholder="Deseja financiamento?"
              value={0}
              options={[
                {
                  label: 'Sim, eu já tenho como financiar',
                  value: 0,
                },
                {
                  label: 'Não, quero financiar',
                  value: 1,
                },
              ]}
              onPress={() => {}}
            />
            <S.Title>Observações</S.Title>
            <Input
              placeholder="Gostaria de auxílio na instalação"
              type="default"
              multiline
            />
          </S.Page>
        </KeyboardAvoidingView>
        <Button
          onPress={() => navigation.navigate('RequestsFeedback', { feedback: 'success' })}
        >
          Finalizar pedido
        </Button>
      </S.Container>
    </S.Wrapper>
  );
};

export default RequestsFinish;
