import { Flex, Grid } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";

import StudyCourseSelect from "./StudyCourseSelect";
import StudyDayOfWeekSelect from "./StudyDayOfWeekSelect";
import StudyFormatSelect from "./StudyFormatSelect";
import StudySemesterSelect from "./StudySemesterSelect";
import StudyStartDatePick from "./StudyStartDatePick";
const StudyBasicInfo = () => {
  return (
    <Flex direction="column" gap="xl" maxWidth="5/6">
      <Text typo="h2">스터디 기본 설정</Text>
      <Grid gap="2.25rem" gridTemplateColumns="2" gridTemplateRows="4">
        <StudySemesterSelect />
        <StudyFormatSelect />
        <StudyCourseSelect />
        <StudyStartDatePick />
        <StudyDayOfWeekSelect />
      </Grid>
    </Flex>
  );
};

export default StudyBasicInfo;
