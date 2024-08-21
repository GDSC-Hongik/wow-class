import { Space } from "@wow-class/ui";

import {
  DailyTasks,
  Header,
  StudyAnnouncementList,
  StudyCurriculum,
} from "./_components";

const MyStudyPage = () => {
  return (
    <>
      <Header />
      <Space height={48} />
      <DailyTasks />
      <Space height={64} />
      <StudyCurriculum />
      <Space height={64} />
      <StudyAnnouncementList />
    </>
  );
};

export default MyStudyPage;
