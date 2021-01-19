import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import { DefaultText } from '../';
import { RequestsStatus } from '../../utils/status';

interface BadgeProps {
  status: string
}

const BadgeWrapper = styled(View)`
  background-color: #e8e8e8;
  height: 26px;
  align-items: center;
  justify-content: center;
  border-radius: 13px;
  text-align: center;
  padding-horizontal: 8px;
`;

const Text = styled(DefaultText)`
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #777777;
`;

const Badge = ({ status }: BadgeProps): JSX.Element => (
  <BadgeWrapper>
    <Text>{RequestsStatus[status]}</Text>
  </BadgeWrapper>
);

export default Badge;
