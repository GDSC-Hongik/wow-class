"use client";

import { css } from "@styled-system/css";
import { Flex, styled } from "@styled-system/jsx";
import Image from "next/image";
import { useRouter } from "next/navigation";
import type { CSSProperties, PropsWithChildren } from "react";
import { forwardRef, useEffect } from "react";

import closeUrl from "../../assets/images/close.svg";
import { useClickOutside } from "../../hooks";

/**
 * @description 모달 컴포넌트입니다.
 *
 * @param {() => void} [onClose] - 모달 컴포넌트를 닫기 위한 함수.
 * @param {ReactNode} [children] - 모달 컴포넌트에 들어갈 자식 요소.
 * @param {CSSProperties} [style] - 커스텀 스타일을 적용하기 위한 객체.
 * @param {string} [className] - 커스텀 클래스를 적용하기 위한 문자열.
 */

export interface ModalProps extends PropsWithChildren {
  onClose?: () => void;
  style?: CSSProperties;
  className?: string;
}

const Modal = forwardRef(({ children, onClose, ...rest }: ModalProps) => {
  const router = useRouter();

  const handleClose = onClose || router.back;
  const modal = useClickOutside<HTMLDialogElement>(handleClose);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <Flex alignItems="center" className={backDropStyle} justifyContent="center">
      <styled.dialog className={dialogStyle} ref={modal} {...rest}>
        <Image
          alt="close-icon"
          className={closeButtonStyle}
          height={24}
          src={closeUrl}
          width={24}
          onClick={handleClose}
        />
        {children}
      </styled.dialog>
    </Flex>
  );
});

const dialogStyle = css({
  width: "40.75rem",
  height: "28.125rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",

  position: "relative",

  borderRadius: "md",
  shadow: "mono",
});

const backDropStyle = css({
  width: "100vw",
  height: "100vh",

  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 9999,

  background: "backgroundDimmer",
});

const closeButtonStyle = css({
  position: "absolute",
  top: "xl",
  right: "xl",
  cursor: "pointer",
});

export default Modal;
