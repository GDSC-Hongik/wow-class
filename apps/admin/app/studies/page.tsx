import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import CreateStudyButton from "components/create-study/CreateStudyButton";
import SelectStudySemester from "components/create-study/SelectStudySemester";

const StudiesPage = () => {
  return (
    <>
      <Flex align="center" justifyContent="space-between">
        <p className={css({ textStyle: "h1" })}>개설된 스터디</p>
        <SelectStudySemester />
      </Flex>
      <CreateStudyButton />
    </>
  );
};

export default StudiesPage;
