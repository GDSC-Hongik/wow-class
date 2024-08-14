import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { type Control, Controller } from "react-hook-form";
import type { CreateStudyFormType } from "types/entities/study";
import DropDown from "wowds-ui/DropDown";
import DropDownOption from "wowds-ui/DropDownOption";

const StudyFormatSelect = ({
  control,
}: {
  control: Control<CreateStudyFormType>;
}) => {
  return (
    <Controller
      control={control}
      name="studyType"
      render={({ field }) => (
        <DropDown
          {...field}
          label="스터디 형식"
          placeholder="선택하세요"
          onChange={({ selectedValue }) => {
            field.onChange(selectedValue);
          }}
        >
          <DropDownOption
            value="ASSIGNMENT"
            text={
              <Flex gap="md">
                <Text typo="body1">오프라인 세션</Text>
                <Text color="sub" typo="body2">
                  오프라인으로 진행해요.
                </Text>
              </Flex>
            }
          />
          <DropDownOption
            value="ONLINE"
            text={
              <Flex gap="md">
                <Text typo="body1">온라인 세션</Text>
                <Text color="sub" typo="body2">
                  온라인으로 진행해요.
                </Text>
              </Flex>
            }
          />
          <DropDownOption
            value="OFFLINE"
            text={
              <Flex gap="md">
                <Text typo="body1">과제 스터디</Text>
                <Text color="sub" typo="body2">
                  별도 강의 없이 과제만 진행해요.
                </Text>
              </Flex>
            }
          />
        </DropDown>
      )}
    />
  );
};

export default StudyFormatSelect;
