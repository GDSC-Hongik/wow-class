import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import CreateStudyButton from "components/createStudy/CreateStudyButton";
import SelectStudySemester from "components/createStudy/SelectStudySemester";

const Studies = () => {
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

export default Studies;
