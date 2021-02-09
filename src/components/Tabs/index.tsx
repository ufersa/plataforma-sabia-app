import React, { useState } from 'react';
import * as S from './styles';

interface TabOptionsProps {
  title: string
  content: JSX.Element
}

interface TabProps {
  tabs: TabOptionsProps[]
}

const Tabs = ({ tabs }: TabProps) => {
  const [tabSelected, setTabSelected] = useState(0);

  return (
    <S.TabsWrapper>
      <S.TabHeader>
        {tabs && tabs.map(({ title }, idx) => (
          <S.Tab
            key={`tab_${idx}`}
            title={title}
            selected={tabSelected === idx}
            onSelect={() => setTabSelected(idx)}
          />
        ))}
      </S.TabHeader>
      <S.TabContent data={tabs[tabSelected].content} />
    </S.TabsWrapper>
  );
};

export default Tabs;
