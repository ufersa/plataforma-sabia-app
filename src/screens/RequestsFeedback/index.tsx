/* eslint-disable react/style-prop-object */
import React from 'react';
import { NavigatorScreenParams } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SvgXml } from 'react-native-svg';
import { Button } from '../../components';
import { IllustrationError, IllustrationSuccess } from '../../utils/svgs';
import * as S from './styles';

interface RequestsFeedbackProps {
  route: NavigatorScreenParams<any, any>
}

const RequestsFeedback = ({ route: { params } }: RequestsFeedbackProps): JSX.Element => {
  const variant = params.feedback === 'success' ? 'primary' : 'danger';
  return (
    <S.Wrapper>
      <StatusBar style="dark" />
      <S.Container>
        <S.Page>
          <SvgXml xml={params.feedback === 'success' ? IllustrationSuccess : IllustrationError} />
          <S.Title error={params.feedback === 'error'}>
            {
              params.feedback === 'success'
                ? 'Pedido enviado com sucesso!'
                : 'Algo de errado aconteceu...'
            }
          </S.Title>
          <S.Description>
            {
              params.feedback === 'success'
                ? 'Em breve o responsável por essa tecnologia entrará em contato com você!'
                : 'Não foi possível completar o seu pedido, por favor tente mais tarde, se o erro persistir, entre em contato conosco'
            }
          </S.Description>
        </S.Page>
        <Button variant={variant} onPress={() => {}}>
          {
            params.feedback === 'success'
              ? 'Ir para meus pedidos'
              : 'Voltar para a tecnologia'
          }
        </Button>
      </S.Container>
    </S.Wrapper>
  );
};

export default RequestsFeedback;
