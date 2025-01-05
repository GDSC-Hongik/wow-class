export interface StudyStatisticsApiResponseDto {
  totalStudentCount: number;
  completeStudentCount: number;
  averageAttendanceRate: number;
  averageAssignmentSubmissionRate: number;
  studyCompleteRate: number;
  studyWeekStatisticsResponses: StudyWeekStatisticsApiResponseDto[];
}

export interface StudyWeekStatisticsApiResponseDto {
  week: number;
  attendanceRate: number;
  assignmentSubmissionRate: number;
  isAssignmentCanceled: boolean;
  isCurriculumCanceled: boolean;
}
