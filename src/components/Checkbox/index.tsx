/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import * as S from './styles';

interface CheckboxProps {
  onChange: (state: boolean) => void
}

const Checkbox = ({ onChange }: CheckboxProps) => {
  const [state, setState] = useState<boolean>(false);

  useEffect(() => onChange(state), [state]);

  return (
    <S.CheckboxWrapper
      checked={state}
      onPress={() => setState((oldState: boolean) => !oldState)}
      activeOpacity={0.7}
    >
      {state && (
        <Feather
          name="check"
          size={16}
          color="#ffffff"
        />
      )}
    </S.CheckboxWrapper>
  );
};

export default Checkbox;
