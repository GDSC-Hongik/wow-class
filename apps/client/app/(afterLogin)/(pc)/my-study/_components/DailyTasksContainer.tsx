import { studyDetailApi } from "apis/studyDetailApi";

import DailyTaskList from "./common/DailyTask/DailyTaskList";

const DailyTasksContainer = async () => {
  const dailyTaskData = await studyDetailApi.getAllStudyTaskList();
  return (
    <>
      <DailyTaskList dailyTask={dailyTaskData} />
    </>
  );
};

export default DailyTasksContainer;
