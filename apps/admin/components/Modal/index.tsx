import { css } from "@styled-system/css";
import { Flex, styled } from "@styled-system/jsx";
import type { ReactNode } from "react";

/**
 * @description Modal 컴포넌트의 속성을 정의합니다.
 *
 */

export interface ModalProps {
  title: ReactNode;
  children: ReactNode;
}

const Modal = ({ title, children }: ModalProps) => {
  return (
    <Flex alignItems="center" className={backDropStyle} justifyContent="center">
      <styled.dialog className={dialogStyle}>
        <button className={closeButtonStyle}>X</button>
        <h1 className={css({ textStyle: "h1" })}>{title}</h1>
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
