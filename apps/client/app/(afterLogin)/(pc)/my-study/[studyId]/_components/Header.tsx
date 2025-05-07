"use client";

import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Space, Text } from "@wow-class/ui";
import { padWithZero } from "@wow-class/utils";
import { dayToKorean } from "constants/dayToKorean";
import { studyKoreanMap } from "constants/studyKoreanMap";
import useFetchBasicStudyInfoData from "hooks/useFetchBasicStudyInfoData";
import { useAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";
import { type ComponentProps, useEffect } from "react";
import type { StudyType } from "types/entities/common/study";
import { space } from "wowds-tokens";
import Tag from "wowds-ui/Tag";
import TextButton from "wowds-ui/TextButton";

import { studyTypeAtom } from "../../_contexts/atoms";

interface HeaderProps {
  studyId: number;
}
const Header = ({ studyId }: HeaderProps) => {
  const { basicStudyInfo } = useFetchBasicStudyInfoData(studyId);
  const [_, setStudyType] = useAtom(studyTypeAtom);

  useEffect(() => {
    setStudyType(basicStudyInfo?.type ?? "ONLINE");
  });

  if (!basicStudyInfo) {
    return null;
  }

  const {
    title,
    semester: { academicYear, semesterType },
    mentorName,
    type: studyType,
    dayOfWeek,
    startTime,
    endTime,
    totalRound,
    description,
    descriptionNotionLink,
  } = basicStudyInfo;

  const studySemester = `${academicYear}-${semesterType === "FIRST" ? 1 : 2}`;
  const studySchedule =
    startTime && endTime
      ? `${dayToKorean[dayOfWeek]} ${startTime.hour}:${padWithZero(startTime.minute)}-${endTime.hour}:${padWithZero(endTime.minute)}`
      : "";

  return (
    <header className={headerStyle}>
      <section aria-label="my-study-header">
        <Flex alignItems="center" gap={8}>
          <Text as="h1" typo="h1">
            {title}
          </Text>
          <Tag color={curriculumColors[studyType] ?? "green"} variant="solid1">
            {studyKoreanMap[studyType]}
          </Tag>
        </Flex>
        <Flex alignItems="center" gap="sm">
          <Text as="h5" color="sub">
            {description}
          </Text>
          <Link
            className={introduceLinkStyle}
            href={descriptionNotionLink || ""}
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
              aria-label="스터디 소개 링크 열기"
              size="lg"
              style={textButtonStyle}
              text="소개 링크 바로가기"
            />
          </Link>
        </Flex>
      </section>
      <section id="study-basic-info">
        <Space height={9} />
        <Flex gap="xs">
          <Text as="h5">기본 정보</Text>
          <Text as="h5" color="sub">
            {studySemester}
          </Text>
          <ItemSeparator />
          <Text as="h5" color="sub">
            {mentorName} 멘토
          </Text>
        </Flex>
      </section>
      <section aria-labelledby="study-schedule">
        <Space height={10} />
        <Flex gap="4">
          <Text as="h5">일정</Text>
          <Flex gap="xs">
            <Text as="h5" color="sub">
              {studySchedule}
            </Text>
            <ItemSeparator />
            <Text as="h5" color="sub">
              {totalRound}회차
            </Text>
          </Flex>
        </Flex>
      </section>
    </header>
  );
};

export default Header;

const ItemSeparator = () => (
  <Image alt="item separator" height={4} src="/images/dot.svg" width={4} />
);
const curriculumColors: Record<StudyType, ComponentProps<typeof Tag>["color"]> =
  {
    ASSIGNMENT: "green",
    ONLINE: "blue",
    OFFLINE: "yellow",
  };

const headerStyle = css({
  minHeight: "65px",
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
