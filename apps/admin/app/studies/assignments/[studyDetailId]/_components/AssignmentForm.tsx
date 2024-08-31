import { Flex } from "@styled-system/jsx";
import { useFormContext } from "react-hook-form";
import type {
  AssignmentApiRequestDto,
  AssignmentApiResponseDto,
} from "types/dtos/assignmentList";

import CustomTextField from "./CustomTextField";

const AssignmentForm = ({
  assignment,
}: {
  assignment: AssignmentApiResponseDto;
}) => {
  const { control } = useFormContext<AssignmentApiRequestDto>();
  const { title, descriptionLink } = assignment;

  // TODO: Picker 컴포넌트 추가
  return (
    <Flex direction="column" gap="2.25rem">
      <CustomTextField
        control={control}
        defaultValue={title}
        label="과제 제목"
        maxLength={100}
        name="title"
        placeholder="Ex. HTTP 통신 코드 작성하기"
      />
      <CustomTextField
        control={control}
        defaultValue={descriptionLink}
        label="과제 명세 링크"
        name="descriptionNotionLink"
        placeholder="https://example.com"
        // TODO: 링크 형식 validate
      />
    </Flex>
  );
};

export default AssignmentForm;
