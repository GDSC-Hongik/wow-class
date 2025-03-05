"use client";

import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { studyApi } from "apis/study/studyApi";
import ItemSeparator from "components/ItemSeparator";
import { useAtom } from "jotai";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import type { StudyListApiResponseDto } from "types/dtos/studyList";
import isAdmin from "utils/isAdmin";

import { studyAtom } from "../../_contexts/StudyProvider";
import StudyDropDown from "../StudyDropDown";
import DownloadButton from "./DownloadButton";
import StudentsHeaderButtons from "./StudentHeaderButtons";

const StudentsHeader = () => {
  const [studyList, setStudyList] = useState<StudyListApiResponseDto[]>();
  const [selectedStudy, setSelectedStudy] = useAtom(studyAtom);

  useEffect(() => {
    const fetchData = async () => {
      const adminStatus = await isAdmin();
      const data = adminStatus
        ? await studyApi.getStudyList()
        : await studyApi.getMyStudyList();

      if (data && data.length && data[0]) {
        setStudyList(data);
        setSelectedStudy({
          studyId: data[0].study.studyId,
          title: data[0].study.title,
        });
      }
    };

    fetchData();
  }, [setSelectedStudy]);

  if (!selectedStudy || !studyList) return null;

  return (
    <Flex justify="space-between" paddingBottom="1.5rem">
      <Text as="h1" style={titleStyle} typo="h1">
        수강생 관리 <ItemSeparator height={6} width={6} />
        <StudyDropDown studyList={studyList} />
      </Text>
      <Flex align="center" gap="0.75rem">
        <StudentsHeaderButtons />
        {selectedStudy.studyId && (
          <DownloadButton studyId={selectedStudy.studyId} />
        )}
      </Flex>
    </Flex>
  );
};

const titleStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  whiteSpace: "nowrap",
};

export default StudentsHeader;
