import type { StudyDetailDashboardDto } from "types/dtos/study-detail-dashboard";
import type { AssignmentHistoryDto } from "types/dtos/study-history";

export const history: AssignmentHistoryDto[] = [
  {
    assignmentHistoryId: 1,
    title: "Assignment 1",
    deadline: "2024-08-17T06:02:17.417Z",
    descriptionLink: "",
    submissionLink: "http://example.com/submission1",
    assignmentSubmissionStatus: "SUCCESS",
    week: 1,
  },
  {
    assignmentHistoryId: 2,
    title: "Assignment 2",
    deadline: "2024-08-24T06:02:17.417Z",
    descriptionLink: "http://example.com/assignment2",
    submissionLink: "",
    assignmentSubmissionStatus: "FAIL",
    week: 2,
  },
];

export const studyDashBoardData: StudyDetailDashboardDto = {
  repositoryLink: "",
  isLinkEditable: true,
  submittableAssignments: [
    {
      studyDetailId: 1,
      assignmentStatus: "OPEN",
      week: 1,
      title: "React Basics",
      assignmentSubmissionStatus: "FAIL",
      descriptionLink: "https://example.com/assignments/react-basics",
      deadline: "2024-08-18T17:56:01.155Z",
      submissionLink: "https://example.com/submissions/react-basics",
      submissionFailureType: "NOT_SUBMITTED",
    },
  ],
};
