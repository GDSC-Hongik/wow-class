import { myStudyApi } from "apis/myStudyApi";
import { useEffect, useState } from "react";
import type { BasicStudyInfoDto } from "types/dtos/myStudy";

const useFetchBasicStudyInfoData = () => {
  const [basicStudyInfo, setBasicStudyInfo] =
    useState<BasicStudyInfoDto | null>(null);

  useEffect(() => {
    const fetchBasicStudyInfoData = async () => {
      const myOngoingStudyInfoData = await myStudyApi.getMyOngoingStudyInfo();

      if (!myOngoingStudyInfoData?.studyId) {
        return;
      }

      const basicStudyInfoData = await myStudyApi.getBasicStudyInfo(
        myOngoingStudyInfoData.studyId
      );

      basicStudyInfoData && setBasicStudyInfo(basicStudyInfoData);
    };

    fetchBasicStudyInfoData();
  }, []);

  return { basicStudyInfo };
};

export default useFetchBasicStudyInfoData;
