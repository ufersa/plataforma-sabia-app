import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import TechnologyCard from './TechnologyCard';
import * as S from './styles';

interface TechnologiesProps {
  navigation: StackNavigationProp<any, any>
}

interface TechnologiesItemProps {
  id?: number
  title?: string
  status?: string
  date?: string
  image?: string
  category?: {
    name: string
  }
}

const Technologies = ({ navigation }: TechnologiesProps): JSX.Element => {
  const technologies: TechnologiesItemProps[] = [{}, {}, {}, {}];

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
