import { Flex } from "@styled-system/jsx";
import { Space, Text } from "@wow-class/ui";
import { membersApi } from "apis/membersApi";
import { routePath } from "constants/routePath";
import Image from "next/image";
import Link from "next/link";
import Box from "wowds-ui/Box";
import Button from "wowds-ui/Button";
import TextButton from "wowds-ui/TextButton";

export const MyInfoBox = async () => {
  const myInfo = await membersApi.getMyAccountInfo();

  if (!myInfo) return;
  const { name, githubHandle } = myInfo;

  return (
    <>
      <Box
        style={{ width: "424px" }}
        text={
          <>
            <Text color="primary">계정 정보</Text>
            <Space height={12} />
            <Flex alignItems="end" gap="xs">
              <Text typo="h1">{name} 님</Text>
              <Text typo="body2">@{githubHandle}</Text>
            </Flex>
            <Space height={58} />
            <Flex gap="xs">
              <Link href={routePath["onboarding"]} target="_blank">
                <Button size="sm" variant="outline">
                  계정 정보
                </Button>
              </Link>
              <Link
                href={`${routePath["github"]}/${githubHandle}`}
                target="_blank"
              >
                <Button
                  size="sm"
                  variant="outline"
                  icon={
                    <Image
                      alt="github-logo"
                      height={14}
                      src="/images/github-logo-black.svg"
                      width={14}
                    />
                  }
                >
                  나의 Github
                </Button>
              </Link>
              <Link href={routePath["my-page-logout"]}>
                <TextButton text="로그아웃" />
              </Link>
            </Flex>
          </>
        }
      />
    </>
  );
};
