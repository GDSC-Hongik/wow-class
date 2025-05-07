"use client";

import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Space, Text } from "@wow-class/ui";
import { parseISODate } from "@wow-class/utils";
import useAttendanceCheckSearchParams from "hooks/useAttendanceCheckSearchParams";
import Link from "next/link";
import Button from "wowds-ui/Button";
import Divider from "wowds-ui/Divider";

export const AttendanceCheckBox = () => {
  const { studyDetailId, studyName, deadLine, currentWeek, mentorName } =
    useAttendanceCheckSearchParams();

  const { year, month, day, hours, minutes } = parseISODate(deadLine);

  const {
    year: currentYear,
    month: currentMonth,
    day: currentDay,
  } = parseISODate(new Date().toISOString());

  return (
    <div className={boxContainerStyle}>
      <Text color="sub" typo="body3">
        현재 진행 강의
      </Text>
      <Space height={8} />
      <Flex alignItems="center" direction="column">
        <Text typo="h1">{studyName}</Text>
        <Space height={8} />
        <Text typo="body1">{mentorName}</Text>
      </Flex>
      <Space height={20} />
      <Divider />
      <Space height={20} />
      <Flex justifyContent="space-between" textStyle="body1">
        <Text>출석 체크</Text>
        <Text typo="body2">{currentWeek}주차</Text>
      </Flex>
      <Flex justifyContent="space-between" textStyle="body1">
        <Text>수강 날짜</Text>
        <Text typo="body2">
          {currentYear}년 {currentMonth}월 {currentDay}일
        </Text>
      </Flex>
      <Flex justifyContent="space-between" textStyle="body1">
        <Text>출석 인정 시간</Text>
        <Text color="error" typo="body2">
          {year}년 {month}월 {day}일 00:00 - {hours}:{minutes}
        </Text>
      </Flex>
      <Space height={40} />
      <Button
        aria-label={`${studyName} ${currentWeek}주차 출석 체크하기`}
        asProp={Link}
        href={`/mobile/attendance-check-input?study-detail-id=${studyDetailId}&week=${currentWeek}&study-name=${studyName}`}
      >
        출석 체크하기
      </Button>
    </div>
  );
};

const boxContainerStyle = css({
  backgroundColor: "backgroundNormal",
  paddingX: "1.5rem",
  paddingY: "1.75rem",
  borderRadius: "0.5rem",
  border: "1px solid",
  borderColor: "outline",
});
