"use client";

import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { studyApi } from "apis/study/studyApi";
import { tags } from "constants/tags";
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
  const { studyDetailId, week, assignmentStatus } = assignment;
  const methods = useFormContext<
    AssignmentApiRequestDto & {
      onOpen: () => void;
    }
  >();

  const onOpen = methods.getValues("onOpen");

  const handleClickSubmit = async () => {
    if (assignmentStatus === "CANCELLED") return;

    const data = {
      title: methods.getValues("title"),
      descriptionNotionLink: methods.getValues("descriptionNotionLink"),
      deadLine: methods.getValues("deadLine"),
    };

    const { success } =
      assignmentStatus === "NONE"
        ? await studyApi.createAssignment(studyDetailId, data)
        : await studyApi.patchAssignment(studyDetailId, data);
    if (success) {
      revalidateTagByName(`${tags.assignments} ${studyDetailId.toString()}`);
      revalidateTagByName(tags.assignments);
      onOpen();
    }
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
