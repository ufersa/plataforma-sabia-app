/* eslint-disable global-require */
import React from 'react';
import styled from 'styled-components/native';
import { DefaultText } from '../../../../components';
import BankCard from './BankCard';

const BanksWrapper = styled.View`
  padding: 16px;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled(DefaultText)`
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: #4a4a4a;
  padding-horizontal: 16px;
`;

const Banks = (): JSX.Element => {
  const banks = [
    {
      title: 'Banco de Editais',
      background: require('../../../../../assets/images/edicts.png')
    },
    {
      title: 'Banco de Ideias',
      background: require('../../../../../assets/images/ideas.png')
    },
  ];

  return (
    <>
      <Title>Assim canta o Sabiá</Title>
      <BanksWrapper>
        {banks.map((bank, idx) => (
          <BankCard key={`bank_${idx}`} data={bank} />
        ))}
      </BanksWrapper>
    </>
  );
};

export default Banks;
