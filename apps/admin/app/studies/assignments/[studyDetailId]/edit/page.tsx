"use client";

import { studyApi } from "apis/study/studyApi";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import type {
  AssignmentApiRequestDto,
  AssignmentApiResponseDto,
} from "types/dtos/assignmentList";

import AssignmentForm from "../_components/AssignmentForm";
import AssignmentHeader from "../_components/AssignmentHeader";

const Assignments = ({
  params: { studyDetailId },
}: {
  params: { study: string; studyDetailId: string };
}) => {
  const methods = useForm<AssignmentApiRequestDto>({
    defaultValues: {
      title: "",
      deadline: "",
      descriptionLink: "",
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

  return (
    <FormProvider {...methods}>
      <AssignmentHeader
        assignment={assignment}
        disabled={!methods.formState.isValid}
      />
      <AssignmentForm assignment={assignment} />
    </FormProvider>
  );
};

export default Assignments;
