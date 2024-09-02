"use client";

import { useOpenState } from "@wow-class/ui/hooks";
import { studyApi } from "apis/study/studyApi";
import { assignmentStatusMap } from "constants/status/assignmentStatusMap";
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

  const { title, deadline, descriptionLink } = assignment || {};
  const methods = useForm<
    AssignmentApiRequestDto & {
      onOpen: () => void;
    }
  >({
    defaultValues: {
      title: title || undefined,
      deadLine: deadline || undefined,
      descriptionNotionLink: descriptionLink || undefined,
      onOpen: onOpen,
    },
  });

  const isDeadlineValid = methods.watch("deadLine");

  if (!assignment) return null;
  const { assignmentStatus, week, studyTitle } = assignment;

  // TODO: 휴강된 경우 진입 막기
  if (assignmentStatus === "CANCELLED") return null;

  return (
    <>
      {open && (
        <SuccessModal
          studyDetailId={studyDetailId}
          studyName={studyTitle}
          type={assignmentStatusMap[assignmentStatus]}
          week={week}
        />
      )}
      <FormProvider {...methods}>
        <AssignmentHeader
          assignment={assignment}
          disabled={!methods.formState.isValid || !isDeadlineValid}
        />
        <AssignmentForm assignment={assignment} />
      </FormProvider>
    </>
  );
};

export default Assignments;
