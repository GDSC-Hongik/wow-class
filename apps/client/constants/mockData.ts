import type {
  DailyTaskDataType,
  StudyCurriculumDataType,
} from "types/entities/myStudy";

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

export const studyCurriculumMockData: StudyCurriculumDataType[] = [
  {
    week: 1,
    title: "(제목) 웹 개발의 역사",
    description:
      "(설명) 웹 개발의 역사를 알아보며, HTML, CSS, Javascript가 무엇인지 알아보자.",
    level: "BASIC",
    period: {
      startDate: "2024-08-18T17:13:29.913Z",
      endDate: "2024-08-25T17:13:29.913Z",
    },
    attendanceStatus: "ATTENDED",
    assignmentSubmissionStatus: "PENDING",
  },
  {
    week: 2,
    title: "(제목) 웹 개발의 역사",
    description:
      "(설명) 웹 개발의 역사를 알아보며, HTML, CSS, Javascript가 무엇인지 알아보자.",
    level: "BEGINNER",
    period: {
      startDate: "2024-08-18T17:13:29.913Z",
      endDate: "2024-08-25T17:13:29.913Z",
    },
    attendanceStatus: "NOT_ATTENDED",
    assignmentSubmissionStatus: "SUCCESS",
  },
  {
    week: 3,
    title: "(제목) 웹 개발의 역사",
    description:
      "(설명) 웹 개발의 역사를 알아보며, HTML, CSS, Javascript가 무엇인지 알아보자.",
    level: "INTERMEDIATE",
    period: {
      startDate: "2024-08-18T17:13:29.913Z",
      endDate: "2024-08-25T17:13:29.913Z",
    },
    attendanceStatus: "PENDING",
    assignmentSubmissionStatus: "FAILURE",
  },
  {
    week: 4,
    title: "(제목) 웹 개발의 역사",
    description:
      "(설명) 웹 개발의 역사를 알아보며, HTML, CSS, Javascript가 무엇인지 알아보자.",
    level: "ADVANCED",
    period: {
      startDate: "2024-08-18T17:13:29.913Z",
      endDate: "2024-08-25T17:13:29.913Z",
    },
    attendanceStatus: "PENDING",
    assignmentSubmissionStatus: "FAILURE",
  },
];
