"use client";

import { Flex } from "@styled-system/jsx";
import { Modal, Space, Text } from "@wow-class/ui";
import { useModalRoute } from "@wow-class/ui/hooks";
import { studyInfoApi } from "apis/study/studyInfoApi";
import { tags } from "constants/tags";
import useParseSearchParams from "hooks/useParseSearchParams";
import { revalidateTagByName } from "utils/revalidateTagByName";
import Button from "wowds-ui/Button";

const AnnouncementDeleteModal = () => {
  const { parseToNumberSearchParams } = useParseSearchParams();
  const studyAnnouncementId = parseToNumberSearchParams("studyAnnouncementId");

  const { closeModal } = useModalRoute();

  const handleClickDeleteButton = async () => {
    const result =
      await studyInfoApi.deleteStudyAnnouncement(studyAnnouncementId);
    if (result.success) {
      await revalidateTagByName(tags.announcements);
      closeModal();
    }
  };

  return (
    <Modal>
      <Flex direction="column" textAlign="center" width="21rem">
        <Text typo="h1">공지를 삭제하시겠어요?</Text>
        <Space height={33} />

        <Flex gap="sm">
          <Button variant="outline" onClick={closeModal}>
            취소
          </Button>
          <Button onClick={handleClickDeleteButton}>삭제하기</Button>
        </Flex>
      </Flex>
    </Modal>
  );
};

export default AnnouncementDeleteModal;
