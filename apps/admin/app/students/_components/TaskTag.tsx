import { assignmentSubmissionStatusMap } from "constants/status/assignmentStatusMap";
import { attendanceTaskStatusMap } from "constants/status/attendanceStatusMap";
import type { StudyTaskResponseDto } from "types/dtos/studyStudent";
import Tag from "wowds-ui/Tag";

const TaskTag = ({ task }: { task: StudyTaskResponseDto }) => {
  const { taskType } = task;
  if (taskType === "ATTENDANCE") {
    const { attendanceStatus } = task;
    const { tagText, tagColor } = attendanceTaskStatusMap[attendanceStatus];
    return (
      <Tag color={tagColor} variant="solid2">
        {tagText}
      </Tag>
    );
  }
  if (taskType === "ASSIGNMENT") {
    const { assignmentSubmissionStatus } = task;
    const { tagText, tagColor } =
      assignmentSubmissionStatusMap[assignmentSubmissionStatus];
    return (
      <Tag color={tagColor} variant="solid2">
        {tagText}
      </Tag>
    );
  }
  return null;
};

export default TaskTag;
