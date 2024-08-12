import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import Image from "next/image";

import adminImageUrl from "../../../assets/administrator.svg";
import logoImageUrl from "../../../assets/logo.svg";
import { adminNavMenu } from "../../../constants/navMenu";
import { NavItem } from "../../shared";

/**
 * @description admin 내비게이션 바 컴포넌트입니다.
 */

const Navbar = () => {
  return (
    <aside aria-label="admin navigation bar" className={navbarContainerStyle}>
      <Flex align="center" gap={8} padding="6px 0px 7px 20px">
        <div className={logoTextStyle}>와우클래스 멘토</div>
        <Image
          alt="logo"
          height={20.5}
          src={logoImageUrl}
          width={42}
          className={css({
            width: "42px",
            height: "20.5px",
          })}
        />
      </Flex>
      <nav
        aria-label="admin nav menu"
        className={navContainerStyle}
        role="navigation"
      >
        <ul>
          {adminNavMenu.map((menu) => (
            <NavItem
              alt={menu.alt}
              href={menu.href}
              imageUrl={menu.imageUrl}
              items={menu.items}
              key={menu.name}
              name={menu.name}
            />
          ))}
        </ul>
        <NavItem
          alt="administrator-icon"
          href=""
          imageUrl={adminImageUrl}
          name="멘티 페이지로 전환"
        />
      </nav>
    </aside>
  );
};

export default Navbar;

const navbarContainerStyle = css({
  width: "250px",
  minHeight: "100vh",
  paddingTop: "54px",
  borderRightWidth: "arrow",
  borderColor: "mono.400",
});

const logoTextStyle = css({
  fontSize: "24px",
  fontWeight: 700,
  lineHeight: "130%",
  letterSpacing: "-0.24px",
});

const navContainerStyle = css({
  padding: "8px 0px",
  display: "flex",
  flexDirection: "column",
  minHeight: "calc(100vh - 98px)",
  justifyContent: "space-between",
});
