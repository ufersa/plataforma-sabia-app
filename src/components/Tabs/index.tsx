import React, { useState } from 'react';
import Colors from '../../utils/colors';
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
          <S.TabItem
            key={`tab_${idx}`}
            onPress={() => setTabSelected(idx)}
            activeOpacity={0.7}
            style={{ borderBottomColor: tabSelected === idx ? Colors.primary : '#d2d2d2' }}
          >
            <S.TabTitle selected={tabSelected === idx}>{title}</S.TabTitle>
          </S.TabItem>
        ))}
      </S.TabHeader>
      <S.TabContentWrapper>
        {tabs[tabSelected].content}
      </S.TabContentWrapper>
    </S.TabsWrapper>
  );
};

export default Tabs;
