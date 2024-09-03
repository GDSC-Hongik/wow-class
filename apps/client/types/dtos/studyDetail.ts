import type {
  AssignmentStatusType,
  AssignmentSubmissionFailureType,
  AssignmentSubmissionStatusType,
} from "types/entities/common/assignment";

export interface StudyDetailDashboardDto {
  repositoryLink: string;
  isLinkEditable: boolean;
  submittableAssignments: Assignment[];
}

export type UpcomingStudyDto = Assignment[];
export interface Assignment {
  studyDetailId: number;
  assignmentStatus: AssignmentStatusType;
  week: number;
  title: string;
  assignmentSubmissionStatus: AssignmentSubmissionStatusType;
  descriptionLink: string;
  deadline: string;
  submissionLink: string;
  submissionFailureType: AssignmentSubmissionFailureType;

  committedAt?: string;
}
