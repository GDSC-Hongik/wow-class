"use client";

import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Space, Text } from "@wow-class/ui";
import { padWithZero, parseISODate } from "@wow-class/utils";
import { studyApi } from "apis/study/studyApi";
import ItemSeparator from "components/ItemSeparator";
import { dayToKorean } from "constants/dayToKorean";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { StudyBasicInfoApiResponseDto } from "types/dtos/studyBasicInfo";
import { DownArrow } from "wowds-icons";
import TextButton from "wowds-ui/TextButton";

const Header = ({
  studyId,
  isCompact = false,
}: {
  studyId: string;
  isCompact?: boolean;
}) => {
  const [showIntro, setShowIntro] = useState(false);
  const [studyInfo, setStudyInfo] = useState<
    StudyBasicInfoApiResponseDto | undefined
  >(undefined);

  useEffect(() => {
    const fetchData = async () => {
      if (studyId) {
        const data = await studyApi.getStudyBasicInfo(parseInt(studyId, 10));
        if (data) setStudyInfo(data);
      }
    };

    fetchData();
  }, [studyId]);

  const handleClickShowIntro = () => {
    setShowIntro((prev) => !prev);
  };

  const introSectionButtonAriaLabel = showIntro
    ? "Collapse introduction"
    : "Expand introduction";
  const introSectionIconAriaLabel = showIntro
    ? "Collapse introduction icon"
    : "Expand introduction icon";

  if (!studyInfo) return null;
  const {
    title,
    academicYear,
    semester,
    mentorName,
    studyType,
    dayOfWeek,
    startTime,
    endTime,
    totalWeek,
    period: { startDate, endDate },
    introduction,
    notionLink,
  } = studyInfo;

  const studySchedule = () => {
    if (startTime && endDate) {
      const { hour: startHour, minute: startMinute } = startTime;
      const { hour: endHour, minute: endMinute } = endTime;
      return `${dayToKorean[dayOfWeek]} ${startHour}:${padWithZero(startMinute)}-
        ${endHour}:${padWithZero(endMinute)}`;
    } else {
      null;
    }
  };

  const { month: startMonth, day: startDay } = parseISODate(startDate);
  const { month: endMonth, day: endDay } = parseISODate(endDate);
  const studySemester = `${academicYear}-${semester === "FIRST" ? 1 : 2}`;

  const studyPeriod = `${padWithZero(startMonth)}.${padWithZero(startDay)}-
  ${padWithZero(endMonth)}.${padWithZero(endDay)}`;

  return (
    <header>
      <section aria-label="my-study-header">
        <Flex alignItems="center" gap={8}>
          <Text as="h1" typo="h1">
            {title}
          </Text>
          <button
            aria-controls="intro-section"
            aria-expanded={showIntro}
            aria-label={introSectionButtonAriaLabel}
            tabIndex={0}
            onClick={handleClickShowIntro}
          >
            {!isCompact && (
              <DownArrow
                aria-label={introSectionIconAriaLabel}
                className={downArrowIconStyle}
                height={20}
                stroke="textBlack"
                style={{ rotate: showIntro ? "0deg" : "180deg" }}
                width={20}
              />
            )}
          </button>
        </Flex>
      </section>
      <section>
        <Space height={8} />
        <Flex gap="xs">
          <Text as="h5" color="sub">
            {studySemester}
          </Text>
          <ItemSeparator height={4} width={4} />
          <Text as="h5" color="sub">
            {mentorName} 멘토
          </Text>
          <ItemSeparator height={4} width={4} />
          <Text as="h5" color="sub">
            {studyType}
          </Text>
        </Flex>
      </section>
      {showIntro && (
        <section id="intro-section">
          <section aria-labelledby="study-schedule-heading">
            <Space height={24} />
            <Flex direction="column" gap="4">
              <Text as="h3" typo="h3">
                스터디 일정
              </Text>
              <Flex gap="xs">
                {startTime && (
                  <Flex gap="xs">
                    <Text as="h5" color="sub">
                      {studySchedule()}
                    </Text>
                    <ItemSeparator height={4} width={4} />
                  </Flex>
                )}
                <Text as="h5" color="sub">
                  {totalWeek}주 코스
                </Text>
                <ItemSeparator height={4} width={4} />
                <Text as="h5" color="sub">
                  {studyPeriod}
                </Text>
              </Flex>
            </Flex>
          </section>
          <section aria-labelledby="study-intro-heading">
            <Space height={28} />
            <Flex direction="column" gap="xs">
              <Text as="h3" typo="h3">
                스터디 소개
              </Text>
              <Flex alignItems="center" gap="sm">
                <Link href={notionLink || ""} role="button" tabIndex={0}>
                  <TextButton style={{ padding: "0px" }} text="스터디 소개" />
                </Link>
                <Text color="sub" typo="body1">
                  {introduction}
                </Text>
              </Flex>
            </Flex>
          </section>
        </section>
      )}
    </header>
  );
};

export default Header;

const downArrowIconStyle = css({
  cursor: "pointer",
});
