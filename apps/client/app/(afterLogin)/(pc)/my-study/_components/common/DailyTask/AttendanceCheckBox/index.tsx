"use client";

import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Space, Text } from "@wow-class/ui";
import { padWithZero, parseISODate } from "@wow-class/utils";
import ItemSeperator from "components/ItemSeperator";
import { routePath } from "constants/routePath";
import { usePathname } from "next/navigation";
import type { CSSProperties } from "react";
import type { StudyDetailTaskDto } from "types/dtos/studyDetail";
import type { DailyTaskType } from "types/entities/myStudy";
import Box from "wowds-ui/Box";

import AttendanceTagComponent from "../../AttendanceTagComponent";
import AttendanceCheckForm from "./AttendanceCheckForm";

const AttendanceCheckBox = ({
  studySession,
  attendanceStatus,
  study: { studyName },
}: Pick<
  StudyDetailTaskDto<DailyTaskType>,
  "studySession" | "attendanceStatus" | "study"
>) => {
  const { position, studySessionId, lessonPeriod } = studySession;

  const {
    year: startYear,
    month: startMonth,
    day: startDay,
    hours: endHours,
    minutes: endMinutes,
  } = parseISODate(lessonPeriod?.endDate as string);

  const attendancePeriod = `${startYear}년 ${startMonth}월 ${startDay}일 00:00 - ${padWithZero(endHours)}:${padWithZero(endMinutes)}까지`;
  const pathname = usePathname();

  const isMyStudyPage = pathname === routePath["my-study"];
  return (
    <Box
      style={dailyTaskBoxStyle}
      text={
        <Flex
          className={dailyTaskBoxContentContainerStyle}
          direction="column"
          justifyContent="space-between"
        >
          <Flex direction="column" gap="16px">
            <Flex gap="xs">
              <Text color="primary" typo="label2">
                출석
              </Text>
              {isMyStudyPage && (
                <>
                  <ItemSeperator />
                  <Text color="sub" typo="label2">
                    {studyName}
                  </Text>
                </>
              )}
            </Flex>
            <Flex direction="column" gap="4px">
              <Flex gap="8px">
                <Text as="h2" typo="h2">
                  {position}회차 출석체크
                </Text>

                <AttendanceTagComponent attendanceStatus={attendanceStatus} />
              </Flex>
              <Text color="sub">스터디 시작 후 출결번호를 입력해주세요.</Text>
              <Text as="div" color="error" typo="body1">
                {attendancePeriod}
              </Text>
            </Flex>
          </Flex>
          <Space height={30} />
          <AttendanceCheckForm
            attendanceStatus={attendanceStatus}
            studySessionId={studySessionId}
          />
        </Flex>
      }
    />
  );
};

export default AttendanceCheckBox;

const dailyTaskBoxStyle: CSSProperties = {
  maxWidth: "376px",
  minWidth: "376px",
  paddingBottom: "20px",
  alignItems: "start",
  height: "fit-content",
};

const dailyTaskBoxContentContainerStyle = css({
  minWidth: "328px !important",
});
