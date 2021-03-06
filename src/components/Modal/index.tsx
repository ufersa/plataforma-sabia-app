import React, { useEffect } from 'react';
import {
  Modal as ModalRN,
  ModalBaseProps,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Animated,
} from 'react-native';
import * as S from './styles';

interface ModalProps extends ModalBaseProps {
  title?: string
  titleStyle?: object
  children: JSX.Element
  height?: string | number
  onClose(): void
}

const Modal = ({ children, ...props }: ModalProps): JSX.Element => {
  const {
    title = '',
    onClose,
    titleStyle,
    visible,
    height,
  } = props;
  const opacity = new Animated.Value(0);

  const closeModal = (): void => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();

    setTimeout(() => {
      onClose();
    }, 200);
  };

  useEffect(() => {
    setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }, 300);
  }, [visible]);

  return (
    <S.Wrapper>
      <ModalRN
        hardwareAccelerated
        presentationStyle="overFullScreen"
        transparent
        {...props}
      >
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior="padding"
        >
          <TouchableWithoutFeedback onPress={closeModal}>
            <Animated.View style={{ flex: 1, opacity }}>
              <S.Background />
            </Animated.View>
          </TouchableWithoutFeedback>
          <S.Container style={{ height: height || 289 }}>
            <S.CloseWrapper>
              <S.ButtonClose activeOpacity={0.7} onPress={closeModal} />
            </S.CloseWrapper>
            {!!title && (
              <S.TitleWrapper>
                <S.Title style={titleStyle}>{title}</S.Title>
              </S.TitleWrapper>
            )}
            {children}
          </S.Container>
        </KeyboardAvoidingView>
      </ModalRN>
    </S.Wrapper>
  );
};

export default Modal;
