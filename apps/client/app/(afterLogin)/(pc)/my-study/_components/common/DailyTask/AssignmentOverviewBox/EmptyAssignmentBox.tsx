import { Text } from "@wow-class/ui";
import Box from "wowds-ui/Box";

export const EmptyAssignmentBox = () => {
  return (
    <Box
      style={boxStyle}
      text={
        <Text as="h2" typo="h2">
          과제가 없어요.
        </Text>
      }
    />
  );
};

const boxStyle = {
  paddingBottom: "50px",
};
