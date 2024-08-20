import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { dailyTaskMockData } from "constants/mockData";

import { AttendanceStatusBox, DailyTaskCarousel, HomeworkStatusBox } from ".";

const DailyTasks = () => {
  return (
    <section aria-label="daily-tasks">
      <Flex direction="column" gap="xl" position="relative">
        <Text typo="h2">오늘의 할 일</Text>
        <DailyTaskCarousel>
          {dailyTaskMockData.map((dailyTask, index) => {
            return dailyTask.type === "ATTENDANCE" ? (
              <AttendanceStatusBox
                attendanceStatus={dailyTask.attendanceStatus}
                key={index}
                period={dailyTask.period}
                week={dailyTask.week}
              />
            ) : (
              <HomeworkStatusBox
                deadline={dailyTask.deadline}
                homeworkSubmissionStatus={dailyTask.homeworkSubmissionStatus}
                key={index}
                name={dailyTask.name}
                week={dailyTask.week}
              />
            );
          })}
        </DailyTaskCarousel>
      </Flex>
    </section>
  );
};

export default DailyTasks;
