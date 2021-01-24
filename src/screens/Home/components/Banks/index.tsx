/* eslint-disable global-require */
import React from 'react';
import BankCard from './BankCard';
import * as S from './styles';

const Banks = (): JSX.Element => {
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
          <BankCard key={`bank_${idx}`} data={bank} />
        ))}
      </S.BanksWrapper>
    </>
  );
};

export default Banks;
