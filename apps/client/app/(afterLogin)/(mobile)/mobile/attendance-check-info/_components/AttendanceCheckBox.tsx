"use client";

import { Divider, Flex } from "@styled-system/jsx";
import { Space, Text } from "@wow-class/ui";
import { parseISODate } from "@wow-class/utils";
import useAttendanceCheckSearchParams from "hooks/useAttendanceCheckSearchParams";
import Link from "next/link";
import Button from "wowds-ui/Button";

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
    <>
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
        asProp={Link}
        href={`/mobile/attendance-check-input?study-detail-id=${studyDetailId}&week=${currentWeek}&study-name=${studyName}`}
      >
        출석 체크하기
      </Button>
    </>
  );
};
