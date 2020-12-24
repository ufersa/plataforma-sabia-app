import React from 'react';
import { ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import styled from 'styled-components';
import TechnologyCard from './TechnologyCard';

interface TechnologiesProps {
  navigation: StackNavigationProp<any, any>
};

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

const TechnologiesWrapper = styled(ScrollView)`
  marginTop: 32px;
  height: 421px;
  paddingLeft: 16px;
`;

const Technologies = ({ navigation }: TechnologiesProps): JSX.Element => {
  const technologies: TechnologiesItemProps[] = [{}, {}, {}, {}];

  return (
    <TechnologiesWrapper
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={4}
      decelerationRate={0}
      snapToInterval={248 - (16 + 10)}
      snapToAlignment="start"
      contentContainerStyle={{
        alignItems: 'flex-start'
      }}
    >
      {technologies.map((technology, idx) => (
        <TechnologyCard
          key={`technology_${idx}`}
          data={technology}
          navigation={navigation}
          loading={false} // Eg.: technology?.id !== null
          style={{
            marginRight: (idx + 1) === technologies.length ? 36 : 20
          }}
        />
      ))}
    </TechnologiesWrapper>
  );
}

export default Technologies;
