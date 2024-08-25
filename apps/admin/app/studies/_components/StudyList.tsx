import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { createStudyApi } from "apis/study/createStudyApi";
import Image from "next/image";

import EmptyStudyList from "./EmptyStudyList";
import StudyListItem from "./StudyListItem";

const StudyList = async () => {
  const studyList = await createStudyApi.getStudyList();

  if (studyList?.length === 0) {
    return <EmptyStudyList />;
  }
  return (
    <section aria-label="study-list" className={SectionStyle}>
      {studyList?.map((studyItem, index) => (
        <StudyListItem key={`studyItem-${index}`} study={studyItem} />
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
