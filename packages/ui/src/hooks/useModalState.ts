import { useCallback, useState } from "react";

const useModalState = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = useCallback(() => setIsOpen(() => true), []);
  const closeModal = useCallback(() => setIsOpen(() => false), []);

  return {
    isOpen,
    openModal,
    closeModal,
  };
};

export default useModalState;
