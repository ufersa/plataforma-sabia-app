import React from 'react';
import styled from 'styled-components/native';
import { DefaultText } from '../../components';
import Colors from '../../utils/colors';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
`;

export const Touch = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

interface TextProps {
  color?: string
}

export const TouchText = styled(DefaultText)<TextProps>`
  font-size: 16px;
  line-height: 24px;
  color: ${({ color }) => (color ? Colors[color] : Colors.primary)};
  font-family: Rubik_500Medium;
  font-weight: 500;
`;

export const Page = styled.ScrollView``;

export const Container = styled.View`
  flex: 1;
  padding-horizontal: 16px;
  padding-bottom: 20px;
`;

export const Title = styled(DefaultText)`
  font-size: 18px;
  line-height: 27px;
  color: #4a4a4a;
  font-family: Rubik_500Medium;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const Error = styled(DefaultText)`
  font-size: 14px;
  line-height: 14px;
  color: #f88;
  font-family: Rubik_500Medium;
  font-weight: 500;
  margin-bottom: 8px;
  margin-top: -10px;
  margin-left: 10px;
`;

export const Divider = styled.View`
  background-color: #E8E8E8;
  width: 100%;
  height: 1px;
  margin-vertical: 24px;
`;

interface AvatarProps {
  name: string
}

const UserWrapper = styled.View`
  background-color: #ccc;
  width: 96px;
  height: 96px;
  border-radius: 24px;
  margin: 0 auto 24px;
`;

const ImageAvatar = styled.Image`
  width: 96px;
  height: 96px;
  border-radius: 24px;
`;

export const User = ({ name }: AvatarProps): JSX.Element => (
  <>
    <UserWrapper>
      <ImageAvatar source={{ uri: `https://ui-avatars.com/api/?name=${name}&size=96` }} />
    </UserWrapper>
    {false && (
      <Touch activeOpacity={0.7}>
        <TouchText>Editar Foto</TouchText>
      </Touch>
    )}
  </>
);

export const ButtonWrapper = styled.TouchableOpacity`
  padding-top: 16px;
  padding-horizontal: 16px;
`;

export const ModalContent = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ModalActions = styled.View`
  width: 100%;
  flex-direction: row;
  padding-horizontal: 16px;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
`;

export const InputWrapper = styled.View`
  width: 130px;
  margin-right: 16px;
`;

export const Details = styled(DefaultText)`
  font-size: 16px;
  line-height: 24px;
  color: ${Colors.primary};
  font-family: Rubik_500Medium;
  font-weight: 500;
`;
