import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: #F5F5F5;
  justify-content: center;
`;

export const KeyboardContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-vertical: 16px;
  padding-horizontal: 10px;
  background-color: #ffffff;
  border-top-width: 1px;
  border-top-color: #ccc;
`;

export const SendButton = styled.TouchableOpacity`
    margin-left: 0;
    margin-right: 10px;
    justify-content: center;
    align-self: center;
    align-items: center;
    width: 32px;
    height: 32px;
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

export const InputText = styled.TextInput`
    flex: 1;
    padding-bottom: ${Platform.OS === 'android' ? 6 : 9}px;
    padding-top: ${Platform.OS === 'android' ? 5 : 8}px;
    padding-horizontal: 12px;
    font-size: 17px;
    flex-grow: 1;
    line-height: 20px;
    max-height: 200px;
    min-height: 36px;
    color: #777777;
`;

export const LoadMore = styled.TouchableOpacity`
    flex: 1;
    flex-direction: row;
    justify-content: center;
    margin-vertical: 20px;
    align-self: center;
    align-items: center;
    height: 32px;
`;

export const LoadMoreText = styled.Text`
    font-weight: bold;
    font-size: 18px;
    color: #00A688;
`;

export const MessageContainer = styled.View`
  margin-horizontal: 12px;
  margin-vertical: 6px;
  flex-direction: row;
`;

export const MessageWrapper = styled.View`
  max-width: 80%;
  flex-direction: column;
`;

export const Bubble = styled.View`
  padding-vertical: 7px;
  padding-horizontal: 12px;
  border-radius: 18px;
  flex-direction: row;
  align-items: stretch;
  flex-wrap: wrap;
`;

export const Message = styled.View``;

export const MessageText = styled.Text`
  font-size: 16px;
  line-height: 22px;
  font-weight: 500;
  color: #1d1d1d;
`;

export const Nickname = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #4a4a4a;
  margin-vertical: 10px;
`;

export const Time = styled.View`
  align-self: stretch;
  flex-grow: 1;
  align-items: flex-end;
  text-align: left;
`;

export const TimeText = styled.Text`
  top: 2px;
  font-size: 12px;
  padding-left: 8px;
  font-weight: 400;
  color: #777;
`;
