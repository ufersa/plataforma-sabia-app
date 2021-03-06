import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { DefaultText } from '@components/.';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const Page = styled.ScrollView`
  height: 100%;
  margin-vertical: 16px;
  padding-horizontal: 16px;
`;

export const CardContainer = styled.View`
  flex-direction: row;
`;

export const CardInfo = styled.View`
  flex-direction: column;
  padding: 16px 0;
`;

export const CardImage = styled.View`
  background-color: #f5f5f5;
  width: 110px;
  height: 83px;
  border-radius: 8px;
  margin: 16px;
`;

export const Title = styled(DefaultText)`
  width: ${Dimensions.get('window').width - 190}px;
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #777777;
  margin-bottom: 8px;
`;

export const CardPrice = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Amount = styled(DefaultText)`
  font-size: 14px;
  font-family: Rubik_500Medium;
  font-weight: 500;
  line-height: 21px;
  color: #777777;
`;

export const CardStatus = styled.View`
  padding-horizontal: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const CardDate = styled(DefaultText)`
  font-size: 12px;
  font-family: Rubik_500Medium;
  font-weight: 500;
  line-height: 18px;
  color: #777777;
`;

export const CardDetails = styled.View`
  padding: 16px;
`;

export const Detail = styled.View`
  flex-direction: column;
`;

export const DetailTitle = styled(DefaultText)`
  font-size: 12px;
  font-family: Rubik_500Medium;
  font-weight: 500;
  line-height: 18px;
  color: #777777;
`;

export const DetailDescription = styled(DefaultText)`
  font-size: 16px;
  font-family: Rubik_500Medium;
  font-weight: 500;
  line-height: 24px;
  margin-top: 4px;
  margin-bottom: 16px;
  color: #1D1D1D;
`;

export const ButtonWrapper = styled.View`
  padding-horizontal: 16px;
  border-top-width: 1px;
  border-top-color: #e8e8e8;
  padding-top: 12px;
  margin-bottom: 20px;
  width: 100%;
`;

export const OpenChat = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #3498DB;
`;

export const NavigateLink = styled(OpenChat)``;

export const OpenChatText = styled(DetailDescription)`
  color: #3498DB;
  margin-left: 10px;
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 16px;
  padding-top: 10px;
`;

export const ReasonLabel = styled(DefaultText)`
  color: #4a4a4a;
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  padding-horizontal: 16px;
  font-size: 18px;
  margin: 0 0 20px 0;
  padding: 0;
`;

export const ModalContent = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const ModalWrapper = styled.ScrollView`
  padding-horizontal: 16px;
  margin-bottom: 20px;
`;

export const ReviewForm = styled.View`
  flex: 1;
  width: 100%;
  padding: 0;
`;
