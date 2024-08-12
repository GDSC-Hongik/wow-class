"use client";

import { css, cva } from "@styled-system/css";
import { styled } from "@styled-system/jsx";
import Image from "next/image";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import { useState } from "react";

import arrowImageUrl from "../../assets/arrow.svg";

interface NavItemProps {
  href: string;
  imageUrl: string;
  alt: string;
  name: string;
  items?: {
    href: string;
    imageUrl: string;
    alt: string;
    name: string;
  }[];
}

const NavItem = ({ href, imageUrl, alt, name, items }: NavItemProps) => {
  const [expanded, setExpanded] = useState(
    Boolean(items?.length && items?.length <= 1)
  );

  const segment = useSelectedLayoutSegments();

  const handleClickNavItem = () => {
    if (items?.length !== 1) {
      setExpanded((prev) => !prev);
    }
  };

  return (
    <styled.li listStyle="none">
      <Link
        href={`/${href}`}
        className={navItemStyle({
          type: !segment[1] && segment[0] === href ? "active" : "inactive",
        })}
        onClick={handleClickNavItem}
      >
        <Image
          alt={alt}
          className={css({ width: "20px", height: "20px" })}
          height={20}
          src={imageUrl}
          width={20}
        />
        <div className={navItemTextStyle}>{name}</div>
        {items?.length && items?.length > 1 && (
          <Image
            alt="arrow-icon"
            height={20}
            src={arrowImageUrl}
            style={{ transform: expanded ? "rotate(0deg)" : "rotate(180deg)" }}
            width={20}
            className={css({
              width: "20px",
              height: "20px",
              marginLeft: "auto",
            })}
          />
        )}
      </Link>
      {expanded &&
        items?.map((item) => (
          <Link
            href={`/${href}/${item.href}`}
            key={item.name}
            style={{ padding: "11px 36px" }}
            className={navItemStyle({
              type: segment[1] === item.href ? "active" : "inactive",
            })}
          >
            <Image
              alt={item.alt}
              className={css({ width: "20px", height: "20px" })}
              height={20}
              src={item.imageUrl}
              width={20}
            />
            <div className={navItemTextStyle}>{item.name}</div>
          </Link>
        ))}
    </styled.li>
  );
};

export default NavItem;

const navItemStyle = cva({
  base: {
    display: "flex",
    gap: "12px",
    marginRight: "8px",
    alignItems: "center",
    padding: "11px 18px 11px 20px",
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
