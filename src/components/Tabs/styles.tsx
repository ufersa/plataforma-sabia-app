import React from 'react';
import styled from 'styled-components/native';
import { DefaultText } from '..';
import Colors from '../../utils/colors';

export const TabsWrapper = styled.View``;

export const TabHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

interface TabProps {
  title: string
  selected: boolean
  onSelect(): void
}

const TabItem = styled.TouchableOpacity`
  flex: 1;
  height: 56px;
  justify-content: center;
  align-items: center;
  border-bottom-width: 2px;
`;

const TabTitle = styled(DefaultText)`
  color: ${({ selected }: any) => (selected ? Colors.primary : '#a5a5a5')};
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const Tab = ({ title, selected, onSelect }: TabProps) => (
  <TabItem
    onPress={onSelect}
    activeOpacity={0.7}
    style={{ borderBottomColor: selected ? Colors.primary : '#d2d2d2' }}
  >
    <TabTitle selected={selected}>{title}</TabTitle>
  </TabItem>
);

interface TabContentProps {
  data: JSX.Element
}

const TabContentWrapper = styled.View`
  padding-top: 34px;
  padding-bottom: 24px;
  padding-horizontal: 16px;
`;

export const TabContent = ({ data }: TabContentProps) => (
  <TabContentWrapper>
    {data}
  </TabContentWrapper>
);
