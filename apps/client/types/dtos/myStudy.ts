import type {
  DayOfWeekType,
  SemesterType,
  Time,
} from "types/entities/common/time";
import type {
  AssignmentStatusType,
  AssignmentSubmissionFailureType,
  AssignmentSubmissionStatusType,
  AttendanceStatusType,
  DailyTaskType,
  StudyCurriculumStatusType,
  StudyDifficultyType,
} from "types/entities/myStudy";

export interface BasicStudyInfoDto {
  studyId: number;
  title: string;
  academicYear: number;
  semester: SemesterType;
  studyType: string;
  notionLink: string;
  introduction: string;
  mentorName: string;
  dayOfWeek: DayOfWeekType;
  startTime: Time | null;
  endTime: Time | null;
  totalWeek: number;
  period: {
    startDate: string;
    endDate: string;
    open: boolean;
  };
}

interface StudyAnnouncementDto {
  studyAnnounceId: number;
  title: string;
  link: string;
  createdDate: string;
}

export type StudyAnnouncementListDtoType = StudyAnnouncementDto[];

export interface MyOngoingStudyInfoDto {
  studyId: number;
}

interface StudyCurriculumDto {
  studyDetailId: number;
  period: {
    startDate: string;
    endDate: string;
    open: boolean;
  };
  week: number;
  title: string;
  description: string;
  curriculumStatus: StudyCurriculumStatusType;
  difficulty: StudyDifficultyType;
  attendanceStatus: AttendanceStatusType;
  assignmentStatus: AssignmentStatusType;
  assignmentSubmissionStatus: AssignmentSubmissionStatusType;
  submissionFailureType: AssignmentSubmissionFailureType;
  submissionLink: string;
}

export type StudyCurriculumListDtoType = StudyCurriculumDto[];

export interface DailyTaskDto<T extends DailyTaskType> {
  studyDetailId: number;
  week: number;
  todoType: T;
  deadLine: string;
  attendanceStatus: T extends "ATTENDANCE" ? AttendanceStatusType : never;
  assignmentTitle: T extends "ASSIGNMENT" ? string : never;
  assignmentSubmissionStatus: T extends "ASSIGNMENT"
    ? Extract<AssignmentSubmissionStatusType, "FAILURE" | "SUCCESS">
    : never;
}

export type DailyTaskListDtoType<T extends DailyTaskType> = DailyTaskDto<T>[];
