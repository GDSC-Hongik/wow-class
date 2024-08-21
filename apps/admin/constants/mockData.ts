import type { AssignmentApiResponseDto } from "types/dtos/assignmentList";
import type { SessionApiResponseDto } from "types/dtos/sessionList";

export const headerMockData = {
  studyId: 1,
  title: "기초 웹스터디",
  academicYear: 2024,
  semester: "FIRST",
  studyType: "오프라인 세션",
  notionLink: "string",
  introduction: "새싹 개발자분들을 위한 개발 입문 스터디",
  mentorName: "강가은",
  dayOfWeek: "TUESDAY",
  startTime: {
    hour: 18,
    minute: 0,
    second: 0,
    nano: 0,
  },
  endTime: {
    hour: 19,
    minute: 0,
    second: 0,
    nano: 0,
  },
  totalWeek: 8,
  period: {
    startDate: "2024-08-18T17:13:29.913Z",
    endDate: "2024-08-18T17:13:29.913Z",
    open: true,
  },
};

export const assignmentList: AssignmentApiResponseDto[] = [
  {
    studyDetailId: 12,
    title: "1번 과제",
    deadline: "2024-08-20T14:52:41.871Z",
    week: 1,
    descriptionLink: "https://github.com/GDSC-Hongik/wow-class",
    assignmentStatus: "OPEN",
  },
  {
    studyDetailId: 13,
    title: "2번 과제",
    deadline: "2024-08-22T14:52:41.871Z",
    week: 2,
    descriptionLink: "https://github.com/GDSC-Hongik/wow-class",
    assignmentStatus: "NONE",
  },
  {
    studyDetailId: 14,
    title: "-",
    deadline: "-",
    week: 3,
    descriptionLink: "",
    assignmentStatus: "NONE",
  },
  {
    studyDetailId: 15,
    title: "-",
    deadline: "-",
    week: 4,
    descriptionLink: "",
    assignmentStatus: "NONE",
  },
];
export const sessionList: SessionApiResponseDto[] = [
  {
    studyDetailId: 12,
    period: {
      startDate: "2024-08-13T16:38:33.554Z",
      endDate: "2024-08-20T18:38:33.554Z",
      open: true,
    },
    week: 1,
    title: "웹 개발의 역사",
    difficulty: "HIGH",
  },
  {
    studyDetailId: 13,
    period: {
      startDate: "2024-08-20T18:38:33.554Z",
      endDate: "2024-08-27T18:38:33.554Z",
      open: true,
    },
    week: 2,
    title: "네트워크 통신",
    difficulty: "LOW",
  },
  {
    studyDetailId: 14,
    period: {
      startDate: "2024-08-27T18:38:33.554Z",
      endDate: "2024-09-02T18:38:33.554Z",
      open: true,
    },
    week: 3,
    title: "쿠키를 활용한 통신",
    difficulty: "MEDIUM",
  },
];
