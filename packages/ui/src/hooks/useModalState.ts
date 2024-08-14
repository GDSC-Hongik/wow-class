import { useCallback, useState } from "react";

const useModalState = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const openModal = useCallback(() => setOpen(() => true), []);
  const closeModal = useCallback(() => setOpen(() => false), []);

  return {
    isOpen,
    openModal,
    closeModal,
  };
};

export default useModalState;
