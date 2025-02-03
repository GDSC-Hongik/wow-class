import { css } from "@styled-system/css";
import { membersApi } from "apis/membersApi";
import { headers } from "next/headers";
import Header from "wowds-ui/Header";

const PageHeader = async () => {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname");

  if (pathname === "/mobile/auth") {
    return (
      <div className={headerStyle}>
        <Header />
      </div>
    );
  }

  const myInfo = await membersApi.getMyAccountInfo();

  return (
    <div className={headerStyle}>
      <Header username={myInfo?.name} variant={myInfo ? "username" : "none"} />
    </div>
  );
};

const headerStyle = css({
  position: "fixed",
  backgroundColor: "backgroundNormal",
  width: "100%",
});

export default PageHeader;
