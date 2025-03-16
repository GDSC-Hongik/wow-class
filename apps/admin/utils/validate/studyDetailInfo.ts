import { z } from "zod";

export const DayOfWeekSchema = z.string().min(1, "요일 데이터가 없습니다.");

export const TimeTypeSchema = z.object({
  hour: z.number().min(0).max(23),
  minute: z.number().min(0).max(59),
  second: z.number().min(0).max(59),
  nano: z.number().min(0),
});

export const PeriodSchema = z.object({
  startDate: z.string().min(1, "시작 날짜를 입력하세요"),
  endDate: z.string().min(1, "종료 날짜를 입력하세요"),
});

export const StudySessionSchema = z.object({
  studySessionId: z.number(),
  lessonTitle: z.string().optional(),
  assignmentTitle: z.string().min(1),
  description: z.string().optional(),
  lessonPeriod: PeriodSchema.optional(),
  assignmentDescriptionLink: z.string().min(1, "과제 링크를 입력하세요"),
  assignmentPeriod: PeriodSchema,
});

export const studyDetailInfoSchema = z.object({
  title: z.string().min(1, "제목을 입력하세요"),
  description: z.string().min(1, "설명을 입력하세요"),
  descriptionNotionLink: z.string().min(1, "노션 링크를 입력하세요"),
  dayOfWeek: DayOfWeekSchema,
  startTime: TimeTypeSchema.optional(),
  endTime: TimeTypeSchema.optional(),
  studySessions: z.array(StudySessionSchema),
});
