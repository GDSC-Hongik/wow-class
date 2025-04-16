import { assignmentSubmissionStatusMap } from "constants/status/assignmentStatusMap";
import { attendanceTaskStatusMap } from "constants/status/attendanceStatusMap";
import type { StudyTaskType } from "types/entities/student";
import Tag from "wowds-ui/Tag";

const TaskTag = ({ task }: { task: StudyTaskType }) => {
  const formatTaskToTagInfo = () => {
    if (task.taskType === "ATTENDANCE") {
      return attendanceTaskStatusMap[task.attendanceStatus];
    }
    if (task.taskType === "ASSIGNMENT") {
      return assignmentSubmissionStatusMap[task.assignmentSubmissionStatus];
    }
    return null;
  };

  const tagInfo = formatTaskToTagInfo();
  if (!tagInfo) return null;
  const { tagText, tagColor } = tagInfo;

  return (
    <Tag color={tagColor} variant="solid2">
      {tagText}
    </Tag>
  );
};

export default TaskTag;
