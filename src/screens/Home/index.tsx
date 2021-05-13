/* eslint-disable react/style-prop-object */
import React from 'react';
import { Platform, StatusBar as StatusBarHelper, SafeAreaView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import Header from './components/Header';
import Technologies from './components/Technologies';
import Banks from './components/Banks';
import Services from './components/Services';
import * as S from './styles';

interface HomeProps {
  navigation: StackNavigationProp<any, any>
}

const Home = ({ navigation }: HomeProps): JSX.Element => (
  <SafeAreaView
    style={{
      flex: 1,
      paddingTop: Platform.OS === 'android' ? StatusBarHelper.currentHeight : 0,
    }}
  >
    <Header />
    <S.Wrapper>
      <StatusBar style="dark" />
      <S.Container
        scrollEnabled
        showsVerticalScrollIndicator={false}
      >
        <Technologies navigation={navigation} />
        <Banks navigation={navigation} />
        <Services navigation={navigation} />
      </S.Container>
    </S.Wrapper>
  </SafeAreaView>
);

export default Home;
