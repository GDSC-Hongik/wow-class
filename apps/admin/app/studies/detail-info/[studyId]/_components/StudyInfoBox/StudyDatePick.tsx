import "react-day-picker/style.css";

import { css, cva } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { dateToFormatString, formatStringToDate } from "@wow-class/utils";
import useClickOutside from "hooks/useClickOutSide";
import Image from "next/image";
import { useRef, useState } from "react";
import { DayPicker } from "react-day-picker";
import { Controller, useFormContext } from "react-hook-form";
import type { PeriodType } from "types/entities/period";
interface StudyDatePickProps {
  lessonPeriod: PeriodType;
  index: number;
}
const StudyDatePick = ({ index, lessonPeriod }: StudyDatePickProps) => {
  const { control, setValue, watch } = useFormContext();

  const watchedStartDate = watch(
    `studySessions.${index}.lessonPeriod.startDate`
  );
  const watchedEndDate = watch(`studySessions.${index}.lessonPeriod.endDate`);

  const [watchedStartDateOnly, watchedStartTime] = watchedStartDate
    ? watchedStartDate.split("T")
    : [lessonPeriod.startDate?.split("T")[0] || "", "00:00:00"];

  const [_, watchedEndTime] = watchedEndDate
    ? watchedEndDate.split("T")
    : [lessonPeriod.endDate?.split("T")[0] || "", "23:59:59"];

  const [studyDate, setStudyDate] = useState<string>(watchedStartDateOnly);
  const [inputValue, setInputValue] = useState(watchedStartDateOnly);

  const datepickerRef = useRef(null);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useClickOutside(datepickerRef, () => {
    setIsOpen(false);
  });

  const handleStudyDateSelect = (selectedDate: Date | undefined) => {
    if (!selectedDate) return;
    const selectedDateString = dateToFormatString(selectedDate);

    const updatedStartDate = `${selectedDateString}T${watchedStartTime}`;
    const updatedEndDate = `${selectedDateString}T${watchedEndTime}`;

    setStudyDate(selectedDateString);
    setInputValue(selectedDateString);
    setValue(
      `studySessions.${index}.lessonPeriod.startDate`,
      updatedStartDate,
      { shouldValidate: true }
    );
    setValue(`studySessions.${index}.lessonPeriod.endDate`, updatedEndDate, {
      shouldValidate: true,
    });
  };

  return (
    <Flex
      alignItems="center"
      borderBottom="1px solid"
      borderColor="outline"
      gap={52}
      height={42}
      paddingX={8}
      paddingY={12}
      position="relative"
    >
      <Text className={textStyle} color="sub">
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
      <Image alt="calander" height={24} src="/images/calander.svg" width={24} />
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
              top: "42px",
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

const textStyle = css({
  whiteSpace: "nowrap",
});
const StudyDatePickerStyle = cva({
  base: {
    width: "100%",

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
