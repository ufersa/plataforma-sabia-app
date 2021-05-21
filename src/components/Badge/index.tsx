import React from 'react';
import { RequestsStatus } from '@utils/status';
import * as S from './styles';

export interface BadgeProps {
  status?: string
  text?: string
  style?: object
  variant?: string
}

const Badge = ({
  status,
  text,
  style,
  variant,
}: BadgeProps): JSX.Element => (
  <S.BadgeWrapper variant={variant} style={style}>
    <S.Text variant={variant}>{status ? RequestsStatus[status] : text}</S.Text>
  </S.BadgeWrapper>
);

export default Badge;
