import React from 'react';
import styled from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import { View, SafeAreaView } from 'react-native';
import { DefaultText } from '../../components';
import List from './components/List';

const Wrapper = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  height: 100%;
`;

const Container = styled(View)`
  width: 100%;
  height: 100%;
`;

const Title = styled(DefaultText)`
  font-size: 24px;
  line-height: 36px;
  fontFamily: Rubik_500Medium;
  fontWeight: 500;
  padding-top: 16px;
  padding-horizontal: 16px;
`;

const Requests = (): JSX.Element => (
  <Wrapper>
    <StatusBar style="auto" />
    <Container>
      <Title>Meus pedidos</Title>
      <List
        data={[
          {
            title: 'Test Very Long Title Technology',
            amount: 48900,
            status: 'send'
          }
        ]}
      />
    </Container>
  </Wrapper>
);

export default Requests;
