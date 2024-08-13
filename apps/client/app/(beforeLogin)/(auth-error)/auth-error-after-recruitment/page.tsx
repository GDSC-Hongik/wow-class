"use client";

import { css } from "@styled-system/css";
import { routePath } from "constants/routePath";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "wowds-ui/Button";

const AuthErrorAfterRecruitmentPage = () => {
  const router = useRouter();

  const handleClickNavigateHome = () => {
    router.push(routePath.landing);
  };

  return (
    <main className={mainContentStyle}>
      <Image
        alt="avatar-image"
        className={avatarImageStyle}
        height={200}
        src="/images/avatar.svg"
        width={200}
      />
      <h1 className={headingStyle}>GDSC Hongik 정회원만 이용 가능해요.</h1>
      <p className={descriptionStyle}>
        GDSC Hongik 정회원 모집 기간이 아니에요!
        <br />
        모집 기간에 합류 후 이용해주세요.
      </p>
      <div className={buttonContainerStyle}>
        <Button aria-label="홈으로 이동" onClick={handleClickNavigateHome}>
          홈으로 이동
        </Button>
      </div>
    </main>
  );
};

export default AuthErrorAfterRecruitmentPage;

const mainContentStyle = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "100vh",
  textAlign: "center",
});

const avatarImageStyle = css({
  width: "200px",
  height: "200px",
  marginBottom: "48px",
});

const headingStyle = css({
  textStyle: "display2",
  marginBottom: "16px",
});

const descriptionStyle = css({
  fontSize: "18px",
  fontWeight: 500,
  lineHeight: "160%",
  letterSpacing: "-0.18px",
  color: "sub",
  marginBottom: "48px",
});

const buttonContainerStyle = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "12px",
  width: "100%",
});
