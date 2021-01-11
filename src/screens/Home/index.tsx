import React from 'react';
import styled from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text } from 'react-native';

const Container = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Home = (): JSX.Element => (
  <Container>
    <StatusBar style="auto" />
    <Text>Home</Text>
  </Container>
);

export default Home;
