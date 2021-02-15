import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import * as S from './styles';

interface OptionProps {
  title: string
  content: JSX.Element
  opened: boolean
}

export const Option = ({ title, content, opened }: OptionProps) => {
  const [toggle, setToggle] = useState(opened);
  const icon: any = `chevron-${toggle ? 'down' : 'right'}`;

  return (
    <S.AccordionItemWrapper>
      <S.AccordionItem onPress={() => setToggle((o) => !o)} activeOpacity={0.7}>
        <S.AccordionTitle>{title}</S.AccordionTitle>
        <Feather
          name={icon}
          size={24}
          color="#4a4a4a"
        />
      </S.AccordionItem>
      {toggle && (
        <S.AccordionContent>
          {content}
        </S.AccordionContent>
      )}
    </S.AccordionItemWrapper>
  );
};

interface AccordionOptionsProps {
  title: string
  content: JSX.Element
}

interface AccordionProps {
  items: AccordionOptionsProps[]
}

const Accordion = ({ items }: AccordionProps) => (
  <S.AccordionWrapper>
    {items && items.map(({ title, content }, idx) => (
      <Option
        key={`option_${idx}`}
        title={title}
        content={content}
        opened={idx === 0}
      />
    ))}
  </S.AccordionWrapper>
);

export default Accordion;
