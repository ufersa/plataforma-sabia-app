/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { ListRenderItemInfo } from 'react-native';
import { DefaultText, Modal, Button } from '../../../../components';
import FavoriteCard from '../FavoriteCard';
import * as S from './styles';

interface ListItemProps {
  id: string
  idx: number
  title: string
  pivot: {
    technology_id: number
    user_id: number
  }
}

interface ListProps {
  data: ListItemProps[]
  loading: boolean
  onRefresh: () => void
  onRemove: (technology: ListItemProps) => void
}

const List = ({
  data,
  loading,
  onRefresh,
  onRemove,
}: ListProps): JSX.Element => {
  const [items, setItems] = useState<ListItemProps[]>(data);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    if (selectedItem !== null) setShowModal(true);
  }, [selectedItem]);

  const onRemoveModal = (technology: ListItemProps) => {
    setItems(data.slice(0, technology.idx));
    setShowModal(false);
    onRemove(technology);
  };

  return (
    <>
      <S.ListWrapper>
        {items && items.length > 0 ? (
          <S.ListContainer
            data={items}
            renderItem={({ item, index }: ListRenderItemInfo<any>) => (
              <FavoriteCard
                {...item}
                onPress={() => setSelectedItem({ index, ...item })}
              />
            )}
            keyExtractor={(_, idx) => idx.toString()}
            refreshing={loading}
            onRefresh={onRefresh}
          />
        ) : (
          <S.Empty>
            <DefaultText>Nenhum favorito</DefaultText>
          </S.Empty>
        )}
      </S.ListWrapper>
      <Modal
        visible={showModal}
        title="Deseja remover dos favoritos?"
        animationType="slide"
        onClose={() => {
          setShowModal(false);
          setSelectedItem(null);
        }}
      >
        <S.ModalContent>
          <S.ModalBody>
            Se você confirmar, esse item sairá da sua lista de favoritos.
          </S.ModalBody>
          <Button variant="danger" onPress={() => onRemoveModal(selectedItem)}>
            Remover dos favoritos
          </Button>
        </S.ModalContent>
      </Modal>
    </>
  );
};

export default List;
