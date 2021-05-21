import styled from 'styled-components/native';
import Colors from '@utils/colors';
import DefaultText from '../Text';

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ImageAvatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 8px;
`;

export const Name = styled(DefaultText)`
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: ${Colors.primary};
  margin-left: 16px;
`;
