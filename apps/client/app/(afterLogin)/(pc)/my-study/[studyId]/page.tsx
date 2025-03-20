import { Space } from "@wow-class/ui";
import Divider from "wowds-ui/Divider";
import Tabs from "wowds-ui/Tabs";
import TabsContent from "wowds-ui/TabsContent";
import TabsItem from "wowds-ui/TabsItem";
import TabsList from "wowds-ui/TabsList";

import Header from "./_components/Header";
import AnnouncementList from "./_components/StudyAnnouncement/AnnouncementList";
import Curriculum from "./_components/StudyCurriculum/Curriclum";

const StudyDetailPage = ({ params }: { params: { studyId: number } }) => {
  const { studyId } = params;
  return (
    <>
      <Header studyId={studyId} />
      <Space height={40} />
      <Divider type="dark" />
      <Tabs defaultValue="curriculum">
        <TabsList>
          <TabsItem value="curriculum">커리큘럼</TabsItem>
          <TabsItem value="announcement">공지</TabsItem>
        </TabsList>
        <Divider style={{ marginTop: -3 }} type="dark" />
        <TabsContent value="curriculum">
          <Curriculum studyId={studyId} />
        </TabsContent>
        <TabsContent value="announcement">
          <AnnouncementList studyId={studyId} />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default StudyDetailPage;
