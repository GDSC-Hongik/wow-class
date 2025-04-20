import type { StudyType } from "types/entities/study";

export const isOnlineOfflineStudyType = (type: StudyType) =>
  type === "ONLINE" || type === "OFFLINE";
