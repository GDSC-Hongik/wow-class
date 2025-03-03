import type { StudyTaskResponseDto } from "types/dtos/studyStudent";
import Table from "wowds-ui/Table";

import TaskTag from "./TaskTag";

export const StudyTasksThs = ({
  tasks,
}: {
  tasks: (
    | StudyTaskResponseDto<"ASSIGNMENT">
    | StudyTaskResponseDto<"ATTENDANCE">
  )[];
}) => {
  return tasks.map((task) => {
    const { week, taskType } = task;
    return (
      <Table.Th key={taskType + week}>
        {taskType === "ATTENDANCE" ? `${week}회차 출석` : `${week}회차 과제`}
      </Table.Th>
    );
  });
};

export const StudyTasksTds = ({
  tasks,
}: {
  tasks: (
    | StudyTaskResponseDto<"ASSIGNMENT">
    | StudyTaskResponseDto<"ATTENDANCE">
  )[];
}) => {
  return tasks.map((task) => {
    const { week, taskType } = task;
    return (
      <Table.Td key={taskType + week}>
        <TaskTag task={task} />
      </Table.Td>
    );
  });
};
