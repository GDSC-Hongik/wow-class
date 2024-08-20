import type { HomeworkSubmissionStatusType } from "types/entities/homework";

export interface StudyDetailDashboardDto {
  repositoryLink: string;
  isLinkEditable: boolean;
  submittableAssignments: SubmittableAssignment[];
}

export interface SubmittableAssignment {
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
}
