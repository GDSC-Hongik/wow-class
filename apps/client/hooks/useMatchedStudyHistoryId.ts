"use client";

import { studyDetailApi } from "apis/studyDetailApi";
import { studyHistoryApi } from "apis/studyHistoryApi";
import { history, studyDashBoardData } from "constants/assignmentMockData";
import { useEffect, useState } from "react";

export default function useMatchedStudyHistoryId() {
  const [matchedStudyHistoryId, setMatchedStudyHistoryId] = useState<number>();
  useEffect(() => {
    const fetchData = async () => {
      //TODO: 수강 중인 스터디 api 호출
      //const studyId = await myStudyApi.getMyOngoingStudyInfo();
      //const studyHistories = await studyHistoryApi.getStudyHistory(studyId);
      const studyHistories = history;
      //   const studyDashboard =
      //     await studyDetailApi.getStudyDetailDashboard(studyId);
      const studyDashboard = studyDashBoardData;
      if (studyHistories && studyDashboard) {
        const submittableWeek = studyDashboard.submittableAssignments[0]?.week;
        const matchedHistory = studyHistories.find(
          (item) => item.week === submittableWeek
        );

        setMatchedStudyHistoryId(matchedHistory?.assignmentHistoryId);
      }
    };

    fetchData();
  }, []);

  return { matchedStudyHistoryId };
}
