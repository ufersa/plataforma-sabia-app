import React, { useCallback, useEffect, useState } from 'react';
import { Feather, Ionicons } from '@expo/vector-icons';
import { Controller, useForm } from 'react-hook-form';
import { Alert } from 'react-native';
import { Input, Button } from '@components/.';
import { createTechnologyQuestion, getTechnologyQuestions } from '@services/technology';
import { useTechnology } from '@hooks/useTechnology';
import { useAuth } from '@hooks/useAuth';
import { useModal } from '@hooks/useModal';
import * as S from './styles';

const FAQ = (): JSX.Element => {
  const { user } = useAuth();
  const { openModal } = useModal();
  const technology = useTechnology();

  const [questions, setQuestions] = useState([]);
  const [totalQuestions, setTotalQuestions] = useState(2);

  const [loading, setLoading] = useState<boolean>(false);
  const [filled, setFilled] = useState<boolean>(false);

  const { control, handleSubmit, reset } = useForm();

  const loadQuestions = useCallback(
    async () => {
      const questionsResult = await getTechnologyQuestions(technology.id);
      setQuestions(questionsResult.slice(0, totalQuestions));
    },
    [totalQuestions, technology],
  );

  interface QuestionFormData {
    question: string
  }

  const sendQuestion = useCallback(
    async (data: QuestionFormData) => {
      if (!filled) return false;

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

        setFilled(false);
        setLoading(false);
      } catch (err) {
        setLoading(false);

        Alert.alert(
          'Erro ao enviar sua pergunta',
          'Tente novamente mais tarde.',
        );
      }
      return true;
    }, [technology, filled],
  );

  useEffect(() => {
    loadQuestions();
  }, [totalQuestions, technology]);

  return (
    <S.Wrapper>
      <S.Title>Perguntas e respostas</S.Title>
      <S.FormWrapper>
        {user ? (
          <>
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
                  onChangeText={(text) => {
                    setFilled(text.length > 0);
                    onChange(text);
                  }}
                  onSubmitEditing={handleSubmit(sendQuestion)}
                />
              )}
            />
            <S.FormButtonWrapper>
              <Button disabled={loading || !filled} variant="primary-light" onPress={handleSubmit(sendQuestion)}>
                {loading ? 'Aguarde...' : 'Enviar pergunta'}
              </Button>
            </S.FormButtonWrapper>
          </>
        ) : (
          <Button onPress={() => openModal()}>Entrar na sua conta</Button>
        )}
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

            {questions.length > totalQuestions ? (

              <S.AnswersViewMore activeOpacity={0.7} onPress={() => { setTotalQuestions(totalQuestions + 2); }}>
                <S.AnswersViewMoreText>
                  <Ionicons name="reload-sharp" size={16} />
                  {' '}
                  Ver mais perguntas
                </S.AnswersViewMoreText>
              </S.AnswersViewMore>
            ) : null}
          </>
        ) : (
          <S.AnswersContainer>
            <S.AnswersTitle style={{ textAlign: 'center' }}>Nenhuma pergunta encontrada.</S.AnswersTitle>
          </S.AnswersContainer>
        )}
      </S.AnswersWrapper>
    </S.Wrapper>
  );
};

export default FAQ;
