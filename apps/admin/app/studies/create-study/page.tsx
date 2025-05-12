"use client";
import { Flex } from "@styled-system/jsx";
import { Space } from "@wow-class/ui";
import { routerPath } from "constants/router/routerPath";
import { useRouter } from "next/navigation";
import type { MouseEvent } from "react";
import { FormProvider, useForm } from "react-hook-form";
import type { CreateStudyApiRequestDto } from "types/dtos/createStudy";
import createQueryString from "utils/createQueryString";
import Button from "wowds-ui/Button";

import {
  DiscordID,
  StudyBasicInformation,
  StudyMentorSelect,
  StudyNameTextField,
  StudyTypeInformation,
} from "./_components";

const CreateStudyPage = () => {
  const router = useRouter();
  const methods = useForm<CreateStudyApiRequestDto>();

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const formData = methods.getValues();
    const route = createQueryString(
      `${routerPath["created-study-check"].href}`,
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
        <form>
          <StudyNameTextField />
          <Space height={48} />
          <StudyMentorSelect />
          <Space height={64} />
          <StudyBasicInformation />
          <Space height={64} />
          <DiscordID />
          <Space height={64} />
          <StudyTypeInformation />
          <Button
            aria-label="스터디 개설하기"
            disabled={!methods.formState.isValid}
            role="button"
            size="sm"
            style={{ position: "absolute", top: "0px", right: "0px" }}
            type="submit"
            onClick={handleSubmit}
          >
            개설하기
          </Button>
        </form>
      </Flex>
    </FormProvider>
  );
};

export default CreateStudyPage;
