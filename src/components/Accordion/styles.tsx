import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import DefaultText from '../Text';

export const AccordionWrapper = styled.View``;

interface OptionProps {
  title: string
  content: JSX.Element
  opened: boolean
}

const AccordionItemWrapper = styled.View`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: #e8e8e8;
`;

const AccordionItem = styled.TouchableOpacity`
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const AccordionTitle = styled(DefaultText)`
  color: #4a4a4a;
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
`;

const AccordionContent = styled.View`
  padding-bottom: 8px;
`;

export const Option = ({ title, content, opened }: OptionProps) => {
  const [toggle, setToggle] = useState(opened);
  const icon: any = `chevron-${toggle ? 'down' : 'right'}`;

  return (
    <AccordionItemWrapper>
      <AccordionItem onPress={() => setToggle((o) => !o)} activeOpacity={0.7}>
        <AccordionTitle>{title}</AccordionTitle>
        <Feather
          name={icon}
          size={24}
          color="#4a4a4a"
        />
      </AccordionItem>
      {toggle && (
        <AccordionContent>
          {content}
        </AccordionContent>
      )}
    </AccordionItemWrapper>
  );
};
