"use client";

import { css } from "@styled-system/css";
import { Flex, styled } from "@styled-system/jsx";
import { Table, Text } from "@wow-class/ui";
import { parseISODate, splitTime } from "@wow-class/utils";
import { studyApplyApi } from "apis/studyApplyApi";
import { dayToKorean } from "constants/dayToKorean";
import Link from "next/link";
import type { ComponentProps } from "react";
import type { StudyListApiResponseDto } from "types/dtos/applyStudy";
import Button from "wowds-ui/Button";
import Tag from "wowds-ui/Tag";

interface StudyItemProps {
  study: StudyListApiResponseDto;
}

const StudyItem = ({ study }: StudyItemProps) => {
  const {
    studyId,
    title,
    introduction,
    notionLink,
    mentorName,
    studyType,
    dayOfWeek,
    startTime: startTimeString,
    openingDate: openingDateString,
    totalWeek,
  } = study;

  const handleClickApplyButton = async () => {
    const result = await studyApplyApi.applyStudy(studyId);

    if (!result.success) {
      console.error("스터디 신청 실패");
    } else {
      console.log("스터디 신청 성공");
    }
  };

  const handleClickCancelButton = async () => {
    const result = await studyApplyApi.cancelStudyApplication(studyId);

    if (!result.success) {
      console.error("스터디 신청 실패");
    } else {
      console.log("스터디 취소 성공");
    }
  };

  const startTime = splitTime(startTimeString);
  const openingDate = parseISODate(openingDateString);
  const studyTime = `${dayToKorean[dayOfWeek.toUpperCase()]} ${startTime.hours}:${startTime.minutes} - ${
    Number(startTime.hours) + 1
  }:${startTime.minutes}`;

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
          <Link href={notionLink} target="_blank">
            {notionLink}
          </Link>
        </Text>
      </Flex>
      <Text className={textCellStyle}>{mentorName}</Text>
      <Text className={textCellStyle}>{studyTime}</Text>
      <Text className={textCellStyle}>{totalWeek}주 코스</Text>
      <Text className={textCellStyle}>
        {`${openingDate.month}.${openingDate.day} 개강`}
      </Text>
      <styled.div paddingX="24px">
        <Button size="sm" variant="solid" onClick={handleClickApplyButton}>
          수강 신청
        </Button>
        <Button size="sm" variant="solid" onClick={handleClickCancelButton}>
          신청 취소
        </Button>
      </styled.div>
    </Table>
  );
};

const textCellStyle = css({
  paddingX: "28px",
});

const sessionColors: Record<string, ComponentProps<typeof Tag>["color"]> = {
  "과제 스터디": "green",
  "온라인 세션": "blue",
  "오프라인 세션": "yellow",
};

export default StudyItem;
