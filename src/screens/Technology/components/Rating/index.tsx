import React from 'react';
import * as S from './styles';
import { Tabs } from '../../../../components';

interface RateCommentsProps {
  content: string
  author: string
}
interface RateCommentProps {
  data: RateCommentsProps[]
}

const RateComments = ({ data }: RateCommentProps): JSX.Element => (
  data && data[0] && (
    <S.RateCommentsWrapper>
      <S.Stars>
        <S.Star solid name="star" size={12} color="#f9d142" />
        <S.Star solid name="star" size={12} color="#f9d142" />
        <S.Star solid name="star" size={12} color="#f9d142" />
        <S.Star solid name="star" size={12} color="#f9d142" />
        <S.Star solid name="star" size={12} color="#e8e8e8" />
      </S.Stars>
      <S.RateCommentAuthor>{data[0].author}</S.RateCommentAuthor>
      <S.RateCommentText>{data[0].content}</S.RateCommentText>
      <S.RateViewMore activeOpacity={0.7}>
        <S.RateViewMoreText>Ver todas as opiniões</S.RateViewMoreText>
      </S.RateViewMore>
    </S.RateCommentsWrapper>
  )
);

const Rating = () => (
  <S.Wrapper>
    <S.Title>Avaliações</S.Title>
    <S.WrapperRate>
      <S.RateNumber>4.7</S.RateNumber>
      <S.RateStars>
        <S.Stars>
          <S.Star solid name="star" size={24} color="#f9d142" />
          <S.Star solid name="star" size={24} color="#f9d142" />
          <S.Star solid name="star" size={24} color="#f9d142" />
          <S.Star solid name="star" size={24} color="#f9d142" />
          <S.Star solid name="star" size={24} color="#e8e8e8" />
        </S.Stars>
        <S.RateStarsDescription>Média entre 32 opiniões</S.RateStarsDescription>
      </S.RateStars>
    </S.WrapperRate>
    <Tabs
      tabs={[
        {
          title: 'Todos',
          content: (
            <RateComments
              data={[
                {
                  content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                  author: 'Marcos Pereira',
                },
              ]}
            />
          ),
        },
        {
          title: 'Positivos',
          content: (
            <RateComments
              data={[
                {
                  content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                  author: 'Marcos Pereira',
                },
              ]}
            />
          ),
        },
        {
          title: 'Negativos',
          content: (
            <RateComments
              data={[
                {
                  content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                  author: 'Marcos Pereira',
                },
              ]}
            />
          ),
        },
      ]}
    />
  </S.Wrapper>
);

export default Rating;
