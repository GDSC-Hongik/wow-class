"use client";

import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Space, Text } from "@wow-class/ui";
import { padWithZero, parseISODate } from "@wow-class/utils";
import { studyInfoApi } from "apis/study/studyInfoApi";
import { dayToKorean } from "constants/dayToKorean";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { StudyBasicInfoApiResponseDto } from "types/dtos/studyBasicInfo";
import { space } from "wowds-tokens";
import TextButton from "wowds-ui/TextButton";

const Header = ({ studyId }: { studyId: string }) => {
  const [showIntro, setShowIntro] = useState(false);
  const [studyInfo, setStudyInfo] = useState<
    StudyBasicInfoApiResponseDto | undefined
  >(undefined);

  useEffect(() => {
    const fetchData = async () => {
      if (studyId) {
        const data = await studyInfoApi.getStudyBasicInfo(
          parseInt(studyId, 10)
        );
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
  const introSectionImageAriaLabel = showIntro
    ? "Collapse introduction icon"
    : "Expand introduction icon";

  if (!studyInfo) return null;
  else {
    const {
      title,
      academicYear,
      semester,
      mentorName,
      studyType,
      dayOfWeek,
      startTime: { hour: startHour, minute: startMinute },
      endTime: { hour: endHour, minute: endMinute },
      totalWeek,
      period: { startDate, endDate },
      introduction,
      notionLink,
    } = studyInfo;
    const validNotionLink = notionLink || "";
    const { month: startMonth, day: startDay } = parseISODate(startDate);
    const { month: endMonth, day: endDay } = parseISODate(endDate);
    const studySemester = `${academicYear}-${semester === "FIRST" ? 1 : 2}`;
    const studySchedule = `${dayToKorean[dayOfWeek]} ${startHour}:${padWithZero(startMinute)}-
  ${endHour}:${padWithZero(endMinute)}`;
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
              <Image
                alt={introSectionImageAriaLabel}
                className={downArrowIconStyle}
                height={20}
                src="/images/arrow.svg"
                style={{ rotate: showIntro ? "0deg" : "180deg" }}
                width={20}
              />
            </button>
          </Flex>
        </section>
        <section>
          <Space height={8} />
          <Flex gap="xs">
            <Text as="h5" color="sub">
              {studySemester}
            </Text>
            <ItemSeparator />
            <Text as="h5" color="sub">
              {mentorName} 멘토
            </Text>
            <ItemSeparator />
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
                  <Text as="h5" color="sub">
                    {studySchedule}
                  </Text>
                  <ItemSeparator />
                  <Text as="h5" color="sub">
                    {totalWeek}주 코스
                  </Text>
                  <ItemSeparator />
                  <Text as="h5" color="sub">
                    {studyPeriod}
                  </Text>
                </Flex>
              </Flex>
            </section>
            <section aria-labelledby="study-intro-heading">
              <Space height={28} />
              <Flex direction="column" gap="4">
                <Text as="h3" typo="h3">
                  스터디 소개
                </Text>
                <Link
                  className={introduceLinkStyle}
                  href={notionLink || ""}
                  role="button"
                  tabIndex={0}
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
            </section>
          </section>
        )}
      </header>
    );
  }
};

export default Header;

const ItemSeparator = () => (
  <Image alt="item separator" height={4} src="/images/dot.svg" width={4} />
);

const downArrowIconStyle = css({
  cursor: "pointer",
});

const introduceLinkStyle = css({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  gap: "4px",
});

const textButtonStyle = {
  padding: `${space.sm} 0`,
};
