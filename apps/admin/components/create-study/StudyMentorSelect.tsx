import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { type Control, Controller, useFormContext } from "react-hook-form";
import type { CreateStudyFormType } from "types/entities/study";
import DropDown from "wowds-ui/DropDown";
import DropDownOption from "wowds-ui/DropDownOption";

const StudyMentorSelect = () => {
  const { register, control } = useFormContext();
  return (
    <Controller
      {...register("mentorId")}
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
              field.onChange(selectedValue);
            }}
          >
            <DropDownOption text="김유진" value="3" />
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
