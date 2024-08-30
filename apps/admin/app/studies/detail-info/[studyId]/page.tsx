"use client";
import { Flex } from "@styled-system/jsx";
import { Space, Text } from "@wow-class/ui";
import { routerPath } from "constants/router/routerPath";
import { useRouter } from "next/navigation";
import type { CSSProperties, MouseEvent } from "react";
import { Suspense } from "react";
import { FormProvider, useForm } from "react-hook-form";
import type { CreateStudyDetailInfoApiRequestDto } from "types/dtos/studyDetailInfo";
import createQueryString from "utils/createQueryString";
import Button from "wowds-ui/Button";

import Header from "@/studies/[studyId]/_components/header/Header";

import StudyCurriculum from "./_components/StudyCurriculum";
import StudyDescription from "./_components/StudyDescription";

const CreateStudyDetailInfoPage = ({
  params,
}: {
  params: { studyId: string };
}) => {
  const { studyId } = params;
  const router = useRouter();
  const methods = useForm<CreateStudyDetailInfoApiRequestDto>();

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const formData = methods.getValues();
    const route = createQueryString(
      `${studyId}/${routerPath["detail-info-check"].href}?studyId=${studyId}`,
      formData
    );

    router.push(route);
  };
  return (
    <FormProvider {...methods}>
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

export default CreateStudyDetailInfoPage;

const FormStyle = {
  maxWidth: "60%",
};

const SubmitButtonStyle: CSSProperties = {
  top: "0px",
  right: "0px",
  position: "absolute",
};
