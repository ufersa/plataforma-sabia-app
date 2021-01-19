import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import { Feather } from '@expo/vector-icons';
import { Input } from '../../../../components';

interface SearchProps {
  onFocus: () => void
  onBlur: () => void
};

const Container = styled(View)`
  paddingHorizontal: 16px;
`;

const Search = ({ onFocus, onBlur }: SearchProps): JSX.Element => (
  <Container>
    <Input
      icon={<Feather name="search" size={18} color="#a5a5a5" />}
      placeholder="Buscar tecnologias"
      type="default"
      onFocus={onFocus}
      onBlur={onBlur}
    />
  </Container>
);

export default Search;
