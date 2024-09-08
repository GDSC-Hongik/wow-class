import "./global.css";
import "wowds-ui/styles.css";
import "@wow-class/ui/styles.css";
import "react-toastify/dist/ReactToastify.css";

import { JotaiProvider } from "components/JotaiProvider";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: {
    default: "와우클래스: 멘토 | GDSC Hongik 스터디 서비스",
    template: "%s | 와우클래스 멘토",
  },
  description: "와우클래스는 GDSC Hongik이 제공하는 스터디 관리 플랫폼입니다.",
  openGraph: {
    title: "와우클래스: 멘토 | GDSC Hongik 스터디 서비스",
    description:
      "와우클래스는 GDSC Hongik이 제공하는 스터디 관리 플랫폼입니다.",
    images: ["/images/og-image.png"],
    siteName: "와우클래스: 멘토 | GDSC Hongik 스터디 서비스",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: "/images/logo.svg",
    apple: "/images/logo.svg",
    other: [
      {
        rel: "icon",
        type: "image/svg+xml",
        url: "/images/logo.svg",
      },
    ],
  },
};

const RootLayout = ({
  children,
  modal,
}: Readonly<{
  children: ReactNode;
  modal: ReactNode;
}>) => {
  return (
    <html lang="ko">
      <body>
        <ToastContainer
          hideProgressBar
          autoClose={4000}
          closeButton={false}
          limit={1}
        />
        <JotaiProvider>
          <ToastContainer
            hideProgressBar
            autoClose={4000}
            closeButton={false}
            limit={1}
          />
          {children}
          {modal}
        </JotaiProvider>
      </body>
    </html>
  );
};

export default RootLayout;
