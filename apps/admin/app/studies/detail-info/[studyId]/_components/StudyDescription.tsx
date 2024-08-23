import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { Controller, useFormContext } from "react-hook-form";
import TextField from "wowds-ui/TextField";

const StudyDescription = () => {
  const { control } = useFormContext();
  return (
    <section
      aria-label="create-study-description"
      className={StudyDescriptionSectionStyle}
    >
      <Text typo="h2">스터디 상세</Text>
      <Flex direction="column" gap="36px">
        <Controller
          control={control}
          defaultValue=""
          name="notionLink"
          rules={{ required: true, maxLength: 100 }}
          render={({ field }) => (
            <TextField
              {...field}
              label="스터디 소개 페이지"
              placeholder="http://example.com"
              onChange={field.onChange}
            />
          )}
        />
        <Controller
          control={control}
          defaultValue=""
          name="introduction"
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              label="스터디 한 줄 소개"
              maxLength={100}
              placeholder="Ex. 새싹 개발자분들을 위한 개발 입문 스터디"
              onChange={field.onChange}
            />
          )}
        />
      </Flex>
    </section>
  );
};

export default StudyDescription;

const StudyDescriptionSectionStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "xl",
});
