import { css } from "@styled-system/css";
import { Space, Text } from "@wow-class/ui";
import { myStudyApi } from "apis/myStudyApi";

import AnnouncementItem from "./AnnouncementItem";

const AnnouncementList = async ({ studyId }: { studyId: number }) => {
  const announcementList = await myStudyApi.getStudyAnnouncementList(studyId);

  if (!announcementList) return;
  return (
    <div className={containerStyle}>
      <Text typo="h2">스터디 공지</Text>
      <Space height={20} />
      {announcementList.map((item) => {
        const announcement = item.studyAnnouncement;
        return (
          <AnnouncementItem
            createdDate={announcement.createdDate}
            link={announcement.link}
            studyAnnouncementId={announcement.studyAnnouncementId}
            title={announcement.title}
          />
        );
      })}
    </div>
  );
};
const containerStyle = css({ paddingTop: "2.5rem", paddingLeft: "1rem" });
export default AnnouncementList;
