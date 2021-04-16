import { Button } from 'react-native';
import styled from 'styled-components/native';
import {
  Input,
} from '../../components';
import colors from '../../utils/colors';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const Container = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

export const Page = styled.ScrollView`
  height: 100%;
  background-color: red;
`;

export const MessagesWrapper = styled.View`
  flex: 1;
  height: 100%;
  padding: 50px;
  padding-top: 20px;
background-color: red;
`;

export const MessageBlock = styled.View`
  display: flex;
  flex-direction: column;

  > span {
    /* color: ${colors}; */
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.6rem;
    margin-bottom: 2rem;
    text-align: center;
  }
`;

export const MessageContent = styled.View`
  display: flex;
  flex-direction: column;

  > p {
    border-top-left-radius: 0;
    background-color: ${colors.lightGray4};
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
    color: ${colors.black};
    padding: 0.8rem;
    margin: 0 0.8rem 0.8rem;
  }

  > span {
    color: ${colors.lightGray2};
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.6rem;
    align-self: flex-end;
    margin-right: 0.8rem;
  }
`;

export const SingleMessage = styled.View`
  display: flex;
  align-items: center;
  margin: 25px 0;

  > img {
    border-radius: 50%;
    max-width: 50px;
    align-self: flex-start;
  }

`;

export const ChatButton = styled(Button)`
  color: ${colors.secondary};

  text-transform: uppercase;
  font-weight: bold;
`;

export const Actions = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

export const InputText = styled(Input)`
  display: flex;
`;
