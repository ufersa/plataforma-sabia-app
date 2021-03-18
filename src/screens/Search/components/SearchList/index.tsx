import React from 'react';
import { Index } from 'react-instantsearch-native';
import { List } from './styles';

interface SearchListProps {
  index: string
}

export default ({ index }: SearchListProps): JSX.Element => (
  <Index indexName={index}>
    <List />
  </Index>
);
