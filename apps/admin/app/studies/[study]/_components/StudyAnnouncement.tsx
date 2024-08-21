import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Space, Table, Text } from "@wow-class/ui";
import { studyInfoApi } from "apis/study/studyInfoApi";
import Image from "next/image";
import Link from "next/link";
import { space } from "wowds-tokens";
import Button from "wowds-ui/Button";
import TextButton from "wowds-ui/TextButton";

import CreateStudyAnnouncement from "./CreateStudyAnnouncement";

const StudyAnnouncement = async ({ studyId }: { studyId: string }) => {
  const announcementList = await studyInfoApi.getStudyAnnouncement(
    parseInt(studyId, 10)
  );

  return (
    <section aria-label="session-list">
      <Text typo="h2">스터디 공지</Text>
      <Space height={24} />
      <CreateStudyAnnouncement studyId={studyId} />
      {!announcementList ? null : (
        <>
          {announcementList?.map(
            ({ studyAnnounceId, title, link, createdDate }, index) => {
              return (
                <Table
                  key={`${studyAnnounceId}-${index}`}
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
                          maxWidth: "700px",
                        }}
                      >
                        {title}
                      </Text>
                      <Link
                        className={linkStyle}
                        href={link}
                        role="button"
                        tabIndex={0}
                      >
                        <Image
                          alt="link-icon"
                          height={24}
                          src="/images/link.svg"
                          width={24}
                        />
                        <TextButton
                          size="lg"
                          style={textButtonStyle}
                          text="소개 링크 바로가기"
                        />
                      </Link>
                      <Text style={{ flex: "1" }} typo="body1">
                        {createdDate.replaceAll("-", ".")}
                      </Text>
                    </Flex>
                  </Table.Left>
                  <Table.Right style={{ flex: "1" }}>
                    <Flex gap="sm">
                      <Link href="">
                        <Button
                          size="sm"
                          style={{ minWidth: "81px" }}
                          variant="outline"
                        >
                          삭제
                        </Button>
                      </Link>
                      <Link href="">
                        <Button
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
            }
          )}
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
