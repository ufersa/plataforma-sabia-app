import React from 'react';
import AppRoutes from './app.routes';
import { useModal } from '../hooks/useModal';
import { Modal as Dialog } from '../components';
import ModalLogin from '../components/ModalLogin';

const Routes = (): JSX.Element => {
  const { modalState, closeModal } = useModal();

  return (
    <>
      <AppRoutes />
      <Dialog
        title="Para continuar, digite e-mail e senha ou crie uma conta"
        animationType="slide"
        visible={modalState}
        height="55%"
        onClose={() => closeModal()}
      >
        <ModalLogin onSuccess={() => closeModal()} />
      </Dialog>
    </>
  );
};

export default Routes;
