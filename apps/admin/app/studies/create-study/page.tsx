"use client";
import { Flex, styled } from "@styled-system/jsx";
import { createStudyApi } from "apis/form/createStudyApi";
import { FormProvider, useForm } from "react-hook-form";
import type { CreateStudyApiRequestDto } from "types/dtos/createStudy";
import Button from "wowds-ui/Button";

import StudyBasicInfo from "@/studies/create-study/_components/studyBasicInfo";
import StudyNameTextField from "@/studies/create-study/_components/StudyNameTextField";

import StudyMentorSelect from "./_components/StudyMentorSelect";

const CreateStudyPage = () => {
  const methods = useForm<CreateStudyApiRequestDto>({ mode: "onChange" });

  const onSubmit = async (data: CreateStudyApiRequestDto) => {
    createStudyApi.postCreateStudy(data);
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
          <styled.div height="48px" />
          <StudyMentorSelect />
          <styled.div height="64px" />
          <StudyBasicInfo />

          <Button
            disabled={!methods.formState.isValid}
            role="button"
            size="sm"
            style={{ position: "absolute", top: "0px", right: "0px" }}
            type="submit"
          >
            제출하기
          </Button>
        </form>
      </Flex>
    </FormProvider>
  );
};

export default CreateStudyPage;
