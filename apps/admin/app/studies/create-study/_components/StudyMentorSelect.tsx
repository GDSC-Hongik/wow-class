"use client";
import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { Controller, useFormContext } from "react-hook-form";
import DropDown from "wowds-ui/DropDown";
import DropDownOption from "wowds-ui/DropDownOption";

const StudyMentorSelect = () => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      defaultValue={0}
      name="mentorId"
      render={({ field }) => (
        <Flex direction="column" gap="xl">
          <Text typo="h2">스터디 멘토</Text>
          <DropDown
            {...field}
            placeholder="선택하세요"
            style={{ width: "270px" }}
            value={field.value ? String(field.value) : ""}
            onChange={({ selectedValue }) => {
              field.onChange(Number(selectedValue));
            }}
          >
            <DropDownOption text="김유진" value="3" />
            <DropDownOption text="홍서현" value="5" />
            <DropDownOption text="이현영" value="15" />
          </DropDown>
        </Flex>
      )}
      rules={{
        required: true,
      }}
    />
  );
};

export default StudyMentorSelect;
