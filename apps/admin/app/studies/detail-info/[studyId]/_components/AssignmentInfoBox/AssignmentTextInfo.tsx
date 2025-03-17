import { css } from "@styled-system/css";
import { Text } from "@wow-class/ui";
import { useFormContext } from "react-hook-form";

const AssignemntTextInfo = ({ index }: { index: number }) => {
  const { register, watch } = useFormContext();
  return (
    <>
      <div className={CurriculumTitleStyle}>
        <Text color="sub">과제 제목</Text>
        <textarea
          maxLength={100}
          placeholder="ex) HTTP 통신 코드 작성하기"
          {...register(`studySessions.${index}.assignmentTitle`, {
            maxLength: 100,
          })}
        />
        <Text
          color="sub"
          style={{ position: "absolute", right: "8px" }}
          typo="label3"
        >
          {watch(`studySessions.${index}.assignmentTitle`)?.length}/100
        </Text>
      </div>
      <div className={CurriculumDescriptionStyle}>
        <Text className={textStyle} color="sub" typo="body1">
          과제 명세 링크
        </Text>
        <textarea
          maxLength={100}
          placeholder="http://example.com"
          {...register(`studySessions.${index}.assignmentDescriptionLink`, {
            maxLength: 100,
          })}
        />
      </div>
    </>
  );
};

export default AssignemntTextInfo;

const textStyle = css({
  whiteSpace: "nowrap",
});

const CurriculumTitleStyle = css({
  position: "relative",
  width: "100%",
  height: "42px",
  display: "flex",
  borderBottom: "1px solid",
  borderColor: "outline",
  alignItems: "center",
  padding: "xs",
  gap: "xs",
  "& textarea": {
    width: "80%",
    position: "absolute",
    top: "8px",
    height: "26px",
    left: "90px",
    resize: "none",
    _focus: {
      outline: "none",
      borderColor: "primary",
    },
  },
});

const CurriculumDescriptionStyle = css({
  height: "42px",
  position: "relative",
  width: "100%",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  padding: "xs",
  gap: "xs",
  "& textarea": {
    height: "42px",
    textAlign: "start",
    minWidth: "80%",
    resize: "none",
    scrollbarWidth: "none",
    _focus: {
      outline: "none",
      borderColor: "primary",
    },
  },
});
