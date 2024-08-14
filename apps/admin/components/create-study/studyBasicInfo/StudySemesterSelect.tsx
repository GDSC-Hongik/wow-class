import type { Control } from "react-hook-form";
import { Controller, useFormContext } from "react-hook-form";
import type { CreateStudyFormType } from "types/entities/study";
import DropDown from "wowds-ui/DropDown";
import DropDownOption from "wowds-ui/DropDownOption";

const StudySemesterSelect = () => {
  const { register, control } = useFormContext();
  return (
    <Controller
      {...register("studyYearSemester")}
      control={control}
      name="studyYearSemester"
      render={({ field }) => (
        <DropDown
          label="학기"
          placeholder="선택하세요"
          {...field}
          onChange={({ selectedValue }) => {
            field.onChange(selectedValue);
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
