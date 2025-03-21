import { Space, Text } from "@wow-class/ui";
import { myStudyApi } from "apis/myStudyApi";

import { MyOngoingStudy, StudyAnnouncementList } from "./_components";
import DailyTasksContainer from "./_components/DailyTasksContainer";
import EmptyStudy from "./_components/EmptyStudy";

const MyStudyPage = async () => {
  const myOngoingStudyInfoData = await myStudyApi.getMyOngoingStudyInfo();

  return myOngoingStudyInfoData?.length ? (
    <>
      <Text typo="h1">나의 스터디</Text>
      <Space height={49} />
      <MyOngoingStudy myOngoingStudyData={myOngoingStudyInfoData} />
      <Space height={64} />
      <DailyTasksContainer />
      <Space height={64} />
      <StudyAnnouncementList />
      <Space height={64} />
    </>
  ) : (
    <EmptyStudy />
  );
};

export default MyStudyPage;
