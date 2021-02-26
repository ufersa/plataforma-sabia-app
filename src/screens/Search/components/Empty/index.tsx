import React from 'react';
import { SvgXml } from 'react-native-svg';
import * as S from './styles';
import { Button } from '../../../../components';
import { IllustrationEmpty } from '../../../../utils/svgs';

export default (): JSX.Element => (
  <S.Wrapper>
    <S.ImageWrapper>
      <SvgXml xml={IllustrationEmpty} />
    </S.ImageWrapper>
    <S.Title>
      Não encontrou o que deseja?
    </S.Title>
    <S.Description>
      Sugira novas ideias para os pesquisadores desenvolverem baseado na sua necessidade.
    </S.Description>
    <Button variant="info" onPress={() => {}}>
      Sugerir novas ideias
    </Button>
  </S.Wrapper>
);
