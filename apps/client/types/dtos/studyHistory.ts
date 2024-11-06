import type {
  AssignmentStatusType,
  AssignmentSubmissionFailureType,
  AssignmentSubmissionStatusType,
} from "types/entities/common/assignment";
import type { StudyType } from "types/entities/common/study";

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

export interface CompletedStudyDto {
  studyId: number;
  academicYear: number;
  semesterType: "FIRST" | "SECOND";
  title: string;
  studyType: StudyType;
  notionLink?: string;
  introduction?: string;
  mentorName: string;
  totalWeek: number;
  studyHistoryStatus: "NONE" | "COMPLETED";
  achievements: Array<
    "FIRST_ROUND_OUTSTANDING_STUDENT" | "SECOND_ROUND_OUTSTANDING_STUDENT"
  >;
}
