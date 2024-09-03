"use client";

import { css, cva } from "@styled-system/css";
import { Flex, styled } from "@styled-system/jsx";
import { Modal, Space, Text } from "@wow-class/ui";
import { useModalRoute } from "@wow-class/ui/hooks";
import { studyApi } from "apis/study/studyApi";
import { tags } from "constants/tags";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
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

  const titleTextareaRef = useRef<HTMLTextAreaElement>(null);
  const linkTextareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setStudyAnnouncement(prefillData);
  }, [prefillData]);

  useEffect(() => {
    autoResizeTextarea(titleTextareaRef.current);
    autoResizeTextarea(linkTextareaRef.current);
  }, [studyAnnouncement]);

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

  const autoResizeTextarea = (textarea: HTMLTextAreaElement | null) => {
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
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
              ref={titleTextareaRef}
              rows={1}
              value={studyAnnouncement.title}
              className={textareaStyle({
                type: studyAnnouncement.title?.length > 0 ? "typed" : "default",
              })}
              onInput={() => autoResizeTextarea(titleTextareaRef.current)}
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
              ref={linkTextareaRef}
              rows={1}
              value={studyAnnouncement.link}
              className={textareaStyle({
                type: studyAnnouncement.link?.length > 0 ? "typed" : "default",
              })}
              onInput={() => autoResizeTextarea(linkTextareaRef.current)}
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
    maxHeight: "6rem",
    resize: "none",
    overflowY: "auto",
    backgroundColor: "backgroundNormal",
    _placeholder: {
      color: "outline",
    },
    _focus: {
      outline: "none",
      borderColor: "primary",
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
