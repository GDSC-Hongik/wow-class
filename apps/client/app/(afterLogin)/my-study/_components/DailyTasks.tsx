import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { dailyTaskMockData } from "constants/mockData";

import { AttendanceStatusBox, DailyTaskCarousel } from ".";
import AssignmentStatusBox from "./AssignmentStatusBox";

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
              <AssignmentStatusBox
                deadline={dailyTask.deadline}
                key={index}
                name={dailyTask.name}
                week={dailyTask.week}
                assignmentSubmissionStatus={
                  dailyTask.assignmentSubmissionStatus
                }
              />
            );
          })}
        </DailyTaskCarousel>
      </Flex>
    </section>
  );
};

export default DailyTasks;
