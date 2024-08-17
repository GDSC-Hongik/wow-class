export interface AssignmentHistoryDto {
  assignmentHistoryId: number;
  title: string;
  deadline: string;
  descriptionLink?: string;
  submissionLink?: string;
  assignmentSubmissionStatus: "FAIL" | "COMPLETED" | "PENDING";
  week: number;
}
