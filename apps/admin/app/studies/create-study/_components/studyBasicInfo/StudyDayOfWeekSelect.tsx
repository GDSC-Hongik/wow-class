import { Controller, useFormContext } from "react-hook-form";
import DropDown from "wowds-ui/DropDown";
import DropDownOption from "wowds-ui/DropDownOption";

const StudyDayOfWeekSelect = () => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name="dayOfWeek"
      render={({ field }) => (
        <DropDown
          label="스터디 요일"
          placeholder="선택하세요"
          {...field}
          onChange={({ selectedValue }) => {
            field.onChange(selectedValue);
          }}
        >
          <DropDownOption text="월요일" value="MONDAY" />
          <DropDownOption text="화요일" value="TUESDAY" />
          <DropDownOption text="수요일" value="WEDNESDAY" />
          <DropDownOption text="목요일" value="THURSDAY" />
          <DropDownOption text="금요일" value="FRIDAY" />
          <DropDownOption text="토요일" value="SATURDAY" />
          <DropDownOption text="일요일" value="SUNDAY" />
        </DropDown>
      )}
      rules={{
        required: true,
      }}
    />
  );
};

export default StudyDayOfWeekSelect;
