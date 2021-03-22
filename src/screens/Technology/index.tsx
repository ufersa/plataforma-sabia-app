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
import { useCart } from '../../hooks/useCart';
import { formatMoney } from '../../utils/helper';

interface TechnologyProps {
  navigation: StackNavigationProp<any, any>
  route: NavigatorScreenParams<any, any>
}

const Technology = ({ route, navigation }: TechnologyProps): JSX.Element => {
  const { data, type } = route.params;
  const { addCart } = useCart();

  const navigate = () => {
    if (type === 'technology') {
      navigation.navigate('RequestsFinish', { data });
    } else {
      addCart({
        id: data.id,
        title: data.title,
        quantity: 1,
        price: data.price,
        image: data.image,
        measureUnit: data.measureUnit,
        institution: data.institution,
      });
    }
  };

  return (
    <TechnologyProvider technologyId={data.id}>
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
              <S.Amount>
                {data.isSeller && formatMoney(data.price)}
              </S.Amount>
              {data.createdAt && (
                <S.Date>
                  <S.DateIcon
                    name="calendar"
                    size={16}
                    color="#a5a5a5"
                  />
                  <S.DateText>{formatDistance(data.createdAt)}</S.DateText>
                </S.Date>
              )}
            </S.HeaderDetails>
          </S.Header>
          <About
            type={type}
            description={data.description}
          />
          {type === 'technology' && (
            <>
              <Details />
              <FAQ />
              {false && (
                <>
                  <Rating />
                </>
              )}
            </>
          )}
        </S.Container>
        {data.isSeller && (
          <S.ButtonWrapper>
            <Button onPress={navigate}>
              {type === 'technology' ? 'Adquirir tecnologia' : 'Adicionar ao carrinho'}
            </Button>
          </S.ButtonWrapper>
        )}
      </S.Wrapper>
    </TechnologyProvider>
  );
};

export default Technology;
