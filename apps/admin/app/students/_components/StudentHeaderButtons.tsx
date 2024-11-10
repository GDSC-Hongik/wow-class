import studyAchievementApi from "apis/study/studyAchievementApi";
import { tags } from "constants/tags";
import { useAtom, useAtomValue } from "jotai";
import { revalidateTagByName } from "utils/revalidateTagByName";
import Button from "wowds-ui/Button";

import {
  outstandingStudentsAtom,
  selectedStudentsAtom,
  studyAtom,
} from "../_contexts/StudyProvider";
import OutstandingDropDown from "./OutstandingDropDown";

const StudentsHeaderButtons = () => {
  const [outstandingStudents, setOutstandingStudents] = useAtom(
    outstandingStudentsAtom
  );
  const { type, achievement, enabled } = outstandingStudents;
  const selectedStudents = useAtomValue(selectedStudentsAtom);
  const study = useAtomValue(studyAtom);

  const handleClickCancelButton = () => {
    setOutstandingStudents({
      ...outstandingStudents,
      enabled: false,
    });
  };

  const handleClickEnabledButton = async () => {
    if (!study || !selectedStudents.length || !achievement) return;

    const fetch =
      type === "ADD"
        ? studyAchievementApi.postStudyAchievement
        : studyAchievementApi.deleteStudyAchievement;

    const result = await fetch(study.studyId, {
      studentIds: selectedStudents,
      achievementType: achievement,
    });

    if (result.success) {
      // TODO: revalidate 되지 않는 문제 해결
      revalidateTagByName(tags.students);
    }

    setOutstandingStudents({
      ...outstandingStudents,
      enabled: false,
    });
  };

  const formatTypeToText = () => {
    if (type === "ADD") return "우수 처리";
    if (type === "DEL") return "우수 철회";
    return "";
  };

  const formatAchievementToText = () => {
    if (achievement === "FIRST_ROUND_OUTSTANDING_STUDENT") return "1차";
    if (achievement === "SECOND_ROUND_OUTSTANDING_STUDENT") return "2차";
    return "";
  };

  return enabled ? (
    <>
      <Button size="sm" variant="outline" onClick={handleClickCancelButton}>
        취소하기
      </Button>
      <Button
        disabled={!selectedStudents.length}
        size="sm"
        onClick={handleClickEnabledButton}
      >
        {`${formatAchievementToText()} ${formatTypeToText()}`}
      </Button>
    </>
  ) : (
    <>
      <OutstandingDropDown type="ADD" />
      <OutstandingDropDown type="DEL" />
    </>
  );
};

export default StudentsHeaderButtons;
