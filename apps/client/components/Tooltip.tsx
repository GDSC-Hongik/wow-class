"use client";

import { css } from "@styled-system/css";
import { useOpenState } from "@wow-class/ui/hooks";
import type { PropsWithChildren, ReactNode } from "react";

interface TooltipProps extends PropsWithChildren {
  content: ReactNode;
}

const Tooltip = ({ content, children }: TooltipProps) => {
  const { open, onOpen, onClose } = useOpenState();

  const handleMouseEnter = () => {
    onOpen();
  };

  const handleMouseLeave = () => {
    onClose();
  };

  return (
    <span
      className={tooltipContainerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {open && <span className={tooltipStyle}>{content}</span>}
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
  backgroundColor: "rgba(0,0,0,0.6)",
  zIndex: 10000,
  paddingX: "md",
  paddingY: "sm",
  boxShadow: "mono",
  backdropFilter: "blur(15px)",
  color: "textWhite",
});
