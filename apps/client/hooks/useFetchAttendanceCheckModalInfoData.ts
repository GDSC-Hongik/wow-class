import { myStudyApi } from "apis/myStudyApi";
import { useEffect, useState } from "react";

const useFetchAttendanceCheckModalInfoData = () => {
  const [studyInfo, setStudyInfo] = useState({
    currentWeek: 0,
    studyName: "",
    studyDetailId: 0,
    deadLine: "",
  });

  useEffect(() => {
    const fetchAttendanceCheckModalInfoData = async () => {
      const myOngoingStudyData = await myStudyApi.getMyOngoingStudyInfo();

      if (!myOngoingStudyData?.studyId) {
        return null;
      }

      const dailyTaskListData = await myStudyApi.getDailyTaskList(
        myOngoingStudyData?.studyId
      );
      const basicStudyInfoData = await myStudyApi.getBasicStudyInfo(
        myOngoingStudyData?.studyId
      );

      const attendanceDailyTask = dailyTaskListData?.find(
        (dailyTask) => dailyTask.todoType === "ATTENDANCE"
      );

      if (!attendanceDailyTask || !basicStudyInfoData) {
        return null;
      }

      setStudyInfo({
        currentWeek: attendanceDailyTask?.week,
        studyName: basicStudyInfoData?.title,
        studyDetailId: attendanceDailyTask?.studyDetailId,
        deadLine: attendanceDailyTask?.deadLine,
      });
    };

    fetchAttendanceCheckModalInfoData();
  }, []);

  return { studyInfo };
};

export default useFetchAttendanceCheckModalInfoData;
