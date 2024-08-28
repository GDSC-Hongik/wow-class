import { css } from "@styled-system/css";
import { Text } from "@wow-class/ui";
import { formatISODateWithDot } from "@wow-class/utils";
import { myStudyApi } from "apis/myStudyApi";
import Link from "next/link";
import { color } from "wowds-tokens";

const StudyAnnouncementList = async () => {
  const myOngoingStudyInfoData = await myStudyApi.getMyOngoingStudyInfo();

  if (!myOngoingStudyInfoData?.studyId) {
    return;
  }

  const studyAnnouncementListData = await myStudyApi.getStudyAnnouncementList(
    myOngoingStudyInfoData?.studyId
  );

  return (
    <section aria-label="study-announcement-list">
      <Text as="h2" className={studyAnnouncementListHeadingStyle} typo="h2">
        스터디 공지
      </Text>
      {studyAnnouncementListData?.map(
        ({ studyAnnounceId, title, link, createdDate }, index) => (
          <Link
            className={studyAnnouncementListBoxStyle}
            href={link}
            key={studyAnnounceId}
            style={{
              backgroundColor:
                index === 0 ? `${color.monoBackgroundPressed}` : "white",
            }}
          >
            <Text as="h3" typo="h3">
              {title}
            </Text>
            <Text as="h3" typo="h3">
              {formatISODateWithDot(createdDate)}
            </Text>
          </Link>
        )
      )}
    </section>
  );
};

export default StudyAnnouncementList;

const studyAnnouncementListHeadingStyle = css({
  marginBottom: "md",
});

const studyAnnouncementListBoxStyle = css({
  alignItems: "center",
  borderRadius: "4px",
  height: "80px",
  padding: "0 47px 0 20px",
  display: "flex",
  justifyContent: "space-between",
});
