import type { StudyAssignmentStatusType } from "types/entities/study";

export interface AssignmentApiResponseDto {
  studyDetailId: number;
  studyTitle: string;
  title: string | null;
  deadline: string | null;
  week: number;
  descriptionLink: string | null;
  assignmentStatus: StudyAssignmentStatusType;
}

export interface AssignmentApiRequestDto {
  title: string;
  descriptionNotionLink: string;
  deadLine: string;
}
