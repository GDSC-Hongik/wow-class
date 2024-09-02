"use client";
import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { Controller, useFormContext } from "react-hook-form";

const StudyNameTextField = () => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      defaultValue=""
      name="title"
      render={({ field }) => (
        <Flex direction="column" gap="sm">
          <Text color="sub" typo="h3">
            새로 개설할 스터디 정보를 입력해주세요
          </Text>
          <textarea
            {...field}
            className={TextFieldStyle}
            placeholder="새로운 스터디"
            onChange={field.onChange}
          />
        </Flex>
      )}
      rules={{
        required: true,
      }}
    />
  );
};

export default StudyNameTextField;

const TextFieldStyle = css({
  width: "250px",
  height: "31px",
  border: "none",
  color: "textBlack",

  textStyle: "h1",
  _placeholder: {
    color: "darkDisabled",
  },
  _focus: {
    outline: "none",
    borderColor: "primary",
  },
  resize: "none",
});
