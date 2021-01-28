import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import BankCard from './BankCard';
import * as S from './styles';

interface BanksProps {
  navigation: StackNavigationProp<any, any>
}

const Banks = ({ navigation }: BanksProps): JSX.Element => {
  const banks = [
    {
      title: 'Banco de Editais',
      background: require('../../../../../assets/images/edicts.png'),
    },
    {
      title: 'Banco de Ideias',
      background: require('../../../../../assets/images/ideas.png'),
    },
  ];

  return (
    <>
      <S.Title>Assim canta o Sabiá</S.Title>
      <S.BanksWrapper>
        {banks.map((bank, idx) => (
          <BankCard
            key={`bank_${idx}`}
            data={bank}
            navigation={navigation}
          />
        ))}
      </S.BanksWrapper>
    </>
  );
};

export default Banks;
