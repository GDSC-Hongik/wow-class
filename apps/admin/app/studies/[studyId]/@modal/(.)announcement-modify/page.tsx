"use client";

import { Flex } from "@styled-system/jsx";
import { Modal, Space, Text } from "@wow-class/ui";
import { useModalRoute } from "@wow-class/ui/hooks";
import { studyApi } from "apis/study/studyApi";
import { tags } from "constants/tags";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import type { StudyAnnouncementType } from "types/entities/study";
import { revalidateTagByName } from "utils/revalidateTagByName";
import Button from "wowds-ui/Button";
import TextField from "wowds-ui/TextField";

const AnnouncementModifyModal = () => {
  const searchParams = useSearchParams();
  const [studyAnnouncement, setStudyAnnouncement] =
    useState<StudyAnnouncementType>({
      title: "",
      link: "",
    });

  const studyAnnouncementId = searchParams.get("studyAnnouncementId");

  const { closeModal } = useModalRoute();

  const handleClickModifyButton = async () => {
    const result = await studyApi.modifyStudyAnnouncement(
      Number(studyAnnouncementId),
      studyAnnouncement
    );
    if (result.success) {
      revalidateTagByName(tags.announcements);
      closeModal();
    }
  };

  return (
    <Modal>
      <Flex direction="column" textAlign="center" width="21rem">
        <Text typo="h1">공지를 수정해주세요</Text>
        <Space height={29} />
        <Flex direction="column" gap="1.125rem">
          <TextField
            label="공지 제목"
            placeholder="입력해주세요"
            onChange={(value) => {
              setStudyAnnouncement({ ...studyAnnouncement, title: value });
            }}
          />
          <TextField
            label="공지 링크"
            placeholder="http://example.com"
            onChange={(value) => {
              setStudyAnnouncement({ ...studyAnnouncement, link: value });
            }}
          />
        </Flex>
        <Space height={28} />
        <Flex gap="sm">
          <Button variant="outline" onClick={closeModal}>
            취소
          </Button>
          <Button onClick={handleClickModifyButton}>수정하기</Button>
        </Flex>
      </Flex>
    </Modal>
  );
};

export default AnnouncementModifyModal;
