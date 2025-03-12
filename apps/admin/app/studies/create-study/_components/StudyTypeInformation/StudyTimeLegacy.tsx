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
const StudyTimeLegacy = () => {
  const { control, setValue, watch } = useFormContext();
  const [value, onChange] = useState<Value>("");

  const isAssignmentStudy = watch("studyType") === "ASSIGNMENT";

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
        setValue(
          "startTime",
          {
            hour: Number(startTime[0]),
            minute: Number(startTime[1]),
            second: 0,
            nano: 0,
          },
          { shouldValidate: true }
        );

        setValue(
          "endTime",
          {
            hour: Number(endTime[0]),
            minute: Number(endTime[1]),
            second: 0,
            nano: 0,
          },
          { shouldValidate: true }
        );
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
            disabled={isAssignmentStudy}
            value={value}
            onChange={handleSetTime}
          />
        )}
        rules={{
          required: !isAssignmentStudy,
        }}
      />
    </Flex>
  );
};

export default StudyTimeLegacy;
