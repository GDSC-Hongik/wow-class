import { css } from "@styled-system/css";
import { studyApi } from "apis/study/studyApi";
import isAdmin from "utils/isAdmin";

import EmptyStudyList from "./EmptyStudyList";
import StudyListItem from "./StudyListItem";

const StudyList = async () => {
  const adminStatus = await isAdmin();
  const studyList = adminStatus
    ? await studyApi.getStudyList()
    : await studyApi.getMyStudyList();

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
