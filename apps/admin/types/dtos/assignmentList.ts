import type { AssignStatusType } from "types/entities/assignStatus";

export interface AssignmentApiResponseDto {
  studyDetailId: number;
  title: string;
  deadline: string;
  week: number;
  descriptionLink: string;
  assignmentStatus: AssignStatusType;
}
