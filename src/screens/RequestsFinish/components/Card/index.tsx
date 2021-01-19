import React from 'react';
import { Dimensions, View, Image } from 'react-native';
import styled from 'styled-components';
import { Card, DefaultText, InputNumber } from '../../../../components';
import Colors from '../../../../utils/colors';

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
  flexDirection: row;
`;

const CardDetails = styled(View)`
  flexDirection: column;
`;

const CardInfo = styled(View)`
  flex: 1;
  margin-bottom: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const CardInput = styled(View)`
  width: 110px;
`;

const Title = styled(DefaultText)`
  width: ${Dimensions.get('window').width - 190}px;
  height: 30px;
  fontFamily: Rubik_500Medium;
  fontWeight: 500;
  fontSize: 18px;
  lineHeight: 27px;
  color: #777777;
  textAlign: center;
  marginTop: 16px;
`;

const Amount = styled(DefaultText)`
  fontFamily: Rubik_500Medium;
  fontWeight: 500;
  fontSize: 14px;
  lineHeight: 21px;
  color: ${Colors.primary};
`;

export default () => {
  return (
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
            <Title numberOfLines={1}>
              Test Very Long Title Technology
            </Title>
            <CardInfo>
              <CardInput>
                <InputNumber onChange={() => {}} />
              </CardInput>
              <Amount>R$ 489,00</Amount>
            </CardInfo>
          </CardDetails>
        </CardContainer>
      </Card>
    </CardWrapper>
  );
}
