"use client";
import { Flex } from "@styled-system/jsx";
import { Space } from "@wow-class/ui";
import { createStudyApi } from "apis/form/createStudyApi";
import { routerPath } from "constants/router/routerPath";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { FormProvider, useForm } from "react-hook-form";
import type { CreateStudyApiRequestDto } from "types/dtos/createStudy";
import Button from "wowds-ui/Button";

import {
  StudyBasicInfo,
  StudyMentorSelect,
  StudyNameTextField,
} from "./_components";

const CreateStudyPage = () => {
  const router = useRouter();
  const methods = useForm<CreateStudyApiRequestDto>({ mode: "onChange" });

  const onSubmit = async (data: CreateStudyApiRequestDto) => {
    const queryParams = new URLSearchParams();

    Object.entries(data).forEach(([key, value]) => {
      if (typeof value === "object") {
        queryParams.append(key, JSON.stringify(value) || "");
      } else {
        queryParams.append(key, value || "");
      }
    });
    router.push(`${routerPath["create-study-check"].href}?${queryParams}`);
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
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <StudyNameTextField />
          <Space height={48} />
          <StudyMentorSelect />
          <Space height={64} />
          <StudyBasicInfo />
          <Button
            disabled={!methods.formState.isValid}
            role="button"
            size="sm"
            style={{ position: "absolute", top: "0px", right: "0px" }}
            type="submit"
          >
            개설하기
          </Button>
        </form>
      </Flex>
    </FormProvider>
  );
};

export default CreateStudyPage;
