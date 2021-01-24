import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Input } from '../../../../components';
import * as S from './styles';

interface SearchProps {
  onFocus: () => void
  onBlur: () => void
}

const Search = ({ onFocus, onBlur }: SearchProps): JSX.Element => (
  <S.Container>
    <Input
      icon={<Feather name="search" size={18} color="#a5a5a5" />}
      placeholder="Buscar tecnologias"
      type="default"
      clearButtonMode="while-editing"
      onFocus={onFocus}
      onBlur={onBlur}
    />
  </S.Container>
);

export default Search;
