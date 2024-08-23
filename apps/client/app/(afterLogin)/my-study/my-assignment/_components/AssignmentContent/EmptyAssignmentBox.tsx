import { Space, Text } from "@wow-class/ui";
import Box from "wowds-ui/Box";

export const EmptyAssignmentBox = ({ week }: { week: number }) => {
  return (
    <>
      <Box
        style={boxStyle}
        text={
          <>
            <Text color="primary" typo="label2">
              {week}주차
            </Text>
            <Space height={16} />
            <Text as="h2" typo="h2">
              과제가 없어요
            </Text>
          </>
        }
      />
    </>
  );
};

const boxStyle = {
  paddingBottom: "50px",
};
