import type { DailyTaskDto } from "types/dtos/myStudy";
import type { DailyTaskType } from "types/entities/myStudy";

import AssignmentStatusBox from "./AssignmentStatusBox";
import AttendanceStatusBox from "./AttendanceStatusBox";

const DailyTaskItem = ({
  dailyTask,
  index,
}: {
  dailyTask: DailyTaskDto<DailyTaskType>;
  index: number;
}) => {
  const {
    taskType,
    week,
    deadLine,
    attendanceStatus,
    assignmentTitle,
    assignmentSubmissionStatus,
    studyDetailId,
  } = dailyTask;

  return taskType === "ATTENDANCE" ? (
    <AttendanceStatusBox
      attendanceStatus={attendanceStatus || "NOT_ATTENDED"}
      deadLine={deadLine}
      key={index}
      studyDetailId={studyDetailId}
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

export default DailyTaskItem;
