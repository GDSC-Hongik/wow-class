import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { createStudyApi } from "apis/study/createStudyApi";
import Image from "next/image";

import StudyListItem from "./StudyListItem";

const StudyList = async () => {
  const studyList = await createStudyApi.getStudyList();

  if (studyList?.length === 0) {
    return (
      <Flex
        alignItems="center"
        direction="column"
        gap="xl"
        height="100%"
        justifyContent="center"
        width="100%"
      >
        <Image
          alt="study-empty"
          height={186}
          src="/images/empty.svg"
          width={140}
        />
        <Text color="sub" typo="h2">
          개설된 스터디가 없어요
        </Text>
      </Flex>
    );
  }
  return (
    <section aria-label="study-list" className={SectionStyle}>
      {studyList?.map((studyItem, index) => (
        <StudyListItem index={index} study={studyItem} />
      ))}
    </section>
  );
};

export default StudyList;

const SectionStyle = css({
  width: "100%",
  height: "100%",
  overflow: "scroll",
  scrollbarWidth: "none",
});
