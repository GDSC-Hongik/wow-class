import type { OutstandingType } from "constants/status/outstandigOptions";
import Button from "wowds-ui/Button";

const DropDownTrigger = ({ type }: { type: OutstandingType }) => {
  return (
    <Button size="sm" variant="outline">
      우수 및 수료 {type}
    </Button>
  );
};

export default DropDownTrigger;
