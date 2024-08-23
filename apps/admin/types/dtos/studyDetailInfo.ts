import type { DifficultyType } from "types/entities/difficulty";
import type { StudyStatusType } from "types/entities/study";

export interface StudyDetailInfoApiRequestDto {
  notionLink: string;
  introduction: string;
  studySessions: [
    {
      studyDetailId: 0;
      title: "string";
      description: "string";
      difficulty: DifficultyType;
      status: StudyStatusType;
    },
  ];
}
