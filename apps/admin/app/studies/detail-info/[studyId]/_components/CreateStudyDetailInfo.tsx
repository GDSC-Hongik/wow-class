"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Flex } from "@styled-system/jsx";
import { Space, Text } from "@wow-class/ui";
import { useOpenState } from "@wow-class/ui/hooks";
import { studyApi } from "apis/study/studyApi";
import type { CSSProperties, MouseEvent } from "react";
import { Suspense, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import type { CreateStudyDetailInfoApiRequestDto } from "types/dtos/studyDetailInfo";
import type { StudyListApiResponseDto } from "types/dtos/studyList";
import isAdmin from "utils/isAdmin";
import { studyDetailInfoSchema } from "utils/validate/studyDetailInfo";
import Button from "wowds-ui/Button";

import usePrefillStudyDetailInfo from "../_hooks/usePrefillStudyDetailInfo";
import Header from "./Header";
import StudyCurriculum from "./StudyCurriculum";
import StudyDescription from "./StudyDescription";
import StudyDetailInfoCheckModal from "./StudyDetailInfoCheckModal";

const CreateStudyDetailInfo = ({ params }: { params: { studyId: string } }) => {
  const { studyId } = params;
  const { open, setOpen, onClose } = useOpenState();
  const prefillStudyInfo = usePrefillStudyDetailInfo(parseInt(studyId, 10));
  const methods = useForm<CreateStudyDetailInfoApiRequestDto>({
    resolver: zodResolver(studyDetailInfoSchema),
    mode: "onChange", // ✅ 실시간 검증
  });

  useEffect(() => {
    if (prefillStudyInfo) methods.reset(prefillStudyInfo);
  }, [prefillStudyInfo, methods]);

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpen(true);
  };

  console.log(methods.getValues(), "formdata");
  console.log(methods.formState.isValid, "isValid");
  return (
    <FormProvider {...methods}>
      {open && (
        <StudyDetailInfoCheckModal
          formData={methods.getValues()}
          studyId={studyId}
          studyTitle={prefillStudyInfo?.title || ""}
          onClose={onClose}
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
        <Suspense fallback={<>loading..</>}>header 자리</Suspense>
        <form style={FormStyle}>
          <Space height={48} />
          <StudyDescription />
          <Space height={64} />
          <StudyCurriculum studySessions={prefillStudyInfo?.studySessions} />
          <Button
            //disabled={!methods.formState.isValid}
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
