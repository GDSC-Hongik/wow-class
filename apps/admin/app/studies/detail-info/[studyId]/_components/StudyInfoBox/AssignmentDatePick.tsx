import "react-day-picker/style.css";

import { css, cva } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { dateToFormatString, formatStringToDate } from "@wow-class/utils";
import useClickOutside from "hooks/useClickOutSide";
import { useRef, useState } from "react";
import type { DateRange } from "react-day-picker";
import { DayPicker } from "react-day-picker";
import { Controller, useFormContext } from "react-hook-form";

interface AssignmentDatePickProps {
  assignmentPeriod: {
    startDate: string;
    endDate: string;
  };
  index: number;
}

const AssignmentDatePick = ({
  assignmentPeriod,
  index,
}: AssignmentDatePickProps) => {
  const { control, setValue, watch } = useFormContext();

  const initialStartDate =
    (
      watch(`studySessions[${index}].assignmentPeriod.startDate`) ||
      assignmentPeriod.startDate
    )?.split("T")[0] || "";

  const initialEndDate =
    (
      watch(`studySessions[${index}].assignmentPeriod.endDate`) ||
      assignmentPeriod.endDate
    )?.split("T")[0] || "";

  const [studyDate, setStudyDate] = useState({
    fromValue: initialStartDate,
    toValue: initialEndDate,
  });

  const datepickerRef = useRef(null);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState(
    initialStartDate ? `${initialStartDate} ~ ${initialEndDate}` : ""
  );

  useClickOutside(datepickerRef, () => {
    setIsOpen(false);
  });

  const handleStudyDateSelect = (triggerDate: DateRange | undefined) => {
    if (!triggerDate) return;
    const startDateString = dateToFormatString(triggerDate.from!).split("T")[0];
    const endDateString = dateToFormatString(triggerDate.to!).split("T")[0];

    setStudyDate({
      fromValue: startDateString,
      toValue: endDateString,
    });

    setInputValue(`${startDateString} ~ ${endDateString}`);

    setValue(
      `studySessions[${index}].assignmentPeriod.startDate`,
      startDateString,
      { shouldValidate: true }
    );

    setValue(
      `studySessions[${index}].assignmentPeriod.endDate`,
      endDateString,
      { shouldValidate: true }
    );
  };

  return (
    <Flex
      alignItems="center"
      borderBottom="1px solid"
      borderColor="outline"
      gap={52}
      paddingX={8}
      paddingY={12}
      position="relative"
      width="100%"
    >
      <Text className={textStyle} color="sub" typo="label2">
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
            onChange={() => {}}
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

const textStyle = css({
  whiteSpace: "nowrap",
});

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
