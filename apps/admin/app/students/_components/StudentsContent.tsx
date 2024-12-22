"use client";

import { Text } from "@wow-class/ui";
import useFetchStudents from "hooks/fetch/useFetchStudents";
import { useAtomValue } from "jotai";
import { useState } from "react";

import { studyAtom } from "../_contexts/StudyProvider";
import StudentFilter from "./StudentFilter";
import StudentPagination from "./StudentPagination";
import StudentList from "./StudentTable/StudentList";

const StudentsContent = () => {
  const selectedStudy = useAtomValue(studyAtom);
  const [page, setPage] = useState(1);
  const handleClickChangePage = (nextPage: number) => {
    setPage(nextPage);
  };

  const { studentList, pageInfo } = useFetchStudents(selectedStudy, page);
  if (!selectedStudy) return <Text>담당한 스터디가 없어요.</Text>;

  return (
    <>
      {/* TODO: 페이지네이션 API 필터 추가 후 주석 해제
      {studentList.length ? <StudentFilter /> : null} 
      */}
      <StudentList studentList={studentList} />
      <StudentPagination
        handleClickChangePage={handleClickChangePage}
        pageInfo={pageInfo}
      />
    </>
  );
};

export default StudentsContent;
