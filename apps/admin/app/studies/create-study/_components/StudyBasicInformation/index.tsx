"use client";
import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";

import StudyApplyDatePick from "./StudyApplyDatePick";
import StudySemesterSelect from "./StudySemesterSelect";
import StudyTotalRoundSelect from "./StudyTotalRoundSelect";
import WilMinimumLength from "./WilMinimumLength";

const StudyBasicInformation = () => {
  return (
    <Flex direction="column" gap="36px" maxWidth="5/6">
      <Text typo="h2">스터디 기본 설정</Text>
      <Flex alignItems="center" gap={36} width="100%">
        <StudySemesterSelect />
        <StudyApplyDatePick />
      </Flex>
      <Flex alignItems="center" gap="2.25rem" width="100%">
        <StudyTotalRoundSelect />
        <WilMinimumLength />
      </Flex>
    </Flex>
  );
};

export default StudyBasicInformation;
