import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { myStudyApi } from "apis/myStudyApi";

import { DailyTaskCarousel, DailyTaskItem } from ".";

const DailyTasks = async () => {
  const myOngoingStudyData = await myStudyApi.getMyOngoingStudyInfo();

  if (!myOngoingStudyData?.studyId) {
    return null;
  }

  const dailyTaskData = await myStudyApi.getDailyTaskList(
    myOngoingStudyData?.studyId
  );

  return (
    <section aria-label="daily-tasks">
      <Flex direction="column" gap="xl" position="relative">
        <Text typo="h2">오늘의 할 일</Text>
        <DailyTaskCarousel>
          {dailyTaskData?.map((dailyTask, index) => (
            <DailyTaskItem
              dailyTask={dailyTask}
              index={index}
              key={dailyTask.studyDetailId}
            />
          ))}
        </DailyTaskCarousel>
      </Flex>
    </section>
  );
};

export default DailyTasks;
