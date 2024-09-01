import type { ToastProps } from "@wow-class/ui";
import { atom } from "jotai";

import { toastsAtom } from "../atoms/toastAtoms";

export const toastAtom = atom(
  null,
  (get, set) =>
    (props: Omit<ToastProps, "id"> & Partial<Pick<ToastProps, "id">>) => {
      const prevAtom = get(toastsAtom);
      const newToast = {
        ...props,
        id: props.id || Date.now().toString(),
      };

      set(toastsAtom, [...prevAtom, newToast]);
    }
);

export const removeToastAtom = atom(null, (get, set, id: string) => {
  const prev = get(toastsAtom);
  set(
    toastsAtom,
    prev.filter((toast) => toast.id !== id)
  );
});
