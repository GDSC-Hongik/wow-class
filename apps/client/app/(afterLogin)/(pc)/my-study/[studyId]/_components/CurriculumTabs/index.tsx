import { Space } from "@wow-class/ui";
import Tabs from "wowds-ui/Tabs";
import TabsContent from "wowds-ui/TabsContent";
import TabsItem from "wowds-ui/TabsItem";
import TabsList from "wowds-ui/TabsList";

import AnnouncementList from "../StudyAnnouncement/AnnouncementList";
import Curriculum from "../StudyCurriculum/Curriclum";

const CurriculumTabs = ({ studyId }: { studyId: number }) => {
  return (
    <Tabs defaultValue="curriculum">
      <TabsList>
        <TabsItem value="curriculum">커리큘럼</TabsItem>
        <TabsItem value="announcement">공지</TabsItem>
      </TabsList>
      <TabsContent value="curriculum">
        <Space height={40} />
        <Curriculum studyId={studyId} />
      </TabsContent>
      <TabsContent value="announcement">
        <AnnouncementList studyId={studyId} />
      </TabsContent>
    </Tabs>
  );
};

export default CurriculumTabs;
