import type { StudyCurriculumListDtoType } from "types/dtos/myStudy";
import type { DailyTaskDataType } from "types/entities/myStudy";

export const dailyTaskMockData: DailyTaskDataType[] = [
  {
    type: "ATTENDANCE",
    week: 4,
    period: {
      start: "2024-08-18T17:13:29.913Z",
      end: "2024-08-18T23:59:29.913Z",
    },
    attendanceStatus: "ATTENDED",
  },
  {
    type: "ASSIGNMENT",
    week: 3,
    name: "과제 이름 과제 이름 과제 이름 과제 이름 과제 이름 과제 이름 과제 이름",
    deadline: "2024-08-18T17:13:29.913Z",
    assignmentSubmissionStatus: "SUCCESS",
  },
  {
    type: "ASSIGNMENT",
    week: 2,
    name: "과제 이름 과제 이름 과제 이름 과제 이름 과제 이름 과제 이름 과제 이름",
    deadline: "2024-08-18T17:13:29.913Z",
    assignmentSubmissionStatus: "FAILURE",
  },
  {
    type: "ASSIGNMENT",
    week: 1,
    name: "과제 이름 과제 이름 과제 이름 과제 이름 과제 이름 과제 이름 과제 이름",
    deadline: "2024-08-18T17:13:29.913Z",
    assignmentSubmissionStatus: "FAILURE",
  },
];

export const studyCurriculumMockData: StudyCurriculumListDtoType = [
  {
    studyDetailId: 0,
    period: {
      startDate: "2024-08-23T07:23:47.027Z",
      endDate: "2024-08-23T07:23:47.027Z",
      open: true,
    },
    week: 1,
    title: "(제목) 웹 개발의 역사",
    description:
      "(설명) 웹 개발의 역사를 알아보며, HTML, CSS, Javascript가 무엇인지 알아보자.",
    sessionStatus: "NONE",
    difficulty: "HIGH",
    attendanceStatus: "ATTENDED",
    assignmentStatus: "NONE",
    assignmentSubmissionStatus: "NOT_SUBMITTED",
    submissionFailureType: "NONE",
  },
  {
    studyDetailId: 0,
    period: {
      startDate: "2024-08-23T07:23:47.027Z",
      endDate: "2024-08-23T07:23:47.027Z",
      open: true,
    },
    week: 2,
    title: "(제목) 웹 개발의 역사",
    description:
      "(설명) 웹 개발의 역사를 알아보며, HTML, CSS, Javascript가 무엇인지 알아보자.",
    sessionStatus: "NONE",
    difficulty: "MEDIUM",
    attendanceStatus: "BEFORE_ATTENDANCE",
    assignmentStatus: "NONE",
    assignmentSubmissionStatus: "FAILURE",
    submissionFailureType: "NONE",
  },
  {
    studyDetailId: 0,
    period: {
      startDate: "2024-08-23T07:23:47.027Z",
      endDate: "2024-08-23T07:23:47.027Z",
      open: true,
    },
    week: 3,
    title: "(제목) 웹 개발의 역사",
    description:
      "(설명) 웹 개발의 역사를 알아보며, HTML, CSS, Javascript가 무엇인지 알아보자.",
    sessionStatus: "NONE",
    difficulty: "LOW",
    attendanceStatus: "NOT_ATTENDED",
    assignmentStatus: "NONE",
    assignmentSubmissionStatus: "SUCCESS",
    submissionFailureType: "NONE",
  },
];
