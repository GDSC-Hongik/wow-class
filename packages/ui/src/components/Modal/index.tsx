"use client";

import { css } from "@styled-system/css";
import { Flex, styled } from "@styled-system/jsx";
import type { MouseEventHandler, ReactNode } from "react";
import { useCallback, useRef } from "react";

export interface ModalProps {
  closeModal: () => void;
  children?: ReactNode;
}

/**
 * @description 모달 컴포넌트입니다.
 *
 * @param {() => void} closeModal - 모달 컴포넌트를 닫기 위한 함수.
 * @param {ReactNode} [children] - 모달 컴포넌트에 들어갈 자식 요소.
 */
const Modal = ({ children, closeModal }: ModalProps) => {
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
        {children}
      </styled.dialog>
    </Flex>
  );
};

const dialogStyle = css({
  width: "40.75rem",
  height: "28.125rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

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
