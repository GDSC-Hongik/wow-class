"use client";
import { Flex } from "@styled-system/jsx";
import { Space } from "@wow-class/ui";
import { routerPath } from "constants/router/routerPath";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import type { CreateStudyApiRequestDto } from "types/dtos/createStudy";
import Button from "wowds-ui/Button";

import {
  StudyBasicInfo,
  StudyMentorSelect,
  StudyNameTextField,
} from "./_components";

const CreateStudyPage = () => {
  const methods = useForm<CreateStudyApiRequestDto>({ mode: "onChange" });

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
          <StudyBasicInfo />
          <Button
            asProp={Link}
            disabled={!methods.formState.isValid}
            role="button"
            size="sm"
            style={{ position: "absolute", top: "0px", right: "0px" }}
            type="submit"
            href={{
              pathname: `${routerPath["create-study-check"].href}`,
              query: { data: JSON.stringify(methods.getValues()) },
            }}
          >
            개설하기
          </Button>
        </form>
      </Flex>
    </FormProvider>
  );
};

export default CreateStudyPage;
