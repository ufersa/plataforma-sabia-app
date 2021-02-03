/* eslint-disable react/style-prop-object */
import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { Button } from '../../components';
import { About, Rating, FAQ } from './components';
import * as S from './styles';

interface TechnologyProps {
  navigation: StackNavigationProp<any, any>
}

const Technology = ({ navigation }: TechnologyProps): JSX.Element => (
  <S.Wrapper>
    <StatusBar style="dark" />
    <S.Container>
      <S.Header>
        <S.Image
          source={{
            uri: 'https://fakeimg.pl/382x256/',
            cache: 'only-if-cached',
          }}
          style={{
            width: '100%',
            height: undefined,
            borderRadius: 8,
            aspectRatio: 1.4,
          }}
        />
        <S.Title>Test Very Long Title Technology</S.Title>
        <S.HeaderDetails>
          <S.Amount>R$ 489,00</S.Amount>
          <S.Date>
            <S.DateIcon
              name="calendar"
              size={16}
              color="#a5a5a5"
            />
            <S.DateText>Há 2 meses atrás</S.DateText>
          </S.Date>
        </S.HeaderDetails>
      </S.Header>
      <About />
      <FAQ />
      <Rating />
    </S.Container>
    <S.ButtonWrapper>
      <Button onPress={() => navigation.navigate('RequestsFinish')}>
        Adquirir tecnologia
      </Button>
    </S.ButtonWrapper>
  </S.Wrapper>
);

export default Technology;
