"use client";

import { atom, createStore, Provider } from "jotai";
import type { ReactNode } from "react";

const studyIdStore = createStore();

export type StudyAtomprops = {
  studyId: number;
  title: ReactNode;
};

export const studyAtom = atom<StudyAtomprops>();
studyIdStore.set(studyAtom, undefined);

export const StudyProvider = ({ children }: { children: ReactNode }) => {
  return <Provider store={studyIdStore}>{children}</Provider>;
};
