/* eslint-disable no-unused-vars */

import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { studyCourseList } from "constants/studyCurriculum";
import { Controller, useFormContext } from "react-hook-form";
import DropDown from "wowds-ui/DropDown";
import DropDownOption from "wowds-ui/DropDownOption";

const StudyTotalRoundSelect = () => {
  const { control } = useFormContext();
  return (
    <Flex direction="column" gap="xs" width={358}>
      <Controller
        control={control}
        name="totalRound"
        render={({ field: { ref, ...field } }) => (
          <DropDown
            {...field}
            label="스터디 총 회차"
            placeholder="선택하세요"
            value={field.value ? String(field.value) : ""}
            onChange={({ selectedValue }) => {
              field.onChange(Number(selectedValue));
            }}
          >
            {studyCourseList.map(({ text, value }) => (
              <DropDownOption key={value} text={text} value={value} />
            ))}
          </DropDown>
        )}
        rules={{
          required: true,
        }}
      />
    </Flex>
  );
};

export default StudyTotalRoundSelect;
