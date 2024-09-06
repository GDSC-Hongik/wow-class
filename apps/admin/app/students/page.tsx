"use client";

import { Flex } from "@styled-system/jsx";
import { dashboardApi } from "apis/auth/dashboardApi";
import { studyApi } from "apis/study/studyApi";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import type {
  MyStudyListApiResponseDto,
  StudyListApiResponseDto,
} from "types/dtos/studyList";
import isAdmin from "utils/isAdmin";

import StudentList from "./_components/StudentList";
import StudentsHeader from "./_components/StudentsHeader";
import { studyAtom } from "./_components/StudyProvider";

const StudentsPage = () => {
  const [studyList, setStudyList] = useState<
    StudyListApiResponseDto[] | MyStudyListApiResponseDto[]
  >();

  const [study, setStudy] = useAtom(studyAtom);

  useEffect(() => {
    const fetchData = async () => {
      const adminStatus = await isAdmin();
      if (adminStatus) {
        const data = adminStatus
          ? await studyApi.getStudyList()
          : await dashboardApi.getMyStudyList();

        if (data && data.length && data[0]) {
          setStudyList(data);
          setStudy({ studyId: data[0].studyId, title: data[0].title });
        }
      }
    };

    fetchData();
  }, [setStudy]);

  if (!studyList) return null;

  return (
    <Flex direction="column" gap="3rem">
      <StudentsHeader studyList={studyList} />
      {/* <StudentList studyId={study?.studyId} /> */}
    </Flex>
  );
};

export default StudentsPage;
