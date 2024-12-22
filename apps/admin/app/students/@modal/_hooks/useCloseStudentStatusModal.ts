import { useModalRoute } from "@wow-class/ui/hooks";
import { tags } from "constants/tags";
import { useSetAtom } from "jotai";
import { revalidateTagByName } from "utils/revalidateTagByName";

import {
  enabledOutstandingStudentsAtom,
  selectedStudentsAtom,
} from "@/students/_contexts/StudyProvider";

const useCloseStudentStatusModal = () => {
  const setSelectedStudents = useSetAtom(selectedStudentsAtom);
  const setEnabledOutstandingStudents = useSetAtom(
    enabledOutstandingStudentsAtom
  );
  const { onClose } = useModalRoute();

  const handleClickCloseModal = () => {
    setSelectedStudents({
      students: new Set(),
      firstStudentName: "",
    });
    onClose();
  };

  const resetStudents = () => {
    revalidateTagByName(tags.students);
    setEnabledOutstandingStudents({
      enabled: false,
    });
  };

  const closeModalWithSuccess = () => {
    resetStudents();
    setTimeout(() => {
      handleClickCloseModal();
    }, 1000);
  };

  const closeModalWithFailure = () => {
    resetStudents();
    handleClickCloseModal();
  };

  return {
    handleClickCloseModal,
    closeModalWithSuccess,
    closeModalWithFailure,
  };
};
export default useCloseStudentStatusModal;
