import type {
  AssignmentStatusType,
  AssignmentSubmissionFailureType,
  AssignmentSubmissionStatusType,
} from "types/entities/common/assignment";
import type { AchievmentType, StudyType } from "types/entities/common/study";

import type { StudyList } from "./applyStudy";

interface StudyHistory {
  studyHistoryId: number;
  status: AssignmentStatusType;
  memberId: number;
  studyId: number;
}
interface Achievement {
  studyAchievementId: number;
  type: AchievmentType;
  studentId: number;
  studyId: number;
}

export interface MyAppliedStudyListApiResponseDto {
  studyHistory: StudyHistory;
  study: StudyList;
  achievements: Achievement[];
}

export interface AssignmentHistoryDto {
  assignmentHistoryId: number;
  status: AssignmentStatusType;
  title: string;
  deadline: string;
  descriptionLink?: string;
  submissionLink?: string;
  assignmentSubmissionStatus: AssignmentSubmissionStatusType;
  submissionFailureType: AssignmentSubmissionFailureType;
  week: number;
}

export interface CompletedStudyDto {
  studyId: number;
  academicYear: number;
  semesterType: "FIRST" | "SECOND";
  title: string;
  studyType: StudyType;
  notionLink?: string;
  introduction?: string;
  mentorName: string;
  totalWeek: number;
  studyHistoryStatus: "NONE" | "COMPLETED";
  achievements: Array<AchievmentType>;
}
