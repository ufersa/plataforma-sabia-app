import React from 'react';
import { Modal as ModalRN, ModalBaseProps, TouchableWithoutFeedback } from 'react-native';
import * as S from './styles';

interface ModalProps extends ModalBaseProps {
  title?: string,
  children: JSX.Element
  height?: number
  onClose(): void
}

const Modal = ({ children, ...props }: ModalProps): JSX.Element => {
  const { title = '', onClose, height } = props;

  return (
    <S.Wrapper>
      <ModalRN
        hardwareAccelerated
        presentationStyle="overFullScreen"
        transparent
        {...props}
      >
        <TouchableWithoutFeedback onPress={onClose}>
          <S.Background />
        </TouchableWithoutFeedback>
        <S.Container style={{ height: height || 289 }}>
          <S.CloseWrapper>
            <S.ButtonClose activeOpacity={0.7} onPress={onClose} />
          </S.CloseWrapper>
          {!!title && (
            <S.TitleWrapper>
              <S.Title>{title}</S.Title>
            </S.TitleWrapper>
          )}
          {children}
        </S.Container>
      </ModalRN>
    </S.Wrapper>
  );
};

export default Modal;
