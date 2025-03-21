import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { Controller, useFormContext } from "react-hook-form";
import DropDown from "wowds-ui/DropDown";
import DropDownOption from "wowds-ui/DropDownOption";

interface StudyTypeProps {
  onChange: (value: string) => void;
}

const StudyTypeSelect = ({ onChange }: StudyTypeProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name="type"
      // eslint-disable-next-line no-unused-vars
      render={({ field: { ref, ...field } }) => (
        <DropDown
          {...field}
          label="스터디 형식"
          placeholder="선택하세요"
          style={{ width: "358px" }}
          onChange={({ selectedValue }) => {
            field.onChange(selectedValue);
            onChange(selectedValue);
          }}
        >
          <DropDownOption
            value="OFFLINE"
            text={
              <Flex alignItems="center" gap="md">
                <Text typo="body1">오프라인 스터디</Text>
                <Text color="sub" typo="body2">
                  오프라인으로 진행해요.
                </Text>
              </Flex>
            }
          />
          <DropDownOption
            value="ONLINE"
            text={
              <Flex alignItems="center" gap="md">
                <Text typo="body1">온라인 스터디</Text>
                <Text color="sub" typo="body2">
                  온라인으로 진행해요.
                </Text>
              </Flex>
            }
          />
          <DropDownOption
            value="ASSIGNMENT"
            text={
              <Flex alignItems="center" gap="md">
                <Text typo="body1">과제 스터디</Text>
                <Text color="sub" typo="body2">
                  별도 강의 없이 과제만 진행해요.
                </Text>
              </Flex>
            }
          />
        </DropDown>
      )}
      rules={{
        required: true,
      }}
    />
  );
};

export default StudyTypeSelect;
