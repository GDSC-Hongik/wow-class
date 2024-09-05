import "react-day-picker/style.css";

import { cva } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import {
  dateToFormatString,
  formatStringToDate,
  getStudyEndDate,
} from "@wow-class/utils";
import useClickOutside from "hooks/useClickOutSide";
import { useCallback, useEffect, useRef, useState } from "react";
import { DayPicker } from "react-day-picker";
import { Controller, useFormContext } from "react-hook-form";

const StudyStartDatePick = () => {
  const [studyDate, setStudyDate] = useState({
    fromValue: "",
    toValue: "",
  });
  const datepickerRef = useRef(null);
  const today = new Date();
  const yesterday = new Date(today);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { control, setValue, watch } = useFormContext();
  const [inputValue, setInputValue] = useState("");

  const week = watch("totalWeek");
  const studyApplyEndDate = formatStringToDate(
    watch("applicationEndDate") || ""
  );
  const studyApplyDateYearLater = new Date(studyApplyEndDate);
  studyApplyDateYearLater.setFullYear(studyApplyEndDate.getFullYear() + 1);

  useClickOutside(datepickerRef, () => {
    setIsOpen(false);
  });

  const handleStudyDateSelect = useCallback(
    (week: unknown, date: Date) => {
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
        setValue("startDate", startDateString, { shouldValidate: true });
        setIsOpen(false);
      }
    },
    [setValue]
  );

  useEffect(() => {
    if (studyDate.toValue) {
      handleStudyDateSelect(week, formatStringToDate(studyDate.fromValue));
    }
  }, [handleStudyDateSelect, studyDate.fromValue, studyDate.toValue, week]);

  const disableDateList = [
    {
      from: new Date(0),
      to: yesterday,
    },
    ...(watch("applicationEndDate")
      ? [
          {
            from: new Date(0),
            to: studyApplyEndDate,
          },
        ]
      : []),
  ];

  return (
    <Flex direction="column" position="relative" width={358}>
      <Text color="sub" style={{ marginBottom: "8px" }} typo="label2">
        스터디 진행 기간
      </Text>
      <Controller
        control={control}
        name="startDate"
        render={() => (
          <Flex direction="column" gap="xs" position="relative">
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
                if (!week) {
                  return window.alert("스터디 코스를 먼저 선택해주세요");
                }
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
            disabled={disableDateList}
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
              handleStudyDateSelect(week, selected);
            }}
          />
        </div>
      )}
    </Flex>
  );
};

export default StudyStartDatePick;

const StudyDatePickerStyle = cva({
  base: {
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
