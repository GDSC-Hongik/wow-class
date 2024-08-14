import type { AssignmentStatusType } from "../entities/assignment";

export type AssignmentApiResponseDto = {
  studyDetailId: number;
  title: string;
  deadline: string;
  descriptionLink: string;
  assignmentStatus: AssignmentStatusType;
};

export type AssignmentApiRequestDto = Pick<
  AssignmentApiResponseDto,
  "title" | "descriptionLink" | "deadline"
>;
