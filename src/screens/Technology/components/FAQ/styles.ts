import styled from 'styled-components/native';
import { DefaultText } from '@components/.';
import Colors from '@utils/colors';

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

export const AnswersWrapper = styled.View`
  margin-top: 32px;
`;

export const AnswersContainer = styled.View`
  margin-bottom: 16px;
`;

export const AnswersTitle = styled(DefaultText)`
  color: #4a4a4a;
  font-family: Montserrat_500Medium;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 4px;
`;

export const AnswersReplyWrapper = styled.View`
  flex-direction: row;
`;

export const AnswersReply = styled(DefaultText)`
  color: #a5a5a5;
  font-family: Montserrat_400Regular;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  padding-left: 10px;
`;

export const AnswersViewMore = styled.TouchableOpacity`
  margin-top: 16px;
`;

export const AnswersViewMoreText = styled(DefaultText)`
  color: ${Colors.primary};
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  padding-bottom: 25px;
  text-align: center;
`;

export const FormWrapper = styled.View``;

export const FormButtonWrapper = styled.View`
  margin-top: 12px;
`;
