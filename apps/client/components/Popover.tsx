"use client";

import { css } from "@styled-system/css";
import { useClickOutside, useOpenState } from "@wow-class/ui/hooks";
import type { PropsWithChildren, ReactNode } from "react";
import { Close as CloseIcon } from "wowds-icons";

interface PopoverProps extends PropsWithChildren {
  triggerContent: ReactNode;
}

const Popover = ({ triggerContent, children }: PopoverProps) => {
  const { open, setOpen, onClose } = useOpenState();

  const popoverRef = useClickOutside<HTMLDivElement>(onClose);

  const handleClickTrigger = () => {
    setOpen((prev) => !prev);
  };
  const handleClickCloseButton = () => {
    onClose();
  };
  return (
    <div className={popoverContainerStyle}>
      <button className={triggerStyle} onClick={handleClickTrigger}>
        {triggerContent}
      </button>
      {open && (
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
  backgroundColor: "rgba(0,0,0,0.6)",
  zIndex: 10000,
  paddingX: "md",
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
  right: "md",
  cursor: "pointer",
});
