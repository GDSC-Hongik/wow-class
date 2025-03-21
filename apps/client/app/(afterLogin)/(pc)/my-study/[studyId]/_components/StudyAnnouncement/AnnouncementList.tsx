import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Space, Text } from "@wow-class/ui";
import { studyDetailApi } from "apis/studyDetailApi";
import Image from "next/image";

import AnnouncementItem from "./AnnouncementItem";

const AnnouncementList = async ({ studyId }: { studyId: number }) => {
  const announcementList =
    await studyDetailApi.getStudyDetailAnnouncementList(studyId);

  if (!announcementList) return;
  return (
    <div className={containerStyle}>
      <Text typo="h2">스터디 공지</Text>
      <Space height={20} />
      {announcementList.length !== 0 ? (
        announcementList.map((item) => {
          const announcement = item.studyAnnouncement;
          return (
            <AnnouncementItem
              createdDate={announcement.createdDate}
              key={announcement.studyAnnouncementId}
              link={announcement.link}
              studyAnnouncementId={announcement.studyAnnouncementId}
              title={announcement.title}
            />
          );
        })
      ) : (
        <Flex alignItems="center" direction="column" gap={24} paddingY={38}>
          <Image
            alt="empty-study"
            height={140}
            src="/images/empty.svg"
            width={186}
          />
          <Text as="h2" color="sub" typo="h2">
            올라온 공지가 없어요.
          </Text>
        </Flex>
      )}
    </div>
  );
};
const containerStyle = css({ paddingTop: "2.5rem", paddingLeft: "1rem" });
export default AnnouncementList;
