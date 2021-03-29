import { Feather, FontAwesome5 } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Platform, Share } from 'react-native';
import { useAuth } from '../../hooks/useAuth';
import { Technology } from '../../hooks/useTechnology';
import { getMe } from '../../services/auth';
import { handleBookmark } from '../../services/bookmark';
import Button from '../Button';
import * as S from './styles';

export interface HeaderButtonsProps {
  data?: any
}

const HeaderButtons = ({
  data,
}: HeaderButtonsProps): JSX.Element => {
  const [state, setState] = useState(false);

  const { user, updateUser } = useAuth();
  const [type] = useState(data.type);
  const solutionTypeProperty: string = `${type}Bookmarks`;

  useEffect(() => {
    const solutionBookmarks = user[solutionTypeProperty];
    const liked = solutionBookmarks?.some((bookmark: Technology) => bookmark.id === data.id);
    setState(liked);
  }, [user, type, state, solutionTypeProperty]);

  const solutionType = `${type}Id`;

  const handleLike = async () => {
    setState(!state);

    await handleBookmark({
      active: state,
      [solutionType]: data.id,
      userId: user?.id,
    });

    updateUser(await getMe());
  };

  return (
    <S.ButtonsHeaderWrapper>
      <Button
        size="md"
        variant="orange-light"
        style={{ width: 40 }}
        onPress={() => handleLike()}
      >
        <FontAwesome5
          name="heart"
          size={16}
          solid={state}
        />
      </Button>
      <Button
        size="md"
        variant="info-light"
        style={{ width: 40 }}
        onPress={
          async () => {
            await Share.share({
              message: Platform.OS === 'ios' ? data.title : data.description,
              url: `http://plataformasabia.com/t/${data.slug}`,
              title: data.title,
            });
          }
        }
      >
        <Feather name="share-2" size={16} />
      </Button>
    </S.ButtonsHeaderWrapper>
  );
};

export default HeaderButtons;
