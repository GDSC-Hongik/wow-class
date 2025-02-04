import { useSearchParams } from "next/navigation";

const useAttendanceCheckSearchParams = () => {
  const searchParams = useSearchParams();

  const studyDetailId = searchParams.get("study-detail-id") || "0";
  const studyName = searchParams.get("study-name");
  const deadLine = searchParams.get("deadline") || "";
  const currentWeek = searchParams.get("week");

  return { studyDetailId, studyName, deadLine, currentWeek };
};

export default useAttendanceCheckSearchParams;
