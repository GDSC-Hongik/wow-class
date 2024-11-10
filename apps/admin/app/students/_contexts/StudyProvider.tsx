"use client";

import { atom, createStore, Provider } from "jotai";
import type { PropsWithChildren, ReactNode } from "react";
import type { AchievementType } from "types/entities/achievement";

const studyIdStore = createStore();

export type StudyAtomprops = {
  studyId: number;
  title: ReactNode;
};

export type OutstandingStudentsType = "ADD" | "DEL";

export type OutstandingStudentsProps = {
  type?: OutstandingStudentsType;
  achievement?: AchievementType;
  enabled: boolean;
};

export const studyAtom = atom<StudyAtomprops>();
studyIdStore.set(studyAtom, undefined);

export const outstandingStudentsAtom = atom<OutstandingStudentsProps>({
  enabled: false,
});

export const selectedStudentsAtom = atom<number[] | []>([]);

export const StudyProvider = ({ children }: PropsWithChildren) => {
  return <Provider store={studyIdStore}>{children}</Provider>;
};
