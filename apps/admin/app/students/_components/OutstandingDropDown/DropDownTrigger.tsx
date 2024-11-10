import Button from "wowds-ui/Button";

const DropDownTrigger = ({ type }: { type: "ADD" | "DEL" }) => {
  return (
    <Button size="sm" variant="outline">
      우수 및 수료 {type === "ADD" ? "처리" : "철회"}
    </Button>
  );
};

export default DropDownTrigger;
