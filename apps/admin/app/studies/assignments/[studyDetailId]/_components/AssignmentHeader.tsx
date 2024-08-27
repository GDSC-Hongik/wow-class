"use client";

import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { tags } from "constants/tags";
import { useRouter } from "next/navigation";
import { useFormContext } from "react-hook-form";
import type {
  AssignmentApiRequestDto,
  AssignmentApiResponseDto,
} from "types/dtos/assignmentList";
import { revalidateTagByName } from "utils/revalidateTagByName";
import Button from "wowds-ui/Button";

interface AssignmentHeaderProps {
  assignment: AssignmentApiResponseDto;
  disabled: boolean;
}

const AssignmentHeader = ({ assignment, disabled }: AssignmentHeaderProps) => {
  const { studyDetailId, week } = assignment;
  const methods = useFormContext<AssignmentApiRequestDto>();
  const router = useRouter();

  const handleClickSubmit = async () => {
    const data = {
      title: methods.getValues("title"),
      deadline: methods.getValues("deadline"),
      descriptionLink: methods.getValues("descriptionLink"),
    };
    router.push(`/studies/assignments/${studyDetailId}/success`);
    // TODO: type에 따른 API 연결
    revalidateTagByName([tags.assignments, studyDetailId.toString()]);
  };

  return (
    <header className={headerStyle}>
      <Flex direction="column" gap="0.75rem">
        <Text color="sub" typo="h3">
          과제 정보를 입력해주세요
        </Text>
        <Text as="h1" typo="h1">
          {week}주차 과제
        </Text>
      </Flex>
      <Button
        disabled={disabled}
        size="sm"
        style={{ height: "fit-content" }}
        onClick={handleClickSubmit}
      >
        저장하기
      </Button>
    </header>
  );
};

const headerStyle = css({
  width: "100%",
  display: "flex",
  alignItems: "top",
  justifyContent: "space-between",
});

export default AssignmentHeader;
