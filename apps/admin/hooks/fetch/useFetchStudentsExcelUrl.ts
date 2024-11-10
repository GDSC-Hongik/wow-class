import { studyApi } from "apis/study/studyApi";
import { useEffect, useState } from "react";

const useFetchStudentsExcelUrl = ({
  studyId,
  studentLength,
}: {
  studyId: number;
  studentLength: number;
}) => {
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await studyApi.getStudyStudentsExcel(studyId);
      const blob = new Blob([response], {
        type: "application/vnd.ms-excel",
      });
      const url = URL.createObjectURL(blob);
      if (url) setUrl(url);
    };

    if (studentLength) fetchData();
  }, [studyId, studentLength]);

  return url;
};

export default useFetchStudentsExcelUrl;
