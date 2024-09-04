import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { studyCurriculumList } from "constants/studyCurriculum";
import { Controller, useFormContext } from "react-hook-form";
import DropDown from "wowds-ui/DropDown";
import DropDownOption from "wowds-ui/DropDownOption";

const StudyCourseSelect = () => {
  const { control } = useFormContext();
  return (
    <Flex direction="column" gap="xs" width={358}>
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
            {studyCurriculumList.map(({ text, value }) => (
              <DropDownOption text={text} value={value} />
            ))}
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
