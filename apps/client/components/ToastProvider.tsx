"use client";

import { Flex } from "@styled-system/jsx";
import type { ToastProps } from "@wow-class/ui";
import { useAtomValue } from "jotai";
import type { ReactNode } from "react";
import { toastsAtom } from "store";

import Toast from "./Toast";

const ToastProvider = ({ children }: { children: ReactNode }) => {
  const toasts = useAtomValue(toastsAtom);

  return (
    <>
      <Flex
        direction="column"
        gap="sm"
        left="50%"
        position="absolute"
        top={24}
        translate="-50%"
      >
        {toasts?.map((toast: ToastProps) => (
          <Toast key={toast.id} {...toast} />
        ))}
      </Flex>
      {children}
    </>
  );
};

export default ToastProvider;
