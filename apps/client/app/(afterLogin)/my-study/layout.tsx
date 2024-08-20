"use client";

import { routePath } from "constants/routePath";
import { usePathname } from "next/navigation";

const Layout = ({
  children,
  checkAttendanceModal,
  attendanceCompleteModal,
}: {
  children: React.ReactNode;
  checkAttendanceModal: React.ReactNode;
  attendanceCompleteModal: React.ReactNode;
}) => {
  const pathname = usePathname();

  return (
    <main>
      {children}
      {pathname === routePath["attendance-complete"] && attendanceCompleteModal}
      {pathname.startsWith(routePath["check-attendance"]) &&
        checkAttendanceModal}
    </main>
  );
};

export default Layout;
