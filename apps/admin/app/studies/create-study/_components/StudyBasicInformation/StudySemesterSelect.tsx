"use client";

import { useFormContext } from "react-hook-form";
import DropDown from "wowds-ui/DropDown";
import DropDownOption from "wowds-ui/DropDownOption";

import { getUpcomingSemesters } from "./getUpcomingSemesters";

const StudySemesterSelect = () => {
  const { setValue } = useFormContext();
  const { semesters, semestersDict } = getUpcomingSemesters();

  return (
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
  );
};

export default StudySemesterSelect;
