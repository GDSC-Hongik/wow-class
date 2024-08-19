import { Space, Text } from "@wow-class/ui";
import Image from "next/image";

import emptyImageUrl from "../../../../../../public/images/empty-history.png";
import { history } from "../mockData";
import { HomeworkHistoryItem } from "./HomeworkHistoryItem";

export const HomeworkHistory = async () => {
  //const studyHistory = await studyHistoryApi.getStudyHistory(1);
  const studyHistories = history;

  return (
    <>
      <Text as="h2" typo="h2">
        과제 히스토리
      </Text>
      <Text color="sub" typo="body1">
        지난 과제의 제출 내역을 확인해요.
      </Text>
      <Space height={24} />
      {studyHistories ? (
        studyHistories.map((history) => (
          <HomeworkHistoryItem
            history={history}
            key={history.assignmentHistoryId}
          />
        ))
      ) : (
        <Image alt="no-history" src={emptyImageUrl} />
      )}
    </>
  );
};
