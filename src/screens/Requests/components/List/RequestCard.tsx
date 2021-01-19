import React from 'react';
import { Dimensions, View, Image } from 'react-native';
import styled from 'styled-components';
import { Card, DefaultText, Badge } from '../../../../components';
import Colors from '../../../../utils/colors';

interface RequestCardProps {
  title: string
  amount: number
  status: string
};

const CardWrapper = styled(View)`
  height: 115px;
  marginBottom: 16px;
`;

const CardImage = styled(View)`
  backgroundColor: #f5f5f5;
  width: 110px;
  height: 83px;
  borderRadius: 8px;
  margin: 16px;
`;

const CardContainer = styled(View)`
  flex-direction: row;
`;

const CardDetails = styled(View)`
  flex-direction: column;
  paddingVertical: 16px;
`;

const Title = styled(DefaultText)`
  width: ${Dimensions.get('window').width - 190}px;
  fontFamily: Rubik_500Medium;
  fontWeight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #777777;
  margin-bottom: 8px;
`;

const Amount = styled(DefaultText)`
  fontFamily: Rubik_500Medium;
  fontWeight: 500;
  fontSize: 14px;
  lineHeight: 21px;
  color: ${Colors.primary};
`;

const Status = styled(View)`
  margin-left: auto;
  margin-right: 0;
`;

const RequestCard = ({ title, status }: RequestCardProps): JSX.Element => (
  <CardWrapper>
    <Card>
      <CardContainer>
        <CardImage>
          <Image
            source={{
              uri: 'https://fakeimg.pl/110x83/',
              cache: 'only-if-cached'
            }}
            style={{
              width: 110,
              height: 83,
              borderRadius: 8
            }}
          />
        </CardImage>
        <CardDetails>
          <Title numberOfLines={1}>{title}</Title>
          <Amount>R$ 489,00</Amount>
          <Status>
            <Badge status={status} />
          </Status>
        </CardDetails>
      </CardContainer>
    </Card>
  </CardWrapper>
);

export default RequestCard;
