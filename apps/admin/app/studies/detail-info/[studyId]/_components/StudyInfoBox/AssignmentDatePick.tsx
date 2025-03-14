import "react-day-picker/style.css";

import { cva } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import {
  dateToFormatString,
  formatStartEndDate,
  formatStringToDate,
} from "@wow-class/utils";
import useClickOutside from "hooks/useClickOutSide";
import { useRef, useState } from "react";
import type { DateRange } from "react-day-picker";
import { DayPicker } from "react-day-picker";
import { Controller, useFormContext } from "react-hook-form";

const AssignmentDatePick = ({ index }: { index: number }) => {
  const [studyDate, setStudyDate] = useState({
    fromValue: "",
    toValue: "",
  });
  const datepickerRef = useRef(null);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { control, setValue, watch } = useFormContext();
  const [inputValue, setInputValue] = useState("");
  const studyStartDate = formatStringToDate(watch("startDate") || "");
  const studyStartDateYearLater = new Date(studyStartDate);
  studyStartDateYearLater.setFullYear(studyStartDate.getFullYear() + 1);

  useClickOutside(datepickerRef, () => {
    setIsOpen(false);
  });

  const handleStudyDateSelect = (triggerDate: DateRange | undefined) => {
    if (!triggerDate) return;
    const startDateString = dateToFormatString(triggerDate.from!);
    const endDateString = dateToFormatString(triggerDate.to!);
    setStudyDate({
      fromValue: startDateString,
      toValue: endDateString,
    });
    setInputValue(`${startDateString} ~ ${endDateString}`);
    setValue(
      `studySessions[${index}].assignmentPeriod.startDate`,
      formatStartEndDate(triggerDate.from!, triggerDate.to!).startDate,
      { shouldValidate: true }
    );
    setValue(
      `studySessions[${index}].assignmentPeriod.endDate`,
      formatStartEndDate(triggerDate.from!, triggerDate.to!).endDate,
      { shouldValidate: true }
    );
  };

  return (
    <Flex gap="xs" position="relative" width={358}>
      <Text color="sub" typo="label2">
        과제 진행 기간
      </Text>
      <Controller
        control={control}
        name={`studySessions[${index}].assignmentPeriod.startDate`}
        render={() => (
          <input
            placeholder="YYYY-MM-DD ~ YYYY-MM-DD"
            value={inputValue}
            className={StudyDatePickerStyle({
              type: inputValue ? "selected" : "unSelected",
            })}
            onChange={() => {
              console.log("");
            }}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        )}
        rules={{
          required: true,
        }}
      />

      {isOpen && (
        <div ref={datepickerRef}>
          <DayPicker
            mode="range"
            weekStartsOn={1}
            disabled={{
              from: new Date(0),
              to: yesterday,
            }}
            selected={
              studyDate.fromValue || studyDate.toValue
                ? {
                    from: formatStringToDate(studyDate.fromValue),
                    to: formatStringToDate(studyDate.toValue),
                  }
                : undefined
            }
            style={{
              position: "absolute",
              top: "80px",
              zIndex: 99,
              backgroundColor: "white",
            }}
            styles={{
              month_grid: {
                marginBottom: "100px",
              },
            }}
            onSelect={(triggerDate) => {
              handleStudyDateSelect(triggerDate);
            }}
          />
        </div>
      )}
    </Flex>
  );
};

export default AssignmentDatePick;

const StudyDatePickerStyle = cva({
  base: {
    width: "100%",

    height: "44px",
    padding: "8px 12px",
    caretColor: "transparent",
    cursor: "pointer",
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
      selected: {
        borderColor: "sub",
      },
      unSelected: {
        borderColor: "outline",
      },
    },
  },
});
