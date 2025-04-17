import type { StudyTaskType } from "types/entities/student";
import Table from "wowds-ui/Table";

import TaskTag from "./TaskTag";

export const StudyTasksThs = ({ tasks }: { tasks: StudyTaskType[] }) => {
  return tasks.map((task) => {
    const { round, taskType } = task;
    return (
      <Table.Th key={taskType + round}>
        {taskType === "ATTENDANCE" ? `${round}회차 출석` : `${round}회차 과제`}
      </Table.Th>
    );
  });
};

export const StudyTasksTds = ({ tasks }: { tasks: StudyTaskType[] }) => {
  return tasks.map((task) => {
    const { round, taskType } = task;
    return (
      <Table.Td key={taskType + round}>
        <TaskTag task={task} />
      </Table.Td>
    );
  });
};
