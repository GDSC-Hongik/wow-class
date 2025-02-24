import { Flex } from "@styled-system/jsx";
import { Space, Text } from "@wow-class/ui";
import { useState } from "react";

import StudyDayOfWeekSelect from "./StudyDayOfWeekSelect";
import StudyTimeLegacy from "./StudyTimeLegacy";
import StudyTypeSelect from "./StudyTypeSelect";

const StudyTypeInformation = () => {
  const [showStudyTime, setShowStudyTime] = useState(false);

  const handleStudyTypeChange = (
    value: "OFFLINE" | "ONLINE" | "ASSIGNMENT"
  ) => {
    if (value === "ONLINE" || value === "OFFLINE") {
      setShowStudyTime(true);
    } else {
      setShowStudyTime(false);
    }
  };
  return (
    <Flex direction="column" gap="24px" maxWidth="5/6">
      <Text typo="h2">스터디 형식 설정</Text>
      <Flex alignItems="center" gap="2.25rem" width="100%">
        <StudyTypeSelect onChange={handleStudyTypeChange} />
        <StudyDayOfWeekSelect />
      </Flex>
      <Flex alignItems="center" gap="2.25rem" width="100%">
        <Space width={358} />
        {showStudyTime && <StudyTimeLegacy />}
      </Flex>
    </Flex>
  );
};

export default StudyTypeInformation;
