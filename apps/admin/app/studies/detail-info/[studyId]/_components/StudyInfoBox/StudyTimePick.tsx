import "@wojtekmaj/react-timerange-picker/dist/TimeRangePicker.css";
import "react-clock/dist/Clock.css";

import { Flex } from "@styled-system/jsx";
import TimeRangePicker from "@wojtekmaj/react-timerange-picker";
import { Text } from "@wow-class/ui";
import { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

type ValuePiece = Date | string | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const StudyTimePick = ({ index }: { index: number }) => {
  const { control, setValue, watch } = useFormContext();

  const watchedStartDate = watch(
    `studySessions.${index}.lessonPeriod.startDate`
  );
  const watchedEndDate = watch(`studySessions.${index}.lessonPeriod.endDate`);

  const [startDate, watchedStartTime] = watchedStartDate
    ? watchedStartDate.split("T")
    : ["", "00:00:00"];

  const [_, watchedEndTime] = watchedEndDate
    ? watchedEndDate.split("T")
    : ["", "23:59:59"];

  const formattedStartDate = startDate || "";
  const formattedEndDate = startDate || "";

  const [value, onChange] = useState<Value>(
    watchedStartTime && watchedEndTime
      ? [
          `${watchedStartTime.split(":")[0]}:${watchedStartTime.split(":")[1]}`,
          `${watchedEndTime.split(":")[0]}:${watchedEndTime.split(":")[1]}`,
        ]
      : ["00:00", "23:59"]
  );

  useEffect(() => {
    if (watchedStartTime && watchedEndTime) {
      onChange([
        `${watchedStartTime.split(":")[0]}:${watchedStartTime.split(":")[1]}`,
        `${watchedEndTime.split(":")[0]}:${watchedEndTime.split(":")[1]}`,
      ]);
    }
  }, [watchedStartTime, watchedEndTime]);

  const handleSetTime = (value: Value) => {
    if (!value) return;
    onChange(value);
    if (Array.isArray(value) && value.length === 2) {
      const startTime = value[0]?.toString().split(":");
      const endTime = value[1]?.toString().split(":");

      if (startTime && endTime) {
        if (startTime > endTime) {
          window.alert("스터디 종료 시간은 스터디 시작 시간 이후여야 합니다!");
          return;
        }

        const startDateTime = `${formattedStartDate}T${startTime[0]}:${startTime[1]}:00`;
        const endDateTime = `${formattedEndDate}T${endTime[0]}:${endTime[1]}:00`;

        setValue(
          `studySessions.${index}.lessonPeriod.startDate`,
          startDateTime,
          { shouldValidate: true }
        );

        setValue(`studySessions.${index}.lessonPeriod.endDate`, endDateTime, {
          shouldValidate: true,
        });
      }
    }
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
    >
      <Text color="sub" typo="label2">
        수업 시간
      </Text>
      <Controller
        control={control}
        name={`studySessions.${index}.lessonPeriod.startDate`}
        render={() => (
          <TimeRangePicker
            disableClock={true}
            value={value}
            onChange={handleSetTime}
          />
        )}
      />
    </Flex>
  );
};

export default StudyTimePick;
