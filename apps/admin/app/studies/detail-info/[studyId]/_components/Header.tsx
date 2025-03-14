"use client";

import { Flex } from "@styled-system/jsx";
import { Space, Text } from "@wow-class/ui";
import ItemSeparator from "components/ItemSeparator";
import { studyToKoreanType } from "constants/study";
import type { StudyListApiResponseDto } from "types/dtos/studyList";
interface HeaderProps {
  headerInfo?: Pick<
    StudyListApiResponseDto["study"],
    "title" | "semester" | "mentorName" | "type"
  >;
}

const Header = ({ headerInfo }: HeaderProps) => {
  if (!headerInfo) return null;
  const { title, semester, mentorName, type } = headerInfo;

  const studySemester = `${semester.academicYear}-${semester.semesterType === "FIRST" ? 1 : 2}`;

  return (
    <header>
      <section aria-label="my-study-header">
        <Flex alignItems="center" gap={8}>
          <Text as="h1" typo="h1">
            {title}
          </Text>
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
            {studyToKoreanType[type]}
          </Text>
        </Flex>
      </section>
    </header>
  );
};

export default Header;
