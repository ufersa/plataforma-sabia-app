import React from 'react';
import * as S from './styles';

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
      <S.Option
        key={`option_${idx}`}
        title={title}
        content={content}
        opened={idx === 0}
      />
    ))}
  </S.AccordionWrapper>
);

export default Accordion;
