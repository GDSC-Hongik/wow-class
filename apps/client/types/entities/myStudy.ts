export type AttendanceStatusType = "ATTENDED" | "NOT_ATTENDED" | "PENDING";

export type HomeworkSubmissionStatusType =
  | "SUBMITTED"
  | "NOT_SUBMITTED"
  | "PENDING";

export type LevelType = "BASIC" | "BEGINNER" | "INTERMEDIATE" | "ADVANCED";

interface AttendanceTask {
  type: "ATTENDANCE";
  week: number;
  period: {
    start: string;
    end: string;
  };
  attendanceStatus: AttendanceStatusType;
}

interface HomeworkTask {
  type: "HOMEWORK";
  week: number;
  name: string;
  deadline: string;
  homeworkSubmissionStatus: HomeworkSubmissionStatusType;
}

export type DailyTaskDataType = AttendanceTask | HomeworkTask;

export type StudyCurriculumDataType = {
  week: number;
  title: string;
  description: string;
  level: LevelType;
  period: {
    startDate: string;
    endDate: string;
  };
  attendanceStatus: AttendanceStatusType;
  homeworkSubmissionStatus: HomeworkSubmissionStatusType;
};
