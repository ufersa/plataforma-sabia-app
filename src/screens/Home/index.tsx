import React, { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import styled from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import Search from './components/Search';
import Technologies from './components/Technologies';
import Banks from './components/Banks';

interface HomeProps {
  navigation: StackNavigationProp<any, any>
}

const Wrapper = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  height: 100%;
`;

const Container = styled.ScrollView`
  margin-vertical: 16px;
`;

const Home = ({ navigation }: HomeProps): JSX.Element => {
  const [isEditing, setEditing] = useState(false);

  return (
    <Wrapper>
      <StatusBar />
      <Container
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
      >
        <Search
          onFocus={() => setEditing(true)}
          onBlur={() => setEditing(false)}
        />
        {!isEditing && (
          <>
            <Technologies navigation={navigation} />
            <Banks />
          </>
        )}
      </Container>
    </Wrapper>
  );
};

export default Home;
