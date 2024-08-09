"use client";

import { css, cva, cx } from "@styled-system/css";
import Image from "next/image";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

interface NavItemProps {
  href: string;
  imageUrl: string;
  alt: string;
  name: string;
}

const NavItem = ({ href, imageUrl, alt, name }: NavItemProps) => {
  const segment = useSelectedLayoutSegment();

  return (
    <Link
      href={href}
      style={{ padding: href === "my-homework" ? "11px 36px" : "11px 20px" }}
      className={cx(
        navItemStyle({
          type: segment === href ? "active" : "inactive",
        })
      )}
    >
      <Image
        alt={alt}
        className={css({ width: "20px", height: "20px" })}
        height={20}
        src={imageUrl}
        width={20}
      />
      <div className={navItemTextStyle}>{name}</div>
    </Link>
  );
};

export default NavItem;

const navItemStyle = cva({
  base: {
    display: "flex",
    gap: "12px",
    marginRight: "8px",
  },
  variants: {
    type: {
      active: {
        bg: "monoBackgroundPressed",
      },
      inactive: {
        bg: "white",
      },
    },
  },
});

const navItemTextStyle = css({
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "160%",
  letterSpacing: "-0.16px",
});
