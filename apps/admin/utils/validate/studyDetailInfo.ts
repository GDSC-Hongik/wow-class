import { z } from "zod";

const StudyCurriculumTypeSchema = z.object({
  studyDetailId: z.number(),
  title: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  difficulty: z.enum(["HIGH", "MEDIUM", "LOW", "BASIC"]).optional().nullable(),
  status: z.enum(["OPEN", "CANCELLED", "NONE"]).optional().nullable(),
});

export const studyDetailInfoSchema = z.object({
  notionLink: z.string().min(1),
  introduction: z.string().min(1),
  studyCurriculums: z.array(StudyCurriculumTypeSchema).nullable().optional(),
});
