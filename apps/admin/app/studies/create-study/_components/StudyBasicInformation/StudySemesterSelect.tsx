import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import DropDown from "wowds-ui/DropDown";
import DropDownOption from "wowds-ui/DropDownOption";

const StudySemesterSelect = () => {
  const { control, setValue } = useFormContext();
  const [semesterValue, setSemesterValue] = useState("");
  return (
    <Controller
      control={control}
      name="academicYear"
      render={({ field }) => (
        <DropDown
          label="학기"
          placeholder="선택하세요"
          {...field}
          value={semesterValue}
          onChange={({ selectedValue }) => {
            setSemesterValue(selectedValue);
            const [year, semester] = selectedValue.split("-");
            if (year && semester) {
              setValue("academicYear", Number(year), { shouldValidate: true });
              setValue("semesterType", semester, { shouldValidate: true });
            }
          }}
        >
          <DropDownOption text="2024-1" value="2024-FIRST" />
          <DropDownOption text="2024-2" value="2024-SECOND" />
        </DropDown>
      )}
      rules={{
        required: true,
      }}
    />
  );
};

export default StudySemesterSelect;
