import type {
  AssignmentStatusType,
  AssignmentSubmissionFailureType,
  AssignmentSubmissionStatusType,
} from "types/entities/common/assignment";

export interface AssignmentHistoryDto {
  assignmentHistoryId: number;
  status: AssignmentStatusType;
  title: string;
  deadline: string;
  descriptionLink?: string;
  submissionLink?: string;
  assignmentSubmissionStatus: AssignmentSubmissionStatusType;
  submissionFailureType: AssignmentSubmissionFailureType;
  week: number;
}
