import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import ItemSeparator from "components/ItemSeparator";

import DropDownTrigger from "./DropDownTrigger";

// TODO: 헤더 공통 컴포넌트 빼기
const Header = () => {
  return (
    <Text
      as="h1"
      style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
      typo="h1"
    >
      수강생 관리 <ItemSeparator height={6} width={6} />
      <Flex align="center" color="primary" gap="sm">
        스터디이름
        <DropDownTrigger />
      </Flex>
    </Text>
  );
};

export default Header;
