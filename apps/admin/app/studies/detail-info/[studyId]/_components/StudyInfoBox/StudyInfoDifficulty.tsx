import { css } from "@styled-system/css";
import { Text } from "@wow-class/ui";
import type { ReactNode } from "react";
import type { ControllerRenderProps, FieldValues } from "react-hook-form";
import { Controller, useFormContext } from "react-hook-form";
import type {
  StudyDifficultyArrayType,
  StudyDifficultyType,
} from "types/entities/study";
import { DownArrow } from "wowds-icons";
import DropDown from "wowds-ui/DropDown";
import DropDownOption from "wowds-ui/DropDownOption";

const StudyInfoDifficulty = ({ index }: { index: number }) => {
  const { control, watch } = useFormContext();

  const handleChangeStudyDifficulty = ({
    selectedValue,
    field,
  }: {
    selectedValue: string;
    selectedText: ReactNode;
    field: ControllerRenderProps<FieldValues, string>;
  }) => {
    field.onChange(selectedValue);
  };
  return (
    <Controller
      control={control}
      name={`studyCurriculums.${index}.difficulty`}
      render={({ field }) => (
        <DropDown
          {...field}
          style={{ width: "100%" }}
          trigger={
            <div className={StudyDifficultySelectStyle}>
              <div className={StudyDifficultySelectText}>
                <Text color="sub">난이도</Text>
                <Text color="textBlack">
                  {
                    difficultyMap[
                      watch(
                        `studyCurriculums.${index}.difficulty`
                      ) as StudyDifficultyType
                    ]
                  }
                </Text>
              </div>
              <DownArrow height={20} stroke="sub" width={20} />
            </div>
          }
          onChange={({ selectedText, selectedValue }) => {
            handleChangeStudyDifficulty({ selectedValue, selectedText, field });
          }}
        >
          {difficultyArray.map(({ text, value }) => (
            <DropDownOption key={`option-${value}`} text={text} value={value} />
          ))}
        </DropDown>
      )}
    />
  );
};

export default StudyInfoDifficulty;

const StudyDifficultySelectStyle = css({
  width: "100%",
  height: "42px",
  borderBottom: "1px solid",
  borderTop: "1px solid",
  borderColor: "outline",
  padding: "xs",
  display: "flex",
  justifyContent: "space-between",
});

const StudyDifficultySelectText = css({
  display: "flex",
  gap: "8px",
});

export const difficultyArray: StudyDifficultyArrayType = [
  { text: "고급", value: "HIGH" },
  { text: "중급", value: "MEDIUM" },
  { text: "초급", value: "LOW" },
  { text: "기초", value: "BASIC" },
];

export const difficultyMap: Record<StudyDifficultyType, string> = {
  HIGH: "고급",
  MEDIUM: "중급",
  LOW: "초급",
  BASIC: "기초",
};
