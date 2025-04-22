import type { StudyType } from "types/entities/common/study";

export const isOnlineOfflineStudyType = (type: StudyType) =>
  type === "ONLINE" || type === "OFFLINE";
