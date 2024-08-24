import { css } from "@styled-system/css";
import { Text } from "@wow-class/ui";
import { routePath } from "constants/routePath";
import Image from "next/image";
import Link from "next/link";
import { color } from "wowds-tokens";
import Button from "wowds-ui/Button";

const AuthPage = async () => {
  return (
    <main className={mainContentStyle}>
      <section className={leftColStyle}>
        <Text as="h1" className={loginTextStyle} typo="display1">
          로그인
        </Text>
        <div className={descriptionTextContainerStyle}>
          <Image
            alt="check-icon"
            height={20}
            src="/images/check.svg"
            width={20}
          />
          <Text as="p" color="sub" typo="body1">
            와우클래스는 GDSC Hongik 정회원만 이용 가능해요.
          </Text>
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
          <Text as="p" color="sub" typo="body1">
            GDSC Hongik 가입을 위해선 GitHub 계정이 필요해요.
          </Text>
        </div>
        <Button
          aria-label="github 로그인"
          asProp={Link}
          href={routePath["github-oauth"]}
          icon={githubLogoIcon}
          style={{ backgroundColor: `${color.github}` }}
        >
          GitHub 로그인
        </Button>
      </section>
      <section className={imageContainerStyle}>
        <Image
          fill
          alt="auth-background-image"
          className={authImageStyle}
          src="/images/auth-background.svg"
        />
      </section>
    </main>
  );
};

export default AuthPage;

const githubLogoIcon = (
  <Image
    alt="github-logo"
    height={18}
    src="/images/github-logo-white.svg"
    width={18}
  />
);

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
  marginBottom: "16px",
});

const descriptionTextContainerStyle = css({
  marginBottom: "4px",
  display: "flex",
  gap: "10px",
});

const imageContainerStyle = css({
  position: "relative",
  width: "100%",
  height: "100%",
});

const authImageStyle = css({
  objectFit: "cover",
  height: "100%",
  width: "100%",
});
