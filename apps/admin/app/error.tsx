"use client";

import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Header, Text } from "@wow-class/ui";
import Image from "next/image";
import Button from "wowds-ui/Button";

const ErrorPage = ({ reset }: { reset: () => void }) => {
  const handleClickResetButton = () => {
    reset();
  };

  return (
    <html lang="ko">
      <body>
        <Flex direction="column" minHeight="100vh">
          <Header />
          <main className={errorPageContentStyle}>
            <Image
              alt="error"
              height={344}
              src="/images/error.svg"
              width={358}
            />
            <Text as="h2" typo="display2">
              에러가 발생했어요
            </Text>
            <Button
              aria-label="다시 시도"
              style={buttonStyle}
              onClick={handleClickResetButton}
            >
              다시 시도
            </Button>
          </main>
        </Flex>
      </body>
    </html>
  );
};

export default ErrorPage;

const errorPageContentStyle = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "48px",
  height: "100%",
});

const buttonStyle = {
  maxWidth: 328,
};
