"use client";

import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Modal, Space, Text } from "@wow-class/ui";
import { useModalRoute } from "@wow-class/ui/hooks";
import { fetcher } from "@wow-class/utils";
import { authApi } from "apis/authApi";
import { baseUrl } from "constants/environment";
import { routePath } from "constants/routePath";
import { useRouter } from "next/navigation";
import Button from "wowds-ui/Button";

const LogoutModal = () => {
  const router = useRouter();
  const { closeModal } = useModalRoute();

  const handleClickLogoutButton = async () => {
    fetcher.setBaseUrl(`https://${window.location.hostname}`);
    await fetcher.post("/api/my-page/logout", {});

    baseUrl && fetcher.setBaseUrl(baseUrl);

    const { success } = await authApi.logout();

    if (success) {
      router.push(routePath["landing"]);
    } else {
      router.back();
    }
  };

  return (
    <Modal>
      <Flex alignItems="center" className={containerStyle} direction="column">
        <Text typo="h1">
          <span className={headingStyle}>로그아웃</span> 하시겠어요?
        </Text>
        <Space height={26} />
        <Flex gap="xs">
          <Button
            size="lg"
            style={buttonStyle}
            variant="outline"
            onClick={closeModal}
          >
            취소
          </Button>
          <Button
            size="lg"
            style={buttonStyle}
            onClick={handleClickLogoutButton}
          >
            로그아웃
          </Button>
        </Flex>
      </Flex>
    </Modal>
  );
};

export default LogoutModal;

const headingStyle = css({
  color: "primary",
});

const containerStyle = css({
  width: "652px",
});

const buttonStyle = {
  width: "173px",
};
