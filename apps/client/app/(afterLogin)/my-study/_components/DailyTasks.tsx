import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { myStudyApi } from "apis/myStudyApi";
import type { DailyTaskDto } from "types/dtos/myStudy";
import type { DailyTaskType } from "types/entities/myStudy";

import { AttendanceStatusBox, DailyTaskCarousel } from ".";
import AssignmentStatusBox from "./AssignmentStatusBox";

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

const DailyTaskItem = ({
  dailyTask,
  index,
}: {
  dailyTask: DailyTaskDto<DailyTaskType>;
  index: number;
}) => {
  const {
    todoType,
    week,
    deadLine,
    attendanceStatus,
    assignmentTitle,
    assignmentSubmissionStatus,
  } = dailyTask;

  return todoType === "ATTENDANCE" ? (
    <AttendanceStatusBox
      attendanceStatus={attendanceStatus || "NOT_ATTENDED"}
      deadLine={deadLine}
      key={index}
      week={week}
    />
  ) : (
    <AssignmentStatusBox
      assignmentSubmissionStatus={assignmentSubmissionStatus || "SUCCESS"}
      deadLine={deadLine}
      key={index}
      name={assignmentTitle || ""}
      week={week}
    />
  );
};

export default DailyTasks;
