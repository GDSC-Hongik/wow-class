import { z } from "zod";

// 요일 타입 (DayOfWeekType)
export const DayOfWeekSchema = z.array(z.string());

// 시간 타입 (TimeType)
export const TimeTypeSchema = z.object({
  hour: z.number().min(0).max(23),
  minute: z.number().min(0).max(59),
  second: z.number().min(0).max(59),
  nano: z.number().min(0),
});

// 기간 타입 (Period)
export const PeriodSchema = z.object({
  startDate: z.string().min(1, "시작 날짜를 입력하세요"),
  endDate: z.string().min(1, "종료 날짜를 입력하세요"),
});

// 스터디 세션 타입 (StudySession)
export const StudySessionSchema = z.object({
  studySessionId: z.number(),
  title: z.string().min(1, "세션 제목을 입력하세요"),
  description: z.string().min(1, "세션 설명을 입력하세요"),
  lessonPeriod: PeriodSchema,
  assignmentDescriptionLink: z.string().url("유효한 URL을 입력하세요"),
  assignmentPeriod: PeriodSchema,
});

// 최종 StudyDetailInfo 스키마
export const studyDetailInfoSchema = z.object({
  title: z.string().min(1, "제목을 입력하세요"),
  description: z.string().min(1, "설명을 입력하세요"),
  descriptionNotionLink: z.string().url("유효한 URL을 입력하세요"),
  dayOfWeek: DayOfWeekSchema,
  startTime: TimeTypeSchema.optional(),
  endTime: TimeTypeSchema.optional(),
  studySessions: z.array(StudySessionSchema),
});
