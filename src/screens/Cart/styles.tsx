/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/native';
import { DefaultText } from '@components/.';
import Colors from '@utils/colors';
import { formatMoney } from '@utils/helper';
import { CartItems } from '@hooks/useCart';
import Card from './components/Card';

interface ItemsProps {
  data: CartItems[]
  onEdit: (item: CartItems) => void
}

interface TotalProps {
  amount: number
}

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const Page = styled.ScrollView`
  height: 100%;
  margin-bottom: 16px;
  padding-horizontal: 16px;
`;

export const CartWrapper = styled.View`
  background-color: #ffffff;
  width: 100%;
  border-radius: 8px;
  padding-horizontal: 16px;
  padding-bottom: 16px;
  margin-top: 24px;
  box-shadow: 0px 8px 24px #e8e8e8;
`;

export const Label = styled(DefaultText)`
  font-size: 18px;
  font-family: Rubik_500Medium;
  font-weight: 500;
  line-height: 27px;
  margin-top: 24px;
  margin-bottom: 8px;
`;

const ItemsWrapper = styled.View`
  width: 100%;
`;

const ItemsEmptyWrapper = styled.View``;

const TextEmpty = styled(DefaultText)`
  font-size: 18px;
  font-family: Rubik_400Regular;
  font-weight: 400;
  line-height: 27px;
  margin-top: 24px;
  margin-bottom: 8px;
  text-align: center;
`;

export const Items = ({ data, onEdit }: ItemsProps): JSX.Element => (
  data && data.length > 0
    ? (
      <ItemsWrapper>
        {data.map((item, idx) => (
          <Card
            key={`item_${idx}`}
            {...item}
            onPress={onEdit}
          />
        ))}
      </ItemsWrapper>
    )
    : (
      <ItemsEmptyWrapper>
        <TextEmpty>Seu carrinho está vazio.</TextEmpty>
      </ItemsEmptyWrapper>
    )
);

const TotalWrapper = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const TotalLabel = styled(DefaultText)`
  font-size: 16px;
  font-family: Rubik_500Medium;
  font-weight: 500;
  line-height: 24px;
`;

const TotalAmount = styled(TotalLabel)``;

export const Total = ({ amount }: TotalProps): JSX.Element => (
  <TotalWrapper>
    <TotalLabel>Total</TotalLabel>
    <TotalAmount>
      {formatMoney(amount)}
    </TotalAmount>
  </TotalWrapper>
);

export const ButtonWrapper = styled.TouchableOpacity`
  padding: 0px 16px;
`;

export const ModalContent = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Details = styled(DefaultText)`
  font-size: 16px;
  line-height: 24px;
  color: ${Colors.primary};
  font-family: Rubik_500Medium;
  font-weight: 500;
`;

export const ModalActions = styled.View`
  width: 100%;
  flex-direction: row;
  padding-horizontal: 16px;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
`;

export const InputWrapper = styled.View`
  width: 130px;
  margin-right: 16px;
`;
