import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import styled from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView } from 'react-native';
import Technologies from './components/Technologies';
import Banks from './components/Banks';

interface HomeProps {
  navigation: StackNavigationProp<any, any>
};

const Wrapper = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  height: 100%;
`;

const Container = styled(ScrollView)``;

const Home = ({ navigation }: HomeProps): JSX.Element => {
  const [screenHeight, setScreenHeight] = useState(0);

  const scrollEnabled: boolean = screenHeight > Dimensions.get('window').height; 

  const onContentSizeChange = (contentWidth: number, contentHeight: number) => {
    setScreenHeight(contentHeight);
  };

  return (
    <Wrapper>
      <StatusBar style="auto" />
      <Container
        scrollEnabled={scrollEnabled}
        onContentSizeChange={onContentSizeChange}
      >
        <Technologies navigation={navigation} />
        <Banks navigation={navigation} />
      </Container>
    </Wrapper>
  );
}

export default Home;
