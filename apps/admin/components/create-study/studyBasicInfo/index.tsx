import { Flex, Grid } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { type Control } from "react-hook-form";
import { type CreateStudyFormType } from "types/entities/study";

import StudyCourseSelect from "./StudyCourseSelect";
import StudyFormatSelect from "./StudyFormatSelect";
import StudySemesterSelect from "./StudySemesterSelect";

const StudyBasicInfo = ({
  control,
}: {
  control: Control<CreateStudyFormType>;
}) => {
  return (
    <Flex direction="column" gap="xl" maxWidth="5/6">
      <Text typo="h2">스터디 기본 설정</Text>
      <Grid gap="2.25rem" gridTemplateColumns="2" gridTemplateRows="4">
        <StudySemesterSelect control={control} />
        <StudyFormatSelect control={control} />
        <StudyCourseSelect control={control} />
      </Grid>
    </Flex>
  );
};

export default StudyBasicInfo;
