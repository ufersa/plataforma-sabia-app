import React from 'react';
import styled from 'styled-components/native';
import { DefaultText } from '../../components';
import Colors from '../../utils/colors';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 20px 0 20px;
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

export const Page = styled.ScrollView`
  height: 100%;
  padding-top: 16px;
  margin-bottom: 16px;
  padding: 0 16px;
`;

export const Title = styled(DefaultText)`
  font-size: 18px;
  line-height: 27px;
  color: #4a4a4a;
  font-family: Rubik_500Medium;
  font-weight: 500;
  margin-bottom: 8px;
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
  padding-horizontal: 16px;
  margin-top: 48px;
`;
