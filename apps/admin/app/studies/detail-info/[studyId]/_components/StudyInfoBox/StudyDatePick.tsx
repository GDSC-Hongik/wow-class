import "react-day-picker/style.css";

import { cva } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { dateToFormatString, formatStringToDate } from "@wow-class/utils";
import useClickOutside from "hooks/useClickOutSide";
import { useRef, useState } from "react";
import { DayPicker } from "react-day-picker";
import { Controller, useFormContext } from "react-hook-form";

interface StudyDatePickProps {
  lessonPeriod: {
    startDate: string;
    endDate: string;
  };
  index: number;
}
const StudyDatePick = ({ index, lessonPeriod }: StudyDatePickProps) => {
  const [studyDate, setStudyDate] = useState<string>(lessonPeriod.startDate);
  const datepickerRef = useRef(null);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { control, setValue, watch } = useFormContext();
  const [inputValue, setInputValue] = useState(lessonPeriod.startDate);

  useClickOutside(datepickerRef, () => {
    setIsOpen(false);
  });

  const handleStudyDateSelect = (selectedDate: Date | undefined) => {
    if (!selectedDate) return;
    const selectedDateString = dateToFormatString(selectedDate);
    setStudyDate(selectedDateString);
    setInputValue(selectedDateString);
    setValue(
      `studySessions.${index}.lessonPeriod.startDate`,
      `${selectedDateString}T00:00:00`,
      {
        shouldValidate: true,
      }
    );
    setValue(
      `studySessions.${index}.lessonPeriod.endDate`,
      `${selectedDateString}T23:59:59`,
      {
        shouldValidate: true,
      }
    );
  };

  return (
    <Flex gap="xs" position="relative" width={358}>
      <Text color="sub" typo="label2">
        수업 날짜
      </Text>
      <Controller
        control={control}
        name={`studySessions.${index}.lessonPeriod.startDate`}
        render={() => (
          <input
            placeholder="YYYY-MM-DD"
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
            mode="single"
            selected={studyDate ? formatStringToDate(studyDate) : undefined}
            weekStartsOn={1}
            disabled={{
              from: new Date(0),
              to: yesterday,
            }}
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
            onSelect={(selectedDate) => {
              handleStudyDateSelect(selectedDate);
            }}
          />
        </div>
      )}
    </Flex>
  );
};

export default StudyDatePick;

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
