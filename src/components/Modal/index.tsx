import React from 'react';
import { Modal as ModalRN, ModalBaseProps, TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';
import DefaultText from '../Text';

interface ModalProps extends ModalBaseProps {
  title?: string,
  children: JSX.Element
  onClose(): void
}

const Wrapper = styled.View`
  background-color: red;
  flex: 1;
`;

const Container = styled.View`
  background-color: #ffffff;
  margin-top: auto;
  margin-bottom: 0;
`;

const Background = styled.View`
  background-color: rgba(0, 0, 0, 0.2);
  flex: 1;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;

const CloseWrapper = styled.View`
  align-items: center;
  justify-content: center;
`;

const ButtonClose = styled.TouchableOpacity`
  background-color: #eeeeee;
  width: 128px;
  height: 6px;
  border-radius: 3px;
  margin: 24px;
`;

const TitleWrapper = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`;

const Title = styled(DefaultText)`
  font-family: Rubik_500Medium;
  font-weight: 500;
  line-height: 27px;
  font-size: 18px;
  color: #4a4a4a;
`;

const Modal = ({ children, ...props }: ModalProps): JSX.Element => {
  const { title, onClose } = props;

  return (
    <Wrapper>
      <ModalRN
        hardwareAccelerated
        presentationStyle="overFullScreen"
        transparent
        {...props}
      >
        <TouchableWithoutFeedback onPress={onClose}>
          <Background />
        </TouchableWithoutFeedback>
        <Container style={{ height: 289 }}>
          <CloseWrapper>
            <ButtonClose activeOpacity={0.7} onPress={onClose} />
          </CloseWrapper>
          {title && (
            <TitleWrapper>
              <Title>{title}</Title>
            </TitleWrapper>
          )}
          {children}
        </Container>
      </ModalRN>
    </Wrapper>
  );
};

Modal.defaultProps = {
  title: '',
};

export default Modal;
