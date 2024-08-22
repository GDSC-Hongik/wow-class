"use client";

import { css } from "@styled-system/css";
import { useClickOutside } from "@wow-class/ui/hooks";
import type { PropsWithChildren, ReactNode } from "react";
import React, { useState } from "react";
import { Close as CloseIcon } from "wowds-icons";

interface PopoverProps extends PropsWithChildren {
  trigger: ReactNode;
}

const Popover = ({ trigger, children }: PopoverProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const popoverRef = useClickOutside<HTMLDivElement>(() => setIsOpen(false));

  const handleClickTrigger = () => {
    setIsOpen((prev) => !prev);
  };
  const handleClickCloseButton = () => {
    setIsOpen(false);
  };
  return (
    <div className={popoverContainerStyle}>
      <button className={triggerStyle} onClick={handleClickTrigger}>
        {trigger}
      </button>
      {isOpen && (
        <div className={popoverStyle} id="popover" ref={popoverRef}>
          <CloseIcon
            className={closeButtonStyle}
            height={14}
            stroke="white"
            width={14}
            onClick={handleClickCloseButton}
          />

          {children}
        </div>
      )}
    </div>
  );
};

export default Popover;

const popoverContainerStyle = css({
  position: "relative",
  display: "inline-block",
});

const popoverStyle = css({
  position: "absolute",
  width: "344px",
  top: "100%",
  left: 0,
  transform: "translateY(8px)",
  borderRadius: "md",
  backgroundColor: "backgroundDimmer",
  zIndex: 10000,
  paddingX: "lg",
  paddingY: "sm",
  boxShadow: "mono",
  backdropFilter: "blur(15px)",
});

const triggerStyle = css({
  display: "flex",
});
const closeButtonStyle = css({
  position: "absolute",
  top: "sm",
  right: "lg",
  cursor: "pointer",
});
