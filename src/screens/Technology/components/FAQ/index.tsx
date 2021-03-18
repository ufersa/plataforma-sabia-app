import React, { useCallback, useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { Controller, useForm } from 'react-hook-form';
import { Alert } from 'react-native';
import * as S from './styles';
import { Input, Button } from '../../../../components';
import { useAuth } from '../../../../hooks/useAuth';
import { createTechnologyQuestion, getTechnologyQuestions } from '../../../../services/technology';
import { useTechnology } from '../../../../hooks/useTechnology';

const FAQ = (): JSX.Element => {
  const technology = useTechnology();

  const [questions, setQuestions] = useState([]);
  const [totalItens, setTotalItens] = useState(2);

  const [loading, setLoading] = useState<boolean>(false);

  const { control, handleSubmit, reset } = useForm();

  const loadQuestions = useCallback(
    async () => {
      console.log(technology?.id);
      const questionsResult = await getTechnologyQuestions(technology.id);
      setQuestions(questionsResult.slice(0, totalItens));
    },
    [totalItens],
  );

  interface QuestionFormData {
    question: string
  }

  const sendQuestion = useCallback(
    async (data: QuestionFormData) => {
      try {
        setLoading(true);

        const result = await createTechnologyQuestion({ question: data.question, technology: technology.id });

        if (result) {
          loadQuestions();
        }

        Alert.alert(
          'Recebemos sua pergunta!',
          'A encaminhamos aos responsáveis.',
        );

        reset();

        setLoading(false);
      } catch (err) {
        setLoading(false);

        console.log(err.response.data.error.message);

        Alert.alert(
          'Erro ao enviar sua pergunta',
          'Tente novamente mais tarde.',
        );
      }
    }, [],
  );

  useEffect(() => {
    loadQuestions();
  }, []);

  return (
    <S.Wrapper>
      <S.Title>Perguntas e respostas</S.Title>
      <S.FormWrapper>

        <Controller
          name="question"
          defaultValue=""
          control={control}
          render={({ onChange, value }) => (
            <Input
              type="default"
              size="small"
              placeholder="Digite uma pergunta"
              returnKeyType="send"
              value={value}
              onChangeText={onChange}
              onSubmitEditing={handleSubmit(sendQuestion)}
            />
          )}
        />

        <S.FormButtonWrapper>
          <Button disabled={loading} variant="primary-light" onPress={handleSubmit(sendQuestion)}>
            {loading ? 'Aguarde...' : 'Enviar pergunta'}
          </Button>
        </S.FormButtonWrapper>
      </S.FormWrapper>
      <S.AnswersWrapper>

        {questions.length ? (
          <>
            {questions.map((question) => (
              <S.AnswersContainer key={`question_${question.id}`}>
                <S.AnswersTitle>{question.question}</S.AnswersTitle>
                <S.AnswersReplyWrapper>
                  <Feather name="corner-down-right" size={14} color="#a5a5a5" />
                  <S.AnswersReply>{question.answer}</S.AnswersReply>
                </S.AnswersReplyWrapper>
              </S.AnswersContainer>
            ))}

            <S.AnswersViewMore activeOpacity={0.7} onPress={() => { setTotalItens(totalItens + 2); }}>
              <S.AnswersViewMoreText>
                Ver mais perguntas
              </S.AnswersViewMoreText>
            </S.AnswersViewMore>
          </>
        ) : (
          <S.AnswersContainer>
            <S.AnswersTitle>Nenhuma pergunta encontrada.</S.AnswersTitle>
          </S.AnswersContainer>
        )}

      </S.AnswersWrapper>
    </S.Wrapper>
  );
};

export default FAQ;
