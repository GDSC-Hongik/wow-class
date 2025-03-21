import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import Image from "next/image";
import type { StudyDetailTaskDto } from "types/dtos/studyDetail";
import type { DailyTaskType } from "types/entities/myStudy";

import DailyTaskCarousel from "./DailyTaskCarousel";
import DailyTaskItem from "./DailyTaskItem";

const DailyTaskList = async ({
  dailyTask,
}: {
  dailyTask: StudyDetailTaskDto<DailyTaskType>[] | undefined;
}) => {
  return (
    <section aria-label="daily-tasks">
      <Flex direction="column" gap="xl" position="relative">
        <Text typo="h2">오늘의 할 일</Text>
        {dailyTask?.length ? (
          <DailyTaskCarousel>
            {dailyTask?.map((dailyTask, index) => (
              <DailyTaskItem
                dailyTask={dailyTask}
                index={index}
                key={`${dailyTask.studySession.studySessionId}-${dailyTask.studySession.position}-${dailyTask.todoType}`}
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

export default DailyTaskList;
