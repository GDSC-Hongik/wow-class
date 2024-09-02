"use client";

import { Flex } from "@styled-system/jsx";
import { formatDateToISOString } from "@wow-class/utils";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import type {
  AssignmentApiRequestDto,
  AssignmentApiResponseDto,
} from "types/dtos/assignmentList";
import PickerGroup from "wowds-ui/PickerGroup";
import SingleDatePicker from "wowds-ui/SingleDatePicker";
import TimePicker from "wowds-ui/TimePicker";

import CustomTextField from "./CustomTextField";

const AssignmentForm = ({
  assignment,
}: {
  assignment: AssignmentApiResponseDto;
}) => {
  const { control, setValue } = useFormContext<AssignmentApiRequestDto>();
  const { title, descriptionLink, deadline } = assignment;
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    deadline ? new Date(deadline) : undefined
  );

  return (
    <Flex direction="column" gap="2.25rem">
      <CustomTextField
        control={control}
        {...(title ? { defaultValue: title } : {})}
        label="과제 제목"
        maxLength={100}
        name="title"
        placeholder="Ex. HTTP 통신 코드 작성하기"
      />
      <CustomTextField
        control={control}
        {...(descriptionLink ? { defaultValue: descriptionLink } : {})}
        label="과제 명세 링크"
        name="descriptionNotionLink"
        placeholder="https://example.com"
        // TODO: 링크 형식 validate
      />
      <PickerGroup
        selectedDate={selectedDate}
        setSelectedDate={(date) => {
          setSelectedDate(date);
          if (date) {
            setValue("deadLine", formatDateToISOString(date), {
              shouldValidate: true,
            });
          }
        }}
      >
        <SingleDatePicker
          label="종료 날짜"
          // TODO: 해당 과제 주차만 선택할 수 있도록?
          // disabled={{}}
        />
        <TimePicker label="종료 시간" />
      </PickerGroup>
    </Flex>
  );
};

export default AssignmentForm;
