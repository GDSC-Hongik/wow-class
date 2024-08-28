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

  const methods = useForm<
    AssignmentApiRequestDto & {
      onOpen: () => void;
    }
  >({
    defaultValues: {
      title: "",
      deadLine: "2024-09-07T00:00:00",
      descriptionNotionLink: "",
      onOpen: onOpen,
    },
  });

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

  if (!assignment) return null;

  const { assignmentStatus, week } = assignment;

  const formatStatusToString = () => {
    switch (assignmentStatus) {
      case "NONE":
        return "개설";
      case "OPEN":
        return "수정";
      default:
        return "개설";
    }
  };
  const statusStr = formatStatusToString();

  // TODO: studyName 추가
  return (
    <>
      {open && (
        <SuccessModal
          studyDetailId={studyDetailId}
          studyName="스터디 제목"
          type={statusStr}
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
