import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";

import DiscordInput from "./DiscordInput";

const DiscordID = () => {
  return (
    <Flex direction="column" gap="24px" maxWidth="5/6">
      <Flex direction="column" gap="8px">
        <Text typo="h2">디스코드 ID</Text>
        <Text color="sub" typo="body3">
          입력한 디스코드 ID에 따라 자동으로 역할이 부여되고, 디스코드 채널에
          공지가 자동으로 업데이트돼요.
        </Text>
      </Flex>
      <DiscordInput />
    </Flex>
  );
};

export default DiscordID;
