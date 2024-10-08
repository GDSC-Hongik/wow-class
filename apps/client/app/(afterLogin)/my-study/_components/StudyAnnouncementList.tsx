import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { formatISODateWithDot } from "@wow-class/utils";
import { myStudyApi } from "apis/myStudyApi";
import Image from "next/image";
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
      {studyAnnouncementListData?.length ? (
        studyAnnouncementListData?.map(
          ({ studyAnnounceId, title, link, createdDate }, index) => (
            <Link
              className={studyAnnouncementListBoxStyle}
              href={link}
              key={studyAnnounceId}
              target="_blank"
              style={{
                backgroundColor:
                  index === 0 ? `${color.monoBackgroundPressed}` : "white",
              }}
            >
              <Text as="h3" className={studyAnnouncementTitleStyle} typo="h3">
                {title}
              </Text>
              <Text as="h3" className={studyAnnouncementDateStyle} typo="h3">
                {formatISODateWithDot(createdDate)}
              </Text>
            </Link>
          )
        )
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
  display: "flex",
  justifyContent: "space-between",
});

const studyAnnouncementTitleStyle = css({
  padding: "27px 36px 27px 20px",
  width: "calc(100% - 182px)",
  height: "100%",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

const studyAnnouncementDateStyle = css({
  padding: "27px 0",
  height: "100%",
  width: "182px",
  textAlign: "center",
});
