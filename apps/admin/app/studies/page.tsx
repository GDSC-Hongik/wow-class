import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";

import CreateStudyButton from "./create-study/_components/CreateStudyButton";

const StudiesPage = () => {
  return (
    <>
      <Flex align="center" justifyContent="space-between">
        <p className={css({ textStyle: "h1" })}>개설된 스터디</p>
      </Flex>
      <CreateStudyButton />
    </>
  );
};

export default StudiesPage;
