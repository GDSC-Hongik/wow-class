import { Text } from "@wow-class/ui";
import { dashboardApi } from "apis/auth/dashboardApi";
import { studyApi } from "apis/study/studyApi";
import ItemSeparator from "components/ItemSeparator";
import isAdmin from "utils/isAdmin";

import StudyDropDown from "./StudyDropDown";

const StudentsHeader = async () => {
  const adminStatus = await isAdmin();
  const studyList = adminStatus
    ? await studyApi.getStudyList()
    : await dashboardApi.getMyStudyList();

  if (!studyList) return null;

  return (
    <Text
      as="h1"
      style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
      typo="h1"
    >
      수강생 관리 <ItemSeparator height={6} width={6} />
      <StudyDropDown studyList={studyList} />
    </Text>
  );
};

export default StudentsHeader;
