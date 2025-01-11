"use client";

import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Space, Text } from "@wow-class/ui";
import { parseISODate } from "@wow-class/utils";
import useAttendanceCheckSearchParams from "hooks/useAttendanceCheckSearchParams";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Button from "wowds-ui/Button";
import Divider from "wowds-ui/Divider";

const MobileAttendanceCheckInfoPage = () => {
  const { studyDetailId, studyName, deadLine, currentWeek, mentorName } =
    useAttendanceCheckSearchParams();
  const searchParams = useSearchParams();

  const isAttendanceCheck = searchParams.get("isAttendanceCheck") === "true";
  const { year, month, day, hours, minutes } = parseISODate(deadLine);

  const {
    year: currentYear,
    month: currentMonth,
    day: currentDay,
  } = parseISODate(new Date().toISOString());

  return (
    <>
      <Text as="h1" typo="h1">
        출석 체크
      </Text>
      <Space height={40} />
      {isAttendanceCheck ? (
        <Flex className={attendanceBoxStyle} direction="column">
          <Text color="sub" typo="body3">
            현재 진행 강의
          </Text>
          <Space height={20} />
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
        </Flex>
      ) : (
        <>
          <Image
            alt="empty-study"
            height={140}
            src="/images/empty.svg"
            width={186}
          />
          <div>현재 진행 중인 출석 체크가 없어요.</div>
        </>
      )}
    </>
  );
};

export default MobileAttendanceCheckInfoPage;

const attendanceBoxStyle = css({
  width: "100%",
  padding: "24px",
  backgroundColor: "white",
  borderRadius: "8px",
  border: "1px solid",
  borderColor: "outline",
});
