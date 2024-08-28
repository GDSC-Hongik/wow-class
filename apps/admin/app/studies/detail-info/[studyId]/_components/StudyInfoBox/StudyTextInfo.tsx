import { css } from "@styled-system/css";
import { Text } from "@wow-class/ui";
import { useFormContext } from "react-hook-form";

const StudyTextInfo = ({ index }: { index: number }) => {
  const { register, watch } = useFormContext();
  return (
    <>
      <div className={CurriculumTitleStyle}>
        <Text color="sub" typo="body1">
          제목
        </Text>
        <textarea
          maxLength={100}
          {...register(`studyCurriculums.${index}.title`, {
            maxLength: 100,
          })}
        />
        <Text
          color="sub"
          style={{ position: "absolute", right: "8px" }}
          typo="label3"
        >
          {watch(`studyCurriculums.${index}.title`)?.length}/100
        </Text>
      </div>
      <div className={CurriculumDescriptionStyle}>
        <Text color="sub" typo="body1">
          설명
        </Text>
        <textarea
          maxLength={100}
          {...register(`studyCurriculums.${index}.description`, {
            maxLength: 100,
          })}
        />
        <Text
          color="sub"
          style={{ position: "absolute", right: "8px" }}
          typo="label3"
        >
          {watch(`studyCurriculums.${index}.description`)?.length}/100
        </Text>
      </div>
    </>
  );
};

export default StudyTextInfo;

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
    left: "45px",
    resize: "none",
    _focus: {
      outline: "none",
    },
  },
});

const CurriculumDescriptionStyle = css({
  height: "120px",
  position: "relative",
  width: "100%",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  padding: "xs",
  gap: "xs",
  "& textarea": {
    height: "110px",
    textAlign: "start",
    minWidth: "80%",
    resize: "none",
    scrollbarWidth: "none",
    _focus: {
      outline: "none",
    },
  },
});
