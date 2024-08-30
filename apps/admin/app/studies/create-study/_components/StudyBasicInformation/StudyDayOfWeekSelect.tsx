import { dayToKoreanList } from "constants/dayToKorean";
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
          {...field}
          label="스터디 요일"
          placeholder="선택하세요"
          onChange={({ selectedValue }) => {
            field.onChange(selectedValue);
          }}
        >
          {dayToKoreanList.map(({ text, value }) => (
            <DropDownOption key={`${text}`} text={text} value={value!!} />
          ))}
        </DropDown>
      )}
      rules={{
        required: true,
      }}
    />
  );
};

export default StudyDayOfWeekSelect;
