import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";

import StudyList from "./_components/StudyList";
import CreateStudyButton from "./create-study/_components/CreateStudyButton";

const StudiesPage = () => {
  return (
    <>
      <Flex align="center" justifyContent="space-between">
        <Text typo="h1">개설된 스터디</Text>
      </Flex>
      <CreateStudyButton />
      <StudyList />
    </>
  );
};

export default StudiesPage;
