import React from 'react';
import styled from 'styled-components/native';
import { DefaultText } from '@components/.';

export const Container = styled.TouchableOpacity`
  height: 100%;
  align-items: center;
  justify-content: center;
  padding-horizontal: 10px;
`;

export const RecoveryPassword = ({onPress}): JSX.Element => (
  <Container onPress={onPress}>
    <DefaultText>Esqueceu?</DefaultText>
  </Container>
);
