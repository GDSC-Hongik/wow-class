import { css } from "@styled-system/css";
import { Flex, styled } from "@styled-system/jsx";
import { Table, Text } from "@wow-class/ui";
import { padWithZero, parseISODate } from "@wow-class/utils";
import { dayToKorean } from "constants/dayToKorean";
import { routePath } from "constants/routePath";
import Link from "next/link";
import type { ComponentProps } from "react";
import type { StudyList } from "types/dtos/applyStudy";
import type { StudyType } from "types/entities/common/study";
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
    startTime: { hour: startTimeHour, minute: startTimeMinute },
    endTime: { hour: endTimeHour, minute: endTimeMinute },
    openingDate: openingDateString,
    applicationEndDate: endDateString,
    totalWeek,
  } = study;

  const openingDate = parseISODate(openingDateString);
  const endDate = parseISODate(endDateString);
  const studyTime = `${dayToKorean[dayOfWeek.toUpperCase()]} ${startTimeHour}:${padWithZero(startTimeMinute)} - ${
    endTimeHour
  }:${padWithZero(endTimeMinute)}`;

  const isApplicable = appliedStudyId === null;
  const isCancelable = appliedStudyId === studyId;
  const isNotApplicable = !isApplicable && !isCancelable;
  return (
    <Table>
      <Flex direction="column" gap="xxs" justifyContent="center">
        <Flex gap="xs">
          <Text typo="h3">{title}</Text>
          <Tag color={sessionColors[studyType] ?? "green"} variant="solid1">
            {studyType}
          </Tag>
        </Flex>
        <Text color="sub" typo="body2">
          {`${introduction} -`}
          <Link href={notionLink ?? ""} target="_blank">
            {notionLink}
          </Link>
        </Text>
      </Flex>
      <Text className={textCellStyle}>{mentorName}</Text>
      <Text className={textCellStyle}>{studyTime}</Text>
      <Text className={textCellStyle}>{totalWeek}주 코스</Text>
      <Flex direction="column" textAlign="center">
        <Text className={textCellStyle}>
          {`${openingDate.month}.${openingDate.day} 개강`}
        </Text>
        {isCancelable && (
          <Text color="error" typo="body3">
            {`${endDate.month}.${endDate.day} 까지 취소 가능`}
          </Text>
        )}
      </Flex>
      <styled.div paddingX="24px">
        {isApplicable && (
          <Link href={`${routePath["study-apply-modal"]}/${studyId}`}>
            <Button size="sm" variant="solid">
              수강 신청
            </Button>
          </Link>
        )}
        {isCancelable && (
          <Link href={`${routePath["study-cancel-modal"]}/${studyId}`}>
            <Button size="sm" variant="solid">
              신청 취소
            </Button>
          </Link>
        )}
        {isNotApplicable && (
          <Button disabled size="sm" variant="solid">
            신청 불가
          </Button>
        )}
      </styled.div>
    </Table>
  );
};

const textCellStyle = css({
  paddingX: "28px",
});

const sessionColors: Record<StudyType, ComponentProps<typeof Tag>["color"]> = {
  "과제 스터디": "green",
  "온라인 세션": "blue",
  "오프라인 세션": "yellow",
};

export default StudyItem;
