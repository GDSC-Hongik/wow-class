"use client";

import { css, cva } from "@styled-system/css";
import { Flex, styled } from "@styled-system/jsx";
import { Modal, Space, Text } from "@wow-class/ui";
import { useModalRoute } from "@wow-class/ui/hooks";
import { studyApi } from "apis/study/studyApi";
import { tags } from "constants/tags";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import type { StudyAnnouncementType } from "types/entities/study";
import { revalidateTagByName } from "utils/revalidateTagByName";
import Button from "wowds-ui/Button";

import usePrefillAnnouncement from "../../hooks/usePrefillAnnouncement";

const AnnouncementModifyModal = ({
  params,
}: {
  params: { studyId: string };
}) => {
  const searchParams = useSearchParams();
  const { studyId } = params;
  const studyAnnouncementId = Number(searchParams.get("studyAnnouncementId"));
  const prefillData = usePrefillAnnouncement(
    Number(studyId),
    studyAnnouncementId
  );
  const [studyAnnouncement, setStudyAnnouncement] =
    useState<StudyAnnouncementType>({ title: "", link: "" });

  useEffect(() => {
    setStudyAnnouncement(prefillData);
  }, [prefillData]);
  const { onClose } = useModalRoute();
  const handleClickModifyButton = async () => {
    const result = await studyApi.modifyStudyAnnouncement(
      studyAnnouncementId,
      studyAnnouncement
    );
    if (result.success) {
      await revalidateTagByName(tags.announcements);
      onClose();
    }
  };

  return (
    <Modal>
      <Flex direction="column" textAlign="center" width="21rem">
        <Text typo="h1">공지를 수정해주세요</Text>
        <Space height={29} />
        <Flex direction="column" gap="1.125rem">
          <Flex direction="column" gap="xs" width="100%">
            <styled.label className={labelStyle}>공지 제목</styled.label>
            <styled.textarea
              placeholder="입력해주세요"
              rows={1}
              value={studyAnnouncement.title}
              className={textareaStyle({
                type: studyAnnouncement.title?.length > 0 ? "typed" : "default",
              })}
              onChange={(e) => {
                setStudyAnnouncement({
                  ...studyAnnouncement,
                  title: e.target.value,
                });
              }}
            />
          </Flex>
          <Flex direction="column" gap="xs" width="100%">
            <styled.label className={labelStyle}>공지 링크</styled.label>
            <styled.textarea
              placeholder="http://example.com"
              rows={1}
              value={studyAnnouncement.link}
              className={textareaStyle({
                type: studyAnnouncement.link?.length > 0 ? "typed" : "default",
              })}
              onChange={(e) => {
                setStudyAnnouncement({
                  ...studyAnnouncement,
                  link: e.target.value,
                });
              }}
            />
          </Flex>
        </Flex>
        <Space height={28} />
        <Flex gap="sm">
          <Button variant="outline" onClick={onClose}>
            취소
          </Button>
          <Button onClick={handleClickModifyButton}>수정하기</Button>
        </Flex>
      </Flex>
    </Modal>
  );
};

export default AnnouncementModifyModal;

const labelStyle = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  textStyle: "label2",
  color: "sub",
});

const textareaStyle = cva({
  base: {
    borderRadius: "sm",
    borderWidth: "button",
    borderStyle: "solid",
    paddingX: "sm",
    paddingY: "xs",
    textStyle: "body1",
    height: "2.625rem",
    maxHeight: "7.5rem",
    overflowY: "hidden",
    resize: "none",
    backgroundColor: "backgroundNormal",
    _placeholder: {
      color: "outline",
    },
    _focus: {
      outline: "none",
      borderColor: "primary",
    },
    _scrollbar: {
      width: "2px",
    },
    _scrollbarThumb: {
      width: "2px",
      height: "65px",
      borderRadius: "sm",
      backgroundColor: "outline",
    },
    _scrollbarTrack: {
      marginTop: "2px",
      marginBottom: "2px",
    },
  },
  variants: {
    type: {
      default: {
        borderColor: "outline",
        color: "outline",
      },
      typed: {
        borderColor: "sub",
        color: "textBlack",
      },
    },
  },
});
