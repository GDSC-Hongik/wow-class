"use client";

import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import useHorizontalScroll from "hooks/useHorizontalScroll";
import Image from "next/image";
import { type PropsWithChildren, useEffect, useState } from "react";

const DailyTaskCarousel = ({ children }: PropsWithChildren) => {
  const [showRightButton, setShowRightButton] = useState(false);

  const itemWidth = 386;

  const { containerRef, handleScroll } = useHorizontalScroll();

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const totalChildrenWidth = Array.from(containerRef.current.children)
        .map((child) => (child as HTMLElement).offsetWidth)
        .reduce((acc, width) => acc + width, 0);

      if (totalChildrenWidth > containerWidth) {
        setShowRightButton(true);
      }
    }
  }, [containerRef]);

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
      {showRightButton && (
        <button
          aria-label="scroll-right-button"
          className={scrollRightButtonStyle}
          tabIndex={0}
          onClick={handleClickScrollRightButton}
        >
          <Image
            alt="scroll-right-button"
            height={52}
            src="/images/arrow-button.svg"
            width={52}
          />
        </button>
      )}
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
  top: "110px",
  right: "101px",
  cursor: "pointer",
});
