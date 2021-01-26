import styled from 'styled-components/native';
import DefaultText from '../Text';

export const Wrapper = styled.View`
  background-color: red;
  flex: 1;
`;

export const Container = styled.View`
  background-color: #ffffff;
  margin-top: auto;
  margin-bottom: 0;
`;

export const Background = styled.View`
  background-color: rgba(0, 0, 0, 0.2);
  flex: 1;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;

export const CloseWrapper = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ButtonClose = styled.TouchableOpacity`
  background-color: #eeeeee;
  width: 128px;
  height: 6px;
  border-radius: 3px;
  margin: 24px;
`;

export const TitleWrapper = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`;

export const Title = styled(DefaultText)`
  font-family: Rubik_500Medium;
  font-weight: 500;
  line-height: 27px;
  font-size: 18px;
  color: #4a4a4a;
`;
