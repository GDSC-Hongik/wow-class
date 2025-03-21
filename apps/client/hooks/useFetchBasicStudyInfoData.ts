import { myStudyApi } from "apis/myStudyApi";
import { useEffect, useState } from "react";
import type { BasicStudyInfoDto } from "types/dtos/myStudy";

const useFetchBasicStudyInfoData = (studyId: number) => {
  const [basicStudyInfo, setBasicStudyInfo] =
    useState<BasicStudyInfoDto | null>(null);

  useEffect(() => {
    const fetchBasicStudyInfoData = async () => {
      const basicStudyInfoData = await myStudyApi.getBasicStudyInfo(studyId);

      basicStudyInfoData && setBasicStudyInfo(basicStudyInfoData);
    };

    fetchBasicStudyInfoData();
  }, [studyId]);

  return { basicStudyInfo };
};

export default useFetchBasicStudyInfoData;
