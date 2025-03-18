"use client";

import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Space, Text } from "@wow-class/ui";
import { padWithZero, parseISODate } from "@wow-class/utils";
import { assignmentSubmissionMap } from "constants/assignmentSubmissionMap";
import { useAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";
import type { SessionInfo } from "types/dtos/studyDetail";
import { space } from "wowds-tokens";
import Box from "wowds-ui/Box";
import Button from "wowds-ui/Button";
import Tag from "wowds-ui/Tag";
import TextButton from "wowds-ui/TextButton";

import { AttendanceTagComponent } from "../../../_components/common/AttendanceTagComponent";
import { studyTypeAtom } from "../../_contexts/atoms";

export const CurriculumItem = ({
  session,
  attendanceStatus,
  assignmentHistory,
  assignmentHistoryStatus,
}: SessionInfo) => {
  const [studyType] = useAtom(studyTypeAtom);
  const {
    position,
    lessonTitle,
    description,
    lessonPeriod,
    assignmentTitle,
    assignmentPeriod,
    assignmentDescriptionLink,
  } = session;

  const {
    month: lessonPeriodMonth,
    day: lessonPeriodDay,
    hours: lessonPeriodStartHours,
    minutes: lessonPeriodStartMinutes,
  } = parseISODate(lessonPeriod?.startDate as string);

  const { hours: lessonPeriodEndHours, minutes: lessonPeriodEndMinutes } =
    parseISODate(lessonPeriod?.endDate as string);

  const { month: assignmentStartPeriodMonth, day: assignmentStartPeriodDay } =
    parseISODate(assignmentPeriod?.startDate as string);
  const {
    month: assignmentEndPeriodMonth,
    day: assignmentEndPeriodDay,
    hours: assignmentEndPeriodHours,
    minutes: assignmentEndPeriodMinutes,
  } = parseISODate(assignmentPeriod?.endDate as string);

  const lessonStartTime = `${padWithZero(lessonPeriodStartHours)}:${padWithZero(lessonPeriodStartMinutes)}`;
  const lessonEndTime = `${padWithZero(lessonPeriodEndHours)}:${padWithZero(lessonPeriodEndMinutes)}`;
  const assignmentDate = `과제 기간 : ${assignmentStartPeriodMonth}월
  ${assignmentStartPeriodDay}일 - ${assignmentEndPeriodMonth}월
 ${assignmentEndPeriodDay}일 ${padWithZero(assignmentEndPeriodHours)}:
  ${padWithZero(assignmentEndPeriodMinutes)}`;

  const isAssignmentBeforeSubmission =
    assignmentHistoryStatus === "BEFORE_SUBMISSION";
  const assignmentButtonHref = assignmentHistory
    ? assignmentHistory.submissionLink
    : "";

  const isAssignmentStudyType = studyType === "ASSIGNMENT";
  return (
    <Flex gap="50px">
      <section>
        <Text>{position}회차</Text>
        <Text color="sub" style={textStyle} typo="body2">
          {lessonPeriodMonth}월 {lessonPeriodDay}일 <br />
          {lessonStartTime}-{lessonEndTime}
        </Text>
      </section>
      <Flex flexDirection="column" width="100%">
        {!isAssignmentStudyType && (
          <>
            <Flex alignItems="center" justifyContent="space-between">
              <section>
                <Text typo="h3">{lessonTitle}</Text>
                <Text color="sub" typo="body2">
                  {description}
                </Text>
              </section>
              <AttendanceTagComponent attendanceStatus={attendanceStatus} />
            </Flex>
            <Space height={18} />
          </>
        )}
        <Box
          style={{ minWidth: "100%" }}
          text={
            <>
              <Flex alignItems="center" justifyContent="space-between">
                <section>
                  <Flex alignItems="center" gap="xs">
                    <Text>{assignmentTitle}</Text>
                    <Link
                      className={introduceLinkStyle}
                      href={assignmentDescriptionLink || ""}
                      role="button"
                      tabIndex={0}
                      target="_blank"
                    >
                      <Image
                        alt="link-icon"
                        height={24}
                        src="/images/link.svg"
                        width={24}
                      />
                      <TextButton
                        size="lg"
                        style={textButtonStyle}
                        text="소개 링크 바로가기"
                      />
                    </Link>
                  </Flex>
                  <Text color="primary" typo="body2">
                    {assignmentDate}
                  </Text>
                </section>
                <section>
                  <Flex alignItems="center" gap="xs">
                    <Button
                      aria-label="check-submitted-assignment"
                      asProp={Link}
                      disabled={isAssignmentBeforeSubmission}
                      href={assignmentButtonHref}
                      size="sm"
                      target="_blank"
                      variant="outline"
                    >
                      제출한 과제 확인
                    </Button>
                    <Tag
                      variant="solid2"
                      color={
                        assignmentSubmissionMap[assignmentHistoryStatus]
                          .tagColor
                      }
                    >
                      {assignmentSubmissionMap[assignmentHistoryStatus].tagText}
                    </Tag>
                  </Flex>
                </section>
              </Flex>
            </>
          }
        />
      </Flex>
    </Flex>
  );
};

const textStyle = {
  whiteSpace: "no-wrap",
};
const introduceLinkStyle = css({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  gap: "4px",
});

const textButtonStyle = {
  padding: `${space.sm} 0`,
};
