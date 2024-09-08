"use client";

import { atom, createStore, Provider } from "jotai";
import type { PropsWithChildren, ReactNode } from "react";

const studyIdStore = createStore();

export type StudyAtomprops = {
  studyId: number;
  title: ReactNode;
};

export const studyAtom = atom<StudyAtomprops>();
studyIdStore.set(studyAtom, undefined);

export const StudyProvider = ({ children }: PropsWithChildren) => {
  return <Provider store={studyIdStore}>{children}</Provider>;
};
