import { css } from "@styled-system/css";
import { NavItem } from "@wow-class/ui";
import { dashboardApi } from "apis/dashboardApi";
import { routePath } from "constants/routePath";
import Image from "next/image";
import Link from "next/link";
import Button from "wowds-ui/Button";

import { navMenu } from "../constants/navMenu";
import adminImageUrl from "../public/images/administrator.svg";
import logoImageUrl from "../public/images/logo.svg";

/**
 * @description client 내비게이션 바 컴포넌트입니다.
 */

const Navbar = async () => {
  const { manageRole, studyRole } = await dashboardApi.getDashboardInfo();

  const showConvertToMentorPageButton =
    manageRole === "ADMIN" || studyRole === "MENTOR";

  return (
    <aside aria-label="client navigation bar" className={navbarContainerStyle}>
      <Button
        asProp={Link}
        className={logoButtonStyle}
        href={routePath["my-study"]}
      >
        <div className={logoTextStyle}>와우클래스</div>
        <Image
          alt="logo"
          className={logoImageStyle}
          height={20.5}
          src={logoImageUrl}
          width={42}
        />
      </Button>
      <nav
        aria-label="client nav menu"
        className={navContainerStyle}
        role="navigation"
      >
        <section>
          {navMenu.map((menu) => (
            <NavItem
              alt={menu.alt}
              href={menu.href}
              imageUrl={menu.imageUrl}
              items={menu.items}
              key={menu.name}
              name={menu.name}
            />
          ))}
        </section>
        <section>
          {showConvertToMentorPageButton && (
            <NavItem
              alt="administrator-icon"
              href={routePath.admin || ""}
              imageUrl={adminImageUrl}
              name="멘토 페이지로 전환"
            />
          )}
        </section>
      </nav>
    </aside>
  );
};

export default Navbar;

const navbarContainerStyle = css({
  width: "250px",
  minWidth: "250px",
  height: "100vh",
  position: "fixed",
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

const logoImageStyle = css({
  width: "42px",
  height: "20.5px",
});

const navContainerStyle = css({
  padding: "8px 0px",
  display: "flex",
  flexDirection: "column",
  minHeight: "calc(100vh - 98px)",
  justifyContent: "space-between",
});

const logoButtonStyle = css({
  display: "flex",
  alignItems: "center",
  gap: 8,
  padding: "6px 0px 7px 20px",
  backgroundColor: "white",
  color: "black",
  width: "fit-content",
  _hover: {
    backgroundColor: "transparent",
  },
});
