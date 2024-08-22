import { Flex } from "@styled-system/jsx";
import { Space, Text } from "@wow-class/ui";
import { history } from "constants/assignmentMockData";
import Image from "next/image";

import { AssignmentHistoryItem } from "./AssignmentHistoryItem";

export const AssignmentHistory = async () => {
  //TODO: 수강 중인 스터디 api 호출
  //const studyId = await myStudyApi.getMyOngoingStudyInfo();
  // const studyHistory = await studyHistoryApi.getStudyHistory(studyId);
  const studyHistories = history;

  if (studyHistories.length === 0) {
    return (
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
    );
  }

  return (
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
  );
};
