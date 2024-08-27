"use client";

import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { studyApi } from "apis/study/studyApi";
import { tags } from "constants/tags";
import { useState } from "react";
import type { StudyAnnouncementType } from "types/entities/study";
import { revalidateTagByName } from "utils/revalidateTagByName";
import Button from "wowds-ui/Button";
import TextField from "wowds-ui/TextField";

const CreateStudyAnnouncement = ({ studyId }: { studyId: string }) => {
  const [studyAnnouncement, setStudyAnnouncement] =
    useState<StudyAnnouncementType>({
      title: "",
      link: "",
    });

  const handlePublishAnnouncement = async (studyId: string) => {
    const { success } = await studyApi.publishStudyAnnouncement(
      parseInt(studyId, 10),
      studyAnnouncement
    );
    if (success) {
      revalidateTagByName(tags.announcements);
      setStudyAnnouncement({
        title: "",
        link: "",
      });
    } else {
      console.log("공지 생성 실패");
    }
  };
  return (
    <div className={StudyAnnouncementBoxStyle}>
      <Text typo="h2">공지를 작성해주세요.</Text>
      <Flex gap="xl" justify="space-between" width="100%">
        <Flex gap="sm" justifyContent="stretch" width="100%">
          <TextField
            label="공지 제목"
            placeholder="입력해주세요"
            style={{ width: "100%" }}
            value={studyAnnouncement.title}
            onChange={(value) => {
              setStudyAnnouncement({ ...studyAnnouncement, title: value });
            }}
          />
          <TextField
            label="공지 링크"
            placeholder="http://example.com"
            style={{ width: "100%" }}
            value={studyAnnouncement.link}
            onChange={(value) => {
              setStudyAnnouncement({ ...studyAnnouncement, link: value });
            }}
          />
        </Flex>
        <Button
          size="sm"
          style={{ minWidth: "92px", maxHeight: "38px", marginTop: "23px" }}
          variant="solid"
          disabled={
            studyAnnouncement.link === "" || studyAnnouncement.title === ""
          }
          onClick={() => handlePublishAnnouncement(studyId)}
        >
          공지 발행
        </Button>
      </Flex>
    </div>
  );
};

export default CreateStudyAnnouncement;

const StudyAnnouncementBoxStyle = css({
  width: "100%",
  height: "171px",
  backgroundColor: "backgroundAlternative",
  borderRadius: "md",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  padding: "30px",
});
