"use client";
import { Flex } from "@styled-system/jsx";
import { Space } from "@wow-class/ui";
import { createStudyApi } from "apis/study/createStudyApi";
import { routerPath } from "constants/router/routerPath";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import type { CreateStudyApiRequestDto } from "types/dtos/createStudy";
import Button from "wowds-ui/Button";

import {
  StudyBasicInformation,
  StudyMentorSelect,
  StudyNameTextField,
} from "./_components";

const CreateStudyPage = () => {
  const router = useRouter();
  const methods = useForm<CreateStudyApiRequestDto>({ mode: "onChange" });

  const onSubmit = async (data: CreateStudyApiRequestDto) => {
    const success = await createStudyApi.postCreateStudy(data);
    if (success) {
      window.alert("스터디를 생성했어요.");
      router.push(routerPath.root.href);
    } else {
      window.alert("스터디 생성에 실패했어요.");
    }
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
          <Button
            asProp={Link}
            disabled={!methods.formState.isValid}
            role="button"
            size="sm"
            style={{ position: "absolute", top: "0px", right: "0px" }}
            type="submit"
            href={{
              pathname: `${routerPath["created-study-check"].href}`,
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
