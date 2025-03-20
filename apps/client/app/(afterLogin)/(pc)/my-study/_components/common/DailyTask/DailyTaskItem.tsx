import type { StudyDetailTaskDto } from "types/dtos/studyDetail";
import type { DailyTaskType } from "types/entities/myStudy";

import { AssignmentOverviewBox } from "./AssignmentOverviewBox";
import AttendanceCheckBox from "./AttendanceCheckBox";

const DailyTaskItem = ({
  dailyTask,
}: {
  dailyTask: StudyDetailTaskDto<DailyTaskType>;
  index: number;
}) => {
  const todoType = dailyTask.todoType;

  return todoType === "ATTENDANCE" ? (
    <AttendanceCheckBox
      attendanceStatus={dailyTask.attendanceStatus}
      study={dailyTask.study}
      studySession={dailyTask.studySession}
    />
  ) : (
    <AssignmentOverviewBox dailyTask={dailyTask} />
  );
};

export default DailyTaskItem;
