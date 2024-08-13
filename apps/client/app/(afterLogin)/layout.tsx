"use client";

import Navbar from "components/Navbar";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    if (!sessionStorage.getItem("isLogin")) {
      redirect("/auth");
    }
  }, []);

  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
