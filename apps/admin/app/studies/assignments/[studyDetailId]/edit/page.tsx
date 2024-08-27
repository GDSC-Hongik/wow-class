"use client";

import { useOpenState } from "@wow-class/ui/hooks";
import { studyApi } from "apis/study/studyApi";
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

  const methods = useForm<AssignmentApiRequestDto>({
    defaultValues: {
      title: "",
      deadline: "",
      descriptionLink: "",
      onOpen: onOpen,
    },
  });

  const [assignment, setAssignment] = useState<AssignmentApiResponseDto | null>(
    null
  );

  useEffect(() => {
    const fetchAssignment = async () => {
      if (studyDetailId) {
        const data = await studyApi.getAssignment(studyDetailId);
        if (data) setAssignment(data);
      }
    };
    fetchAssignment();
  }, [studyDetailId]);

  if (!assignment) return null;

  // TODO: studyName 추가
  return (
    <>
      {open && (
        <SuccessModal
          studyDetailId={studyDetailId}
          studyName="스터디 제목"
          week={assignment.week}
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
