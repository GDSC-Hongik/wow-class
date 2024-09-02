"use client";
import type { ToastProps } from "@wow-class/ui";
import { Toast as ToastUI } from "@wow-class/ui";
import { toastStatusMap } from "constants/status/toastStatusMap";
import { useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import { removeToastAtom } from "store";

const TOAST_DURATION = 2000;
const ANIMATION_DURATION = 200;

const Toast = ({ id, type, text, ...rest }: ToastProps) => {
  const [opacity, setOpacity] = useState<number>(0.2);
  const removeToastItem = useSetAtom(removeToastAtom);

  useEffect(() => {
    setOpacity(1);
    const timeoutForRemove = setTimeout(() => {
      removeToastItem(id);
    }, TOAST_DURATION);

    const timeoutForVisible = setTimeout(() => {
      setOpacity(0);
    }, TOAST_DURATION - ANIMATION_DURATION);

    return () => {
      clearTimeout(timeoutForRemove);
      clearTimeout(timeoutForVisible);
    };
  }, [id, removeToastItem]);

  return (
    <ToastUI
      id={id}
      style={{ opacity }}
      text={text || toastStatusMap[type]}
      transition="opacity"
      transitionDelay="0.5"
      transitionTimingFunction="ease-in-out"
      type={type}
      {...rest}
    />
  );
};

export default Toast;
