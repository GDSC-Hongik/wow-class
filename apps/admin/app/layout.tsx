import "./global.css";
import "wowds-ui/styles.css";
import "@wow-class/ui/styles.css";

import { JotaiProvider } from "components/JotaiProvider";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    default: "GDSC Hongik 스터디 서비스, 와우클래스 멘토",
    template: "%s | 와우클래스 멘토",
  },
  description: "와우클래스는 GDSC Hongik이 제공하는 스터디 관리 플랫폼입니다.",
  openGraph: {
    title: "GDSC Hongik 스터디 서비스, 와우클래스 멘토",
    description:
      "와우클래스는 GDSC Hongik이 제공하는 스터디 관리 플랫폼입니다.",
    images: ["/images/og-image.png"],
    siteName: "GDSC Hongik 스터디 서비스, 와우클래스 멘토",
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
        <JotaiProvider>
          {children}
          {modal}
        </JotaiProvider>
      </body>
    </html>
  );
};

export default RootLayout;
