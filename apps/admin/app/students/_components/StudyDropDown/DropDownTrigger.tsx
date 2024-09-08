import { Flex } from "@styled-system/jsx";
import { DownArrow } from "wowds-icons";

const DropDownTrigger = () => {
  return (
    <Flex
      align="center"
      background="backgroundAlternative"
      borderRadius={9999}
      height={24}
      justify="center"
      width={24}
    >
      <DownArrow stroke="sub" />
    </Flex>
  );
};

export default DropDownTrigger;
