import type { StudyAssignmentStatusType } from "types/entities/study";

export interface AssignmentApiResponseDto {
  studyDetailId: number;
  title: string;
  deadline: string;
  week: number;
  descriptionLink: string;
  assignmentStatus: StudyAssignmentStatusType;
}
