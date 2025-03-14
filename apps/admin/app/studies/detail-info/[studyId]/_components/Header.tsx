"use client";

import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Space, Text } from "@wow-class/ui";
import ItemSeparator from "components/ItemSeparator";

const Header = (studyInfo: any) => {
  const { title, academicYear, semester, mentorName, type } = studyInfo as any;

  const studySemester = `${academicYear}-${semester === "FIRST" ? 1 : 2}`;

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
            {type}
          </Text>
        </Flex>
      </section>
    </header>
  );
};

export default Header;

const downArrowIconStyle = css({
  cursor: "pointer",
});
