import { Space } from "@wow-class/ui";
import { myStudyApi } from "apis/myStudyApi";

import DailyTasks from "./_components/DailyTasks";
import EmptyStudy from "./_components/EmptyStudy";
import Header from "./_components/Header";

const MobileMyStudyPage = async () => {
  const myOngoingStudyInfoData = await myStudyApi.getMyOngoingStudyInfo();
  // return myOngoingStudyInfoData?.studyId ? (
  //   <>
  //     <Header studyId={myOngoingStudyInfoData?.studyId} />
  //     <Space height={34} />
  //     <DailyTasks />
  //   </>
  // ) : (
  return <EmptyStudy />;
  // );
};

export default MobileMyStudyPage;
