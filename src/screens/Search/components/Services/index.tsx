import React from 'react';
import * as S from './styles';
import Card from '../Card';
import Empty from '../Empty';

interface ServicesItemProps {
  title: string
}

interface ServicesProps {
  data: ServicesItemProps[]
}

export default ({ data }: ServicesProps): JSX.Element => (
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
