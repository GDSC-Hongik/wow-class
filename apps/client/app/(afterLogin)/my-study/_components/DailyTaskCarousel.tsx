"use client";

import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import useHorizontalScroll from "hooks/useHorizontalScroll";
import Image from "next/image";
import { type PropsWithChildren } from "react";

const DailyTaskCarousel = ({ children }: PropsWithChildren) => {
  const itemWidth = 386;

  const { containerRef, handleScroll } = useHorizontalScroll();

  const handleClickScrollRightButton = () => {
    if (containerRef.current) {
      const currentScrollPosition = containerRef.current.scrollLeft;
      const newScrollPosition = currentScrollPosition + itemWidth;

      handleScroll(newScrollPosition);
    }
  };

  return (
    <>
      <Flex
        aria-live="polite"
        className={dailyTaskBoxContainerStyle}
        gap="lg"
        ref={containerRef}
      >
        {children}
      </Flex>
      <button
        aria-label="scroll-right-button"
        className={scrollRightButtonStyle}
        tabIndex={0}
        onClick={handleClickScrollRightButton}
      >
        <Image
          alt="scroll-right-button"
          height={36}
          src="/images/arrow-button.svg"
          width={36}
        />
      </button>
    </>
  );
};

export default DailyTaskCarousel;

const dailyTaskBoxContainerStyle = css({
  overflowX: "auto",
  scrollBehavior: "smooth",
  scrollbarWidth: "none",
});

const scrollRightButtonStyle = css({
  position: "absolute",
  top: "114px",
  right: "101px",
  cursor: "pointer",
});
