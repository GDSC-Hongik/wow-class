import { atom } from "jotai";
import type { StudyType } from "types/entities/common/study";

export const studyTypeAtom = atom<StudyType>("ONLINE");
