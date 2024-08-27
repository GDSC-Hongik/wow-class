"use client";

import { css } from "@styled-system/css";
import { Flex, styled } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import AssignmentForm from "components/assignments/AssignmentForm";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import type { AssignmentApiRequestDto } from "types/dtos/assignment";
import Button from "wowds-ui/Button";

const Assignments = ({
  params,
}: {
  params: { study: string; week: string };
}) => {
  const methods = useForm<AssignmentApiRequestDto>({
    defaultValues: {
      title: "",
      deadline: "",
      descriptionLink: "",
    },
  });

  const router = useRouter();

  const handleClickSubmit = () => {
    const data = {
      title: methods.getValues("title"),
      deadline: methods.getValues("deadline"),
      descriptionLink: methods.getValues("descriptionLink"),
    };
    router.push(`/studies/${params.study}/assignments/${params.week}/success`);
    // TODO: API 연결
  };

  return (
    <>
      <styled.header className={headerStyle}>
        <Flex direction="column" gap="0.75rem">
          <Text color="sub" typo="h3">
            과제 정보를 입력해주세요
          </Text>
          <Text as="h1" typo="h1">
            {params.week}주차 과제
          </Text>
        </Flex>
        <Button
          disabled={!methods.formState.isValid}
          size="sm"
          style={{ height: "fit-content" }}
          onClick={handleClickSubmit}
        >
          저장하기
        </Button>
      </styled.header>
      <FormProvider {...methods}>
        <AssignmentForm />
      </FormProvider>
    </>
  );
};

const headerStyle = css({
  width: "100%",
  display: "flex",
  alignItems: "top",
  justifyContent: "space-between",
});

export default Assignments;
