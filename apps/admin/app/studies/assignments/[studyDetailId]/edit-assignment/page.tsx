"use client";

import { useOpenState } from "@wow-class/ui/hooks";
import { studyApi } from "apis/study/studyApi";
import { assignmentStatusMap } from "constants/assignmentStatusMap";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import type {
  AssignmentApiRequestDto,
  AssignmentApiResponseDto,
} from "types/dtos/assignmentList";

import AssignmentForm from "../_components/AssignmentForm";
import AssignmentHeader from "../_components/AssignmentHeader";
import SuccessModal from "../_components/SuccessModal";

const Assignments = ({
  params: { studyDetailId },
}: {
  params: { study: string; studyDetailId: string };
}) => {
  const { open, onOpen } = useOpenState();

  const [assignment, setAssignment] = useState<AssignmentApiResponseDto | null>(
    null
  );

  useEffect(() => {
    const fetchAssignment = async () => {
      if (studyDetailId) {
        const data = await studyApi.getAssignment(+studyDetailId);
        if (data) setAssignment(data);
      }
    };
    fetchAssignment();
  }, [studyDetailId]);

  const methods = useForm<
    AssignmentApiRequestDto & {
      onOpen: () => void;
    }
  >({
    defaultValues: {
      title: assignment?.title || undefined,
      deadLine: assignment?.deadline || undefined,
      descriptionNotionLink: assignment?.descriptionLink || undefined,
      onOpen: onOpen,
    },
  });

  if (!assignment) return null;
  const { assignmentStatus, week } = assignment;

  // TODO: 휴강된 경우 진입 막기
  if (assignmentStatus === "CANCELLED") return null;

  // TODO: studyName 추가
  return (
    <>
      {open && (
        <SuccessModal
          studyDetailId={studyDetailId}
          studyName="스터디 제목"
          type={assignmentStatusMap[assignmentStatus]}
          week={week}
        />
      )}
      <FormProvider {...methods}>
        <AssignmentHeader
          assignment={assignment}
          disabled={!methods.formState.isValid}
        />
        <AssignmentForm assignment={assignment} />
      </FormProvider>
    </>
  );
};

export default Assignments;
