import { Flex } from "@styled-system/jsx";
import { Space, Text } from "@wow-class/ui";
import { myStudyApi } from "apis/myStudyApi";
import Image from "next/image";

import DailyTaskItem from "./DailyTaskItem";

const DailyTasks = async () => {
  const myOngoingStudyData = await myStudyApi.getMyOngoingStudyInfo();

  // if (!myOngoingStudyData?.studyId) {
  //   return null;
  // }

  // const dailyTaskData = await myStudyApi.getDailyTaskList(
  //   myOngoingStudyData?.studyId
  // );

  return (
    <>
      <Text typo="h2">오늘의 할 일</Text>
      <Space height={14} />
      <Flex direction="column" gap="12px">
        {/* {dailyTaskData?.length ? (
          dailyTaskData.map((dailyTask, index) => (
            <DailyTaskItem
              dailyTask={dailyTask}
              index={index}
              key={dailyTask.studyDetailId}
            />
          ))
        ) : (
          <Flex alignItems="center" direction="column" gap={24} paddingY={38}>
            <Image
              alt="empty-study"
              height={140}
              src="/images/empty.svg"
              width={186}
            />
            <Text as="h2" color="sub" typo="h2">
              아직 할 일이 없어요.
            </Text>
          </Flex>
        )} */}
      </Flex>
    </>
  );
};

export default DailyTasks;
