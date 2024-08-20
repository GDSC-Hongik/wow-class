import { Assign } from "./../../client/styled-system/types/system-types.d";
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

export const assignmentList = [
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
