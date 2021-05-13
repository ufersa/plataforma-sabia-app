/* eslint-disable global-require */
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
      title: 'Banco de \nEditais',
      background: require('../../../../../assets/images/edicts.png'),
      target: 'AnnouncementsBank',
    },
    {
      title: 'Banco de \nIdeias',
      background: require('../../../../../assets/images/ideas.png'),
      target: 'IdeasBank',
    },
    // {
    //   title: 'Banco de Pequisadores',
    //   background: require('../../../../../assets/images/researchers.png'),
    // },
  ];

  return (
    <>
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
