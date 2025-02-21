"use client";

import { Flex } from "@styled-system/jsx";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import DropDown from "wowds-ui/DropDown";
import DropDownOption from "wowds-ui/DropDownOption";
import RangeDatePicker from "wowds-ui/RangeDatePicker";

import { getUpcomingSemesters } from "./getUpcomingSemesters";

const StudySemesterSelect = () => {
  const { setValue } = useFormContext();
  const { semesters, semestersDict } = getUpcomingSemesters();

  const [selected, setSelected] = useState<
    | {
        from: Date | undefined;
        to?: Date | undefined;
      }
    | undefined
  >();

  return (
    <Flex alignItems="center" gap={36} width="100%">
      <DropDown
        label="진행학기"
        placeholder="선택하세요"
        style={{ width: "358px" }}
        onChange={(value) => {
          const semester = semestersDict[value.selectedValue];
          if (!semester) return;
          setValue(
            "semester",
            {
              academicYear: semester.academicYear,
              semesterType: semester.semesterType,
            },
            { shouldValidate: true }
          );
        }}
      >
        {semesters.map((semester) => (
          <DropDownOption
            key={semester.valueKey}
            text={semester.text}
            value={semester.valueKey}
          />
        ))}
      </DropDown>
      <RangeDatePicker
        label="스터디 신청 기간"
        selected={selected}
        onSelect={setSelected}
      />
    </Flex>
  );
};

export default StudySemesterSelect;
