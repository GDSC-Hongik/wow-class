import type { DailyTaskDto } from "types/dtos/myStudy";
import type { StudyDetailTaskDto } from "types/dtos/studyDetail";
import type { DailyTaskType } from "types/entities/myStudy";

import { AssignmentOverviewBox } from "./AssignmentOverviewBox";

const DailyTaskItem = ({
  dailyTask,
  index,
}: {
  dailyTask: StudyDetailTaskDto<DailyTaskType>;
  index: number;
}) => {
  const todoType = dailyTask.todoType;

  return todoType === "ATTENDANCE" ? (
    <div>attendance</div>
  ) : (
    <AssignmentOverviewBox
      //   assignmentHistory={dailyTask.assignmentHistory}
      //   assignmentHistoryStatus={dailyTask.assignmentHistoryStatus}
      //   deadLine={dailyTask.deadLine}
      //   studySession={dailyTask.studySession}
      dailyTask={dailyTask}
    />
  );
};

export default DailyTaskItem;
