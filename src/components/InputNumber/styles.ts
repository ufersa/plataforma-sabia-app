import styled from 'styled-components/native';

export const InputNumberWrapper = styled.View`
  background-color: #ffffff;
  width: 100%;
  height: 46px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  padding:0 6px;
  border: 2px solid #ccede7;
`;

export const InputNumberContainer = styled.TextInput`
  width: 100%;
  height: 100%;
  font-family: Rubik_500Medium;
  font-weight: 500;
  line-height: 20px;
  font-size: 16px;
  color: #1d1d1d;
  text-align: center;
  flex: 1;
`;

export const Button = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
`;
