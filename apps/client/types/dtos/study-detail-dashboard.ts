import type {
  AssignmentStatus,
  AssignmentSubmissionStatusType,
  SubmissionFailureType,
} from "types/entities/assignment";

export interface StudyDetailDashboardDto {
  repositoryLink: string;
  isLinkEditable: boolean;
  submittableAssignments: Assignment[];
}

export interface Assignment {
  studyDetailId: number;
  assignmentStatus: AssignmentStatus;
  week: number;
  title: string;
  assignmentSubmissionStatus: AssignmentSubmissionStatusType;
  descriptionLink: string;
  deadline: string;
  submissionLink: string;
  submissionFailureType: SubmissionFailureType;

  committedAt?: string;
}
