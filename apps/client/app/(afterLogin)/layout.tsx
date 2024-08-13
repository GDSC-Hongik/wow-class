"use client";

import Navbar from "components/Navbar";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const cookieStore = cookies();
  const isLogin = !!cookieStore.get("accessToken");

  if (!isLogin) {
    redirect("/auth");
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
