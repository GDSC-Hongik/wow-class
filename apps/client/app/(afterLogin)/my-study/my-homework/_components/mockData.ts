import type { AssignmentHistoryDto } from "types/dtos/study-history";

export const history: AssignmentHistoryDto[] = [
  {
    assignmentHistoryId: 1,
    title: "Assignment 1",
    deadline: "2024-08-17T06:02:17.417Z",
    descriptionLink: "",
    submissionLink: "http://example.com/submission1",
    assignmentSubmissionStatus: "PENDING",
    week: 1,
  },
  {
    assignmentHistoryId: 2,
    title: "Assignment 2",
    deadline: "2024-08-24T06:02:17.417Z",
    descriptionLink: "http://example.com/assignment2",
    submissionLink: "",
    assignmentSubmissionStatus: "COMPLETED",
    week: 2,
  },
];
