"use client";

import { css } from "@styled-system/css";
import { Header } from "@wow-class/ui";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "wowds-ui/Button";

const LandingPage = () => {
  const router = useRouter();

  const handleClickLogin = () => {
    router.push("/auth");
  };

  return (
    <div className={containerStyle}>
      <Header />
      <main className={mainContentStyle}>
        <div className={headlineContainerStyle}>
          <Image
            alt="landing-background-image"
            className={backgroundImageStyle}
            height={264}
            layout="intrinsic"
            src="/images/landing-background.svg"
            width={884}
          />
          <h1 className={headlineStyle}>
            와우클래스와 함께 <br />
            GDSC에서 스터디해요!
          </h1>
        </div>
        <p className={descriptionStyle}>
          GDSC Hongik은 홍익대학교의 학생 개발자들을 위해 <br />
          개발에 쉽게 입문할 수 있는 기회를 제공해요.
        </p>
        <Button
          aria-label="로그인 페이지로 이동"
          size="lg"
          onClick={handleClickLogin}
        >
          로그인
        </Button>
      </main>
    </div>
  );
};

export default LandingPage;

const containerStyle = css({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
});

const mainContentStyle = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  height: "100%",
});

const headlineContainerStyle = css({
  position: "relative",
});

const backgroundImageStyle = css({
  margin: "auto",
  position: "absolute",
  minWidth: "884px",
  top: -40,
  left: -55,
});

const headlineStyle = css({
  color: "#17191C",
  fontSize: "74px",
  fontWeight: 800,
  lineHeight: "145%",
  letterSpacing: "-0.74px",
  marginBottom: "40px",
  zIndex: 1,
  position: "relative",
});

const descriptionStyle = css({
  color: "sub",
  textStyle: "body0",
  marginBottom: "48px",
  zIndex: 1,
});
