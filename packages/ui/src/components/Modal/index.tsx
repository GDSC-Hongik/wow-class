"use client";

import { css } from "@styled-system/css";
import { Flex, styled } from "@styled-system/jsx";
import Image from "next/image";
import type { PropsWithChildren } from "react";

import closeUrl from "../../assets/images/close.svg";
import { useClickOutside } from "../../hooks";

/**
 * @description 모달 컴포넌트입니다.
 *
 * @param {() => void} onClose - 모달 컴포넌트를 닫기 위한 함수.
 * @param {ReactNode} [children] - 모달 컴포넌트에 들어갈 자식 요소.
 */

export interface ModalProps extends PropsWithChildren {
  onClose: () => void;
}

const Modal = ({ children, onClose }: ModalProps) => {
  const modal = useClickOutside<HTMLDialogElement>(onClose);

  return (
    <Flex alignItems="center" className={backDropStyle} justifyContent="center">
      <styled.dialog className={dialogStyle} ref={modal}>
        <Image
          alt="close-icon"
          className={closeButtonStyle}
          height={24}
          src={closeUrl}
          width={24}
          onClick={onClose}
        />
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
  cursor: "pointer",
});

export default Modal;
