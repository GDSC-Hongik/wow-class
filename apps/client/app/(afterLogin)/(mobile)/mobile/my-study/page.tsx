import { Space } from "@wow-class/ui";
import { myStudyApi } from "apis/myStudyApi";

import Header from "../_components/Header";
import DailyTasks from "./_components/DailyTasks";
import EmptyStudy from "./_components/EmptyStudy";

const MobileMyStudyPage = async () => {
  const myOngoingStudyInfoData = await myStudyApi.getMyOngoingStudyInfo();
  return myOngoingStudyInfoData?.studyId ? (
    <>
      <Header studyId={myOngoingStudyInfoData?.studyId} />
      <Space height={34} />
      <DailyTasks />
    </>
  ) : (
    <EmptyStudy />
  );
};

export default MobileMyStudyPage;
