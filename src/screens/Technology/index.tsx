import React from 'react';
import styled from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';

const Container = styled(View)`
  flex: 1;
  width: 100%;
  height: 100%;
  justifyContent: center;
  alignItems: center;
`;

const Title = styled(Text)`
  fontSize: 18px;
`;

const Technology = (): JSX.Element => (
  <Container>
    <StatusBar style="light" />
    <Title>Technology</Title>
  </Container>
);

export default Technology;