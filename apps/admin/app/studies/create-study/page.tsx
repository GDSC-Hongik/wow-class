"use client";
import { Flex, styled } from "@styled-system/jsx";
import { useFormState } from "react-dom";
import { Form, FormProvider, useForm } from "react-hook-form";
import type { CreateStudyFormType } from "types/entities/study";
import RadioButton from "wowds-ui/RadioButton";

import StudyBasicInfo from "@/studies/create-study/_components/studyBasicInfo";
import StudyNameTextField from "@/studies/create-study/_components/StudyNameTextField";

import StudyMentorSelect from "./_components/StudyMentorSelect";

const CreateStudyPage = () => {
  const methods = useForm<CreateStudyFormType>({ mode: "onChange" });
  const {
    control,
    formState: { isValid },
    handleSubmit,
    register,
  } = useForm<CreateStudyFormType>({
    mode: "onChange",
  });

  const onSubmit = async (data: CreateStudyFormType) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <Flex direction="column" justifyContent="flex-start" width="100%">
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <StudyNameTextField />
          <styled.div height="48px" />
          <StudyMentorSelect />
          <styled.div height="64px" />
          <StudyBasicInfo />
          <button type="submit">제출때려</button>
        </form>
      </Flex>
    </FormProvider>
  );
};

export default CreateStudyPage;
