"use client";

import { css } from "@styled-system/css";
import { Header } from "@wow-class/ui/client";
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
        <h1 className={taglineStyle}>
          와우클래스와 함께 <br />
          GDSC에서 스터디해요!
        </h1>
        <p className={descriptionStyle}>
          GDSC Hongik은 홍익대학교의 학생 개발자들을 위해 <br />
          개발에 쉽게 입문할 수 있는 기회를 제공해요.
        </p>
        <Button size="lg" onClick={handleClickLogin}>
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

const taglineStyle = css({
  color: "#17191C",
  fontSize: "74px",
  fontWeight: 800,
  lineHeight: "145%",
  letterSpacing: "-0.74px",
  marginBottom: "40px",
});

const descriptionStyle = css({
  color: "sub",
  textStyle: "body0",
  marginBottom: "48px",
});
