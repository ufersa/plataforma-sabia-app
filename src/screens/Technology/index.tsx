/* eslint-disable react/style-prop-object */
import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavigatorScreenParams } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import formatDistance from '../../utils/formatDistance';
import { Button } from '../../components';
import {
  About,
  Details,
  Rating,
  FAQ,
} from './components';
import * as S from './styles';
import { TechnologyProvider } from '../../hooks/useTechnology';
import { formatMoney } from '../../utils/helper';

interface TechnologyProps {
  navigation: StackNavigationProp<any, any>
  route: NavigatorScreenParams<any, any>
}

const Technology = ({ route, navigation }: TechnologyProps): JSX.Element => {
  const { data } = route.params;

  return (
    <TechnologyProvider technologyID={data.id}>
      <S.Wrapper>
        <StatusBar style="dark" />
        <S.Container>
          <S.Header>
            <S.Image
              source={{
                uri: data.image,
              }}
              style={{
                width: '100%',
                height: undefined,
                borderRadius: 8,
                aspectRatio: 1.4,
              }}
            />
            <S.Title>{data.title}</S.Title>
            <S.HeaderDetails>
              <S.Amount>{formatMoney(data.price)}</S.Amount>
              <S.Date>
                <S.DateIcon
                  name="calendar"
                  size={16}
                  color="#a5a5a5"
                />
                <S.DateText>{formatDistance(data.createdAt)}</S.DateText>
              </S.Date>
            </S.HeaderDetails>
          </S.Header>
          <About description={data.description} />
          <Details />
          <FAQ />
          <Rating />
        </S.Container>
        <S.ButtonWrapper>
          <Button onPress={() => navigation.navigate('RequestsFinish')}>
            Adquirir tecnologia
          </Button>
        </S.ButtonWrapper>
      </S.Wrapper>
    </TechnologyProvider>
  );
};

export default Technology;
