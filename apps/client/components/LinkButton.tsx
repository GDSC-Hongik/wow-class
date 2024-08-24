"use client";

import { useRouter } from "next/navigation";
import type { ComponentProps } from "react";
import Button from "wowds-ui/Button";

interface LinkButtonProps extends ComponentProps<typeof Button> {
  href: string;
}

const LinkButton = ({ href, ...rest }: LinkButtonProps) => {
  const router = useRouter();

  const handleClickLinkButton = () => {
    router.push(href);
  };

  return <Button onClick={handleClickLinkButton} {...rest} />;
};

export default LinkButton;
