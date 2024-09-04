"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Flex } from "@styled-system/jsx";
import { Space, Text } from "@wow-class/ui";
import { useOpenState } from "@wow-class/ui/hooks";
import type { CSSProperties, MouseEvent } from "react";
import { Suspense, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import type { CreateStudyDetailInfoApiRequestDto } from "types/dtos/studyDetailInfo";
import { studyDetailInfoSchema } from "utils/validate/studyDetailInfo";
import Button from "wowds-ui/Button";

import Header from "@/studies/[studyId]/_components/header/Header";

import usePrefillStudyDetailInfo from "../_hooks/usePrefillStudyDetailInfo";
import StudyCurriculum from "./StudyCurriculum";
import StudyDescription from "./StudyDescription";
import StudyDetailInfoCheckModal from "./StudyDetailInfoCheckModal";

const CreateStudyDetailInfo = ({ params }: { params: { studyId: string } }) => {
  const { studyId } = params;
  const { open, setOpen } = useOpenState();
  const prefillStudyInfo = usePrefillStudyDetailInfo(parseInt(studyId, 10));
  const methods = useForm<CreateStudyDetailInfoApiRequestDto>({
    resolver: zodResolver(studyDetailInfoSchema),
  });

  useEffect(() => {
    if (prefillStudyInfo) methods.reset(prefillStudyInfo);
  }, [methods, prefillStudyInfo]);

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <FormProvider {...methods}>
      {open && (
        <StudyDetailInfoCheckModal
          formData={methods.getValues()}
          studyId={studyId}
        />
      )}
      <Flex
        direction="column"
        height="100%"
        justifyContent="flex-start"
        position="relative"
        width="100%"
      >
        <Text as="div" color="sub" typo="h3">
          스터디 상세 정보를 입력해주세요
          <Space height={12} />
        </Text>
        <Suspense fallback={<>loading..</>}>
          <Header isCompact={true} studyId={studyId} />
        </Suspense>
        <form style={FormStyle}>
          <Space height={48} />
          <StudyDescription />
          <Space height={64} />
          <StudyCurriculum studyId={studyId} />
          <Button
            disabled={!methods.formState.isValid}
            role="button"
            size="sm"
            style={SubmitButtonStyle}
            type="submit"
            onClick={handleSubmit}
          >
            저장하기
          </Button>
        </form>
      </Flex>
    </FormProvider>
  );
};

export default CreateStudyDetailInfo;

const FormStyle = {
  maxWidth: "60%",
};

const SubmitButtonStyle: CSSProperties = {
  top: "0px",
  right: "0px",
  position: "absolute",
};
