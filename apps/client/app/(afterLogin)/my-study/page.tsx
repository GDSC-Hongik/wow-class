import { Space } from "@wow-class/ui";
import { myStudyApi } from "apis/myStudyApi";

import {
  DailyTasks,
  Header,
  StudyAnnouncementList,
  StudyCurriculum,
} from "./_components";
import EmptyStudy from "./_components/EmptyStudy";

const MyStudyPage = async () => {
  const myOngoingStudyInfoData = await myStudyApi.getMyOngoingStudyInfo();

  return myOngoingStudyInfoData?.studyId ? (
    <>
      <Header />
      <Space height={48} />
      <DailyTasks />
      <Space height={64} />
      <StudyCurriculum />
      <Space height={64} />
      <StudyAnnouncementList />
      <Space height={35} />
    </>
  ) : (
    <EmptyStudy />
  );
};

export default MyStudyPage;
