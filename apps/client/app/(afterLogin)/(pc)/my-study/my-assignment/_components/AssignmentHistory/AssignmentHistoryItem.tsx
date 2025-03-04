import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Space, Table, Text } from "@wow-class/ui";
import { padWithZero, parseISODate } from "@wow-class/utils";
import Link from "next/link";
import type { ComponentProps } from "react";
import type { Assignment } from "types/dtos/studyDetail";
import type { AssignmentHistoryDto } from "types/dtos/studyHistory";
import type {
  AssignmentStatusType,
  AssignmentSubmissionStatusType,
} from "types/entities/common/assignment";
import Button from "wowds-ui/Button";
import Tag from "wowds-ui/Tag";
import TextButton from "wowds-ui/TextButton";

interface AssignmentHistoryItemProps {
  history: AssignmentHistoryDto;
}

export const AssignmentHistoryItem = ({
  history,
}: AssignmentHistoryItemProps) => {
  const {
    week,
    deadline,
    title,
    descriptionLink,
    assignmentSubmissionStatus,
    submissionFailureType,
    submissionLink,
    status,
  } = history;

  const { year, month, day, hours, minutes } = parseISODate(deadline);

  const deadlineText = `종료: ${year}년 ${month}월 ${day}일 ${padWithZero(hours)}:${padWithZero(minutes)}`;

  const { tagText, tagColor } = getTagProps(status, assignmentSubmissionStatus);

  return (
    <Table>
      <Table.Left>
        <Text as="h3" className={weekStyle} typo="h3">
          {week}주차
        </Text>
        <Space width={50} />
        <Flex
          className={titleStyle}
          direction="column"
          gap="xxs"
          justifyContent="center"
        >
          <Text typo="h3">{title}</Text>
          <Text color="sub" typo="body2">
            {deadlineText}
          </Text>
        </Flex>
      </Table.Left>
      <Table.Right>
        <Flex className={textButtonContainerStyle}>
          {descriptionLink ? (
            <TextButton
              asProp={Link}
              href={descriptionLink}
              target="_blank"
              text="과제 명세 확인"
            />
          ) : (
            "-"
          )}
        </Flex>
        <div className={tagContainerStyle}>
          <Tag color={tagColor} variant="solid2">
            {tagText}
          </Tag>
          <Text color="red.500">
            {assignmentSubmissionStatus === "FAILURE" &&
              failMapping[submissionFailureType ?? "NONE"]}
          </Text>
        </div>
        <Flex className={buttonContainerStyle} minWidth="182px" paddingX="25px">
          {submissionLink ? (
            <Button
              asProp={Link}
              href={submissionLink}
              size="sm"
              target="_blank"
              variant="outline"
            >
              제출한 과제 확인
            </Button>
          ) : (
            "-"
          )}
        </Flex>
      </Table.Right>
    </Table>
  );
};

const getTagProps = (
  status: AssignmentStatusType,
  assignmentSubmissionStatus: AssignmentSubmissionStatusType
) => {
  if (status === "CANCELED") {
    return assignmentSubmissionMap.CANCELED;
  }

  if (
    assignmentSubmissionStatus &&
    assignmentSubmissionMap[assignmentSubmissionStatus]
  ) {
    return assignmentSubmissionMap[assignmentSubmissionStatus];
  }
  return assignmentSubmissionMap.CANCELED;
};

const weekStyle = css({
  width: "37px",
});

const titleStyle = css({
  "@media (max-width: 1200px)": {
    width: "250px",
  },
});
const buttonContainerStyle = css({
  justifyContent: "center",
  textStyle: "body1",
  minWidth: "182px",
  whiteSpace: "nowrap",
});

const textButtonContainerStyle = css({
  justifyContent: "center",
  textStyle: "body1",
  minWidth: "163px",
  "@media (max-width: 1440px) and (min-width: 1201px)": {
    minWidth: "117px",
  },
  "@media (max-width: 1200px) and (min-width: 961px)": {
    minWidth: "133px",
  },
  "@media (max-width: 960px)": {
    display: "none !important",
  },
});

const tagContainerStyle = css({
  display: "flex",
  paddingX: "22px",
  width: "129px",
  alignItems: "center",
  flexDirection: "column",
  "@media (max-width: 1199px)": {
    display: "none !important",
  },
});

const assignmentSubmissionMap: Record<
  "CANCELED" | "FAILURE" | "SUCCESS",
  { tagText: string; tagColor: ComponentProps<typeof Tag>["color"] }
> = {
  CANCELED: { tagText: "과제 휴강", tagColor: "grey" },
  FAILURE: { tagText: "제출 실패", tagColor: "red" },
  SUCCESS: { tagText: "제출 완료", tagColor: "blue" },
};
const failMapping: Record<Assignment["submissionFailureType"], string> = {
  LOCATION_UNIDENTIFIABLE: "위치확인불가",
  WORD_COUNT_INSUFFICIENT: "글자수부족",
  NOT_SUBMITTED: "미제출",
  NONE: "",
  UNKNOWN: "제출실패",
};
