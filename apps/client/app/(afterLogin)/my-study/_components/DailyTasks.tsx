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
            if (dailyTask.todoType === "ATTENDANCE") {
              const { attendanceStatus, week, deadLine } = dailyTask;

              return (
                <AttendanceStatusBox
                  attendanceStatus={attendanceStatus || "NOT_ATTENDED"}
                  deadLine={deadLine}
                  key={index}
                  week={week}
                />
              );
            }

            const {
              week,
              assignmentTitle,
              deadLine,
              assignmentSubmissionStatus,
            } = dailyTask;

            return (
              <AssignmentStatusBox
                deadLine={deadLine}
                key={index}
                name={assignmentTitle || ""}
                week={week}
                assignmentSubmissionStatus={
                  assignmentSubmissionStatus || "NOT_SUBMITTED"
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
