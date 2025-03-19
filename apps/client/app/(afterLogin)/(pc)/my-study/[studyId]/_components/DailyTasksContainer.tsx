import { studyDetailApi } from "apis/studyDetailApi";

import DailyTaskList from "../../_components/common/DailyTask/DailyTaskList";

interface DailyTasksContainerProps {
  studyId: number;
}
const DailyTasksContainer = async ({ studyId }: DailyTasksContainerProps) => {
  const dailyTaskData = await studyDetailApi.getStudyDetailTaskList(studyId);

  return (
    <>
      <DailyTaskList dailyTask={dailyTaskData} />
    </>
  );
};

export default DailyTasksContainer;
