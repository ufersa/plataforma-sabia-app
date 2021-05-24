import React, { useEffect, useState } from 'react';
import {
  Animated, Image, TouchableOpacity, Easing, StyleProp, View,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  Card,
  Modal,
  Button,
  Placeholder,
} from '@components/.';
import { formatMoney } from '@utils/helper';
import { useAuth } from '@hooks/useAuth';
import { handleBookmark } from '@services/bookmark';
import { Technology } from '@hooks/useTechnology';
import { useCart } from '@hooks/useCart';
import { getMe } from '@services/auth';
import { useModal } from '@hooks/useModal';
import * as S from './styles';

interface DataCardProps {
  id: number
  title: string
  slug: string
  image: string
  price: number
  description?: string
  createdAt: string
  type?: string
  isSeller?: boolean
  measureUnit?: string
  institution?: string
  terms?: {
  }[]
}
interface TechnologyCardProps {
  data?: DataCardProps
  type: string
  style?: StyleProp<any>
  loading: boolean
  navigation?: StackNavigationProp<any, any>
}
interface FavoriteProps {
  id: number
  type: string
}

const Favorite = ({ id, type }: FavoriteProps): JSX.Element => {
  const [state, setState] = useState(false);
  const animatePulse = new Animated.Value(1);
  const scale = animatePulse.interpolate({
    inputRange: [0, 1],
    outputRange: [1.1, 1],
  });

  const { user, updateUser } = useAuth();
  const { openModal } = useModal();
  const solutionTypeProperty: string = `${type}Bookmarks`;

  useEffect(() => {
    if (user) {
      const solutionBookmarks = user[solutionTypeProperty];
      const isLiked = solutionBookmarks?.some((bookmark: Technology) => bookmark.id === id);
      setState(isLiked);

      Animated.timing(animatePulse, {
        toValue: state ? 0 : 1,
        duration: state ? 100 : 50,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    }
  }, [user, id, type, solutionTypeProperty]);

  const solutionType = `${type}Id`;

  const handleLike = async () => {
    setState(!state);
    await handleBookmark({
      active: state,
      [solutionType]: id,
      userId: user?.id,
    });
    updateUser(await getMe());
  };

  return (
    <S.FavoriteButton onPress={user ? handleLike : openModal}>
      <Animated.View
        style={{ transform: [{ scale }] }}
      >
        <S.FavoriteIcon
          name="heart"
          size={24}
          color="#eee"
          solid={state}
        />
      </Animated.View>
    </S.FavoriteButton>
  );
};

export default ({
  data,
  navigation,
  type,
  loading = false,
  style = {},
}: TechnologyCardProps): JSX.Element => {
  const { user } = useAuth();
  const { addCart } = useCart();
  const [showModal, setShowModal] = useState<boolean>(false);
  const navigate = () => (type === 'technology' ? navigation.navigate('Technology', { data, type }) : setShowModal(true));

  return (
    <>
      <S.CardWrapper style={style}>
        <Card>
          <S.CardContainer>
            <S.CardImage>
              {!loading && (
                <S.Actions>
                  <Favorite id={data.id} type={type} />
                </S.Actions>
              )}
              <TouchableOpacity
                onPress={navigate}
                activeOpacity={0.7}
              >
                <Image
                  source={{ uri: data?.image }}
                  style={{
                    width: 216,
                    height: 216,
                    borderRadius: 8,
                  }}
                />
              </TouchableOpacity>
            </S.CardImage>
            {loading ? (
              <View style={{ alignItems: 'center' }}>
                <Placeholder />
                <Placeholder style={{ width: 100 }} light />
              </View>
            ) : (
              <>
                <TouchableOpacity
                  onPress={navigate}
                  activeOpacity={0.7}
                >
                  <S.Title numberOfLines={2}>
                    {data.title}
                  </S.Title>
                </TouchableOpacity>
                {data.isSeller && (
                  <S.AmountWrapper>
                    <S.Amount bold>
                      {formatMoney(data.price)}
                    </S.Amount>
                  </S.AmountWrapper>
                )}
              </>
            )}
          </S.CardContainer>
        </Card>
      </S.CardWrapper>
      {!loading && type === 'service' && (
        <Modal
          title={data.title}
          animationType="slide"
          visible={showModal}
          onClose={() => setShowModal(false)}
        >
          <S.ModalContent>
            <S.Details
              onPress={() => {
                navigation.navigate('Technology', { data, type });
                setShowModal(false);
              }}
            />
            <S.ModalActions>
              <View style={{ flex: 1 }}>
                {user && (
                  <Button
                    variant="primary"
                    onPress={() => {
                      addCart({
                        id: data.id,
                        title: data.title,
                        quantity: 1,
                        price: data.price,
                        image: data.image,
                        measureUnit: data.measureUnit,
                        institution: data.institution,
                      });
                      setShowModal(false);
                    }}
                  >
                    Adicionar no carrinho
                  </Button>
                )}
              </View>
            </S.ModalActions>
          </S.ModalContent>
        </Modal>
      )}
    </>
  );
};
