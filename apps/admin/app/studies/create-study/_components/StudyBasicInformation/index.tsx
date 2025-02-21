"use client";
import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";

import StudySemesterSelect from "./StudySemesterSelect";
import StudyTotalRoundSelect from "./StudyTotalRoundSelect";

const StudyBasicInformation = () => {
  return (
    <Flex direction="column" gap="36px" maxWidth="5/6">
      <Text typo="h2">스터디 기본 설정</Text>
      <StudySemesterSelect />
      <Flex alignItems="center" gap="2.25rem" width="100%">
        <StudyTotalRoundSelect />
      </Flex>
    </Flex>
  );
};

export default StudyBasicInformation;
