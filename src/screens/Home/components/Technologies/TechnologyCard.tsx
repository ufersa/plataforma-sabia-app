import React, { useEffect, useState } from 'react';
import { Animated, View, Image, TouchableOpacity, Easing, StyleProp } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import styled from 'styled-components';
import { Card, DefaultText } from '../../../../components';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import Colors from '../../../../utils/colors';

interface DataCardProps {
  id: number
  title: string
  status: 'public' | 'private'
  date: string
  image: string
  category: {
    name: string
  }
}
interface TechnologyCardProps {
  data?: DataCardProps | {}
  style?: StyleProp<any>
  loading?: boolean
  navigation: StackNavigationProp<any, any>
};

interface FavoriteProps {
  favorite?: boolean
};

const CardWrapper = styled(View)`
  width: 248px;
  height: 381px;
`;

const CardContainer = styled(View)`
  padding: 16px;
`;

const CardImage = styled(View)`
  backgroundColor: #f5f5f5;
  width: 216px;
  height: 216px;
  borderRadius: 8px;
`;

const Title = styled(DefaultText)`
  height: 55px;
  fontFamily: Rubik_500Medium;
  fontWeight: 500;
  fontSize: 18px;
  lineHeight: 27px;
  textAlign: center;
  marginTop: 16px;
`;

const StatusWrapper = styled(View)`
  marginTop: 8px;
  marginBottom: 16px;
  flexDirection: row;
  alignItems: center;
  justifyContent: center;
`;

const Status = styled(DefaultText)`
  fontFamily: Rubik_500Medium;
  fontWeight: 500;
  fontSize: 12px;
  lineHeight: 18px;
  textAlign: center;
  color: ${Colors.primary};
`;

const StatusIcon = styled(Feather)`
  marginRight: 6px;
`;

const DateWrapper = styled(View)`
  flexDirection: row;
  alignItems: center;
  justifyContent: center;
`;

const Date = styled(DefaultText)`
  fontFamily: Rubik_500Medium;
  fontWeight: 500;
  fontSize: 12px;
  lineHeight: 18px;
  textAlign: center;
  color: #a5a5a5;
`;

const DateIcon = styled(Feather)`
  marginRight: 6px;
`;

const Actions = styled(View)`
  width: 100%;
  height: 26px;
  flexDirection: row;
  alignItems: center;
  justifyContent: space-between;
  position: absolute;
  bottom: 16px;
  zIndex: 1;
`;

const LabelWrapper = styled(View)`
  backgroundColor: #ccede7;
  width: auto;
  height: 26px;
  paddingVertical: 4px;
  paddingHorizontal: 8px;
  borderTopRightRadius: 8px;
  borderBottomRightRadius: 8px;
`;

const LabelText = styled(DefaultText)`
  fontFamily: Rubik_500Medium;
  fontWeight: 500;
  fontSize: 12px;
  lineHeight: 18px;
  color: ${Colors.primary};
`;

const Label = (): JSX.Element => (
  <LabelWrapper>
    <LabelText>Semiárido</LabelText>
  </LabelWrapper>
);

const FavoriteButton = styled(TouchableOpacity)`
  marginRight: 18px;
`;

const FavoriteIcon = styled(FontAwesome5)``;

const Favorite = ({ favorite = false }: FavoriteProps): JSX.Element => {
  const [state, setState] = useState(favorite);
  const animatePulse = new Animated.Value(1);
  const scale = animatePulse.interpolate({
    inputRange: [0, 1],
    outputRange: [1.1, 1]
  });

  useEffect(() => {
    Animated.timing(animatePulse, {
      toValue: state ? 0 : 1,
      duration: state ? 100 : 50,
      easing: Easing.linear,
      useNativeDriver: true
    }).start();
  }, [state]);

  return (
    <FavoriteButton onPress={() => setState(!state)}>
      <Animated.View
        style={{ transform: [{ scale }] }}
      >
        <FavoriteIcon
          name="heart"
          size={20}
          color="#ffffff"
          solid={state}
        />
      </Animated.View>
    </FavoriteButton>
  );
};

export default ({ data, navigation, loading = false, style = {} }: TechnologyCardProps): JSX.Element => {
  const { status }: DataCardProps = data;
  return (
    <CardWrapper style={style}>
      <Card>
        <CardContainer>
          {!loading && (
            <>
              <CardImage>
                <Actions>
                  <Label />
                  <Favorite />
                </Actions>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Technology')}
                  activeOpacity={.7}  
                >
                  <Image
                    source={{
                      uri: 'https://fakeimg.pl/216x216/',
                      cache: 'only-if-cached'
                    }}
                    style={{
                      width: 216,
                      height: 216,
                      borderRadius: 8
                    }}
                  />
                </TouchableOpacity>
              </CardImage>
              <TouchableOpacity
                onPress={() => navigation.navigate('Technology')}
                activeOpacity={.7}
              >
                <Title numberOfLines={2}>
                  Test Very Long Title Technology
                </Title>
              </TouchableOpacity>
              <StatusWrapper>
                <StatusIcon
                  name={status === "public" ? "unlock" : "lock"}
                  size={16}
                  color={Colors.primary}
                />
                <Status>{status === "public" ? "Público" : "Privado"}</Status>
              </StatusWrapper>
              <DateWrapper>
                <DateIcon
                  name="calendar"
                  size={16}
                  color="#a5a5a5"
                />
                <Date>Há 2 meses atrás</Date>
              </DateWrapper>
            </>
          )}
        </CardContainer>
      </Card>
    </CardWrapper>
  );
}
