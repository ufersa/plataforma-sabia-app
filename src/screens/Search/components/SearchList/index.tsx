import React from 'react';
import { Index } from 'react-instantsearch-native';
import { List } from './styles';

interface SearchListProps {
  index: string
  type: string
}

export default ({ index, type }: SearchListProps): JSX.Element => (
  <Index indexName={index}>
    <List type={type} />
  </Index>
);
