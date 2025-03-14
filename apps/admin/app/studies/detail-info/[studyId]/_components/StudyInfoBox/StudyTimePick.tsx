import "@wojtekmaj/react-timerange-picker/dist/TimeRangePicker.css";
import "react-clock/dist/Clock.css";

import { Flex } from "@styled-system/jsx";
import TimeRangePicker from "@wojtekmaj/react-timerange-picker";
import { Text } from "@wow-class/ui";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

type ValuePiece = Date | string | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

/**
 * TODO: wow-ds 컴포넌트로 교체 필요
 */
const StudyTimePick = ({ index }: { index: number }) => {
  const { control, setValue, watch } = useFormContext();
  const [value, onChange] = useState<Value>("");

  const startDate = watch(`studySessions.${index}.lessonPeriod.startDate`);
  const formattedStartDate = startDate ? startDate.split("T")[0] : "";

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

        const endDateTime = `${formattedStartDate}T${endTime[0]}:${endTime[1]}:00`;

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
    <Flex direction="column" gap="xs" position="relative" width={358}>
      <Text color="sub" typo="label2">
        스터디 시간
      </Text>
      <Controller
        control={control}
        name="startTime"
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
