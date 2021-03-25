import React, {
  createRef, useCallback, useEffect, useState,
} from 'react';
import * as S from './styles';
import { Tabs } from '../../../../components';
import { useTechnology } from '../../../../hooks/useTechnology';
import { getReviews } from '../../../../services/technology';

const selectOptions = [
  { label: 'Mais Recentes', value: 'created_at|DESC' },
  { label: 'Mais Bem Avaliados', value: 'rating|DESC' },
  { label: 'Mais Antigos', value: 'created_at|ASC' },
];

const getOrderValue = (raw: string) => {
  const [orderBy, order] = raw.split('|');
  return { orderBy, order };
};

interface RateCommentsProps {
  content: string
  author: string
  rating: number
}
interface RateCommentProps {
  data: RateCommentsProps[]
}

interface StarsProps {
  score: number
  size: number
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

const RateComments = ({ data }: RateCommentProps): JSX.Element => {
  const [comments, setComments] = useState(null);

  useEffect(() => {
    setComments(data);
    // console.log(comments);
  }, [data]);

  return (
    <>
      <S.RateCommentsWrapper>
        {comments && comments.length ? (
          <>
            {comments.map((comment: RateCommentsProps) => (
              <>
                <Stars score={comment.rating} />
                <S.RateCommentAuthor>{comment.author}</S.RateCommentAuthor>
                <S.RateCommentText>{comment.content}</S.RateCommentText>
              </>
            ))}
          </>
        ) : (<><S.RateCommentText>Nenhum comentário encontrado.</S.RateCommentText></>)}
        <S.RateViewMore activeOpacity={0.7}>
          <S.RateViewMoreText>Ver todas as opiniões</S.RateViewMoreText>
        </S.RateViewMore>
      </S.RateCommentsWrapper>
    </>
  );
};

const Rating = (): JSX.Element => {
  const technology = useTechnology();
  const [reviews, setReviews] = useState(null);
  const [all, setAll] = useState(null);
  const [positives, setPositives] = useState(null);
  const [negatives, setNegatives] = useState(null);

  const [ordering, setOrdering] = useState(selectOptions[0].value);
  const [rating, setRating] = useState(null);

  const loadReviews = useCallback(
    async () => {
      const reviewsResult = await getReviews(technology.id, getOrderValue(ordering));
      setReviews(reviewsResult);
      // console.log(reviews);

      setRating(reviews.reduce((acc, cur) => acc + cur.rating, 0.0) / 2);

      const allMap = reviews.map((current) => ({ content: current.content, author: current.user.full_name, rating: current.rating }));
      setAll(allMap);

      const positivesMap = reviews.map((current) => ({ content: current.positive[0], author: current.user.full_name, rating: current.rating }));
      setPositives(positivesMap);

      const negativesMap = reviews.map((current) => ({ content: current.negative[0], author: current.user.full_name, rating: current.rating }));
      setNegatives(negativesMap);

      // console.log(reviews);

      // const todosArr = reviews.filter
    },
    [technology],
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
      <Tabs
        tabs={[
          {
            title: 'Todos',
            content: (
              <RateComments
                data={all}
              />
            ),
          },
          {
            title: 'Positivos',
            content: (
              <RateComments
                data={positives}
              />
            ),
          },
          {
            title: 'Negativos',
            content: (
              <RateComments
                data={negatives}
              />
            ),
          },
        ]}
      />
    </S.Wrapper>
  );
};

export default Rating;
