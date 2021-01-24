import React from 'react';
import { RequestsStatus } from '../../utils/status';
import * as S from './styles';

interface BadgeProps {
  status: string
}

const Badge = ({ status }: BadgeProps): JSX.Element => (
  <S.BadgeWrapper>
    <S.Text>{RequestsStatus[status]}</S.Text>
  </S.BadgeWrapper>
);

export default Badge;
