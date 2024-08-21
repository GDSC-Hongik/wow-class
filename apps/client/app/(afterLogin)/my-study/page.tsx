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
  const myOngoingStudyInfoResponseData =
    await myStudyApi.getMyOngoingStudyInfo();

  return myOngoingStudyInfoResponseData?.studyId ? (
    <>
      <Header />
      <Space height={48} />
      <DailyTasks />
      <Space height={64} />
      <StudyCurriculum />
      <Space height={64} />
      <StudyAnnouncementList />
    </>
  ) : (
    <EmptyStudy />
  );
};

export default MyStudyPage;
