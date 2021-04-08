import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import * as S from './styles';

const User = (): JSX.Element => {
  const { user } = useAuth();
  return (
    <S.Wrapper>
      <S.ImageAvatar source={{ uri: `https://ui-avatars.com/api/?name=${user?.full_name}&size=40` }} />
      <S.Name>{user?.full_name}</S.Name>
    </S.Wrapper>
  );
};

export default User;
