import { useSetAtom } from "jotai";
import { toastAtom } from "store";

const useToast = () => {
  const addToast = useSetAtom(toastAtom);

  return {
    toast: addToast(),
  };
};

export default useToast;
