import styled from 'styled-components/native';
import { DefaultText, Input } from '../../../components';
import colors from '../../../utils/colors';

export const Wrapper = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  flex: 1;
`;

export const Container = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
`;

export const Title = styled(DefaultText)`
  font-size: 32px;
  line-height: 32px;
  font-family: Rubik_400Regular;
  font-weight: 400;
  padding: 16px 16px 16px;
  color: ${colors.primary};
`;

export const BoldTitle = styled(Title)`
  font-family: Montserrat_700Bold;
  padding: 0 16px 24px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: 16px;
  margin-bottom: 12px;
`;

export const InputText = styled(Input)`
  flex: 1;
`;

export const ButtonWrapper = styled.TouchableOpacity`
  border-radius: 8px;
`;

export const ItemCards = styled.ScrollView`
  padding-top: 24px;
  padding-horizontal: 16px;
`;

export const CardWrapper = styled.View`
  margin-bottom: 24px;
  box-shadow: 0px 2px 2px #E8E8E8;
  flex: 1;
`;

export const CardContainer = styled.View`
  flex-direction: column;
  padding: 16px 16px 0;
`;

export const CardTitle = styled.Text`
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #4A4A4A;
`;

export const Institution = styled(DefaultText)`
  color: ${colors.primary};
  font-size: 12px;
  line-height: 18px;
  font-family: Rubik_400Regular;
`;

export const Description = styled(DefaultText)`
  font-family: Montserrat_500Medium;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: #848484;
  margin-vertical: 16px;
`;

export const Label = styled(DefaultText)`
  font-family: Montserrat_700Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
  color: #4A4A4A;
`;

export const Value = styled(Description)`
  color: #777777;
  margin: 0 0 8px 10px;
`;

export const HWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const CardTag = styled.View`
  padding: 2px;
  color: ${colors.orange};
  background-color: #FEEBD9;
  border-radius: 13px;
  padding: 4px 8px;
  margin: 8px 8px 0 0;
`;

export const CardTagText = styled(DefaultText)`
  color: ${colors.orange};
  font-family: Rubik_500Medium;
  font-size: 12px;
`;

export const CardAction = styled.View`
  align-items: center;
  justify-content: center;
  padding: 0 0 8px;
`;

export const CardButton = styled.TouchableOpacity`
width: 100%;
padding: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const CardText = styled(DefaultText)`
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${colors.primary};
  margin-left: 14px;
`;

export const ModalContent = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 50%;
  flex: 1;
`;
