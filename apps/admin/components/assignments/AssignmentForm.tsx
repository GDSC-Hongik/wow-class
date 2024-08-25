import { Flex } from "@styled-system/jsx";
import { useFormContext } from "react-hook-form";
import type { AssignmentApiRequestDto } from "types/dtos/assignment";
import TextField from "wowds-ui/TextField";

const AssignmentForm = () => {
  const { register } = useFormContext<AssignmentApiRequestDto>();

  return (
    <Flex direction="column" gap="2.25rem">
      <TextField
        {...register("title", { required: true })}
        label="과제 제목"
        maxLength={100}
        placeholder="Ex. HTTP 통신 코드 작성하기"
      />
      <TextField
        {...register("descriptionLink", { required: true })}
        label="과제 명세 링크"
        placeholder="https://example.com"
        // TODO: 링크 형식 validate
      />
    </Flex>
  );
};

export default AssignmentForm;
