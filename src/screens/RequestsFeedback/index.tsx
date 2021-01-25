import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavigatorScreenParams } from '@react-navigation/native';
import styled from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View } from 'react-native';
import { Button, DefaultText } from '../../components';
import Colors from '../../utils/colors';
import { SvgXml } from 'react-native-svg';
import {IllustrationError, IllustrationSuccess} from '../../utils/svgs';

interface RequestsFeedbackProps {
  navigation: StackNavigationProp<any, any>
  route: NavigatorScreenParams<any, any>
};

const Wrapper = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  height: 100%;
`;

const Container = styled(View)`
  width: 100%;
  height: 100%;
  flexDirection: column;
  justifyContent: space-between;
  paddingHorizontal: 16px;
`;

const Page = styled(View)`
  flex: 1;
  paddingTop: 16px;
  marginBottom: 16px;
  justifyContent: center;
`;

const Title = styled(DefaultText)`
  width: 315px;
  fontSize: 24px;
  fontFamily: Rubik_500Medium;
  fontWeight: 700;
  lineHeight: 36px;
  color: ${({ error }) => error ? Colors.danger : Colors.primary};
  marginBottom: 16px;
`;

const Description = styled(DefaultText)`
  width: 315px;
  fontSize: 16px;
  fontFamily: Montserrat_500Medium;
  fontWeight: 500;
  lineHeight: 24px;
  color: #4a4a4a;
`;

const RequestsFeedback = ({ route: { params } }: RequestsFeedbackProps): JSX.Element => {
  const variant = params.feedback === 'success' ? 'primary' : 'danger';
  return (
    <Wrapper>
      <StatusBar style="dark" />
      <Container>
        <Page>
          <SvgXml xml={params.feedback === 'success' ? IllustrationSuccess : IllustrationError} />
          <Title error={params.feedback === 'error'}>
            {
              params.feedback === 'success'
                ? 'Pedido enviado com sucesso!'
                : 'Algo de errado aconteceu...'
            }
          </Title>
          <Description>
            {
              params.feedback === 'success'
                ? 'Em breve o responsável por essa tecnologia entrará em contato com você!'
                : 'Não foi possível completar o seu pedido, por favor tente mais tarde, se o erro persistir, entre em contato conosco'
            }
          </Description>
        </Page>
        <Button variant={variant} onPress={() => {}}>
          {
            params.feedback === 'success'
              ? 'Ir para meus pedidos'
              : 'Voltar para a tecnologia'
          }
        </Button>
      </Container>
    </Wrapper>
  );
};

export default RequestsFeedback;
