import { Space } from "@wow-class/ui";
import Divider from "wowds-ui/Divider";

import DailyTasks from "./_components/DailyTask/DailyTaskList";
import Header from "./_components/Header";
import Curriculum from "./_components/StudyCurriculum/Curriclum";

const StudyDetailPage = ({ params }: { params: { studyId: number } }) => {
  const { studyId } = params;
  return (
    <>
      <Header studyId={studyId} />
      <Space height={40} />
      <Divider />
      {/* <Curriculum studyId={studyId} /> */}
      <DailyTasks studyId={studyId} />
    </>
  );
};

export default StudyDetailPage;
