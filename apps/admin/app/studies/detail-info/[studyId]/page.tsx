"use client";
import { Flex } from "@styled-system/jsx";
import { Space, Text } from "@wow-class/ui";
import { routerPath } from "constants/router/routerPath";
import Link from "next/link";
import { Suspense } from "react";
import { FormProvider, useForm } from "react-hook-form";
import type { CreateStudyDetailInfoApiRequestDto } from "types/dtos/studyDetailInfo";
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
  const methods = useForm<CreateStudyDetailInfoApiRequestDto>();

  return (
    <FormProvider {...methods}>
      <Flex
        direction="column"
        height="100%"
        justifyContent="flex-start"
        overflow="auto"
        position="relative"
        scrollbarWidth="none"
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
            asProp={Link}
            disabled={!methods.formState.isValid}
            role="button"
            size="sm"
            style={{ position: "absolute", top: "0px", right: "0px" }}
            type="submit"
            href={{
              pathname: `${studyId}/${routerPath["detail-info-check"].href}`,
              query: {
                data: JSON.stringify(methods.getValues()),
                studyId: studyId,
              },
            }}
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
