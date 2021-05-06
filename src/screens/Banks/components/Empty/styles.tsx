import styled from 'styled-components/native';
import { DefaultText } from '../../../../components';
import Colors from '../../../../utils/colors';

export const Wrapper = styled.View`
  width: 100%;
  padding: 16px;
  justify-content: center;
  align-items: center;
`;

export const ImageWrapper = styled.View`
  margin-top: 24px;
  align-items: center;
`;

export const Title = styled(DefaultText)`
  width: 315px;
  font-size: 24px;
  font-family: Rubik_700Bold;
  font-weight: 700;
  line-height: 36px;
  color: ${Colors.info};
  margin-top: 32px;
  margin-bottom: 16px;
`;

export const Description = styled(DefaultText)`
  width: 315px;
  font-size: 16px;
  font-family: Montserrat_500Medium;
  font-weight: 500;
  line-height: 24px;
  color: #4a4a4a;
  margin-bottom: 64px;
`;
