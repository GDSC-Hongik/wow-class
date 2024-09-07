import { css, cva } from "@styled-system/css";
import { Flex, styled } from "@styled-system/jsx";
import { Table, Text } from "@wow-class/ui";
import { padWithZero, parseISODate } from "@wow-class/utils";
import { dayToKorean } from "constants/dayToKorean";
import { routePath } from "constants/routePath";
import Link from "next/link";
import type { ComponentProps } from "react";
import type { StudyList } from "types/dtos/applyStudy";
import type { StudyType } from "types/entities/common/study";
import type { Time } from "types/entities/common/time";
import Button from "wowds-ui/Button";
import Tag from "wowds-ui/Tag";
interface StudyItemProps {
  study: StudyList;
  appliedStudyId: null | number;
}

const StudyItem = ({ study, appliedStudyId }: StudyItemProps) => {
  const {
    studyId,
    title,
    introduction,
    notionLink,
    mentorName,
    studyType,
    dayOfWeek,
    startTime,
    endTime,
    openingDate: openingDateString,
    applicationEndDate: endDateString,
    totalWeek,
  } = study;

  const openingDate = parseISODate(openingDateString);
  const endDate = parseISODate(endDateString);

  const formatTime = (startTime: Time, endTime: Time) => {
    const { hour: startTimeHour, minute: startTimeMinute } = startTime;
    const { hour: endTimeHour, minute: endTimeMinute } = endTime;

    return `${dayToKorean[dayOfWeek.toUpperCase()]} ${padWithZero(startTimeHour)}:${padWithZero(startTimeMinute)} - ${padWithZero(
      endTimeHour
    )}:${padWithZero(endTimeMinute)}`;
  };
  const studyTime = startTime && endTime ? formatTime(startTime, endTime) : "-";

  const isApplicable = appliedStudyId === null;
  const isCancelable = appliedStudyId === studyId;
  const isNotApplicable = !isApplicable && !isCancelable;
  return (
    <Table className={tableStyle}>
      <Flex direction="column" gap="xxs" justifyContent="center" width={334}>
        <Flex className={contentStyle} gap="xs">
          <Text className={titleStyle} typo="h3">
            {title}
          </Text>
          <Tag
            color={curriculumColors[studyType] ?? "green"}
            style={tagButtonStyle}
            variant="solid1"
          >
            {studyType}
          </Tag>
        </Flex>
        {introduction && (
          <Link href={notionLink ?? ""} target="_blank">
            <Text
              className={introductionLinkTextStyle}
              color="sub"
              typo="body2"
            >
              {introduction}
            </Text>
          </Link>
        )}
      </Flex>
      <Text className={textCellStyle({ type: "mentor" })}>
        {mentorName} 멘토
      </Text>
      <Text className={timeCellStyle}>{studyTime}</Text>
      <Text className={textCellStyle({ type: "week" })}>
        {totalWeek}주 코스
      </Text>
      <Flex direction="column" textAlign="center">
        <Text
          className={dateStyle}
        >{`${openingDate.month}.${openingDate.day} 개강`}</Text>
        {isCancelable && (
          <Text className={dateStyle} color="error" typo="body3">
            {`${endDate.month}.${endDate.day} 까지 취소 가능`}
          </Text>
        )}
      </Flex>
      <styled.div paddingX="24px">
        {isApplicable && (
          <Link href={`${routePath["study-application-modal"]}/${studyId}`}>
            <Button size="sm" style={tagButtonStyle} variant="solid">
              수강 신청
            </Button>
          </Link>
        )}
        {isCancelable && (
          <Link href={`${routePath["study-cancellation-modal"]}/${studyId}`}>
            <Button size="sm" style={tagButtonStyle} variant="solid">
              신청 취소
            </Button>
          </Link>
        )}
        {isNotApplicable && (
          <Button disabled size="sm" style={tagButtonStyle} variant="solid">
            신청 불가
          </Button>
        )}
      </styled.div>
    </Table>
  );
};

const tableStyle = css({
  justifyContent: "unset",
});

const titleStyle = css({
  textOverflow: "ellipsis",
  overflow: "hidden",
  maxWidth: "210px",
  whiteSpace: "nowrap",
});

const dateStyle = css({
  width: "118px",
  "@media (max-width: 1439px)": {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    width: "38px",
  },
});

const timeCellStyle = css({
  width: "162px",
  display: "flex",
  paddingLeft: "28px",
  textAlign: "center",
  "@media (max-width: 1439px)": {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    padding: "0",
  },
  "@media (max-width: 1199px)": {
    display: "none",
  },
});
const textCellStyle = cva({
  base: {
    "@media (max-width: 1439px)": {
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      padding: "0",
      width: "38px",
    },
  },
  variants: {
    type: {
      mentor: {
        "@media (min-width: 1440px)": {
          width: "103px",
          display: "flex",
          justifyContent: "center",
        },
        "@media (max-width: 1199px)": {
          width: "fit-content",
          paddingInline: "7.25px",
        },
        "@media (max-width: 959px)": {
          display: "none",
        },
      },
      week: {
        "@media (min-width: 1440px)": {
          width: "118px",
          display: "flex",
          justifyContent: "center",
        },
        "@media (max-width: 1199px)": {
          display: "none",
        },
      },
    },
  },
});

const contentStyle = css({
  minWidth: "313px",
  width: "313px",
});

const introductionLinkTextStyle = css({
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  textDecoration: "underline",
});

const tagButtonStyle = {
  whiteSpace: "nowrap",
};

const curriculumColors: Record<StudyType, ComponentProps<typeof Tag>["color"]> =
  {
    "과제 스터디": "green",
    "온라인 스터디": "blue",
    "오프라인 스터디": "yellow",
  };

export default StudyItem;
