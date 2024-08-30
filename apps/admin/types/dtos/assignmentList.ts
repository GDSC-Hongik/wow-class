import type { AssignmentStatusType } from "types/entities/study";

export interface AssignmentApiResponseDto {
  studyDetailId: number;
  title: string;
  deadline: string;
  week: number;
  descriptionLink: string;
  assignmentStatus: AssignmentStatusType;
}
