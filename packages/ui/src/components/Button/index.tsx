"use client";

import { styled } from "@styled-system/jsx";
import type { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <styled.div
      className={className}
      color="yellow.200"
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </styled.div>
  );
};
