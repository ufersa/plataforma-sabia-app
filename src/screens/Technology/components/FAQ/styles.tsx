/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { DefaultText, Input, Button } from '../../../../components';
import Colors from '../../../../utils/colors';

export const Wrapper = styled.View`
  padding-top: 32px;
  padding-horizontal: 16px;
`;

export const Title = styled(DefaultText)`
  color: #4a4a4a;
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 16px;
`;

const AnswersWrapper = styled.View`
  margin-top: 32px;
`;

const AnswersContainer = styled.View`
  margin-bottom: 16px;
`;

const AnswersTitle = styled(DefaultText)`
  color: #4a4a4a;
  font-family: Montserrat_500Medium;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 4px;
`;

const AnswersReplyWrapper = styled.View`
  flex-direction: row;
`;

const AnswersReply = styled(DefaultText)`
  color: #a5a5a5;
  font-family: Montserrat_400Regular;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  padding-left: 10px;
`;

const AnswersViewMore = styled.TouchableOpacity`
  margin-top: 16px;
`;

const AnswersViewMoreText = styled(DefaultText)`
  color: ${Colors.primary};
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const Answers = () => (
  <AnswersWrapper>
    <AnswersContainer>
      <AnswersTitle>Boa noite, vocês auxiliam na instalação?</AnswersTitle>
      <AnswersReplyWrapper>
        <Feather name="corner-down-right" size={14} color="#a5a5a5" />
        <AnswersReply>Boa noite. Não, esse seria um investimento a parte.</AnswersReply>
      </AnswersReplyWrapper>
    </AnswersContainer>
    <AnswersContainer>
      <AnswersTitle>Bom dia, Caso eu queira mais de uma, existe alguma condição especial ou eu teria que pagar o valor cheio?</AnswersTitle>
      <AnswersReplyWrapper>
        <Feather name="corner-down-right" size={14} color="#a5a5a5" />
        <AnswersReply>Boa noite. Sim, entre em contato conosco através do email.</AnswersReply>
      </AnswersReplyWrapper>
    </AnswersContainer>
    <AnswersViewMore activeOpacity={0.7}>
      <AnswersViewMoreText>
        Ver mais perguntas
      </AnswersViewMoreText>
    </AnswersViewMore>
  </AnswersWrapper>
);

const FormWrapper = styled.View``;

const FormButtonWrapper = styled.View`
  margin-top: 12px;
`;

export const Form = () => (
  <FormWrapper>
    <Input type="default" size="small" placeholder="Digite uma pergunta" />
    <FormButtonWrapper>
      <Button variant="primary-light" onPress={() => {}}>
        Enviar pergunta
      </Button>
    </FormButtonWrapper>
  </FormWrapper>
);
