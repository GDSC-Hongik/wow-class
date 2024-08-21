"use client";

import { css } from "@styled-system/css";
import { Flex, styled } from "@styled-system/jsx";
import { Table, Text } from "@wow-class/ui";
import { parseISODate, splitTime } from "@wow-class/utils";
import { studyApplyApi } from "apis/studyApplyApi";
import { dayToKorean } from "constants/dayToKorean";
import { routePath } from "constants/routePath";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import type { ComponentProps } from "react";
import type { StudyList } from "types/dtos/applyStudy";
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
    openingDate: openingDateString,
    totalWeek,
  } = study;

  const canApply = appliedStudyId === null;
  const canCanceled = appliedStudyId === studyId;
  const canNotApply = !canApply && appliedStudyId !== studyId;

  const openingDate = parseISODate(openingDateString);
  const studyTime = `${dayToKorean[dayOfWeek.toUpperCase()]} ${startTimeHour}:${startTimeMinute} - ${
    Number(startTimeHour) + 1
  }:${startTimeMinute}`;

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
        {canApply ? (
          <Link
            href={`/study-apply/apply-modal?studyId=${studyId}&title=${study.title}`}
          >
            <Button size="sm" variant="solid">
              수강 신청
            </Button>
          </Link>
        ) : canCanceled ? (
          <Link
            href={`/study-apply/cancel-modal?studyId=${studyId}&title=${study.title}`}
          >
            <Button size="sm" variant="solid">
              신청 취소
            </Button>
          </Link>
        ) : (
          <Button disabled size="sm" variant="solid">
            신청 불가
          </Button>
        )}
        {/* <Button size="sm" variant="solid" onClick={handleClickCancelButton}>
          신청 취소
        </Button> */}
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
