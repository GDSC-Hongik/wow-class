import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";

import CircleGraph from "./graph/CircleGraph";

const StudyCompleteRate = ({
  studyCompleteRate,
}: {
  studyCompleteRate?: number;
}) => {
  return (
    <Flex direction="column" gap="md">
      <Flex direction="column" gap="xs">
        <Text typo="h2">출석률</Text>
        <Text color="sub" typo="label2">
          출석율과 과제제출률의 합이 70% 이상인 학생 비율
        </Text>
      </Flex>
      <CircleGraph percentage={studyCompleteRate} />
    </Flex>
  );
};

export default StudyCompleteRate;
