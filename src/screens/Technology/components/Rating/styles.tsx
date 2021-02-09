import React from 'react';
import styled from 'styled-components/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { DefaultText } from '../../../../components';
import Colors from '../../../../utils/colors';

export const Wrapper = styled.View`
  margin-top: 32px;
`;

export const Title = styled(DefaultText)`
  color: #4a4a4a;
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  padding-horizontal: 16px;
  margin-bottom: 16px;
`;

const WrapperRate = styled.View`
  align-items: center;
  flex-direction: row;
  padding-horizontal: 16px;
  margin-bottom: 16px;
`;

const RateNumber = styled(DefaultText)`
  color: #4a4a4a;
  font-family: Rubik_300Light;
  font-weight: 300;
  font-size: 80px;
  line-height: 80px;
  margin-right: 16px;
`;

const RateStars = styled.View`
  flex-direction: column;
`;

const RateStarsDescription = styled(DefaultText)`
  color: #a5a5a5;
  font-family: Montserrat_400Regular;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  margin-top: 4px;
`;

const Stars = styled.View`
  flex-direction: row;
`;

const Star = styled(FontAwesome5)`
  margin-right: 4px;
`;

export const Rate = (): JSX.Element => (
  <WrapperRate>
    <RateNumber>4.7</RateNumber>
    <RateStars>
      <Stars>
        <Star solid name="star" size={24} color="#f9d142" />
        <Star solid name="star" size={24} color="#f9d142" />
        <Star solid name="star" size={24} color="#f9d142" />
        <Star solid name="star" size={24} color="#f9d142" />
        <Star solid name="star" size={24} color="#e8e8e8" />
      </Stars>
      <RateStarsDescription>Média entre 32 opiniões</RateStarsDescription>
    </RateStars>
  </WrapperRate>
);

interface RateCommentsProps {
  content: string
  author: string
}

interface RateCommentProps {
  data: RateCommentsProps[]
}

const RateCommentAuthor = styled(DefaultText)`
  color: #4a4a4a;
  font-family: Rubik_700Bold;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  margin-vertical: 4px;
`;

const RateCommentText = styled(DefaultText)`
  color: #777777;
  font-family: Montserrat_500Medium;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

const RateViewMore = styled.TouchableOpacity`
  margin-top: 16px;
`;

const RateViewMoreText = styled(DefaultText)`
  color: ${Colors.primary};
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const RateComments = ({ data }: RateCommentProps): JSX.Element => (
  data && data[0] && (
    <>
      <Stars>
        <Star solid name="star" size={12} color="#f9d142" />
        <Star solid name="star" size={12} color="#f9d142" />
        <Star solid name="star" size={12} color="#f9d142" />
        <Star solid name="star" size={12} color="#f9d142" />
        <Star solid name="star" size={12} color="#e8e8e8" />
      </Stars>
      <RateCommentAuthor>{data[0].author}</RateCommentAuthor>
      <RateCommentText>{data[0].content}</RateCommentText>
      <RateViewMore activeOpacity={0.7}>
        <RateViewMoreText>Ver todas as opiniões</RateViewMoreText>
      </RateViewMore>
    </>
  )
);
