import { Space } from "@wow-class/ui";
import { myStudyApi } from "apis/myStudyApi";
import Divider from "wowds-ui/Divider";
import Tabs from "wowds-ui/Tabs";
import TabsContent from "wowds-ui/TabsContent";
import TabsItem from "wowds-ui/TabsItem";
import TabsList from "wowds-ui/TabsList";

import CurriculumTabs from "./_components/CurriculumTabs";
import DailyTasksContainer from "./_components/DailyTasksContainer";
import Header from "./_components/Header";


export const generateMetadata = async ({
  params: { studyId },
}: {
  params: { studyId: string };
}) => {
  const study = await myStudyApi.getBasicStudyInfo(+studyId);
  return {
    title: study ? `${study.title} | 와우클래스` : "스터디 | 와우 클래스",
  };
};

const MyStudyDetailPage = ({ params }: { params: { studyId: number } }) => {
  const { studyId } = params;
  return (
    <>
      <Header studyId={studyId} />
      <Space height={40} />
      <Divider />
      <Space height={40} />
      <DailyTasksContainer studyId={studyId} />
      <Space height={40} />
      <CurriculumTabs studyId={studyId} />
      <Space height={100} />
    </>
  );
};

export default MyStudyDetailPage;
