import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import styled from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import { Platform, KeyboardAvoidingView } from 'react-native';
import {
  Button,
  DefaultText,
  Input,
  Select,
} from '../../components';
import Card from './components/Card';

interface RequestsFinishProps {
  navigation: StackNavigationProp<any, any>
}

const Wrapper = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  height: 100%;
`;

const Container = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding-horizontal: 16px;
`;

const Page = styled.ScrollView`
  height: 100%;
  padding-top: 16px;
  margin-bottom: 16px;
`;

const Title = styled(DefaultText)`
  font-size: 18px;
  font-family: Rubik_500Medium;
  font-weight: 500;
  line-height: 27px;
  margin-top: 24px;
  margin-bottom: 8px;
`;

const RequestsFinish = ({ navigation }: RequestsFinishProps): JSX.Element => (
  <Wrapper>
    <StatusBar style="light" />
    <Container>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'position' : 'height'}
      >
        <Page showsVerticalScrollIndicator={false}>
          <Card />
          <Title>Uso da tecnologia</Title>
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

          <Title>Deseja financiamento?</Title>
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

          <Title>Observações</Title>
          <Input
            placeholder="Gostaria de auxílio na instalação"
            type="default"
            multiline
          />
        </Page>
      </KeyboardAvoidingView>
      <Button
        onPress={() => navigation.navigate('RequestsFeedback', { feedback: 'success' })}
      >
        Finalizar pedido
      </Button>
    </Container>
  </Wrapper>
);

export default RequestsFinish;
