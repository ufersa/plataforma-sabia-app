import React, { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import Search from './components/Search';
import Technologies from './components/Technologies';
import Banks from './components/Banks';
import * as S from './styles';

interface HomeProps {
  navigation: StackNavigationProp<any, any>
}

const Home = ({ navigation }: HomeProps): JSX.Element => {
  const [isEditing, setEditing] = useState(false);

  return (
    <S.Wrapper>
      <StatusBar />
      <S.Container
        scrollEnabled
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
      </S.Container>
    </S.Wrapper>
  );
};

export default Home;
