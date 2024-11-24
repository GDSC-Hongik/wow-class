"use client";

import type { OutstandingType } from "constants/status/outstandigOptions";
import { atom, createStore, Provider } from "jotai";
import type { PropsWithChildren, ReactNode } from "react";
import type { AchievementType } from "types/entities/achievement";

const studyIdStore = createStore();

export type StudyAtomprops = {
  studyId: number;
  title: ReactNode;
};

export type OutstandingStudentsProps = {
  type?: OutstandingType;
  achievement?: AchievementType;
};

export type SetOutstandingStudentsProps = {
  enabled: boolean;
};

export type SelectedStudentsProps = {
  firstStudentName?: string;
  students: number[] | [];
};

export const studyAtom = atom<StudyAtomprops>();

export const outstandingStudentsAtom = atom<OutstandingStudentsProps>({});

export const selectedStudentsAtom = atom<SelectedStudentsProps>({
  students: [],
});

export const enabledOutstandingStudentsAtom = atom<SetOutstandingStudentsProps>(
  { enabled: false }
);

export const StudyProvider = ({ children }: PropsWithChildren) => {
  return <Provider store={studyIdStore}>{children}</Provider>;
};
