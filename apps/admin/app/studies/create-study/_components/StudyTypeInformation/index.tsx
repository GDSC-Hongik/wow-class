import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";

import StudyDayOfWeekSelect from "./StudyDayOfWeekSelect";
import StudyType from "./StudyType";

const StudyTypeInformation = () => {
  return (
    <Flex direction="column" gap="24px" maxWidth="5/6">
      <Text typo="h2">스터디 형식 설정</Text>
      <Flex alignItems="center" gap="2.25rem" width="100%">
        <StudyType />
        <StudyDayOfWeekSelect />
      </Flex>
    </Flex>
  );
};

export default StudyTypeInformation;
