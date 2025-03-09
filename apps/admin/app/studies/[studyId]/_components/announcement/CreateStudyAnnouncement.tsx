"use client";

import { css, cva } from "@styled-system/css";
import { Flex, styled } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { studyApi } from "apis/study/studyApi";
import { tags } from "constants/tags";
import useResizeTextarea from "hooks/useResizeTextarea";
import { useRef, useState } from "react";
import type { StudyAnnouncementType } from "types/entities/study";
import { revalidateTagByName } from "utils/revalidateTagByName";
import Button from "wowds-ui/Button";

const CreateStudyAnnouncement = ({ studyId }: { studyId: string }) => {
  const [studyAnnouncement, setStudyAnnouncement] =
    useState<StudyAnnouncementType>({
      studyId: parseInt(studyId, 10),
      title: "",
      link: "",
    });

  const titleTextareaRef = useRef<HTMLTextAreaElement>(null);
  const linkTextareaRef = useRef<HTMLTextAreaElement>(null);
  useResizeTextarea([titleTextareaRef, linkTextareaRef], studyAnnouncement);

  const handlePublishAnnouncement = async (studyId: string) => {
    const { success } =
      await studyApi.publishStudyAnnouncement(studyAnnouncement);
    if (success) {
      revalidateTagByName(tags.announcements);
      setStudyAnnouncement({
        studyId: parseInt(studyId, 10),
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
              onChange={(e) => {
                setStudyAnnouncement({
                  ...studyAnnouncement,
                  link: e.target.value,
                });
              }}
            />
          </Flex>
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
  minHeight: "171px",
  backgroundColor: "backgroundAlternative",
  borderRadius: "md",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  padding: "30px",
});

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
