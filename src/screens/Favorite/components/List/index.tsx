import React, { useEffect, useState } from 'react';
import { ListRenderItemInfo } from 'react-native';
import { DefaultText, Modal, Button } from '../../../../components';
import FavoriteCard from '../FavoriteCard';
import * as S from './styles';

interface ListItemProps {
  title: string
  amount: number
}

interface ListProps {
  data: ListItemProps[]
}

const List = ({ data }: ListProps): JSX.Element => {
  const [items, setItems] = useState<ListItemProps[]>(data);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    if (selectedItem !== null) setShowModal(true);
  }, [selectedItem]);

  const onRemove = (idx: number) => {
    setItems(data.slice(0, idx));
    setShowModal(false);
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
          <Button variant="danger" onPress={() => onRemove(selectedItem.index)}>
            Remover dos favoritos
          </Button>
        </S.ModalContent>
      </Modal>
    </>
  );
};

export default List;
