import React from 'react';
import { View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import styled from 'styled-components';
import { DefaultText } from '../../../../components';
import BankCard from './BankCard';

interface BanksProps {
  navigation: StackNavigationProp<any, any>
};

const BanksWrapper = styled(View)`
  padding: 16px;
  flexDirection: row;
  justifyContent: space-between;
`;

const Title = styled(DefaultText)`
  fontFamily: Rubik_500Medium;
  fontWeight: 500;
  fontSize: 24px;
  lineHeight: 36px;
  color: #4a4a4a;
  paddingHorizontal: 16px;
`;

const Banks = ({ navigation }: BanksProps): JSX.Element => {
  const banks = [
    {
      title: 'Banco de Editais',
      background: require('../../../../../assets/images/edicts.png')
    },
    {
      title: 'Banco de Ideias',
      background: require('../../../../../assets/images/ideas.png')
    }
  ];

  return (
    <>
      <Title>Assim canta o Sabiá</Title>
      <BanksWrapper>
        {banks.map((bank, idx) => (
          <BankCard
            key={`bank_${idx}`}
            data={bank}
            navigation={navigation}
          />
        ))}
      </BanksWrapper>
    </>
  );
};

export default Banks;
