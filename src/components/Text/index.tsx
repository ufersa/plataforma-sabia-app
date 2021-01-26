import React from 'react';
import * as S from './styles';

interface TextProps {
  children: JSX.Element | string
}

const DefaultText = (props: any): JSX.Element => {
  const { children }: TextProps = props;
  return (
    <S.TextWrapper {...props}>{children}</S.TextWrapper>
  );
};

export default DefaultText;
