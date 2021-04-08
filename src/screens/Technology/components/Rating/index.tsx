/* eslint-disable camelcase */
import React, {
  Dispatch,
  SetStateAction,
  useCallback, useEffect, useState,
} from 'react';
import { Alert, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Controller, useForm } from 'react-hook-form';
import * as S from './styles';
import { useTechnology } from '../../../../hooks/useTechnology';
import { createTechnologyReview, getReviews } from '../../../../services/technology';
import {
  Button, Input, Modal, Tabs,
} from '../../../../components';
import Colors from '../../../../utils/colors';

interface ReviewProps {
  content: string
  id: number
  negative: string[]
  positive: string[]
  rating: number
  user: {
    full_name: string
  }
}
interface ReviewsProps {
  data: ReviewProps[]
}

interface StarsProps {
  initialScore?: number
  size?: number
  active?: boolean
  updateScore?: Dispatch<SetStateAction<number>>
}

const Stars = ({
  initialScore = 0, size = 12, active = false, updateScore,
}: StarsProps): JSX.Element => {
  const [score, setScore] = useState<number>(0);

  const getColor = (level: number) => ((score >= level) ? '#f9d142' : '#e8e8e8');

  const starClick = (level: number) => {
    if (active) {
      if (score === level) {
        setScore(0);
        updateScore(0);
      } else {
        setScore(level);
        updateScore(level);
      }
    }
  };

  useEffect(() => {
    if (initialScore) setScore(initialScore);
  }, [score, initialScore]);

  return (
    <S.Stars>
      <TouchableOpacity
        activeOpacity={0.4}
        onPress={() => starClick(1)}
      >
        <S.Star solid name="star" size={size} color={getColor(1)} />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.4}
        onPress={() => starClick(2)}
      >
        <S.Star solid name="star" size={size} color={getColor(2)} />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.4}
        onPress={() => starClick(3)}
      >
        <S.Star solid name="star" size={size} color={getColor(3)} />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.4}
        onPress={() => starClick(4)}
      >
        <S.Star solid name="star" size={size} color={getColor(4)} />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.4}
        onPress={() => starClick(5)}
      >
        <S.Star solid name="star" size={size} color={getColor(5)} />
      </TouchableOpacity>
    </S.Stars>
  );
};

interface ReviewFormProps {
  onFinish: Dispatch<SetStateAction<boolean>>
}

const ReviewForm = ({ onFinish }: ReviewFormProps): JSX.Element => {
  const [positives, setPositives] = useState<string[]>([]);
  const [negatives, setNegatives] = useState<string[]>([]);
  const [score, setScore] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const technology = useTechnology();

  const addPositive = useCallback((comment: string) => {
    if (comment && comment.length) setPositives([...positives, comment]);
    setValue('positiveComment', '');
  }, [positives]);

  const addNegative = useCallback((comment: string) => {
    if (comment && comment.length) setNegatives([...negatives, comment]);
    setValue('negativeComment', '');
  }, [negatives]);

  const {
    control,
    errors,
    setValue,
    watch,
  } = useForm();

  const field = watch();

  const handleReview = useCallback(
    async () => {
      if (!score || !control.getValues().review) return;

      const data = {
        technologyId: technology.id,
        rating: score,
        content: control.getValues().review,
        positive: positives,
        negative: negatives,
      };

      try {
        setLoading(true);

        await createTechnologyReview(data).then(() => {
          setLoading(false);
          Alert.alert(
            'Obrigado pela avaliação!',
          );
          onFinish(false);
        });
      } catch (err) {
        setLoading(false);
        Alert.alert(
          'Erro ao enviar sua avaliação',
          'Tente novamente mais tarde.',
        );
      }
    }, [score, technology, control, positives, negatives],
  );

  useEffect(() => {
  }, [score]);

  return (
    <>
      <Stars size={36} active updateScore={setScore} />

      <S.ReviewForm>

        <S.ModalWrapper showsVerticalScrollIndicator={false}>

          <S.ReviewLabel>
            Opinial Geral
          </S.ReviewLabel>

          <Controller
            name="review"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ onChange, value }) => (
              <Input
                type="default"
                autoCorrect={false}
                keyboardType="default"
                onChangeText={onChange}
                value={value}
                multiline
                error={errors.review}
              />
            )}
          />

          <Tabs
            tabs={[
              {
                title: 'Positivos',
                content: (
                  <>
                    {positives.length ? (
                      <>
                        {positives.map((comment: string, idx: number) => (
                          <S.CommentsWrapper key={`positive_${idx}`}>
                            <S.Comment>
                              {comment}
                            </S.Comment>
                            <S.DeleteComment
                              activeOpacity={0.7}
                              onPress={() => {
                                setPositives(positives.filter((item, localIdx) => idx !== localIdx));
                              }}
                            >
                              <Ionicons name="trash-outline" size={24} color={Colors.danger} />
                            </S.DeleteComment>
                          </S.CommentsWrapper>
                        ))}
                      </>
                    ) : (<></>)}

                    <S.ReviewLabel>
                      Ponto Positivo
                    </S.ReviewLabel>
                    <Controller
                      name="positiveComment"
                      control={control}
                      defaultValue=""
                      render={({ onChange, value }) => (
                        <Input
                          type="default"
                          autoCorrect={false}
                          keyboardType="default"
                          onChangeText={onChange}
                          value={value}
                        />
                      )}
                    />
                    <S.AnswersViewMore activeOpacity={0.7} onPress={() => { addPositive(field.positiveComment); }}>
                      <Ionicons name="add-sharp" size={24} color={Colors.primary} />
                      <S.AnswersViewMoreText>
                        <Text>Adicionar comentário</Text>
                      </S.AnswersViewMoreText>
                    </S.AnswersViewMore>
                  </>
                ),
              },
              {
                title: 'Negativos',
                content: (
                  <>
                    {negatives.length ? (
                      <>
                        {negatives.map((comment: string, idx: number) => (
                          <S.CommentsWrapper key={`negative_${idx}`}>
                            <S.Comment>
                              {comment}
                            </S.Comment>
                            <S.DeleteComment
                              activeOpacity={0.7}
                              onPress={() => {
                                setNegatives(negatives.filter((item, localIdx) => idx !== localIdx));
                              }}
                            >
                              <Ionicons name="trash-outline" size={24} color={Colors.danger} />
                            </S.DeleteComment>
                          </S.CommentsWrapper>
                        ))}
                      </>
                    ) : (<></>)}

                    <S.ReviewLabel>
                      Ponto Negativo
                    </S.ReviewLabel>
                    <Controller
                      name="negativeComment"
                      control={control}
                      defaultValue=""
                      render={({ onChange, value }) => (
                        <Input
                          type="default"
                          autoCorrect={false}
                          keyboardType="default"
                          onChangeText={onChange}
                          value={value}
                        />
                      )}
                    />
                    <S.AnswersViewMore activeOpacity={0.7} onPress={() => { addNegative(field.negativeComment); }}>
                      <Ionicons name="add-sharp" size={24} color={Colors.primary} />
                      <S.AnswersViewMoreText>
                        <Text>Adicionar comentário</Text>
                      </S.AnswersViewMoreText>
                    </S.AnswersViewMore>
                  </>
                ),
              },
            ]}
          />

        </S.ModalWrapper>
      </S.ReviewForm>

      <S.ButtonWrapper>
        <Button disabled={loading} onPress={() => { handleReview(); }}>
          {`${loading ? 'Enviando...' : 'Finalizar e enviar avaliação'}`}
        </Button>
      </S.ButtonWrapper>

    </>
  );
};

const Reviews = ({ data }: ReviewsProps): JSX.Element => {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    setReviews(data);
  }, [data]);

  return (
    <>
      <S.ReviewsWrapper>
        {reviews && reviews.length ? (
          <>
            {reviews.map((review: ReviewProps) => (
              <View style={{ marginBottom: 20 }} key={`review_${review.id}`}>
                <Stars initialScore={review.rating} />
                <S.RateCommentAuthor>{review.user.full_name}</S.RateCommentAuthor>
                <S.RateCommentText>{review.content}</S.RateCommentText>
                <S.PositiveText>Pontos positivos</S.PositiveText>
                {review.positive.map((comment: string, idx: number) => (
                  <S.PositiveNegativeWrapper key={`review_${review.id}_p${idx}`}>
                    <S.PositiveNegativeText>{comment}</S.PositiveNegativeText>
                  </S.PositiveNegativeWrapper>
                ))}
                <S.NegativeText>Pontos negativos</S.NegativeText>
                {review.negative.map((comment: string, idx: number) => (
                  <S.PositiveNegativeWrapper key={`review_${review.id}_n${idx}`}>
                    <S.PositiveNegativeText>{comment}</S.PositiveNegativeText>
                  </S.PositiveNegativeWrapper>
                ))}
              </View>
            ))}
          </>
        ) : (<><S.RateCommentText>Nenhum comentário encontrado.</S.RateCommentText></>)}
      </S.ReviewsWrapper>
    </>
  );
};

const Rating = (): JSX.Element => {
  const technology = useTechnology();
  const [reviews, setReviews] = useState(null);
  const [rating, setRating] = useState(null);

  const [showModal, setShowModal] = useState<boolean>(false);

  const calcRating = (data: ReviewProps[]) => {
    if (data && data.length) setRating(data.reduce((acc, cur) => acc + cur.rating, 0.0) / 2);
  };

  const loadReviews = useCallback(
    async () => {
      await getReviews(technology.id).then((data) => {
        setReviews(data);
        calcRating(data);
      });
    },
    [technology, reviews, rating],
  );

  useEffect(() => {
    loadReviews();
  }, [technology, rating]);

  return (
    <S.Wrapper>
      <S.Title>Avaliações</S.Title>
      {reviews && reviews.length ? (
        <>
          <S.WrapperRate>
            <S.RateNumber>{rating}</S.RateNumber>
            <S.RateStars>
              <Stars initialScore={rating} size={24} />
              <S.RateStarsDescription>
                Média entre
                {' '}
                {reviews && reviews.length}
                {' '}
                {reviews && reviews.length > 1 ? 'opiniões' : 'opinião'}
              </S.RateStarsDescription>
            </S.RateStars>
          </S.WrapperRate>
          <Reviews data={reviews} />
          <S.RateViewMore activeOpacity={0.7}>
            <S.RateViewMoreText>Ver todas as opiniões</S.RateViewMoreText>
          </S.RateViewMore>
        </>
      ) : (
        <View style={{ paddingHorizontal: 16, marginBottom: 10 }}><S.RateCommentText>Nenhuma avaliação encontrada.</S.RateCommentText></View>
      )}

      <S.AnswersViewMore activeOpacity={0.7} onPress={() => setShowModal(true)}>
        <Ionicons name="star-outline" size={20} color={Colors.primary} />
        <S.AnswersViewMoreText>
          Deixe a sua opinião
        </S.AnswersViewMoreText>
      </S.AnswersViewMore>

      <Modal
        title="Deixe sua avaliação"
        titleStyle={{
          width: 200,
          fontSize: 20,
          lineHeight: 26,
        }}
        height={800}
        animationType="slide"
        visible={showModal}
        onClose={() => { setShowModal(false); loadReviews(); }}
      >
        <S.ModalContent>
          <ReviewForm onFinish={setShowModal} />
        </S.ModalContent>
      </Modal>

    </S.Wrapper>
  );
};

export default Rating;
