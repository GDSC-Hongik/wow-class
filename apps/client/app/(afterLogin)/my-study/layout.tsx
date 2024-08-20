"use client";

import { routePath } from "constants/routePath";
import { usePathname } from "next/navigation";

const Layout = ({
  children,
  attendanceCheckModal,
  attendanceCompleteModal,
}: {
  children: React.ReactNode;
  attendanceCheckModal: React.ReactNode;
  attendanceCompleteModal: React.ReactNode;
}) => {
  const pathname = usePathname();

  return (
    <main>
      {children}
      {pathname === routePath["attendance-complete"] && attendanceCompleteModal}
      {pathname.startsWith(routePath["attendance-check"]) &&
        attendanceCheckModal}
    </main>
  );
};

export default Layout;
