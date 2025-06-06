import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Space, Table, Text } from "@wow-class/ui";
import { studyApi } from "apis/study/studyApi";
import { routerPath } from "constants/router/routerPath";
import Image from "next/image";
import Link from "next/link";
import { space } from "wowds-tokens";
import Button from "wowds-ui/Button";
import TextButton from "wowds-ui/TextButton";

import CreateStudyAnnouncement from "./CreateStudyAnnouncement";

const StudyAnnouncement = async ({ studyId }: { studyId: string }) => {
  const announcementList = await studyApi.getStudyAnnouncement(
    parseInt(studyId, 10)
  );

  return (
    <section aria-label="curriculum-list">
      <Text typo="h2">스터디 공지</Text>
      <Space height={24} />
      <CreateStudyAnnouncement studyId={studyId} />
      {!announcementList ? null : (
        <>
          {announcementList?.map((data, index) => {
            const { studyAnnouncementId, title, link, createdDate } =
              data.studyAnnouncement;
            return (
              <Table
                key={`${studyAnnouncementId}-${index}`}
                style={{ width: "100%" }}
              >
                <Table.Left style={{ flex: "4" }}>
                  <Flex alignItems="center" width="100%">
                    <Text
                      typo="h3"
                      style={{
                        flex: "3",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "450px",
                        minWidth: "450px",
                      }}
                    >
                      {title}
                    </Text>
                    <Flex alignItems="center" flexShrink={0} minWidth="300px">
                      <Link
                        className={linkStyle}
                        href={link}
                        rel="noopener"
                        role="button"
                        tabIndex={0}
                        target="_blank"
                      >
                        <Image
                          alt="link-icon"
                          height={24}
                          src="/images/link.svg"
                          width={24}
                        />
                        <TextButton
                          aria-label={`${title} 공지 링크 바로가기`}
                          size="lg"
                          style={textButtonStyle}
                          text="공지 링크 바로가기"
                        />
                      </Link>
                      <Text style={{ flex: "1" }} typo="body1">
                        {createdDate.replaceAll("-", ".")}
                      </Text>
                    </Flex>
                  </Flex>
                </Table.Left>
                <Table.Right style={{ flex: "1" }}>
                  <Flex gap="sm">
                    <Link
                      href={`${studyId}/${routerPath["announcement-delete"].href}?studyAnnouncementId=${studyAnnouncementId}`}
                    >
                      <Button
                        aria-label={`${title} 공지 삭제하기`}
                        size="sm"
                        style={{ minWidth: "81px" }}
                        variant="outline"
                      >
                        삭제
                      </Button>
                    </Link>
                    <Link
                      href={`${studyId}/${routerPath["announcement-modify"].href}?studyAnnouncementId=${studyAnnouncementId}`}
                    >
                      <Button
                        aria-label={`${title} 공지 수정하기`}
                        size="sm"
                        style={{ minWidth: "81px" }}
                        variant="outline"
                      >
                        수정
                      </Button>
                    </Link>
                  </Flex>
                </Table.Right>
              </Table>
            );
          })}
        </>
      )}
    </section>
  );
};

export default StudyAnnouncement;

const textButtonStyle = {
  padding: `${space.sm} 0`,
};

const linkStyle = css({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  gap: "4px",
  flex: 2,
});
