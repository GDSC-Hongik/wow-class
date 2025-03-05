"use client";
import { css } from "@styled-system/css";
import { useSearchParams } from "next/navigation";

import { useFetchStudies } from "../_hooks/useFetchStudies";
import EmptyStudyList from "./EmptyStudyList";
import StudyListItem from "./StudyListItem";

const StudyList = () => {
  const semester = useSearchParams().get("semester");
  const { studyList } = useFetchStudies();
  if (studyList?.length === 0) {
    return <EmptyStudyList />;
  }
  return (
    <section aria-label="study-list" className={SectionStyle}>
      {studyList?.map(
        (studyItem, index) =>
          (semester === null ||
            semester ===
              `${studyItem.study.semester.academicYear}-${studyItem.study.semester.semesterType === "FIRST" ? 1 : 2}`) && (
            <StudyListItem key={`studyItem-${index}`} study={studyItem} />
          )
      )}
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
