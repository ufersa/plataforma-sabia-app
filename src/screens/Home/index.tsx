/* eslint-disable react/style-prop-object */
import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import Header from './components/Header';
import Technologies from './components/Technologies';
// import Banks from './components/Banks';
import Services from './components/Services';
import * as S from './styles';

interface HomeProps {
  navigation: StackNavigationProp<any, any>
}

const Home = ({ navigation }: HomeProps): JSX.Element => (
  <>
    <Header />
    <S.Wrapper>
      <StatusBar style="dark" />
      <S.Container
        scrollEnabled
        showsVerticalScrollIndicator={false}
      >
        <Technologies navigation={navigation} />
        {/* <Banks navigation={navigation} /> */}
        <Services navigation={navigation} />
      </S.Container>
    </S.Wrapper>
  </>
);

export default Home;
