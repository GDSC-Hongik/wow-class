"use client";

import { useFormContext } from "react-hook-form";
import type { DropDownProps } from "wowds-ui/DropDown";
import DropDown from "wowds-ui/DropDown";
import DropDownOption from "wowds-ui/DropDownOption";

import { getUpcomingSemesters } from "./getUpcomingSemesters";

const StudySemesterSelect = () => {
  const { setValue } = useFormContext();
  const { semesters, semestersDict } = getUpcomingSemesters();

  const handleChange: DropDownProps["onChange"] = (value) => {
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
  };

  return (
    <DropDown
      label="진행학기"
      placeholder="선택하세요"
      style={{ width: "358px" }}
      onChange={handleChange}
    >
      {semesters.map((semester) => (
        <DropDownOption
          key={semester.valueKey}
          text={semester.text}
          value={semester.valueKey}
        />
      ))}
    </DropDown>
  );
};

export default StudySemesterSelect;
