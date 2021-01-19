import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import styled from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import { View, ScrollView, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { Button, DefaultText, Input, Select } from '../../components';
import Card from './components/Card';

interface RequestsFinishProps {
  navigation: StackNavigationProp<any, any>
};

const Wrapper = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  height: 100%;
`;

const Container = styled(View)`
  width: 100%;
  height: 100%;
  flexDirection: column;
  justifyContent: space-between;
  paddingHorizontal: 16px;
`;

const Page = styled(ScrollView)`
  paddingTop: 16px;
  marginBottom: 16px;
`;

const Title = styled(DefaultText)`
  fontSize: 18px;
  fontFamily: Rubik_500Medium;
  fontWeight: 500;
  lineHeight: 27px;
  marginTop: 24px;
  marginBottom: 8px;
`;

const RequestsFinish = ({ navigation }: RequestsFinishProps): JSX.Element => {
  return (
    <Wrapper>
      <StatusBar style="light" />
      <Container>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior="position"
          keyboardVerticalOffset={-20}
          enabled
        >
          <Page>
            <Card />
            <Title>Uso da tecnologia</Title>
            <Select
              placeholder="Pessoal"
              value="Pessoal"
              options={[
                {
                  label: 'Pessoal',
                  value: 'Pessoal'
                },
                {
                  label: 'Comercial',
                  value: 'Comercial'
                }
              ]}
              onPress={() => {}}
            />

            <Title>Deseja financiamento?</Title>
            <Select
              placeholder="Financiamento"
              value={0}
              options={[
                {
                  label: 'Sim, eu já tenho como financiar',
                  value: 0
                },
                {
                  label: 'Não, quero financiar',
                  value: 1
                }
              ]}
              onPress={() => {}}
            />

            <Title>Observações</Title>
            <Input
              placeholder="Gostaria de auxílio na instalação"
              type="default"
              returnKey="done"
              multiline
            />
          </Page>
        </KeyboardAvoidingView>
        <Button onPress={() => navigation.navigate('RequestsFeedback', { feedback: 'success' })}>
          Finalizar pedido
        </Button>
      </Container>
    </Wrapper>
  );
};

export default RequestsFinish;
