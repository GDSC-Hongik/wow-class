import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Header, Text } from "@wow-class/ui";
import { routerPath } from "constants/router/routerPath";
import Image from "next/image";
import Link from "next/link";
import Button from "wowds-ui/Button";

const NotFoundPage = () => {
  return (
    <Flex direction="column" minHeight="100vh">
      <Header />
      <main className={notFoundPageContentStyle}>
        <Image
          alt="not-found"
          height={344}
          src="/images/not-found.svg"
          width={358}
        />
        <Flex direction="column" gap="md">
          <Text as="h2" typo="display2">
            오류가 발생했어요
          </Text>
          <Text color="sub" typo="body0">
            요청하신 페이지를 찾을 수 없어요
          </Text>
        </Flex>
        <Button
          aria-label="홈으로 이동"
          asProp={Link}
          href={routerPath.root.href}
          style={buttonStyle}
        >
          홈으로 이동
        </Button>
      </main>
    </Flex>
  );
};

export default NotFoundPage;

const notFoundPageContentStyle = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "48px",
  height: "100%",
});

const buttonStyle = {
  width: 328,
};
