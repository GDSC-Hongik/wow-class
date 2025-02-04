"use client";

import { useSearchParams } from "next/navigation";

const useAttendanceCheckSearchParams = () => {
  const searchParams = useSearchParams();

  const studyDetailId = searchParams.get("study-detail-id") || "0";
  const studyName = searchParams.get("study-name");
  const deadLine = searchParams.get("deadline") || "";
  const currentWeek = searchParams.get("week");
  const mentorName = searchParams.get("mentor");

  return { studyDetailId, studyName, deadLine, currentWeek, mentorName };
};

export default useAttendanceCheckSearchParams;
