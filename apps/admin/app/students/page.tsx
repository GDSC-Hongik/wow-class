import { Flex } from "@styled-system/jsx";

import StudentsContent from "./_components/StudentsContent";
import StudentsHeader from "./_components/StudentsHeader";

const StudentsPage = () => {
  return (
    <Flex direction="column" gap="1.5rem">
      <StudentsHeader />
      <StudentsContent />
    </Flex>
  );
};

export default StudentsPage;
