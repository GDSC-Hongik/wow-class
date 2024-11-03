import { assignmentSubmissionStatusMap } from "constants/status/assignmentStatusMap";
import type { StudyTaskResponseDto } from "types/dtos/studyStudent";
import Tag from "wowds-ui/Tag";

const TaskTag = ({ task }: { task: StudyTaskResponseDto }) => {
  const { taskType } = task;
  if (taskType === "ATTENDACE") {
    return null;
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
};

export default TaskTag;
