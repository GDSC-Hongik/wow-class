"use client";

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
      style={{ backgroundColor: `${color.github}` }}
      onClick={handleClickLogin}
    >
      GitHub 로그인
    </Button>
  );
};

export default LoginButton;
