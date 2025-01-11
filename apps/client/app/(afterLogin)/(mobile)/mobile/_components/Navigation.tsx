"use client";

import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { Alarm } from "components/Icon/Alarm";
import { Calendar } from "components/Icon/Calendar";
import { Home } from "components/Icon/Home";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav aria-label="mobile-my-study-navigation" className={navigationStyle}>
      <Flex justifyContent="space-around">
        <Link href="/mobile/my-study">
          <Flex alignItems="center" direction="column" gap="5px">
            <Home selected={pathname === "/mobile/my-study"} />
            <Text
              color={pathname === "/mobile/my-study" ? "primary" : "sub"}
              typo="body3"
            >
              홈
            </Text>
          </Flex>
        </Link>
        <Link href="/mobile/announcement">
          <Flex alignItems="center" direction="column" gap="5px">
            <Alarm selected={pathname === "/mobile/announcement"} />
            <Text
              color={pathname === "/mobile/announcement" ? "primary" : "sub"}
              typo="body3"
            >
              공지사항
            </Text>
          </Flex>
        </Link>
        <Link href="/mobile/curriculum">
          <Flex alignItems="center" direction="column" gap="5px">
            <Calendar selected={pathname === "/mobile/curriculum"} />
            <Text
              color={pathname === "/mobile/curriculum" ? "primary" : "sub"}
              typo="body3"
            >
              커리큘럼
            </Text>
          </Flex>
        </Link>
      </Flex>
    </nav>
  );
};

export default Navigation;

const navigationStyle = css({
  position: "fixed",
  left: 0,
  bottom: 0,
  backgroundColor: "backgroundNormal",
  height: "90px",
  width: "100%",
  paddingTop: "16px",
});
