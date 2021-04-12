import styled from 'styled-components/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
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

export const WrapperRate = styled.View`
  align-items: center;
  flex-direction: row;
  padding-horizontal: 16px;
`;

export const RateNumber = styled(DefaultText)`
  color: #4a4a4a;
  font-family: Rubik_300Light;
  font-weight: 300;
  font-size: 80px;
  line-height: 80px;
  margin-right: 16px;
`;

export const RateStars = styled.View`
  flex-direction: column;
`;

export const RateStarsDescription = styled(DefaultText)`
  color: #a5a5a5;
  font-family: Montserrat_400Regular;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  margin-top: 4px;
`;

export const Stars = styled.View`
  flex-direction: row;
`;

export const Star = styled(FontAwesome5)`
  margin-right: 4px;
`;

export const ReviewsWrapper = styled.View`
  padding-top: 34px;
  padding-horizontal: 16px;
`;

export const RateCommentAuthor = styled(DefaultText)`
  color: #4a4a4a;
  font-family: Rubik_700Bold;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  margin-vertical: 4px;
`;

export const RateCommentText = styled(DefaultText)`
  color: #777777;
  font-family: Montserrat_500Medium;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const RateViewMore = styled.TouchableOpacity`
`;

export const RateViewMoreText = styled(DefaultText)`
  color: #4a4a4a;
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  padding-bottom: 24px;
  padding-horizontal: 16px;
`;

export const PositiveText = styled(DefaultText)`
  color: ${Colors.primary};
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin-top: 10px;
`;

export const NegativeText = styled(PositiveText)`
  color: ${Colors.danger};
`;

export const PositiveNegativeText = styled(RateCommentText)``;

export const PositiveNegativeWrapper = styled.View`
  border-left-width: 2px;
  border-color: #D2D2D2;
  padding-left: 5px;
  margin-top: 6px;
`;

export const AnswersViewMore = styled.TouchableOpacity`
  margin-top: 16px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${Colors.primary};
`;

export const AnswersViewMoreText = styled(DefaultText)`
  color: ${Colors.primary};
  margin-left: 5px;
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
`;

export const ModalContent = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const ModalMessage = styled(DefaultText)`
  font-size: 16px;
  font-family: Rubik_500Medium;
  font-weight: 500;
  line-height: 24px;
  color: #777777;
  margin-bottom: 12px;
`;

export const ReviewLabel = styled(Title)`
  font-size: 18px;
  margin: 20px 0 0 0;
  padding: 0;
`;

export const ModalWrapper = styled(ScrollView)`
  padding-horizontal: 16px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ReviewForm = styled.View`
  flex: 1;
  width: 100%;
  padding: 0;
`;

export const ButtonWrapper = styled.View`
  padding-horizontal: 16px;
  border-top-width: 1px;
  border-top-color: #e8e8e8;
  padding-top: 12px;
  margin-bottom: 20px;
  width: 100%;
`;

export const CommentsWrapper = styled.View`
  flex:1;
  flex-direction: row;
  align-items: center;
  padding: 5px;
  border-bottom-width: 1px;
  border-bottom-color: #e8e8e8;
  padding-bottom: 10px;
`;

export const Comment = styled(RateCommentText)`
  padding: 5px;
  flex: 1;
`;

export const DeleteComment = styled.TouchableOpacity`
  padding: 10px;
`;
