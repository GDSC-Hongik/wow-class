import { Space } from "@wow-class/ui";

import {
  DailyTasks,
  Header,
  StudyCurriculum,
  StudyNotices,
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
      <StudyNotices />
    </>
  );
};

export default MyStudyPage;
