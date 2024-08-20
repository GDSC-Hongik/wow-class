import type { HomeworkSubmissionStatusType } from "types/entities/assignment";

export interface StudyDetailDashboardDto {
  repositoryLink: string;
  isLinkEditable: boolean;
  submittableAssignments: Assignment[];
}

export interface Assignment {
  studyDetailId: number;
  assignmentStatus: "NONE" | "OPEN" | "CANCELLED";
  week: number;
  title: string;
  assignmentSubmissionStatus: HomeworkSubmissionStatusType;
  descriptionLink: string;
  deadline: string;
  submissionLink: string;
  submissionFailureType:
    | "NONE"
    | "NOT_SUBMITTED"
    | "WORD_COUNT_INSUFFICIENT"
    | "LOCATION_UNIDENTIFIABLE";

  committedAt?: string;
}
