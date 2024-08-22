"use client";

import { css } from "@styled-system/css";
import type { PropsWithChildren, ReactNode } from "react";
import React, { useState } from "react";

interface TooltipProps extends PropsWithChildren {
  content: ReactNode;
}

const Tooltip = ({ content, children }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <span
      className={tooltipContainerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isVisible && <span className={tooltipStyle}>{content}</span>}
    </span>
  );
};

export default Tooltip;

const tooltipContainerStyle = css({
  position: "relative",
  display: "inline-block",
});

const tooltipStyle = css({
  position: "absolute",
  top: "100%",
  left: 0,
  borderRadius: "md",
  backgroundColor: "backgroundDimmer",
  zIndex: 10000,
  paddingX: "md",
  paddingY: "sm",
  boxShadow: "mono",
  backdropFilter: "blur(15px)",
  color: "textWhite",
});
