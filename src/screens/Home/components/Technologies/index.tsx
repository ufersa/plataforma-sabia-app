import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import TechnologyCard from './TechnologyCard';
import * as S from './styles';

interface TechnologiesProps {
  navigation: StackNavigationProp<any, any>
}

interface TechnologiesItemProps {
  id: number
  title: string
  status: 'public' | 'private'
  date: string
  image: string
  amount: number
  category: {
    name: string
  }
}

const Technologies = ({ navigation }: TechnologiesProps): JSX.Element => {
  const technologies: TechnologiesItemProps[] = [
    {
      id: 1,
      title: 'Test Very Long Title Technology',
      status: 'public',
      date: '2020-12-01T23:59:59-03:00',
      image: 'https://fakeimg.pl/216x216/',
      amount: 48900,
      category: {
        name: 'Semiárido',
      },
    },
  ];

  return (
    <S.TechnologiesWrapper
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={4}
      decelerationRate={0}
      snapToInterval={248 - (16 + 10)}
      snapToAlignment="start"
      contentContainerStyle={{
        alignItems: 'flex-start',
      }}
    >
      {technologies.map((technology, idx) => (
        <TechnologyCard
          key={`technology_${idx}`}
          data={technology}
          navigation={navigation}
          loading={false} // Eg.: technology?.id !== null
          style={{
            marginRight: (idx + 1) === technologies.length ? 36 : 20,
          }}
        />
      ))}
    </S.TechnologiesWrapper>
  );
};

export default Technologies;
