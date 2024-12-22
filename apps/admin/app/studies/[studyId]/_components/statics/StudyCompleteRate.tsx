"use client";
import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import Tooltip from "components/Tooltip";
import { Help } from "wowds-icons";

import CircleGraph from "./graph/CircleGraph";

const StudyCompleteRate = ({
  studyCompleteCount,
  studyCompleteRate,
}: {
  studyCompleteCount?: number;
  studyCompleteRate?: number;
}) => {
  return (
    <Flex direction="column" gap="md" minWidth="300px">
      <Flex alignItems="center" gap="xs" marginLeft="8px">
        <Text typo="h3">수료율</Text>
        <Tooltip
          content={
            <Text color="white" typo="body1">
              출석율과 과제제출률의 합이
              <br />
              70% 이상인 학생 비율
            </Text>
          }
        >
          <Help fill="textBlack" height={20} stroke="textBlack" width={20} />
        </Tooltip>
      </Flex>
      <Flex alignItems="center" direction="column" gap="lg">
        <CircleGraph percentage={studyCompleteRate} />
        <Text as="span" color="sub" typo="label1">
          수료 가능한 인원{" "}
          <Text as="span" color="primary">
            {studyCompleteCount}명
          </Text>
        </Text>
      </Flex>
    </Flex>
  );
};

export default StudyCompleteRate;
