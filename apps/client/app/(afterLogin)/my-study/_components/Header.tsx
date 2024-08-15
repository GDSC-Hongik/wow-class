"use client";

import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Space, Text } from "@wow-class/ui";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [showIntro, setShowIntro] = useState(false);

  const handleClickShowIntro = () => {
    setShowIntro((prev) => !prev);
  };

  return (
    <header>
      <section>
        <Flex alignItems="center" gap={8}>
          <Text as="h1" typo="h1">
            기초 웹스터디
          </Text>
          <button
            aria-controls="intro-section"
            aria-expanded={showIntro}
            tabIndex={0}
            aria-label={
              showIntro ? "Collapse introduction" : "Expand introduction"
            }
            onClick={handleClickShowIntro}
          >
            <Image
              className={downArrowIconStyle}
              height={20}
              src="/images/arrow.svg"
              style={{ rotate: showIntro ? "0deg" : "180deg" }}
              width={20}
              alt={
                showIntro
                  ? "Collapse introduction icon"
                  : "Expand introduction icon"
              }
            />
          </button>
        </Flex>
      </section>
      <section>
        <Space height={8} />
        <Flex gap="xs">
          <Text as="h5" color="sub">
            2024-1
          </Text>
          <ItemSeparator />
          <Text as="h5" color="sub">
            강가은 멘토
          </Text>
          <ItemSeparator />
          <Text as="h5" color="sub">
            오프라인 세션
          </Text>
        </Flex>
      </section>
      {showIntro && (
        <section id="intro-section">
          <section aria-labelledby="study-schedule-heading">
            <Space height={24} />
            <Flex direction="column" gap="4">
              <Text as="h3" typo="h3">
                스터디 일정
              </Text>
              <Flex gap="xs">
                <Text as="h5" color="sub">
                  화 18:00-19:00
                </Text>
                <ItemSeparator />
                <Text as="h5" color="sub">
                  4주 코스
                </Text>
                <ItemSeparator />
                <Text as="h5" color="sub">
                  06.18-07.16
                </Text>
              </Flex>
            </Flex>
          </section>
          <section aria-labelledby="study-intro-heading">
            <Space height={28} />
            <Flex direction="column" gap="4">
              <Text as="h3" typo="h3">
                스터디 소개
              </Text>
              <Flex alignItems="center" gap="sm">
                <Text as="h5" color="sub">
                  새싹 개발자분들을 위한 개발 입문 스터디
                </Text>
                <Link
                  className={introduceLinkStyle}
                  href="/"
                  role="button"
                  tabIndex={0}
                >
                  <Image
                    alt="link-icon"
                    height={24}
                    src="/images/link.svg"
                    width={24}
                  />
                  <Text
                    as="h5"
                    className={introduceTextStyle}
                    color="sub"
                    typo="label1"
                  >
                    소개 링크 바로가기
                  </Text>
                </Link>
              </Flex>
            </Flex>
          </section>
        </section>
      )}
      <Space height={48} />
    </header>
  );
};

export default Header;

const ItemSeparator = () => (
  <Image alt="item separator" height={4} src="/images/dot.svg" width={4} />
);

const downArrowIconStyle = css({
  cursor: "pointer",
});

const introduceTextStyle = css({
  padding: `sm 0px`,
  textDecoration: "underline",
});

const introduceLinkStyle = css({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  gap: "4px",
});
