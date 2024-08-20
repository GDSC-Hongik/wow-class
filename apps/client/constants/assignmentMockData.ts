import type {
  Assignment,
  StudyDetailDashboardDto,
} from "types/dtos/study-detail-dashboard";
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
    assignmentSubmissionStatus: "FAILURE",
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
      assignmentSubmissionStatus: "PENDING",
      descriptionLink: "https://example.com/assignments/react-basics",
      deadline: "2024-08-25T23:59:59",
      submissionLink: "https://example.com/submissions/react-basics",
      submissionFailureType: "NONE",
    },
  ],
};

export const assignmentData: Assignment[] = [
  //   {
  //     studyDetailId: 123,
  //     assignmentStatus: "OPEN",
  //     week: 3,
  //     title: "Database Design Assignment",
  //     assignmentSubmissionStatus: "SUCCESS",
  //     descriptionLink: "https://example.com/assignment/123",
  //     deadline: "2024-08-20T14:30:00",
  //     submissionLink: "https://github.com/GDSC-Hongik/wow-class",
  //     submissionFailureType: "NONE",
  //     committedAt: "2024-08-20T14:30:00",
  //   },
  {
    studyDetailId: 123,
    assignmentStatus: "OPEN",
    week: 3,
    title: "Database Design Assignment",
    assignmentSubmissionStatus: "SUCCESS",
    descriptionLink: "https://example.com/assignment/123",
    deadline: "2024-08-25T23:59:59",
    submissionLink: "https://github.com/GDSC-Hongik/wow-class",
    submissionFailureType: "NONE",
    committedAt: "2024-08-20T14:30:00",
  },
  {
    studyDetailId: 123,
    assignmentStatus: "OPEN",
    week: 3,
    title: "Database Design Assignment",
    assignmentSubmissionStatus: "FAILURE",
    descriptionLink: "https://example.com/assignment/123",
    deadline: "2024-08-25T23:59:59",
    submissionLink: "https://github.com/GDSC-Hongik/wow-class",
    submissionFailureType: "WORD_COUNT_INSUFFICIENT",
    committedAt: "sdf",
  },
  //제출 안함/마감
  //   {
  //     studyDetailId: 124,
  //     assignmentStatus: "OPEN",
  //     week: 4,
  //     title: "API Development",
  //     assignmentSubmissionStatus: "FAILURE",
  //     descriptionLink: "https://example.com/assignment/124",
  //     deadline: "2024-08-20T14:30:00",
  //     submissionLink: "https://github.com/GDSC-Hongik/wow-class",
  //     submissionFailureType: "NOT_SUBMITTED",
  //     committedAt: "2024-08-20T14:30:00",
  //   },
];
