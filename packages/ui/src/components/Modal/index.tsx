"use client";

import { css } from "@styled-system/css";
import { Flex, styled } from "@styled-system/jsx";
import type { MouseEventHandler, ReactNode } from "react";
import { useCallback, useRef } from "react";

export interface ModalProps {
  title: ReactNode;
  children?: ReactNode;
  closeModal: () => void;
}

const Modal = ({ title, children, closeModal }: ModalProps) => {
  const overlay = useRef<HTMLDivElement>(null);

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlay.current) {
        if (closeModal) closeModal();
      }
    },
    [closeModal, overlay]
  );

  return (
    <Flex
      alignItems="center"
      className={backDropStyle}
      justifyContent="center"
      ref={overlay}
      onClick={onClick}
    >
      <styled.dialog className={dialogStyle}>
        <button className={closeButtonStyle} onClick={closeModal}>
          X
        </button>
        <h1 className={css({ textStyle: "h1", textAlign: "center" })}>
          {title}
        </h1>
        {children}
      </styled.dialog>
    </Flex>
  );
};

const dialogStyle = css({
  width: "40.75rem",
  height: "28.125rem",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "1.75rem",

  position: "relative",

  borderRadius: "md",
  shadow: "mono",
});

const backDropStyle = css({
  width: "100vw",
  height: "100vh",

  position: "absolute",
  top: 0,
  left: 0,

  background: "backgroundDimmer",
});

const closeButtonStyle = css({
  position: "absolute",
  top: "xl",
  right: "xl",
});

export default Modal;
