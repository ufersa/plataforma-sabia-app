import React, { useState, createContext, useContext } from 'react';

export interface Modal {
  modalState: boolean
  closeModal?: () => void
  openModal?: () => void
}

interface ModalProviderProps {
  children: JSX.Element | JSX.Element[]
}

const ModalContext = createContext<Modal | null>(null);

const ModalProvider = ({ children }: ModalProviderProps): JSX.Element => {
  const [modalState, setModalState] = useState<boolean>(false);

  const closeModal = () => setModalState(false);
  const openModal = () => setModalState(true);

  return (
    <ModalContext.Provider
      value={{
        modalState,
        closeModal,
        openModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

const useModal = (): Modal => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be used within an ModalProvider');
  }

  return context;
};

export { ModalProvider, useModal };
