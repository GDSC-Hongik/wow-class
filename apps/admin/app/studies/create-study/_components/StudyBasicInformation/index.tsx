"use client";
import { Flex, Grid } from "@styled-system/jsx";
import { Space, Text } from "@wow-class/ui";

import StudyApplyDatePick from "./StudyApplyDatePick";
import StudyCourseSelect from "./StudyCourseSelect";
import StudyDayOfWeekSelect from "./StudyDayOfWeekSelect";
import StudyFormatSelect from "./StudyFormatSelect";
import StudySemesterSelect from "./StudySemesterSelect";
import StudyStartDatePick from "./StudyStartDatePick";
import StudyTime from "./StudyTime";

const StudyBasicInformation = () => {
  return (
    <Flex direction="column" gap="36px" maxWidth="5/6">
      <Text typo="h2">스터디 기본 설정</Text>
      <StudySemesterSelect />
      <Flex alignItems="center" gap="2.25rem" width="100%">
        <StudyFormatSelect />
        <StudyApplyDatePick />
      </Flex>
      <Flex alignItems="center" gap="2.25rem" width="100%">
        <StudyCourseSelect />
        <StudyStartDatePick />
      </Flex>
      <Flex alignItems="center" gap="2.25rem" width="100%">
        <StudyDayOfWeekSelect />
        <StudyTime />
      </Flex>
    </Flex>
  );
};

export default StudyBasicInformation;
