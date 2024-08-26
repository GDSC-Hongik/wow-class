import "./global.css";
import "wowds-ui/styles.css";
import "@wow-class/ui/styles.css";

import type { Metadata } from "next";

import { JotaiProvider } from "../components/JotaiProvider";

export const metadata: Metadata = {
  title: {
    default: "GDSC Hongik 스터디 서비스, 와우클래스",
    template: "%s | GDSC Hongik 스터디 서비스, 와우클래스",
  },
  description:
    "와우클래스는 GDSC Hongik이 제공하는 스터디 관리 플랫폼입니다. 이 서비스는 정규 스터디 과제 제출, 출석 체크 등 전반적인 스터디 활동을 효율적으로 관리할 수 있는 기능을 제공합니다.",
  openGraph: {
    title: "GDSC Hongik 스터디 서비스, 와우클래스",
    description:
      "와우클래스는 GDSC Hongik이 제공하는 스터디 관리 플랫폼입니다. 이 서비스는 정규 스터디 과제 제출, 출석 체크 등 전반적인 스터디 활동을 효율적으로 관리할 수 있는 기능을 제공합니다.",
    images: ["/images/og-image.svg"],
    siteName: "GDSC Hongik 스터디 서비스, 와우클래스",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GDSC Hongik 스터디 서비스, 와우클래스",
    description:
      "와우클래스는 GDSC Hongik이 제공하는 스터디 관리 플랫폼입니다. 이 서비스는 정규 스터디 과제 제출, 출석 체크 등 전반적인 스터디 활동을 효율적으로 관리할 수 있는 기능을 제공합니다.",
    images: ["/images/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
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
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ko">
      <body>
        <JotaiProvider>{children}</JotaiProvider>
      </body>
    </html>
  );
};

export default RootLayout;
