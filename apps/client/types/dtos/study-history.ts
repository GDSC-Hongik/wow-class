import type { HomeworkSubmissionStatusType } from "types/entities/homework";

export interface AssignmentHistoryDto {
  assignmentHistoryId: number;
  title: string;
  deadline: string;
  descriptionLink?: string;
  submissionLink?: string;
  assignmentSubmissionStatus: HomeworkSubmissionStatusType; //TODO: 과제 휴강 여부 추가
  week: number;
}
