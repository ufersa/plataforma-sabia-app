/* eslint-disable react/style-prop-object */
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import * as S from './styles';
import { Input, Tabs } from '../../components';
import Technologies from './components/Technologies';
import Services from './components/Services';

const Search = (): JSX.Element => (
  <S.Wrapper>
    <StatusBar style="dark" />
    <S.Container>
      <S.SearchWrapper>
        <Input
          type="default"
          placeholder="Buscar soluções"
          icon={<Feather name="search" size={24} color="#a5a5a5" />}
        />
      </S.SearchWrapper>
      <Tabs
        tabs={[
          {
            title: 'Tecnologias',
            content: <Technologies
              data={[
                { title: 'Result' },
                { title: 'Result' },
              ]}
            />,
          },
          {
            title: 'Serviços',
            content: <Services data={[]} />,
          },
        ]}
      />
    </S.Container>
  </S.Wrapper>
);

export default Search;
