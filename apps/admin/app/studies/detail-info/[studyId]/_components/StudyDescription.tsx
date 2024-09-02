import { css, cva } from "@styled-system/css";
import { Flex, styled } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { useFormContext } from "react-hook-form";
export interface PrefillStudyBasicInfo {
  notionLink?: string;
  introduction?: string;
}

const StudyDescription = () => {
  const { setValue, watch, register } = useFormContext();

  return (
    <section
      aria-label="create-study-description"
      className={StudyDescriptionSectionStyle}
    >
      <Text typo="h2">스터디 상세</Text>
      <Flex direction="column" gap="36px">
        <Flex direction="column" gap="xs">
          <styled.label className={labelStyle}>스터디 소개 페이지</styled.label>
          <styled.textarea
            placeholder="http://example.com"
            rows={1}
            className={textareaStyle({
              type: watch("notionLink")?.length > 0 ? "typed" : "default",
            })}
            {...register("notionLink")}
            onChange={(e) => {
              setValue("notionLink", e.target.value, { shouldValidate: true });
            }}
          />
        </Flex>
        <Flex direction="column" gap="xs">
          <styled.label className={labelStyle}>
            <Text color="sub" typo="label2">
              스터디 한 줄 소개
            </Text>
            <Text color="sub" typo="label2">
              {watch("introduction")?.length}/100
            </Text>
          </styled.label>
          <styled.textarea
            maxLength={100}
            placeholder="Ex. 새싹 개발자분들을 위한 개발 입문 스터디"
            rows={1}
            className={textareaStyle({
              type: watch("introduction")?.length > 0 ? "typed" : "default",
            })}
            {...register("introduction")}
            onChange={(e) => {
              setValue("introduction", e.target.value, {
                shouldValidate: true,
              });
            }}
          />
        </Flex>
      </Flex>
    </section>
  );
};

export default StudyDescription;

const StudyDescriptionSectionStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "xl",
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
      typing: {
        borderColor: "primary",
        color: "textBlack",
      },
      typed: {
        borderColor: "sub",
        color: "textBlack",
      },
      success: {
        borderColor: "success",
        color: "textBlack",
      },
      error: {
        borderColor: "error",
        color: "textBlack",
      },
    },
  },
});
