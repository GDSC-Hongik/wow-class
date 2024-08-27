import { Flex } from "@styled-system/jsx";
import { useFormContext } from "react-hook-form";
import type {
  AssignmentApiRequestDto,
  AssignmentApiResponseDto,
} from "types/dtos/assignmentList";
import TextField from "wowds-ui/TextField";

const AssignmentForm = ({
  assignment,
}: {
  assignment: AssignmentApiResponseDto;
}) => {
  const { register, setValue } = useFormContext<AssignmentApiRequestDto>();
  const { title, descriptionLink } = assignment;

  return (
    <Flex direction="column" gap="2.25rem">
      <TextField
        defaultValue={title}
        label="과제 제목"
        maxLength={100}
        placeholder="Ex. HTTP 통신 코드 작성하기"
        ref={register("title", { required: true }).ref}
        onChange={(value) => setValue("title", value)}
      />
      <TextField
        defaultValue={descriptionLink}
        label="과제 명세 링크"
        placeholder="https://example.com"
        ref={register("descriptionNotionLink", { required: true }).ref}
        onChange={(value) => setValue("descriptionNotionLink", value)}
        // TODO: 링크 형식 validate
      />
    </Flex>
  );
};

export default AssignmentForm;
