import { Flex } from "@styled-system/jsx";
import { Space, Text } from "@wow-class/ui";
import Image from "next/image";

import { history } from "../mockData";
import { AssignmentHistoryItem } from "./AssignmentHistoryItem";

export const AssignmentHistory = async () => {
  //const studyHistory = await studyHistoryApi.getStudyHistory(1);
  const studyHistories = history;

  return (
    <>
      {studyHistories.length ? (
        <>
          <Text as="h2" typo="h2">
            과제 히스토리
          </Text>
          <Text color="sub" typo="body1">
            지난 과제의 제출 내역을 확인해요.
          </Text>
          {studyHistories.map((history) => (
            <AssignmentHistoryItem
              history={history}
              key={history.assignmentHistoryId}
            />
          ))}
        </>
      ) : (
        <>
          <Space height={133} />
          <Flex alignItems="center" direction="column" gap="xl">
            <Image
              alt="no-history"
              height={140}
              src="/images/empty-history.png"
              width={186}
            />
            <Text>진행된 과제가 없어요</Text>
          </Flex>
          <Space height={94} />
        </>
      )}
    </>
  );
};
