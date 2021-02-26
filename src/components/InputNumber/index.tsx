/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import * as S from './styles';

interface InputProps {
  onChange: (value: number) => void
}

const InputNumber = (props: InputProps): JSX.Element => {
  const { onChange } = props;
  const [total, setTotal] = useState(1);

  useEffect(() => {
    if (total > 1) onChange(total);
  }, [total]);

  return (
    <S.InputNumberWrapper>
      <S.Button onPress={() => total >= 2 && setTotal(total - 1)}>
        <Feather
          name="minus"
          size={24}
          color="#d2d2d2"
        />
      </S.Button>
      <S.InputNumberContainer
        editable={false}
        value={total.toString()}
        keyboardType="decimal-pad"
      />
      <S.Button onPress={() => setTotal(total + 1)}>
        <Feather
          name="plus"
          size={24}
          color="#d2d2d2"
        />
      </S.Button>
    </S.InputNumberWrapper>
  );
};

export default InputNumber;
