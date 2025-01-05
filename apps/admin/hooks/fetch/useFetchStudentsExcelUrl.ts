import { studyApi } from "apis/study/studyApi";
import { useEffect, useState } from "react";

const useFetchStudentsExcelUrl = ({ studyId }: { studyId: number }) => {
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

    fetchData();
  }, [studyId]);

  return url;
};

export default useFetchStudentsExcelUrl;
