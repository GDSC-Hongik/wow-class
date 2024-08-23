"use client";

import { baseUrl } from "constants/environment";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { color } from "wowds-tokens";
import Button from "wowds-ui/Button";

const LoginButton = () => {
  const router = useRouter();

  const handleClickLogin = () => {
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
    src="/images/github-logo-white.svg"
    width={18}
  />
);
