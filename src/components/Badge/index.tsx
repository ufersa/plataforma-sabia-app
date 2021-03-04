import React from 'react';
import { RequestsStatus } from '../../utils/status';
import * as S from './styles';

export interface BadgeProps {
  text?: string
  status?: string
  variant?: string
}

const Badge = ({ text, status, variant }: BadgeProps): JSX.Element => (
  <S.BadgeWrapper variant={variant}>
    <S.Text
      numberOfLines={1}
      variant={variant}
    >
      {status ? RequestsStatus[status] : text}
    </S.Text>
  </S.BadgeWrapper>
);

export default Badge;
