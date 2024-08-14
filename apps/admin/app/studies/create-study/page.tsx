"use client";
import { Flex, styled } from "@styled-system/jsx";
import StudyBasicInfo from "components/create-study/studyBasicInfo";
import StudyMentorSelect from "components/create-study/StudyMentorSelect";
import StudyNameTextField from "components/create-study/StudyNameTextField";
import { useFormState } from "react-dom";
import { Form, FormProvider, useForm } from "react-hook-form";
import type { CreateStudyFormType } from "types/entities/study";
import RadioButton from "wowds-ui/RadioButton";

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
