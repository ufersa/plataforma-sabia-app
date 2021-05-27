import React from 'react';
import { SvgXml } from 'react-native-svg';
import { Button } from '@components/.';
import { IllustrationEmpty } from '@utils/svgs';
import * as S from './styles';

export default ({ type }: any): JSX.Element => (
  <S.Wrapper>
    <S.ImageWrapper>
      <SvgXml xml={IllustrationEmpty} />
    </S.ImageWrapper>
    {(type === 'editais') ? (
      <>
        <S.Title>
          Não encontrou o que deseja?
        </S.Title>
        <S.Description>
          Sugira novas ideias para os pesquisadores desenvolverem baseado na sua necessidade.
        </S.Description>
        {false && (
        <Button variant="info" onPress={() => {}}>
          Sugerir novas ideias
        </Button>
        )}
      </>
    ) : (
      <>
        <S.Title>
          Não há resultados para sua busca...
        </S.Title>

      </>
    ) }
  </S.Wrapper>
);
