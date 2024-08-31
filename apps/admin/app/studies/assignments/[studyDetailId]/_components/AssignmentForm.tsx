"use client";

import { Flex } from "@styled-system/jsx";
import { formatDateToISOString } from "@wow-class/utils";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    if (selectedDate) {
      setValue("deadLine", formatDateToISOString(selectedDate), {
        shouldValidate: true,
      });
    }
  }, [selectedDate, setValue]);

  return (
    <Flex direction="column" gap="2.25rem">
      <CustomTextField
        control={control}
        defaultValue={title || undefined}
        label="과제 제목"
        maxLength={100}
        name="title"
        placeholder="Ex. HTTP 통신 코드 작성하기"
      />
      <CustomTextField
        control={control}
        defaultValue={descriptionLink || undefined}
        label="과제 명세 링크"
        name="descriptionNotionLink"
        placeholder="https://example.com"
        // TODO: 링크 형식 validate
      />
      <PickerGroup
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      >
        <SingleDatePicker label="종료 날짜" />
        <TimePicker label="종료 시간" />
      </PickerGroup>
    </Flex>
  );
};

export default AssignmentForm;
