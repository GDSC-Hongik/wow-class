export interface AssignmentHistoryDto {
  assignmentHistoryId: number;
  title: string;
  deadline: string;
  descriptionLink?: string;
  submissionLink?: string;
  assignmentSubmissionStatus: "FAIL" | "SUCCESS"; //TODO: 과제 휴강 여부 추가
  week: number;
}
