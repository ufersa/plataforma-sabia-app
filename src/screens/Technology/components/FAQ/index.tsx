import React from 'react';
import { Feather } from '@expo/vector-icons';
import * as S from './styles';
import { Input, Button } from '../../../../components';

const FAQ = () => (
  <S.Wrapper>
    <S.Title>Perguntas e respostas</S.Title>
    <S.FormWrapper>
      <Input type="default" size="small" placeholder="Digite uma pergunta" />
      <S.FormButtonWrapper>
        <Button variant="primary-light" onPress={() => { }}>
          Enviar pergunta
        </Button>
      </S.FormButtonWrapper>
    </S.FormWrapper>
    <S.AnswersWrapper>
      <S.AnswersContainer>
        <S.AnswersTitle>Boa noite, vocês auxiliam na instalação?</S.AnswersTitle>
        <S.AnswersReplyWrapper>
          <Feather name="corner-down-right" size={14} color="#a5a5a5" />
          <S.AnswersReply>Boa noite. Não, esse seria um investimento a parte.</S.AnswersReply>
        </S.AnswersReplyWrapper>
      </S.AnswersContainer>
      <S.AnswersContainer>
        <S.AnswersTitle>Bom dia, Caso eu queira mais de uma, existe alguma condição especial ou eu teria que pagar o valor cheio?</S.AnswersTitle>
        <S.AnswersReplyWrapper>
          <Feather name="corner-down-right" size={14} color="#a5a5a5" />
          <S.AnswersReply>Boa noite. Sim, entre em contato conosco através do email.</S.AnswersReply>
        </S.AnswersReplyWrapper>
      </S.AnswersContainer>
      <S.AnswersViewMore activeOpacity={0.7}>
        <S.AnswersViewMoreText>
          Ver mais perguntas
        </S.AnswersViewMoreText>
      </S.AnswersViewMore>
    </S.AnswersWrapper>
  </S.Wrapper>
);

export default FAQ;
