import { Flex } from "@styled-system/jsx";

import StudentList from "./_components/StudentList";
import StudentsHeader from "./_components/StudentsHeader";

const Students = () => {
  return (
    <Flex direction="column" gap="3rem">
      <StudentsHeader />
      <StudentList />
    </Flex>
  );
};

export default Students;
