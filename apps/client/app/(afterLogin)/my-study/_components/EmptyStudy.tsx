import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import Image from "next/image";

const EmptyStudy = () => {
  return (
    <Flex
      alignItems="center"
      direction="column"
      gap="xl"
      height="100%"
      justifyContent="center"
    >
      <Image
        alt="empty-study"
        height={140}
        src="/images/empty.svg"
        width={186}
      />
      <Text as="h2" color="sub" typo="h2">
        현재 수강 중인 스터디가 없어요
      </Text>
    </Flex>
  );
};

export default EmptyStudy;
