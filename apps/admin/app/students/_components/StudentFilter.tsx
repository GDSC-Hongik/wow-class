import { Flex } from "@styled-system/jsx";
import Chip from "wowds-ui/Chip";

const StudentFilter = () => {
  return (
    <Flex gap="0.5rem">
      <Chip clickable label="우수 회원 보기" />
      <Chip clickable label="수료 회원 보기" />
    </Flex>
  );
};

export default StudentFilter;
