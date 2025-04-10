export interface StudyStatisticsApiResponseDto {
  totalStudentCount: number;
  completeStudentCount: number;
  averageAttendanceRate: number;
  averageAssignmentSubmissionRate: number;
  studyCompleteRate: number;
  studyRoundStatisticsDtos: studyRoundStatisticsDtos[];
}

export interface studyRoundStatisticsDtos {
  round: number;
  attendanceRate: number;
  assignmentSubmissionRate: number;
}
