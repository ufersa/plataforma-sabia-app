import React from 'react';
import styled from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';

const Container = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  height: 100%;
  justifyContent: center;
  alignItems: center;
`;

const Home = (): JSX.Element => (
  <Container>
    <StatusBar style="auto" />
  </Container>
);

export default Home;
