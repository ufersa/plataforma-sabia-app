import React from 'react';
import * as S from './styles';
import Card from '../Card';
import Empty from '../Empty';

interface TechnologiesItemProps {
  title: string
}

interface TechnologiesProps {
  data: TechnologiesItemProps[]
}

export default ({ data }: TechnologiesProps): JSX.Element => (
  data && data.length > 0
    ? (
      <S.List
        data={data}
        renderItem={() => <Card />}
        keyExtractor={(item, idx) => idx.toString()}
      />
    )
    : (
      <Empty />
    )
);
