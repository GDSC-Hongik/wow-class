import { atom } from "jotai";
import type { StudyType } from "types/entities/common/study";

export const studyTypeAtom = atom<StudyType>("ONLINE"); // 문자열 상태 atom
