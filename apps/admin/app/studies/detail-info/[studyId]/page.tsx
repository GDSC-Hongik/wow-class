"use client";
import { Flex } from "@styled-system/jsx";
import { Space, Text } from "@wow-class/ui";
import { createStudyApi } from "apis/form/createStudyApi";
import { routerPath } from "constants/router/routerPath";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import { FormProvider, useForm } from "react-hook-form";
import type { CreateStudyDetailInfoApiRequestDto } from "types/dtos/studyDetailInfo";
import Button from "wowds-ui/Button";

import Header from "@/studies/[study]/_components/header/Header";

import StudyCurriculum from "./_components/StudyCurriculum";
import StudyDescription from "./_components/StudyDescription";

const CreateStudyDetailInfoPage = ({
  params,
}: {
  params: { studyId: string };
}) => {
  const router = useRouter();
  const { studyId } = params;
  const methods = useForm<CreateStudyDetailInfoApiRequestDto>();

  const onSubmit = async (data: CreateStudyDetailInfoApiRequestDto) => {
    const success = await createStudyApi.postStudyDetailInfo(
      data,
      parseInt(studyId, 10)
    );
    if (success) {
      window.alert("스터디 상세 정보를 저장했어요.");
      router.push(routerPath.root.href);
    } else {
      window.alert("스터디 상세 정보 저장에 실패했어요.");
    }
  };

  console.log(methods.watch("studySessions"));
  return (
    <FormProvider {...methods}>
      <Flex
        direction="column"
        height="100%"
        justifyContent="flex-start"
        position="relative"
        width="100%"
      >
        <Text color="sub" typo="h3">
          스터디 상세 정보를 입력해주세요
        </Text>
        <Space height={12} />
        <Suspense fallback={<>loading..</>}>
          <Header isCompact={true} studyId={studyId} />
        </Suspense>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Space height={48} />
          <StudyDescription />
          <Space height={64} />
          <StudyCurriculum studyId={studyId} />
          <Button
            disabled={!methods.formState.isValid}
            role="button"
            size="sm"
            style={{ position: "absolute", top: "0px", right: "0px" }}
            type="submit"
          >
            저장하기
          </Button>
        </form>
      </Flex>
    </FormProvider>
  );
};

export default CreateStudyDetailInfoPage;
