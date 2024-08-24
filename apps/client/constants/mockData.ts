import type {
  AssignmentSubmissionStatusType,
  AttendanceStatusType,
} from "types/entities/myStudy";

export const dailyTaskMockData = [
  {
    studyDetailId: 0,
    week: 1,
    todoType: "ATTENDANCE",
    deadLine: "2024-08-24T08:40:54.541Z",
    attendanceStatus: "ATTENDED" as AttendanceStatusType,
  },
  {
    studyDetailId: 1,
    week: 2,
    todoType: "ASSIGNMENT",
    deadLine: "2024-08-24T08:40:54.541Z",
    assignmentTitle: "string1" as string,
    assignmentSubmissionStatus:
      "NOT_SUBMITTED" as AssignmentSubmissionStatusType,
  },
  {
    studyDetailId: 1,
    week: 2,
    todoType: "ASSIGNMENT",
    deadLine: "2024-08-24T08:40:54.541Z",
    assignmentTitle: "string2" as string,
    assignmentSubmissionStatus: "FAILURE" as AssignmentSubmissionStatusType,
  },
  {
    studyDetailId: 1,
    week: 2,
    todoType: "ASSIGNMENT",
    deadLine: "2024-08-24T08:40:54.541Z",
    assignmentTitle: "string2" as string,
    assignmentSubmissionStatus: "SUCCESS" as AssignmentSubmissionStatusType,
  },
];
