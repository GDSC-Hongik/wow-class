import { css } from "@styled-system/css";
import { Text } from "@wow-class/ui";
import { formatISODateWithDot } from "@wow-class/utils";
import { myStudyApi } from "apis/myStudyApi";
import Link from "next/link";
import { color } from "wowds-tokens";

const StudyNotices = async () => {
  const studyAnnouncementListResponseData =
    await myStudyApi.getStudyAnnouncementList(1);

  return (
    <section aria-label="study-notices">
      <Text as="h2" className={studyNoticeHeadingStyle} typo="h2">
        스터디 공지
      </Text>
      {studyAnnouncementListResponseData?.map(
        ({ studyAnnounceId, title, link, createdDate }, index) => (
          <Link
            className={studyNoticeBoxStyle}
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

export default StudyNotices;

const studyNoticeHeadingStyle = css({
  marginBottom: "md",
});

const studyNoticeBoxStyle = css({
  alignItems: "center",
  borderRadius: "4px",
  height: "80px",
  padding: "0 47px 0 20px",
  display: "flex",
  justifyContent: "space-between",
});
