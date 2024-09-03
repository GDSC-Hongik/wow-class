import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { Controller, useFormContext } from "react-hook-form";
import DropDown from "wowds-ui/DropDown";
import DropDownOption from "wowds-ui/DropDownOption";

const StudyCourseSelect = () => {
  const { control } = useFormContext();
  return (
    <Flex direction="column" gap="xs" style={{ width: "358px" }}>
      <Controller
        control={control}
        name="totalWeek"
        render={({ field }) => (
          <DropDown
            {...field}
            label="스터디 코스"
            placeholder="선택하세요"
            value={field.value ? String(field.value) : ""}
            onChange={({ selectedValue }) => {
              field.onChange(Number(selectedValue));
            }}
          >
            <DropDownOption text="1주" value="1" />
            <DropDownOption text="2주" value="2" />
            <DropDownOption text="3주" value="3" />
            <DropDownOption text="4주" value="4" />
            <DropDownOption text="5주" value="5" />
            <DropDownOption text="6주" value="6" />
            <DropDownOption text="7주" value="7" />
            <DropDownOption text="8주" value="8" />
            <DropDownOption text="9주" value="9" />
            <DropDownOption text="10주" value="10" />
          </DropDown>
        )}
        rules={{
          required: true,
        }}
      />
      <Text color="primary" typo="body3">
        * 휴강 주차 포함
      </Text>
    </Flex>
  );
};

export default StudyCourseSelect;
