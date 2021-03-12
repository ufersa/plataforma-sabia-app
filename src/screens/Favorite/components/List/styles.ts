import styled from 'styled-components/native';
import { DefaultText } from '../../../../components';

export const ListWrapper = styled.View`
  height: 100%;
  margin-top: 18px;
`;

export const ListContainer = styled.FlatList`
  padding: 16px;
`;

export const Empty = styled.View`
  align-items: center;
`;

export const ModalContent = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 16px;
`;

export const ModalBody = styled(DefaultText)`
  font-family: Rubik_500Medium;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #777777;
  text-align: center;
  margin-bottom: 32px;
`;
