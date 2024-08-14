import { Controller, useFormContext } from "react-hook-form";
import DropDown from "wowds-ui/DropDown";
import DropDownOption from "wowds-ui/DropDownOption";

const StudySemesterSelect = () => {
  const { control } = useFormContext();
  return (
    <Controller
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
