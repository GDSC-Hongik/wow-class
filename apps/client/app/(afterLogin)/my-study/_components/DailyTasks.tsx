import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { myStudyApi } from "apis/myStudyApi";
import Image from "next/image";

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
        {dailyTaskData?.length ? (
          <DailyTaskCarousel>
            {dailyTaskData?.map((dailyTask, index) => (
              <DailyTaskItem
                dailyTask={dailyTask}
                index={index}
                key={dailyTask.studyDetailId}
              />
            ))}
          </DailyTaskCarousel>
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
        )}
      </Flex>
    </section>
  );
};

export default DailyTasks;
