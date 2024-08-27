import "react-day-picker/style.css";

import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import {
  dateToFormatString,
  formatStringToDate,
  getStudyEndDate,
} from "@wow-class/utils";
import useClickOutside from "hooks/useClickOutSide";
import { useRef, useState } from "react";
import type { DateRange } from "react-day-picker";
import { DayPicker } from "react-day-picker";
import { Controller, useFormContext } from "react-hook-form";

const StudyStartDatePick = () => {
  const [studyDate, setStudyDate] = useState({
    fromValue: "",
    toValue: "",
  });
  const datepickerRef = useRef(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { control, getValues, setValue } = useFormContext();
  const [inputValue, setInputValue] = useState("");

  const week = getValues("totalWeek");

  useClickOutside(datepickerRef, () => {
    setIsOpen(false);
  });

  const handleStudyDateSelect = (
    week: unknown,
    date: Date,
    triggerDate: DateRange | undefined
  ) => {
    if (week && date) {
      const startDateString = dateToFormatString(date);
      const endDateString = dateToFormatString(
        getStudyEndDate(date, Number(week))
      );
      setStudyDate({
        fromValue: startDateString,
        toValue: endDateString,
      });
      setInputValue(`${startDateString} ~ ${endDateString}`);
      setValue("startDate", startDateString);
      setIsOpen(false);
    } else {
      if (triggerDate)
        setStudyDate({
          fromValue: dateToFormatString(triggerDate?.from!!),
          toValue: dateToFormatString(triggerDate?.to!!),
        });
    }
  };

  return (
    <Flex direction="column" position="relative">
      <Text color="sub" style={{ marginBottom: "8px" }} typo="label2">
        스터디 진행 기간
      </Text>
      <Controller
        control={control}
        name="startDate"
        render={() => (
          <Flex direction="column" gap="xs" position="relative">
            <input
              className={StudyDatePickerStyle}
              placeholder="YYYY-MM-DD ~ YYYY-MM-DD"
              value={inputValue}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />
            <Text color="primary" typo="body3">
              * 휴강 주차 포함
            </Text>
          </Flex>
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
            selected={{
              from: formatStringToDate(studyDate.fromValue),
              to: formatStringToDate(studyDate.toValue),
            }}
            style={{
              position: "absolute",
              top: "100px",
              zIndex: 99,
              backgroundColor: "white",
            }}
            onSelect={(triggerDate, selected) => {
              handleStudyDateSelect(week, selected, triggerDate);
            }}
          />
        </div>
      )}
    </Flex>
  );
};

export default StudyStartDatePick;

const StudyDatePickerStyle = css({
  width: "100%",
  maxWidth: "358px",
  border: "1px solid",
  borderRadius: "sm",
  borderColor: "outline",
  height: "44px",
  padding: "8px 12px",
  caretColor: "transparent",
  cursor: "pointer",
  _placeholder: {
    color: "outline",
  },
  _focus: {
    outline: "none",
  },
});
