import React from 'react';
import styled from 'styled-components/native';
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from '../../utils/colors';
import { DefaultText } from '../../components';

interface SearchFilterProps {
  onPress: () => void
}

export const Wrapper = styled.SafeAreaView`
  width: 100%;
  flex: 1;
`;

export const Container = styled.View`
  width: 100%;
  height: 100%;
`;

export const SearchWrapper = styled.View`
  padding-top: 32px;
  padding-horizontal: 16px;
  margin-bottom: 24px;
`;

export const InputSearchWrapper = styled.View`
  flex-direction: row;
`;

const SearchFilterWrapper = styled.TouchableOpacity`
  background-color: white;
  width: 56px;
  height: 56px;
  border-radius: 8px;
  margin-left: 16px;
  align-items: center;
  justify-content: center;
`;

export const SearchFilters = ({ onPress }: SearchFilterProps) => (
  <SearchFilterWrapper
    onPress={onPress}
    activeOpacity={0.7}
  >
    <FontAwesome5
      name="sliders-h"
      size={20}
      color="#1D1D1D"
    />
  </SearchFilterWrapper>
);

export const FiltersWrapper = styled.View`
  padding-horizontal: 16px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 16px;
`;

export const FiltersTitle = styled(DefaultText)`
  width: 100%;
  padding-horizontal: 24px;
  font-family: Rubik_500Medium;
  font-weight: 500;
  line-height: 24px;
  font-size: 16px;
  color: #4a4a4a;
  margin-bottom: 16px;
`;

interface OptionProps {
  active: boolean
}

export const OptionFilter = styled.TouchableOpacity<OptionProps>`
  min-width: 100px;
  height: 40px;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #d2d2d2;
  margin: 0 8px;
  margin-bottom: 12px;
  text-align: center;
  align-items: center;
  justify-content: center;

  ${({ active }) => (active && `
    background-color: ${Colors.primaryLight};
    border-color: ${Colors.primaryLight};
  `)};
`;

export const OptionFilterLabel = styled(DefaultText)<OptionProps>`
  font-family: Rubik_500Medium;
  font-weight: 500;
  line-height: 24px;
  font-size: 16px;
  color: ${({ active }) => (active ? '#ffffff' : '#4a4a4a')};
`;

export const OptionFilterCount = styled.View<OptionProps>`
  background-color: ${({ active }) => (active ? Colors.primary : Colors.background)};
  width: 22px;
  height: 22px;
  border-radius: 10px;
  margin-right: 8px;
  alignItems: center;
  justifyContent: center;
`;
