"use client";

import { Flex } from "@styled-system/jsx";
import { Modal, Space, Text } from "@wow-class/ui";
import { useModalRoute } from "@wow-class/ui/hooks";
import { studyInfoApi } from "apis/study/studyInfoApi";
import { tags } from "constants/tags";
import { useSearchParams } from "next/navigation";
import { revalidateTagByName } from "utils/revalidateTagByName";
import Button from "wowds-ui/Button";

const AnnouncementDeleteModal = () => {
  const searchParams = useSearchParams();

  const studyAnnouncementId = searchParams.get("studyAnnouncementId");

  const { closeModal } = useModalRoute();

  const handleClickDeleteButton = async () => {
    const result = await studyInfoApi.deleteStudyAnnouncement(
      Number(studyAnnouncementId)
    );
    if (result.success) {
      revalidateTagByName(tags.announcements);
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
