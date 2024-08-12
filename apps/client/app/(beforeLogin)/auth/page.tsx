import { css } from "@styled-system/css";
import Image from "next/image";
import Button from "wowds-ui/Button";

const AuthPage = () => {
  return (
    <main className={mainContentStyle}>
      <section className={leftColStyle}>
        <div className={loginTextStyle}>로그인</div>
        <div className={descriptionTextContainerStyle}>
          <Image
            alt="check-icon"
            height={20}
            src="/images/check.svg"
            width={20}
          />
          <div className={descriptionTextStyle}>
            와우클래스는 GDSC Hongik 정회원만 이용 가능해요.
          </div>
        </div>
        <div
          className={descriptionTextContainerStyle}
          style={{ marginBottom: "48px" }}
        >
          <Image
            alt="check-icon"
            height={20}
            src="/images/check.svg"
            width={20}
          />
          <div className={descriptionTextStyle}>
            GDSC Hongik 가입을 위해선 GitHub 계정이 필요해요.
          </div>
        </div>
        <Button>GitHub 로그인</Button>
      </section>
      <section>
        <Image
          alt="auth-background-image"
          className={css({ width: "100%", height: "auto" })}
          height={0}
          sizes="100vw"
          src="/images/auth-background.svg"
          width={0}
        />
      </section>
    </main>
  );
};

export default AuthPage;

const mainContentStyle = css({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  width: "100vw",
  height: "100vh",
  alignItems: "center",
  justifyContent: "center",
});

const leftColStyle = css({
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const loginTextStyle = css({
  textStyle: "display1",
  marginBottom: "16px",
});

const descriptionTextContainerStyle = css({
  marginBottom: "4px",
  display: "flex",
  gap: "10px",
});

const descriptionTextStyle = css({
  color: "sub",
  textStyle: "body1",
});
