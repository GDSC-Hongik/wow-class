import type { ToastProps } from "@wow-class/ui";
import { atom } from "jotai";

export const toastsAtom = atom<ToastProps[]>([]);
