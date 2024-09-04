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
  const { title, descriptionLink, deadline, studyDetailStartDate } = assignment;
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    deadline ? new Date(deadline) : undefined
  );

  const startDate = findStartDate(studyDetailStartDate);

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
          disabled={startDate && { before: startDate }}
          label="종료 날짜"
        />
        <TimePicker label="종료 시간" />
      </PickerGroup>
    </Flex>
  );
};

const findStartDate = (curriculumStartString?: string) => {
  const today = new Date();
  const tomorrow = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 1
  );
  if (!curriculumStartString) return tomorrow;

  const curriculumStartDate = new Date(curriculumStartString);

  const curriculumStartTime = curriculumStartDate.getTime();
  const tomorrowTime = tomorrow.getTime();

  if (curriculumStartTime > tomorrowTime) return curriculumStartDate;
  return tomorrow;
};

export default AssignmentForm;
