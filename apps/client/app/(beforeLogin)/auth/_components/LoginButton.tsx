"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { color } from "wowds-tokens";
import Button from "wowds-ui/Button";

const LoginButton = () => {
  const router = useRouter();

  const handleClickLogin = () => {
    const baseUrl =
      process.env.NODE_ENV === "production"
        ? process.env.NEXT_PUBLIC_PROD_BASE_URL
        : process.env.NEXT_PUBLIC_DEV_BASE_URL;

    router.push(`${baseUrl}/oauth2/authorization/github`);
  };

  return (
    <Button
      icon={githubLogoIcon}
      style={{ backgroundColor: `${color.github}` }}
      onClick={handleClickLogin}
    >
      GitHub 로그인
    </Button>
  );
};

export default LoginButton;

const githubLogoIcon = (
  <Image
    alt="github-logo"
    height={18}
    src="/images/github-logo.svg"
    width={18}
  />
);
