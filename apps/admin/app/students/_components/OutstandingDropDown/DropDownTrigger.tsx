import Button from "wowds-ui/Button";

import type { OutstandingStudentsType } from "@/students/_contexts/StudyProvider";

const DropDownTrigger = ({ type }: { type: OutstandingStudentsType }) => {
  return (
    <Button size="sm" variant="outline">
      우수 및 수료 {type}
    </Button>
  );
};

export default DropDownTrigger;
