"use client";
import { Flex, Grid } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";

import StudyApplyDatePick from "./StudyApplyDatePick";
import StudyCourseSelect from "./StudyCourseSelect";
import StudyDayOfWeekSelect from "./StudyDayOfWeekSelect";
import StudyFormatSelect from "./StudyFormatSelect";
import StudySemesterSelect from "./StudySemesterSelect";
import StudyStartDatePick from "./StudyStartDatePick";
import StudyTime from "./StudyTime";

const StudyBasicInformation = () => {
  return (
    <Flex direction="column" gap="xl" maxWidth="5/6">
      <Text typo="h2">스터디 기본 설정</Text>
      <Grid
        gap="2.25rem"
        gridAutoRows="minmax(auto, auto)"
        gridTemplateColumns="1fr 1fr"
      >
        <StudySemesterSelect />
        <StudyFormatSelect />
        <StudyCourseSelect />
        <StudyStartDatePick />
        <StudyDayOfWeekSelect />
        <StudyTime />
        <StudyApplyDatePick />
      </Grid>
    </Flex>
  );
};

export default StudyBasicInformation;
