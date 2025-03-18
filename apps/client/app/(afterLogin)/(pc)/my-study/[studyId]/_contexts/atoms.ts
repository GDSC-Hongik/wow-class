import { atom } from "jotai";
import type { StudyDetailDashboardDto } from "types/dtos/studyDetail";
import type { StudyType } from "types/entities/common/study";

export const studyTypeAtom = atom<StudyType>("ONLINE"); // 문자열 상태 atom
export const githubLinkAtom =
  atom<StudyDetailDashboardDto["studyHistory"]["githubLink"]>(""); // 문자열 상태 atom
