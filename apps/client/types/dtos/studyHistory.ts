import type {
  AssignmentStatusType,
  AssignmentSubmissionStatusType,
  SubmissionFailureType,
} from "types/entities/common/assignment";

export interface AssignmentHistoryDto {
  assignmentHistoryId: number;
  status: AssignmentStatusType;
  title: string;
  deadline: string;
  descriptionLink?: string;
  submissionLink?: string;
  assignmentSubmissionStatus: AssignmentSubmissionStatusType;
  submissionFailureType: SubmissionFailureType;
  week: number;
}
