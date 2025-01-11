import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { formatISODateWithDot } from "@wow-class/utils";
import { myStudyApi } from "apis/myStudyApi";
import Image from "next/image";
import Link from "next/link";

const MobileStudyAnnouncementPage = async () => {
  const myOngoingStudyInfoData = await myStudyApi.getMyOngoingStudyInfo();

  if (!myOngoingStudyInfoData?.studyId) {
    return;
  }

  const studyAnnouncementListData = await myStudyApi.getStudyAnnouncementList(
    myOngoingStudyInfoData?.studyId
  );

  return (
    <section aria-label="study-announcement-list">
      <Text as="h1" className={studyAnnouncementListHeadingStyle} typo="h1">
        스터디 공지
      </Text>
      <Flex direction="column" gap="12px" justifyContent="center">
        {studyAnnouncementListData?.length ? (
          studyAnnouncementListData?.map(
            ({ studyAnnounceId, title, link, createdDate }) => (
              <Link
                className={studyAnnouncementListBoxStyle}
                href={link}
                key={studyAnnounceId}
                target="_blank"
              >
                <Text
                  as="span"
                  className={studyAnnouncementTitleStyle}
                  typo="body2"
                >
                  {title}
                </Text>
                <Text as="span" color="sub" typo="body3">
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
      </Flex>
    </section>
  );
};

export default MobileStudyAnnouncementPage;

const studyAnnouncementListHeadingStyle = css({
  marginBottom: "md",
});

const studyAnnouncementListBoxStyle = css({
  alignItems: "center",
  borderRadius: "10px",
  height: "72px",
  display: "flex",
  justifyContent: "space-between",
  border: "1px solid",
  borderColor: "outline",
  backgroundColor: "backgroundNormal",
  padding: "24px",
});

const studyAnnouncementTitleStyle = css({
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});
