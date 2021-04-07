/* eslint-disable camelcase */
import React, {
  useCallback, useEffect, useState,
} from 'react';
import { View } from 'react-native';
import * as S from './styles';
import { useTechnology } from '../../../../hooks/useTechnology';
import { getReviews } from '../../../../services/technology';

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
  score: number
  size?: number
}

const Stars = ({ score, size = 12 }: StarsProps): JSX.Element => {
  const getColor = (level: number) => ((score >= level) ? '#f9d142' : '#e8e8e8');

  return (
    <S.Stars>
      <S.Star solid name="star" size={size} color={getColor(1)} />
      <S.Star solid name="star" size={size} color={getColor(2)} />
      <S.Star solid name="star" size={size} color={getColor(3)} />
      <S.Star solid name="star" size={size} color={getColor(4)} />
      <S.Star solid name="star" size={size} color={getColor(5)} />
    </S.Stars>
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
              <View style={{ marginBottom: 20 }}>
                <Stars score={review.rating} key={`review_${review.id}`} />
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
  }, [technology]);

  return (
    <S.Wrapper>
      <S.Title>Avaliações</S.Title>
      <S.WrapperRate>
        <S.RateNumber>{rating}</S.RateNumber>
        <S.RateStars>
          <Stars score={rating} size={24} />
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

    </S.Wrapper>
  );
};

export default Rating;
